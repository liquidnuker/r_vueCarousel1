webpackJsonp([2],[,,,,function(t,e,n){var i=n(3)(n(8),n(10),null,null);t.exports=i.exports},,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(9);e.default={data:function(){return{items:i.a.items,cIndex:0}},mounted:function(){},methods:{nextItem:function(){return this.cIndex=this.cIndex+1,this.cIndex=this.cIndex%this.items.length,this.items[this.cIndex]},prevItem:function(){return 0===this.cIndex&&(this.cIndex=this.items.length),this.cIndex=this.cIndex-1,this.items[this.cIndex]},customPage:function(t){this.cIndex=t}}}},function(t,e,n){"use strict";n.d(e,"a",function(){return i});var i={items:[{itemName:"item1",description:"",imgSrc:""},{itemName:"item2",description:"",imgSrc:""},{itemName:"item3",description:"",imgSrc:""}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[t._v("\n    "+t._s(t.items[t.cIndex].itemName)+"\n  ")]),t._v(" "),t._l(t.items,function(e,i){return n("span",[n("button",{on:{click:function(e){t.customPage(i)}}},[t._v(t._s(i))])])}),t._v(" "),n("button",{on:{click:t.prevItem}},[t._v("previous")]),t._v(" "),n("button",{on:{click:t.nextItem}},[t._v("next")])],2)},staticRenderFns:[]}}]);