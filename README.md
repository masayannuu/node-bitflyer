[![CircleCI](https://circleci.com/gh/masayannuu/node-bitflyer/tree/master.svg?style=svg)](https://circleci.com/gh/masayannuu/node-bitflyer/tree/master) [![Maintainability](https://api.codeclimate.com/v1/badges/94ae7d500eefab9a0f46/maintainability)](https://codeclimate.com/github/masayannuu/node-bitflyer/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/94ae7d500eefab9a0f46/test_coverage)](https://codeclimate.com/github/masayannuu/node-bitflyer/test_coverage) [![Dependency Status](https://gemnasium.com/badges/github.com/masayannuu/node-bitflyer.svg)](https://gemnasium.com/github.com/masayannuu/node-bitflyer) [![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](https://github.com/masayannuu/node-bitflyer/blob/master/LICENSE)

## node-bitflyer

Nodejs wrapper for the [BitFlyer lightning API](https://lightning.bitflyer.jp/docs?lang=en)  based on OpenAPI Spec.  

## Installation  

```npm install node-bitflyer```  

## APIs  

Please refer to [API Reference](https://lightning.bitflyer.jp/docs)

## Basic request  

```javascript
const { RestClient, RealtimeClient } = require('node-bitflyer')

const client = new RestClient('api_key', 'api_secret')
client.fetch('GET', '/me/getpermissions').then((res) => { console.log(res)} )

//with query
client.fetch('GET', '/board?product_code=ETH_BTC').then((res) => { console.log(res)} )

//with body
client.fetch('POST', '/me/sendchildorder',
{ "product_code": "BTC_JPY",
  "child_order_type": "LIMIT",
  "side": "BUY",
  "price": 30000,
  "size": 0.1,
  "minute_to_expire": 10000,
  "time_in_force": "GTC"}
  ).then((res) => { console.log(res)} )
```

## Load Function from swagger.yaml

```javascript
const { RestClient, RealtimeClient } = require('node-bitflyer')

const client = new RestClient('api_key', 'api_secret')
client.getMarkets().then((res) => { console.log(res) })
```

### Sorry, Now I have defined only the list below.  
### I will set up an issue and I will add it now.

## REST(public)

- getMarkets(/markets)
- getBoard(/board)

## REST(private)  

- getPermissions(/me/getpermissions)
- getBalance(/me/getbalance)
- sendChildOrder(/me/sendchildorder)

## Contributing  

1. Fork this repository
1. Create your feature branch & commit
1. Create a new pull request

## License  

MIT
