var request = require('request-promise')
var assert = require('assert')
var querystring = require('querystring')

function call(host,token,url,path,method,data){
  var options = {
    uri:url + path,
    method:method || 'GET',
    body:data,
    json:true,
    headers:{
      Host:host,
      Authorization:'Token ' + token
    },
    resolveWithFullResponse:true
  }
  return request(options)
}

module.exports = function(options){
  assert(options,'requires options.token')
  var token = options.token
  var version = options.version || 'v1'
  var url = options.url || 'https://steamtrad.es/api/' + version + '/'
  var host = options.host || 'steamtrad.es'

  var methods = {}

  methods.call = call.bind(null,host,token,url)

  methods.infoBySteamID=function(steam_id,force_refresh){
    var query = querystring.stringify({steam_id:steam_id,force_refresh:force_refresh})
    var path = ['user/info_by_steam_id',query].join('?')
    return methods.call(path)
  }

  methods.infoByTradeURL=function(trade_url,force_refresh){
    var query = querystring.stringify({trade_url:trade_url,force_refresh})
    var path = ['user/info_by_trade_url',query].join('?')
    return methods.call(path)
  }

  methods.game =function(){
    return methods.call('game')
  }

  methods.games=function(id){
    return methods.call('game/'+id)
  }

  methods.mine = function(context_id,offset,limit){
    var query = querystring.stringify({context_id:context_id,offset:offset,limit:limit})
    var path = ['item/mine',query].join('?')
    return methods.call(path)
  }

  methods.scanUserInventory = function(trade_url,context_id,force_refresh){
    var data = {trade_url:trade_url,context_id:context_id,force_refresh:force_refresh}
    var query = querystring.stringify(data)
    var path = ['item/scan_user_inventory/', query].join('?');
    return methods.call(path,'POST')
  }

  methods.userInventory = function(trade_url,context_id){
    var query = querystring.stringify({context_id:context_id,trade_url:trade_url})
    var path = ['item/user_inventory/',query].join('?')
    return methods.call(path)
  }

  methods.trades = function(id){
    return methods.call('trade')
  }

  methods.trade = function(id){
    return methods.call('trade/'+id)
  }

  methods.requestItems = function(trade_url,items,message) {
    var query = querystring.stringify({trade_url:trade_url, items:items, message:message})
    var path = ['trade/request_items/',query].join('?')
    return methods.call(path,'POST')
  }

  methods.sendItems = function(trade_url,items,message){
    var query = querystring.stringify({trade_url:trade_url, items:items, message:message})
    var path = ['trade/send_items/',query].join('?')
    return methods.call(path,'POST')
  }

  methods.transferItems = function(items,dst_app_id,allow_foreign_dst){
    var query = querystring.stringify({dst_app_id:dst_app_id,items:items,allow_foreign_dst:allow_foreign_dst})
    var path = ['trade/send_items/',query].join('?')
    return methods.call(path,'POST')
  }

  return methods
}
