Dhaka-division-postal-code
==========================

A small node module to find postal code of different area in Dhaka division 

## Installation

```shell
  npm install --save dhaka-division-post-code
```

## Usage 1

```js
  var app = require("dhaka-division-post-code");
  
  var postCode = app.info("Netrakona","Kalmakanda","Kalmakanda");
  
  console.log(postCode); //2430
```
#### First parameter  = "District"
#### Second parameter = "Thana"
#### Third parameter  = "Sub office"

## Usage 2

```js
  var app = require("dhaka-division-post-code");
  
  app.postCode(1975); 
  /* output 
  { district: 'Tangail ',
  thana: 'Kalihati ',
  subOffice: 'Palisha ' }
  */
  
  var details = app.postCode(1975);
  console.log(details.district); //  Tangail
  console.log(details.thana);    //  Kalihati
  console.log(details.subOffice);//  Palisha
```


####Data get from https://en.wikipedia.org/wiki/List_of_postal_codes_in_Bangladesh
===============================================================================

## Release History

* 1.0.0 is initial release only dhaka division 
* 2.0.0 second major release it has "postCode" function which take parameter of post code and return json

