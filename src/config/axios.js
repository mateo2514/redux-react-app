import axios from "axios";


const clientAxio = axios.create( {
    baseURL: `https://api.datos.gob.mx`
});

export default clientAxio;