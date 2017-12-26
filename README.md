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
### I will create issues and I will add it now.

## REST(public)

- getMarkets(/markets)
- getBoard(/board)

## MUST defined(public)  

- [ticker](https://lightning.bitflyer.jp/docs#ticker)
- [execution](https://lightning.bitflyer.jp/docs#%E7%B4%84%E5%AE%9A%E5%B1%A5%E6%AD%B4)
- [getboardstate](https://lightning.bitflyer.jp/docs#%E6%9D%BF%E3%81%AE%E7%8A%B6%E6%85%8B)
- [gethealth](https://lightning.bitflyer.jp/docs#%E5%8F%96%E5%BC%95%E6%89%80%E3%81%AE%E7%8A%B6%E6%85%8B)
- [getchats](https://lightning.bitflyer.jp/docs#%E3%83%81%E3%83%A3%E3%83%83%E3%83%88)

## REST(private)  

- getPermissions(/me/getpermissions)
- getBalance(/me/getbalance)
- sendChildOrder(/me/sendchildorder)

## MUST defined(private)  

- [/me/getcollateral](https://lightning.bitflyer.jp/docs#%E8%A8%BC%E6%8B%A0%E9%87%91%E3%81%AE%E7%8A%B6%E6%85%8B%E3%82%92%E5%8F%96%E5%BE%97)
- [/me/getaddress](https://lightning.bitflyer.jp/docs#%E9%A0%90%E5%85%A5%E7%94%A8%E3%82%A2%E3%83%89%E3%83%AC%E3%82%B9%E5%8F%96%E5%BE%97)
- [/me/getcoinins](https://lightning.bitflyer.jp/docs#%E4%BB%AE%E6%83%B3%E9%80%9A%E8%B2%A8%E9%A0%90%E5%85%A5%E5%B1%A5%E6%AD%B4)
- [/me/getcoinouts](https://lightning.bitflyer.jp/docs#%E4%BB%AE%E6%83%B3%E9%80%9A%E8%B2%A8%E9%80%81%E4%BB%98%E5%B1%A5%E6%AD%B4)
- [/me/getobankaccount](https://lightning.bitflyer.jp/docs#%E9%8A%80%E8%A1%8C%E5%8F%A3%E5%BA%A7%E4%B8%80%E8%A6%A7%E5%8F%96%E5%BE%97)
- [/me/getdeposits](https://lightning.bitflyer.jp/docs#%E5%85%A5%E9%87%91%E5%B1%A5%E6%AD%B4)
- [/me/withdraw](https://lightning.bitflyer.jp/docs#%E5%87%BA%E9%87%91)
- [/me/getwithdrawls](https://lightning.bitflyer.jp/docs#%E5%87%BA%E9%87%91%E5%B1%A5%E6%AD%B4)
- [/me/cancelchildorder](https://lightning.bitflyer.jp/docs#%E6%B3%A8%E6%96%87%E3%82%92%E3%82%AD%E3%83%A3%E3%83%B3%E3%82%BB%E3%83%AB%E3%81%99%E3%82%8B)
- [/me/sendparentorder](https://lightning.bitflyer.jp/docs#%E6%96%B0%E8%A6%8F%E3%81%AE%E8%A6%AA%E6%B3%A8%E6%96%87%E3%82%92%E5%87%BA%E3%81%99%E7%89%B9%E6%AE%8A%E6%B3%A8%E6%96%87)
- [/me/cancelparentorder](https://lightning.bitflyer.jp/docs#%E8%A6%AA%E6%B3%A8%E6%96%87%E3%82%92%E3%82%AD%E3%83%A3%E3%83%B3%E3%82%BB%E3%83%AB%E3%81%99%E3%82%8B)
- [/me/cancelchildorders](https://lightning.bitflyer.jp/docs#%E3%81%99%E3%81%B9%E3%81%A6%E3%81%AE%E6%B3%A8%E6%96%87%E3%82%92%E3%82%AD%E3%83%A3%E3%83%B3%E3%82%BB%E3%83%AB%E3%81%99%E3%82%8B)
- [/me/getchildorders](https://lightning.bitflyer.jp/docs#%E6%B3%A8%E6%96%87%E3%81%AE%E4%B8%80%E8%A6%A7%E3%82%92%E5%8F%96%E5%BE%97)
- [/me/getparentorders](https://lightning.bitflyer.jp/docs#%E8%A6%AA%E6%B3%A8%E6%96%87%E3%81%AE%E4%B8%80%E8%A6%A7%E3%82%92%E5%8F%96%E5%BE%97)
- [/me/getparentorder](https://lightning.bitflyer.jp/docs#%E8%A6%AA%E6%B3%A8%E6%96%87%E3%81%AE%E8%A9%B3%E7%B4%B0%E3%82%92%E5%8F%96%E5%BE%97)
- [/me/getexecutions](https://lightning.bitflyer.jp/docs#%E7%B4%84%E5%AE%9A%E3%81%AE%E4%B8%80%E8%A6%A7%E3%82%92%E5%8F%96%E5%BE%97)
- [/me/getpositions](https://lightning.bitflyer.jp/docs#%E5%BB%BA%E7%8E%89%E3%81%AE%E4%B8%80%E8%A6%A7%E3%82%92%E5%8F%96%E5%BE%97)
- [/me/getcollateralhistory](https://lightning.bitflyer.jp/docs#%E8%A8%BC%E6%8B%A0%E9%87%91%E3%81%AE%E5%A4%89%E5%8B%95%E5%B1%A5%E6%AD%B4%E3%82%92%E5%8F%96%E5%BE%97)
- [/me/gettradingcommission](https://lightning.bitflyer.jp/docs#%E5%8F%96%E5%BC%95%E6%89%8B%E6%95%B0%E6%96%99%E3%82%92%E5%8F%96%E5%BE%97)
## RealtimeAPI  

Not implemented now and create an issue.

## Contributing  

1. Fork this repository
1. Create your feature branch & commit
1. Create a new pull request

## License  

MIT
