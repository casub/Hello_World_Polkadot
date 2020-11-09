If you want to run this blockchain you need to put this 
```
{
  "CurrencyId": {
    "_enum": [
      "Native",
      "DOT",
      "KSM",
      "BTC",
      "CASUB"
    ]
  },
  "CurrencyIdOf": "CurrencyId",
  "Amount": "i128",
  "AmountOf": "Amount",
  "Order": {
    "base_currency_id": "CurrencyId",
    "base_amount": "Compact<Balance>",
    "target_currency_id": "CurrencyId",
    "target_amount": "Compact<Balance>",
    "owner": "AccountId"
  },
  "OrderOf": "Order",
  "OrderId": "u32"
}
```
To the https://polkadot.js.org/apps/#/settings/developer
