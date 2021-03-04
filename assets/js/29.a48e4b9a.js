(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{386:function(t,e,a){"use strict";a.r(e);var s=a(42),v=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"setstate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setstate"}},[t._v("#")]),t._v(" setState")]),t._v(" "),a("h1",{attrs:{id:"执行setstate立即更新"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行setstate立即更新"}},[t._v("#")]),t._v(" 执行setState立即更新？")]),t._v(" "),a("p",[t._v("首先看摘自 "),a("a",{attrs:{href:"https://zh-hans.reactjs.org/docs/react-component.html#setstate",target:"_blank",rel:"noopener noreferrer"}},[t._v("React官网"),a("OutboundLink")],1),t._v("的一段话:")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("setState() 将对组件 state 的更改排入队列，并通知 React 需要使用更新后的 state 重新渲染此组件及其子组件。这是用于更新用户界面以响应事件处理器和处理服务器数据的主要方式")]),t._v(" "),a("p",[t._v("将 setState() 视为请求而不是立即更新组件的命令。为了更好的感知性能，React 会延迟调用它，然后通过一次传递更新多个组件。React 并不会保证 state 的变更会立即生效。")]),t._v(" "),a("p",[t._v("setState() 并不总是立即更新组件。它会批量推迟更新。这使得在调用 setState() 后立即读取 this.state 成为了隐患。为了消除隐患，请使用 componentDidUpdate 或者 setState 的回调函数（setState(updater, callback)），这两种方式都可以保证在应用更新后触发。如需基于之前的 state 来设置当前的 state，请阅读下述关于参数 updater 的内容。")]),t._v(" "),a("p",[t._v("除非 shouldComponentUpdate() 返回 false，否则 setState() 将始终执行重新渲染操作。如果可变对象被使用，且无法在 shouldComponentUpdate() 中实现条件渲染，那么仅在新旧状态不一时调用 setState()可以避免不必要的重新渲染")])]),t._v(" "),a("p",[t._v("因此可以看到,我们在执行完 setState 页面并不会马上执行更新,它会批量推迟更新,每执行一次 setState 就会创建 update 然后会加入到 fiber 的队列中,如我们前面的模拟过程 UpdateQueue")]),t._v(" "),a("blockquote",[a("p",[t._v("传入对象就会被合并")]),t._v(" "),a("p",[t._v("传入函数不会被合并,函数没法合并")])]),t._v(" "),a("h2",{attrs:{id:"setstate是同步还是异步"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setstate是同步还是异步"}},[t._v("#")]),t._v(" setState是同步还是异步")]),t._v(" "),a("p",[t._v('setState 本身无所谓异步还是同步,但是我们想拿到更新后 state 的值 这个时候就会出现所谓的 "同步"和"异步"。')]),t._v(" "),a("p",[a("img",{attrs:{src:"/img/setState-status.png",alt:"img11",title:"setState-status"}})]),t._v(" "),a("p",[t._v("代码中有一个变量锁 isBatchingUpdates,isBatchingUpdates 表示是否进行批量更新，初始化时默认为 "),a("em",[t._v("false")]),t._v(", batchedUpdates 方法会将 isBatchingUpdates 设为 "),a("em",[t._v("true")])]),t._v(" "),a("p",[t._v("这个同步异步主要取决于能否命中 batchedUpdates 机制, 判断 isBatchingUpdates")]),t._v(" "),a("p",[t._v("同步有那些")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("setTimeout/setInterval")])]),t._v(" "),a("li",[a("p",[t._v("自定义的DOM 事件")])])]),t._v(" "),a("p",[t._v("同步的本质是因为修改了 isBatchingUpdates 的状态,简单流程如下:")]),t._v(" "),a("p",[a("img",{attrs:{src:"/img/isBatchingUpdates.png",alt:"img12",title:"isBatchingUpdates"}})]),t._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("p",[t._v("React的 setState 的流程可以总结为以下：")]),t._v(" "),a("p",[a("img",{attrs:{src:"/img/batchedUpdates.png",alt:"img13",title:"batchedUpdates"}})])])}),[],!1,null,null,null);e.default=v.exports}}]);