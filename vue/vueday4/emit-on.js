//发布emit 订阅 on {女生失恋:['哭'，'购物'，'吃']}
function Girl(){
    this._events={};
};
Girl.prototype.on=function (eventName,callback) {
    if(this._events[eventName]){//第一次
        this._events[eventName].push(callback);
    }else {
          this._events[eventName]=[callback];
    }

};
//[].slice.call(arguments,1);
//Array.from(arguments).slice(1)
Girl.prototype.emit=function (eventName,...args) {//
    console.log(args);
    if(this._events[eventName]){
        this._events[eventName].forEach(cb=>cb(...args));//展开运算符
    }
};

let girl= new Girl();
let cry=(who,who2)=>{
    console.log(who2+who+'哭')
};
let eat=(who)=>{
    console.log(who+'吃')
};
girl.on('失恋',cry);//{[失恋:[cry]}
girl.on('失恋',eat);//{失恋：[cry,eat]}
girl.emit('失恋','我','你');