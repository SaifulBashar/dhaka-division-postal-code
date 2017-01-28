Dhaka-division-postal-code
==========================

A small node module to find postal code of different area in Dhaka division 

## Installation

```shell
  npm install --save dhaka-division-post-code
```

## Usage

```js
  var app = require("dhaka-division-post-code");
  
  var postCode = app.info("Netrakona","Kalmakanda","Kalmakanda");
  
  console.log(postCode);
```
### First parameter  = "District"
### Second parameter = "Thana"
### third parameter  = "Sub office"

Data get from https://en.wikipedia.org/wiki/List_of_postal_codes_in_Bangladesh
===============================================================================

## Release History

* 1.0.0 is initial release only dhaka division 

