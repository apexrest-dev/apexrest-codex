create or replace trigger apexrest_customers_biu
before insert or update on apexrest_customers
for each row
begin
    apexrest_customer_api.validate_customer(:new.name, :new.email, :new.status);
    :new.email := lower(trim(:new.email));
    :new.name := trim(:new.name);
    :new.updated_at := systimestamp;
end;
/
