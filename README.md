# Unoffical steamtrad.es API client with promises

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
See definitions at [https://steamtrad.es/doc/api-explorer](https://steamtrad.es/doc/api-explorer)    
function names are based on the last part of each steamtrad.es api url. Functions return entire request object from promise. 

- steamtrades.infoBySteamID(steam_id, force_refresh)
- steamtrades.infoByTradeURL(trade_url, force_refresh)
- steamtrades.game()
- steamtrades.games(id)
- steamtrades.mine(context_id, offset, limit)
- steamtrades.scanUserInventory(trade_url, context_id, force_refresh)
- steamtrades.userInventory(id)
- steamtrades.trade(id)
- steamtrades.trades()
- steamtrades.requestItems(trade_url, items, message)
- steamtrades.sendItems(trade_url, items, message)
- steamtrades.transferItems(items, dst_app_id, allow_foreign_dest)
