import { Client } from 'pg';
var connectionString = "postgres://tommaso_cattaneo: tommicatt21@postgresql-tommaso.alwaysdata.net:5432/tommaso_cattaneo";
var pgClient = new Client(connectionString);
pgClient.connect().then(() => Console.log("Funziona"));

document.getElementById(prova).innerHTML = pgClient.query("select * from reperti");