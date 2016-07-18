# Unoffical [https://steamtrad.es](steamtrad.es) API client with promises

# getting started   
 `npm install steamtrad.es`

```js
  var Steamtrades = require('steamtrad.es')

  var options = {
    token: // REQUIRED - your steamtrad.es api token
    version: //OPTIONAL - api version, default 'v1'
  }

  var steamtrades = Steamtrades(options)
```

# api
See complete definitions at [https://steamtrad.es/doc/api-explorer](https://steamtrad.es/doc/api-explorer)

Function names are based on the last part of each steamtrad.es api url. They will return entire request object from promise. 

**Queries information about a Steam user by Steam ID.**
`steamtrades.infoBySteamID(steam_id, force_refresh)`   

**Queries information about a Steam user by trade URL.**   
`teamtrades.infoByTradeURL(trade_url, force_refresh)`

**Obtain a list of all supported games.**    
`steamtrades.games()`

**Obtains information about a single supported game.**   
`steamtrades.game(id)`

**Queries the list of items owned by you.**   
`steamtrades.mine(context_id, offset, limit)`

**Queries information about the inventory scan state of a Steam user.**   
`steamtrades.scanUserInventory(trade_url, context_id, force_refresh)`

**Queries the cached list of items owned by a Steam user.**   
`steamtrades.userInventory(id)`
 
**Queries the status of a previously initiated trade.**  
`steamtrades.trade(id)`

**Queries a list of your trades, oldest trades first.**   
`steamtrades.trades()`
 
**Sends a trade offer to a Steam user requesting items.**   
`steamtrades.requestItems(trade_url, items, message)`
 
**Sends a trade offer to a Steam user offering a list of your items.**  
`steamtrades.sendItems(trade_url, items, message)`

**Transfers items from this app to another (SteamTrades internal transfer).**  
`steamtrades.transferItems(items, dst_app_id, allow_foreign_dest)`
