-- Optional deploymentControl=database mode only. Default local mode needs no service tables.
-- Review and run explicitly in the dedicated parsing/control schema.
-- Never executed automatically by setup, plan, doctor or test.
create table apexrest_deploy_locks (
  target_key varchar2(64) primary key,
  owner_id varchar2(36) not null,
  lease_until timestamp with time zone not null,
  phase varchar2(20) default 'preparing' not null check (phase in ('preparing','writing'))
);
create table apexrest_migrations (
  version varchar2(255) primary key,
  checksum varchar2(64) not null,
  status varchar2(20) check (status in ('started','succeeded','failed','outcome_unknown')),
  run_id varchar2(36) not null,
  started_at timestamp with time zone default systimestamp not null,
  finished_at timestamp with time zone
);
