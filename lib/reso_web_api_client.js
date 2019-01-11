const axios = require('axios')

class RESOWebApiClient {
  constructor(endpoint, auth = {}) {
    this.request = axios.create({
      baseURL: endpoint,
      timeout: 5000,
      auth: {
        username: auth.username,
        password: auth.password
      }
    });
  }

  async get(entity_string) {
    return await this.request({
      method: 'get',
      url: entity_string
    });
  }

  async find_by(entity_string, config) {
    return await this.request({
      method: 'get',
      url: entity_string,
      params: {
        $filter: this._create_filter_string_for(config)
      }
    });
  }

  async send(entity_string, config){
    return await this.request({
      method: 'post',
      url: entity_string,
      params: config
    })
  }

  async edit(entity_string, config){
    const requestUrl = `${entity_string}(${config.id})`

    return await this.request({
      method: 'put',
      url: entity_string,
      params: config
    })
  }

  async remove(entity_string, config){
    const requestUrl = `${entity_string}(${config.id})`

    return await this.request({
      method: 'delete',
      url: requestUrl
    })
  }

  _create_filter_string_for(config) {
    let count = 0;
    let filter_string = '';
    const items_length = Object.keys(config).length;

    for(const key in config) {
      count++;
      if(count < items_length) 
        filter_string += `${key} eq '${config[key]}' and `;
      else
        filter_string += `${key} eq '${config[key]}'`;
    }

    return filter_string;
  }
}

module.exports = RESOWebApiClient;
