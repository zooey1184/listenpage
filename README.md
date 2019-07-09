### listenpage 使用说明
listenpage 用于监听window窗口是否是顶层窗口，监听窗口切换的方法

#### 安装
```s
npm i listenpage
```
****
#### 使用
我们可以将方法挂载在全局的对象下
```js
import listen_page from 'listenpage'
window.reload = listen_page
reload().change()  // 基本用法
```
****

#### 参数
reload可以接收一个对象参数
- 【可选】href: 表示当前window.location.href
- 【可选】time: 表示change中onload方法防抖时间
- 【可选】addFocus: 表示是否在window.onfocus 时候是否挂载change中的onload方法
- 【可选】addBlur: 表示window.onblur是否是否挂载change中的onclose方法
*****
change可以接受一个对象参数
- 【可选】onload: function  页面置于顶层|focus时候触发
- 【可选】onclose: function 页面置于隐藏|blur是否触发


同时这个对象是一个方法能链式调用
focus()
blur()
效果同addFocus
addBlur
方法优先级高于reload中配置


```js
reload({href: window.location.href, time: 1000}).change({
  onload() {
    console.log('this is a page onload function')
  },
  onclose() {
    console.log('this is a page onclose function')
  }
}).focus().blur()
```
****

#### 原理
> document.visibilityState  属性判断窗口是否属于顶层


> 监听
document.addEventListener('visibilitychange', function(){...}, false)