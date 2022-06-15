const addClient = "INSERT into users (name, surname, cell_no, email, password, role) values($1, $2, $3, $4, $5, $6)";
const addRunner = "INSERT into users (name, surname, cell_no, email, password, role, is_active) values($1, $2, $3, $4, $5, $6, false)";
const checkClientCelllExists = "SELECT * FROM users WHERE cell_no= $1";
const checkClientEmailExists = "SELECT * FROM users WHERE email= $1";
const checkClientEmailCellNoExists="SELECT * FROM users WHERE email= $1 or cell_no=$2 and is_active='true'";
const getClients = "SELECT * FROM users";
const removeClient= "DELETE FROM users WHERE id=$1";
const getClientById = "SELECT * FROM users WHERE id= $1"
const getClientByEmail = "SELECT * FROM users WHERE email= $1 OR cell_no=$1"
const getClientPasswordByEmail="SELECT * FROM users WHERE email=$1 ";
const getClientPasswordByCelllNo ="SELECT * FROM users WHERE cell_no=$1 ";

const totalClients = " SELECT COUNT(*) AS clients FROM users WHERE role ='Client' ";
const totalRunners = " SELECT COUNT(*) AS runners FROM users WHERE role ='Service provider' AND is_active = true";

module.exports ={
   
    addClient,
    addRunner,
    checkClientCelllExists,
    checkClientEmailCellNoExists,
    getClients,
    removeClient,
    getClientById,
    getClientByEmail,
    getClientPasswordByEmail,
    getClientPasswordByCelllNo,
    totalClients,
    totalRunners
}