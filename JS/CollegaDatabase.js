import { Client } from 'pg';
var connectionString = "postgres://ijhvjdgf:q2LjmBeKdDKD-ovwgkkJexd-cVys6OhX@tai.db.elephantsql.com:5432/ijhvjdgf";
var pgClient = new Client(connectionString);
pgClient.connect();