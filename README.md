# Unoffical steamtrad.es node promise based api using request-promise

# getting started

```
  npm install steamtrad.es

  in your project:
  var Steamtrades = require('steamtrad.es')

  var options = {
    token: // REQUIRED - your steamtrad.es api token
    version: //OPTIONAL - api version, default 'v1'
  }

  var steamtrades = Steamtrades(options)


```

# api
see definitions at [https://steamtrad.es/doc/api-explorer](https://steamtrad.es/doc/api-explorer)   
function names are based on the last part of each steamtrad.es api url

### infoBySteamID(steam_id, force_refresh)
### infoByTradeURL(trade_url, force_refresh)
### game()
### games(id)
### mine(context_id, offset, limit)
### scanUserInventory(trade_url, context_id, force_refresh)
### userInventory(id)
### trade(id)
### trades()
### requestItems(trade_url, items, message)
### sendItems(trade_url, items, message)
### transferItems(items, dst_app_id, allow_foreign_dest)
