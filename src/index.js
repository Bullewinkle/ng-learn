require('./index.scss');

class MyClass {
    constructor(opts) {
        this.options = opts;
    }
    say (hi) {
        global.console.log(hi)
        global.content.innerHTML += hi;
        global.html = global.content.innerHTML;
    }
}
var instance = new MyClass();
global.instance = window.top.instance = instance;
global.content = global.document.getElementById('content') || global.document.body;
global.content.innerHTML += `<button onclick="instance.say('hello! ')">Say hello!</button>`
global.html = global.content.innerHTML

// console.log(global,window.instance,instance)