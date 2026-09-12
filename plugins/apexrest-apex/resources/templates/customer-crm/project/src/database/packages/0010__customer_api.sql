create or replace package apexrest_customer_api authid definer as
    procedure validate_customer(p_name varchar2, p_email varchar2, p_status varchar2);
    function add_customer(p_name varchar2, p_email varchar2, p_status varchar2 default 'ACTIVE') return number;
end apexrest_customer_api;
/
create or replace package body apexrest_customer_api as
    procedure validate_customer(p_name varchar2, p_email varchar2, p_status varchar2) is
    begin
        if trim(p_name) is null then
            raise_application_error(-20010, 'Customer name is required.');
        end if;
        if p_email is null or not regexp_like(p_email, '^[^@[:space:]]+@[^@[:space:]]+[.][^@[:space:]]+$') then
            raise_application_error(-20011, 'Enter a valid email address.');
        end if;
        if p_status is null or p_status not in ('ACTIVE', 'INACTIVE') then
            raise_application_error(-20012, 'Choose a valid customer status.');
        end if;
    end;
    function add_customer(p_name varchar2, p_email varchar2, p_status varchar2 default 'ACTIVE') return number is
        l_id number;
    begin
        validate_customer(p_name, p_email, p_status);
        insert into apexrest_customers(name,email,status)
        values(trim(p_name),lower(trim(p_email)),p_status) returning id into l_id;
        return l_id;
    end;
end apexrest_customer_api;
/
