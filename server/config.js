//configuraciones del servidor



const API_VERSION = "v1"
const IP_SERVER = "localhost" 
const PORT_DB = process.env.PORTDB || 27017;


module.exports = {
    API_VERSION,
    IP_SERVER,
    PORT_DB
}

