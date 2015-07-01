# boostrap-moment
A date/time picker that is based on Angular.JS, Bootstrap and Moment.JS

## Dependencies
* Angular.JS ~1.4.0
* Moment ~2.10.3
* Moment-Timezone ~0.4.0
* Angular Bootstrap ~0.13.0

## Installation
```
bower install bootstrap-moment --save
```

## Usage
Include bootstrap-moment.js and bootstrap-moment.css in your index html file
```
<link rel="stylesheet" href="bower_components/bootstrap-moment/bootstrap-moment.css">
<script src="bower_components/bootstrap-moment/bootstrap-moment.js"></script>
```
Note: make sure the dependencies are included in your index html file as well

Include the module in your angular.js application:
```
angular.module('bmTestApp', ['bootstrapMoment'])
```

Note: Moment.JS does not always load the default locale language correctly... You may need to set the locale used by the Moment.JS library.
```
moment.locale('en')     // This requires that the correct Moment.JS script is included (ex: moment-with-locales.min.js)
```
### Example
```
<bootstrap-moment
  current-date="Data.CurrentDate"   <!-- Date.CurrentDate is expected to be an instance of moment() -->
  placement="Options.Placement"
  required="Options.Required">
</bootstrap-moment>
```
