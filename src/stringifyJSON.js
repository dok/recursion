// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
  // your code goes here
  // Base case: if obj is undefined
  if(typeof obj !== "object" || obj === null) {
    if(typeof obj === "string") {
      return '\"' + obj + '\"';
    } else {
      return '' + obj;
    }
  } else {
    if (Array.isArray(obj)) {
      var resultArray = "[";
      for(var i = 0; i < obj.length; i++) {
        if (obj[i] !== undefined && typeof obj[i] !== 'function') {
          resultArray += stringifyJSON(obj[i]) + ",";
        }
      }
      if(obj.length > 0) {
        return resultArray.substring(0, resultArray.length - 1) + "]";
      } else {
        return resultArray + "]";
      }
    } else if (typeof obj === "object") {
      var resultObj = "{";
      var hasAtLeastOne = false;
      for(var key in obj) {
        hasAtLeastOne = true;
        if (obj[key] !== undefined && typeof obj[key] !== 'function') {
          resultObj += '\"' + key  + '\"' + ':' + stringifyJSON(obj[key]) + ',';
        }
      }
      if(hasAtLeastOne) {
        return resultObj.substring(0, resultObj.length - 1) + "}";
      } else {
        return resultObj + "}";
      }
    }
  }
};
