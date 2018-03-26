// 做饭 -> 买菜

function buy(callback) {
    setTimeout(()=>{
        let a='蘑菇';
        callback(a);
    },2000)
}
buy(function cookie(a) {
    console.log(a);
});//回调函数 将后续的处理逻辑传入当前要做的事
//事情做好后调用次函数
//promise 解决回调问题 promise 三个状态：
// 成功 失败 等待