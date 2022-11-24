const obj = {
  name: 'Prashant'
}

function myFun(address) {
  console.log(`${this.name} is from ${address}`);
}

Function.prototype.customBind = function (object, ...args) {
  var func = this;

  return function () {
    func.apply(object, [...args])
  }
}
const fn = myFun.customBind(obj, 'pune');
fn()

