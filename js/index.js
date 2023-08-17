import endpoint from "../endpoint.js";
import jsonToQuery from "./utils/jsonToQuery.js";
const dispatch = (key, parameters) => {
    parameters = {
        ...parameters, 
        api_key: key 
    };
    const queryString = jsonToQuery(parameters);

    return axios.get(`${endpoint}?${queryString}`);
}
export default dispatch;