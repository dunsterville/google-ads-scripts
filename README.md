# Dunsterville's Google Ads Scripts

These scripts are to be used for Google Ads and will send alerts to help you keep track of performance in the account

## Current Scripts
  - Precent Deviation of CPA
  - Precent Deviation of Cost

##### Precent Deviation of Cost
[Link to script](https://github.com/dunsterville/google-ads-scripts/blob/master/Cost%20Deviation.js)

It is defaulted to 10% Day over Day, you can change that on line 1 like so
```js
var COST_PRECENT_DIFFERENCE = 0.05; // 5%
var COST_PRECENT_DIFFERENCE = 0.15; // 15%
var COST_PRECENT_DIFFERENCE = 0.20; // 20%
```

At Line 2 you will enter the email(s) that you want the alert to be sent to
```js
var Email_ids = "your@email.it, example@domain.com"
```

You can also change the Subject and content of the alert. The body of the emails is from lines 38-56 and the subject is on line 57 defaulted to "KB Cost Precent Difference Threshold Script"

##### Precent Deviation of CPA
[Link to script](https://github.com/dunsterville/google-ads-scripts/blob/master/CPA%20Deviation.js)

Very similiar to Cost Deviation. It is defaulted to 10% Day over Day, you can change that on line 1 like so
```js
var CPA_PRECENT_DIFFERENCE = 0.05; // 5%
var CPA_PRECENT_DIFFERENCE = 0.15; // 15%
var CPA_PRECENT_DIFFERENCE = 0.20; // 20%
```

At Line 2 you will enter the email(s) that you want the alert to be sent to
```js
var Email_ids = "your@email.it, example@domain.com"
```

You can also change the Subject and content of the alert. The body of the emails is from lines 38-56 and the subject is on line 57 defaulted to "KB CPA Precent Difference Threshold Script"

### Future Scripts
  - Precent Deviation of ROAS WoW
  - Precent Deviation of Revenue WoW


If you have any questions about the use of these scripts please email me [michael@klientboost.com](mailto:michael@klientboost.com?subject=Google%20Ads%20Scripts) 
  