(function(t){function e(e){for(var r,a,o=e[0],c=e[1],u=e[2],f=0,m=[];f<o.length;f++)a=o[f],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&m.push(i[a][0]),i[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(m.length)m.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,o=1;o<n.length;o++){var c=n[o];0!==i[c]&&(r=!1)}r&&(s.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},i={app:0},s=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/Medods/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"04d5":function(t,e,n){},"196f":function(t,e,n){t.exports=n.p+"media/3.c1c96b44.mp3"},"26a4":function(t,e,n){"use strict";n("04d5")},"3c6d":function(t,e,n){t.exports=n.p+"media/1.99e50f7d.mp3"},"3cf8":function(t,e,n){t.exports=n.p+"media/2.d2c4a2c4.mp3"},"4aa1":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("HeaderNav",[t._v("123")]),n("router-view")],1)},s=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("div",{staticClass:"container"},[n("div",{staticClass:"header__body"},[n("div",{staticClass:"header__burger",class:{active:t.active_burger},on:{click:function(e){t.active_burger=!t.active_burger}}},[n("span")]),n("nav",{staticClass:"header__menu",class:{active:t.active_burger}},[t._m(0)]),n("hr")])])])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"header__list"},[n("li",[n("a",{staticClass:"header__link",attrs:{href:"/"}},[t._v("Client creation form")])]),n("li",[n("a",{staticClass:"header__link",attrs:{href:"/game"}},[t._v("Game")])])])}],c={data:function(){return{active_burger:!1}},name:"HeaderNav"},u=c,l=(n("c8af"),n("2877")),f=n("8e85"),m=n.n(f),d=n("fcac"),h=n.n(d),p=n("b79b"),v=n.n(p),g=Object(l["a"])(u,a,o,!1,null,"6d2570cf",null);"function"===typeof m.a&&m()(g),"function"===typeof h.a&&h()(g),"function"===typeof v.a&&v()(g);var b=g.exports,y={components:{HeaderNav:b}},$=y,_=(n("5d95"),Object(l["a"])($,i,s,!1,null,"89b39ffa",null)),S=_.exports,w=n("8c4f"),G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"game__content"},[n("SimonTheGame")],1)},T=[],O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{class:"simon-game "+t.state,attrs:{value:""}},[n("GLButton",{attrs:{textButton:"1",color:"#FF0000",sound:"1.mp3"}}),n("GLButton",{attrs:{textButton:"2",color:"#008000",sound:"2.mp3"}}),n("GLButton",{attrs:{textButton:"3",color:"#0000FF",sound:"3.mp3"}}),n("GLButton",{attrs:{textButton:"4",color:"#008B8B",sound:"4.mp3"}})],1),n("button",{attrs:{type:"button"},on:{click:function(e){return t.start()}}},[t._v("Начать игру")]),"gameover"==this.$store.state.game.state?n("h1",[t._v("Game Over")]):t._e(),n("p",[t._v("Уровень сложности")]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.selectDifficulty,expression:"selectDifficulty"}],on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selectDifficulty=e.target.multiple?n:n[0]},function(e){return t.changeDiff(t.selectDifficulty)}]}},t._l(t.difficultys,(function(e,r){return n("option",{key:r},[t._v(t._s(e))])})),0)])},q=[],x=(n("99af"),n("4160"),n("159b"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{ref:"btn",class:"button"+t.textButton,style:"background-color:"+t.color,attrs:{"data-button":t.textButton},on:{click:function(e){return t.click(e)}}},[t._v(" "+t._s(t.textButton)+" ")])}),k=[],j=(n("d3b7"),n("25f0"),{name:"SimonButton",props:{textButton:{type:String,required:!0},color:{type:String,required:!0},sound:{type:String,required:!0}},methods:{clearTimeout:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){clearTimeout(this.$store.state.game.timerId)})),setTimeout:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){"Легкий"==this.$store.state.game.selectDifficulty&&(this.$store.state.game.timer=1500),"Средний"==this.$store.state.game.selectDifficulty&&(this.$store.state.game.timer=1e3),"Сложный"==this.$store.state.game.selectDifficulty&&(this.$store.state.game.timer=400),this.$store.state.game.timerId=setTimeout((function(){return window.$SimonTheGame.gameOver()}),this.$store.state.game.timer)})),click:function(t){var e,r=this.$store.state.game.state;if("listening"==r||t&&!t.isTrusted){var i=this.$refs.btn,s=null===i||void 0===i||null===(e=i.dataset)||void 0===e?void 0:e.button;i.classList.add("click"),setTimeout((function(){i.classList.remove("click")}),200),this.playSound(n("ac03")("./".concat(this.sound))),t.isTrusted&&(this.clearTimeout(this.$store.state.game.timerId),this.setTimeout(),this.checkSequence(s))}},checkSequence:function(t){var e=this;if("listening"===window.$SimonTheGame.getState()){this.$store.state.game.hits.push(t);var n={1:0,2:1,3:2,4:3},r=n[t.toLowerCase()],i=window.$SimonTheGame.shiftSequence();i==r?(this.clearTimeout(this.$store.state.game.timerId),window.$SimonTheGame.sequence().length&&this.setTimeout(),window.$SimonTheGame.sequence().length||(this.clearTimeout(this.$store.state.game.timerId),setTimeout((function(){"gameover"!=e.$store.state.game.state&&(window.$SimonTheGame.setState("waiting"),window.$SimonTheGame.levelUp())}),1e3))):window.$SimonTheGame.gameOver()}},playSound:function(t){var e=new Audio(t);e.play()}}}),B=j,D=(n("6910"),Object(l["a"])(B,x,k,!1,null,"fdb913f4",null)),C=D.exports,L={data:function(){return{difficultys:this.$store.state.game.difficulty,selectDifficulty:this.$store.state.game.selectDifficulty}},components:{GLButton:C},methods:{play:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];this.setState("play"),e.forEach((function(n,r){setTimeout((function(){document.querySelectorAll("[data-button]")[n].click(),r==e.length-1&&t.setState("listening")}),800*r)}))},start:function(){var t=this;setTimeout((function(){t.restartGame()}),500)},restartGame:function(){this.$store.state.game.started||(this.started=!0,this.restart())},restart:function(){this.setState("waiting"),this.$store.state.game.started=!0,this.$store.state.game.hits=[],this.$store.state.game.level=0,this.$store.state.game.elapsedTime=0,this.$store.state.game.currentSequence=[],this.$store.state.game.currentGame=[],this.$store.state.game.sequenceListener=void 0,setTimeout((function(){window.$SimonTheGame.levelUp()}),500)},levelUp:function(){this.level++;for(var t=this.sequenceGame().length;t<this.level;t++)this.currentGame.push(this.randomNumber(0,3));console.log("".concat(this.currentGame,'  + " this.currentGame"')),this.currentSequence=this.currentSequence.concat(this.currentGame),this.play(this.currentSequence)},gameOver:function(){this.setState("gameover"),this.$store.state.game.started=!1},changeDiff:function(t){this.$store.state.game.selectDifficulty=t},setState:function(t){this.$store.state.game.state=t},getState:function(){return this.$store.state.game.state},randomNumber:function(t,e){return Math.floor(Math.random()*(e-t+1))+t},sequence:function(){return this.currentSequence},sequenceGame:function(){return this.currentGame},shiftSequence:function(){return this.currentSequence.shift()},getLevel:function(){return this.level}},computed:{level:{get:function(){return this.$store.state.game.level},set:function(t){this.$store.state.game.level=t}},state:{get:function(){return this.$store.state.game.state},set:function(t){this.$store.state.game.state=t}},currentSequence:{get:function(){return this.$store.state.game.currentSequence},set:function(t){this.$store.state.game.currentSequence=t}},currentGame:{get:function(){return this.$store.state.game.currentGame},set:function(t){this.$store.state.game.currentGame=t}}},mounted:function(){window.$SimonTheGame=this}},E=L,M=(n("26a4"),Object(l["a"])(E,O,q,!1,null,"367dcf2d",null)),N=M.exports,P={components:{SimonTheGame:N}},I=P,F=(n("d134"),Object(l["a"])(I,G,T,!1,null,"3f8ccda1",null)),U=F.exports;r["a"].use(w["a"]);var H,A=[{path:"/",name:"Home",component:U}],J=new w["a"]({mode:"history",base:"/Medods/",routes:A}),z=J,K=n("ade3"),Q=n("2f62");r["a"].use(Q["a"]);var R=new Q["a"].Store({state:{game:(H={hits:[],level:0,started:!1,state:"waiting",difficulty:"easy",currentSequence:[],sequenceListener:void 0,currentGame:[],timer:1500,timerId:null},Object(K["a"])(H,"difficulty",["Легкий","Средний","Сложный"]),Object(K["a"])(H,"selectDifficulty","Легкий"),H)},mutations:{},actions:{},modules:{}}),V=n("1dce"),W=n.n(V);r["a"].use(W.a),r["a"].config.productionTip=!1,r["a"].config.devtools=!0,new r["a"]({router:z,store:R,validations:{},render:function(t){return t(S)}}).$mount("#app")},"5d95":function(t,e,n){"use strict";n("81f7")},6910:function(t,e,n){"use strict";n("ba40")},"78fc":function(t,e,n){t.exports=n.p+"media/4.36d5a722.mp3"},"81f7":function(t,e,n){},"8e85":function(t,e){},ac03:function(t,e,n){var r={"./1.mp3":"3c6d","./2.mp3":"3cf8","./3.mp3":"196f","./4.mp3":"78fc"};function i(t){var e=s(t);return n(e)}function s(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}i.keys=function(){return Object.keys(r)},i.resolve=s,t.exports=i,i.id="ac03"},b2d2:function(t,e,n){},b79b:function(t,e){},ba40:function(t,e,n){},c8af:function(t,e,n){"use strict";n("4aa1")},d134:function(t,e,n){"use strict";n("b2d2")},fcac:function(t,e){}});
//# sourceMappingURL=app.1f6942c5.js.map