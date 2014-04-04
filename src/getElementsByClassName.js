// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:
// Document: a big tree
// Base case: if at the end of the tree
// Go through elements, if element has a class name match, then store that into an array, 
// then observe children. 
var getElementsByClassName = function (className) {
  // Return an array
  var result = [];

  var containsClass = function (node) {
    return node.className.split(" ").indexOf(className) > -1 ? true : false;
  };

  var findMatches = function (child) {
    if (child !== undefined) {
      if ( containsClass(child) ) {
        // console.log(child);
        result.push(child);
      }
      for(var i = 0; i < child.children.length; i++) {
        findMatches(child.children[i]);
      }
    }
  };

  findMatches(document.body);
  return result;
};
