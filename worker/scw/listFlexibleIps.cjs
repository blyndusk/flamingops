const axios = require('axios');

/**
 * Returns a list of sw flexible ips from a given region
 *
 * @param {string} region 
 * @param {string} auth_token
 * @return {object} 
 */
function listFlexibleIps(region, auth_token){
    const zones = []
    switch (region) {
        case 'fr-par':
            zones = ['fr-par-1', 'fr-par-2'];
        case 'nl-ams':
            zones = ['nl-ams-1'];
        case 'pl-waw':
            zones = ['pl-waw-1'];
    }

    const promises = zones.map(zone => axios({
        method: "get",
        url: `/flexible-ip/v1alpha1/zones/${zone}/fips`,
        baseURL: 'https://api.scaleway.com',
        headers: { 'User-Agent': 'node-scaleway-api-client/2.0.0', 'X-Auth-Token': auth_token },
        params: {},
        data: {},
        responseType: 'json',
    }));      

    return Promise.all(promises);
}

module.exports.listFlexibleIps = listFlexibleIps;