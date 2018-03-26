## 复习vue
- vm => viewModel 数据最终会被vm所代理
- {{}} 取值表达式 ，默认不写this 尽量少写逻辑（computed）

### 指令：dom元素的行间属性，vue提供内置的指令，以v-开头，后面的值均为变量
    - v-model（表单元素）忽略掉value，checked，selected，将数据绑定到视图上，视图修改后会影响数据的变化
    - v-text 取代{{}} v-cloak 解决闪烁（块）问题，后期不采用，使用v-cloak要加样式
    - v-once 绑定一次，数据再变化不会导致视图刷新，写在不想刷新的标签上
    - v-html 将html转化为html
    - v-for 循环（数组，对象，字符串，数字）
            ```
            <div v-for"(value,index) in 数组"></div>
            ```
###事件 v-on（@）
- 绑定给dom元素，需要在methods中定义，不能喝data里重名，this指向的是实例，不能使用箭头函数，如果不写括号，自动传参，否则参数为$event
```
<div @事件名='fn'></div>
```
## 安装
```
npm install vue axios bootstrap
```
