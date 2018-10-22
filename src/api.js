import axios from 'axios';



const token = localStorage.getItem('token');
const AuthStr = 'Bearer '.concat(token);

const deployed = `https://antony-stackoverflow-v2.herokuapp.com/`;
let Axios

if (token) {
  Axios = axios.create({ baseURL: deployed, headers:{Authorization: AuthStr} });
} else {
  Axios = axios.create({ baseURL: deployed });
}

export default Axios