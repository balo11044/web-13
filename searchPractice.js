'use strict'

// var input = [110,22,32,44554,3,344,5555];
// var target=3;
// var len
function search(input, target) {
  len=input.length;
  for(var i =0;i<len;i++)
  {
    if(input[i]==target)
    {
      return i;
    }
  }
}
//var kq = search(input,target);
//console.log(kq);

module.exports = search
