//resolve带边转向成功态，reject转向失败态
//两者皆是函数
//promise 的实例就有一个then方法
let p = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let a='蘑菇';
        resolve(a);
    },2000);
});
p.then((data)=>{console.log(data);},(err)=>{});
