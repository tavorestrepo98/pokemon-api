import axios from "axios";

import { environments } from '../environments/environments';


export default axios.create({
  baseURL: environments.api_url,
  headers: {
    "Content-type": "application/json"
  }
});