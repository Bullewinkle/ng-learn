require('./index.scss');

class MyClass {
    constructor(opts) {
        this.options = opts;
    }
    say (hi) {
        global.console.log(hi)
        global.document.body.innerHTML += hi;
    }
}
var instance = new MyClass();
global.instance = window.top.instance = instance;
global.document.body.innerHTML =`<button onclick="instance.say('hello! ')">Say hello!</button>`

console.log(global,window.instance,instance)