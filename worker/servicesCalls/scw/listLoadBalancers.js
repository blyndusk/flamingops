const axios = require('axios');

/**
 * Returns a list of sw load balancers from a given region
 *
 * @param {string} region 
 * @param {string} auth_token
 * @return {object} 
 */
export default function(region, auth_token){
    base_url = 'https://api.scaleway.com'

    return axios({
        method: "get",
        url: `/lb/v1/regions/${region}/lbs`,
        baseURL: 'https://api.scaleway.com',
        headers: { 'User-Agent': 'node-scaleway-api-client/2.0.0', 'X-Auth-Token': auth_token },
        params: {},
        data: {},
        responseType: 'json',
    });      
}