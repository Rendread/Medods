(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"04d5":function(t,e,n){},"159b":function(t,e,n){var i=n("da84"),r=n("fdbc"),s=n("17c2"),o=n("9112");for(var a in r){var c=i[a],u=c&&c.prototype;if(u&&u.forEach!==s)try{o(u,"forEach",s)}catch(f){u.forEach=s}}},"17c2":function(t,e,n){"use strict";var i=n("b727").forEach,r=n("a640"),s=n("ae40"),o=r("forEach"),a=s("forEach");t.exports=o&&a?[].forEach:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}},"196f":function(t,e,n){t.exports=n.p+"media/3.c1c96b44.mp3"},"25f0":function(t,e,n){"use strict";var i=n("6eeb"),r=n("825a"),s=n("d039"),o=n("ad6d"),a="toString",c=RegExp.prototype,u=c[a],f=s((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),l=u.name!=a;(f||l)&&i(RegExp.prototype,a,(function(){var t=r(this),e=String(t.source),n=t.flags,i=String(void 0===n&&t instanceof RegExp&&!("flags"in c)?o.call(t):n);return"/"+e+"/"+i}),{unsafe:!0})},"26a4":function(t,e,n){"use strict";n("04d5")},"3c6d":function(t,e,n){t.exports=n.p+"media/1.99e50f7d.mp3"},"3cf8":function(t,e,n){t.exports=n.p+"media/2.d2c4a2c4.mp3"},4160:function(t,e,n){"use strict";var i=n("23e7"),r=n("17c2");i({target:"Array",proto:!0,forced:[].forEach!=r},{forEach:r})},6910:function(t,e,n){"use strict";n("ba40")},"78fc":function(t,e,n){t.exports=n.p+"media/4.36d5a722.mp3"},"7d36":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"game__content"},[n("SimonTheGame")],1)},r=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{class:"simon-game "+t.state,attrs:{value:""}},[n("GLButton",{attrs:{textButton:"1",color:"#FF0000",sound:"1.mp3"}}),n("GLButton",{attrs:{textButton:"2",color:"#008000",sound:"2.mp3"}}),n("GLButton",{attrs:{textButton:"3",color:"#0000FF",sound:"3.mp3"}}),n("GLButton",{attrs:{textButton:"4",color:"#008B8B",sound:"4.mp3"}})],1),n("button",{attrs:{type:"button"},on:{click:function(e){return t.start()}}},[t._v("Начать игру")]),"gameover"==this.$store.state.game.state?n("h1",[t._v("Game Over")]):t._e(),n("p",[t._v("Уровень сложности")]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.selectDifficulty,expression:"selectDifficulty"}],on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selectDifficulty=e.target.multiple?n:n[0]},function(e){return t.changeDiff(t.selectDifficulty)}]}},t._l(t.difficultys,(function(e,i){return n("option",{key:i},[t._v(t._s(e))])})),0)])},o=[],a=(n("99af"),n("4160"),n("159b"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{ref:"btn",class:"button"+t.textButton,style:"background-color:"+t.color,attrs:{"data-button":t.textButton},on:{click:function(e){return t.click(e)}}},[t._v(" "+t._s(t.textButton)+" ")])}),c=[],u=(n("d3b7"),n("25f0"),{name:"SimonButton",props:{textButton:{type:String,required:!0},color:{type:String,required:!0},sound:{type:String,required:!0}},methods:{clearTimeout:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){clearTimeout(this.$store.state.game.timerId)})),setTimeout:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){"Легкий"==this.$store.state.game.selectDifficulty&&(this.$store.state.game.timer=1500),"Средний"==this.$store.state.game.selectDifficulty&&(this.$store.state.game.timer=1e3),"Сложный"==this.$store.state.game.selectDifficulty&&(this.$store.state.game.timer=400),this.$store.state.game.timerId=setTimeout((function(){return window.$SimonTheGame.gameOver()}),this.$store.state.game.timer)})),click:function(t){var e,i=this.$store.state.game.state;if("listening"==i||t&&!t.isTrusted){var r=this.$refs.btn,s=null===r||void 0===r||null===(e=r.dataset)||void 0===e?void 0:e.button;r.classList.add("click"),setTimeout((function(){r.classList.remove("click")}),200),this.playSound(n("ac03")("./".concat(this.sound))),t.isTrusted&&(this.clearTimeout(this.$store.state.game.timerId),this.setTimeout(),this.checkSequence(s))}},checkSequence:function(t){var e=this;if("listening"===window.$SimonTheGame.getState()){this.$store.state.game.hits.push(t);var n={1:0,2:1,3:2,4:3},i=n[t.toLowerCase()],r=window.$SimonTheGame.shiftSequence();r==i?(this.clearTimeout(this.$store.state.game.timerId),window.$SimonTheGame.sequence().length&&this.setTimeout(),window.$SimonTheGame.sequence().length||(this.clearTimeout(this.$store.state.game.timerId),setTimeout((function(){"gameover"!=e.$store.state.game.state&&(window.$SimonTheGame.setState("waiting"),window.$SimonTheGame.levelUp())}),1e3))):window.$SimonTheGame.gameOver()}},playSound:function(t){var e=new Audio(t);e.play()}}}),f=u,l=(n("6910"),n("2877")),m=Object(l["a"])(f,a,c,!1,null,"fdb913f4",null),h=m.exports,d={data:function(){return{difficultys:this.$store.state.game.difficulty,selectDifficulty:this.$store.state.game.selectDifficulty}},components:{GLButton:h},methods:{play:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];this.setState("play"),e.forEach((function(n,i){setTimeout((function(){document.querySelectorAll("[data-button]")[n].click(),i==e.length-1&&t.setState("listening")}),800*i)}))},start:function(){var t=this;setTimeout((function(){t.restartGame()}),500)},restartGame:function(){this.$store.state.game.started||(this.started=!0,this.restart())},restart:function(){this.setState("waiting"),this.$store.state.game.started=!0,this.$store.state.game.hits=[],this.$store.state.game.level=0,this.$store.state.game.elapsedTime=0,this.$store.state.game.currentSequence=[],this.$store.state.game.currentGame=[],this.$store.state.game.sequenceListener=void 0,setTimeout((function(){window.$SimonTheGame.levelUp()}),500)},levelUp:function(){this.level++;for(var t=this.sequenceGame().length;t<this.level;t++)this.currentGame.push(this.randomNumber(0,3));console.log("".concat(this.currentGame,'  + " this.currentGame"')),this.currentSequence=this.currentSequence.concat(this.currentGame),this.play(this.currentSequence)},gameOver:function(){this.setState("gameover"),this.$store.state.game.started=!1},changeDiff:function(t){this.$store.state.game.selectDifficulty=t},setState:function(t){this.$store.state.game.state=t},getState:function(){return this.$store.state.game.state},randomNumber:function(t,e){return Math.floor(Math.random()*(e-t+1))+t},sequence:function(){return this.currentSequence},sequenceGame:function(){return this.currentGame},shiftSequence:function(){return this.currentSequence.shift()},getLevel:function(){return this.level}},computed:{level:{get:function(){return this.$store.state.game.level},set:function(t){this.$store.state.game.level=t}},state:{get:function(){return this.$store.state.game.state},set:function(t){this.$store.state.game.state=t}},currentSequence:{get:function(){return this.$store.state.game.currentSequence},set:function(t){this.$store.state.game.currentSequence=t}},currentGame:{get:function(){return this.$store.state.game.currentGame},set:function(t){this.$store.state.game.currentGame=t}}},mounted:function(){window.$SimonTheGame=this}},g=d,p=(n("26a4"),Object(l["a"])(g,s,o,!1,null,"367dcf2d",null)),v=p.exports,S={components:{SimonTheGame:v}},$=S,y=(n("d134"),Object(l["a"])($,i,r,!1,null,"3f8ccda1",null));e["default"]=y.exports},"99af":function(t,e,n){"use strict";var i=n("23e7"),r=n("d039"),s=n("e8b5"),o=n("861d"),a=n("7b0b"),c=n("50c4"),u=n("8418"),f=n("65f0"),l=n("1dde"),m=n("b622"),h=n("2d00"),d=m("isConcatSpreadable"),g=9007199254740991,p="Maximum allowed index exceeded",v=h>=51||!r((function(){var t=[];return t[d]=!1,t.concat()[0]!==t})),S=l("concat"),$=function(t){if(!o(t))return!1;var e=t[d];return void 0!==e?!!e:s(t)},y=!v||!S;i({target:"Array",proto:!0,forced:y},{concat:function(t){var e,n,i,r,s,o=a(this),l=f(o,0),m=0;for(e=-1,i=arguments.length;e<i;e++)if(s=-1===e?o:arguments[e],$(s)){if(r=c(s.length),m+r>g)throw TypeError(p);for(n=0;n<r;n++,m++)n in s&&u(l,m,s[n])}else{if(m>=g)throw TypeError(p);u(l,m++,s)}return l.length=m,l}})},ac03:function(t,e,n){var i={"./1.mp3":"3c6d","./2.mp3":"3cf8","./3.mp3":"196f","./4.mp3":"78fc"};function r(t){var e=s(t);return n(e)}function s(t){if(!n.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}r.keys=function(){return Object.keys(i)},r.resolve=s,t.exports=r,r.id="ac03"},ad6d:function(t,e,n){"use strict";var i=n("825a");t.exports=function(){var t=i(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},b2d2:function(t,e,n){},b727:function(t,e,n){var i=n("0366"),r=n("44ad"),s=n("7b0b"),o=n("50c4"),a=n("65f0"),c=[].push,u=function(t){var e=1==t,n=2==t,u=3==t,f=4==t,l=6==t,m=5==t||l;return function(h,d,g,p){for(var v,S,$=s(h),y=r($),T=i(d,g,3),b=o(y.length),L=0,w=p||a,G=e?w(h,b):n?w(h,0):void 0;b>L;L++)if((m||L in y)&&(v=y[L],S=T(v,L,$),t))if(e)G[L]=S;else if(S)switch(t){case 3:return!0;case 5:return v;case 6:return L;case 2:c.call(G,v)}else if(f)return!1;return l?-1:u||f?f:G}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6)}},ba40:function(t,e,n){},d134:function(t,e,n){"use strict";n("b2d2")},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=about.e1f5dd11.js.map