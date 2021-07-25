CREATE ROLE mockadmin WITH CREATEDB LOGIN PASSWORD 'mock007';
GRANT mockadmin to postgres;
CREATE database mock_service OWNER=mockadmin;