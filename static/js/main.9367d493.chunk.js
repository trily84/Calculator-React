(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{15:function(i,t,e){},16:function(i,t,e){"use strict";e.r(t);var a=e(0),n=e(1),s=e.n(n),c=e(5),l=e.n(c),r=(e(15),e(6)),o=e(7),d=e(2),h=e(9),p=e(8);e(4);var u=function(i){var t=i.handleClick;return Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{id:"button-area",children:[Object(a.jsx)("button",{className:"operator",id:"add",onClick:t,children:"+"}),Object(a.jsx)("button",{className:"operator",id:"subtract",onClick:t,children:"-"}),Object(a.jsx)("button",{className:"operator",id:"multiply",onClick:t,children:"*"}),Object(a.jsx)("button",{className:"operator",id:"divide",onClick:t,children:"/"}),Object(a.jsx)("button",{className:"digit",id:"one",onClick:t,children:"1"}),Object(a.jsx)("button",{className:"digit",id:"two",onClick:t,children:"2"}),Object(a.jsx)("button",{className:"digit",id:"three",onClick:t,children:"3"}),Object(a.jsx)("button",{className:"digit",id:"four",onClick:t,children:"4"}),Object(a.jsx)("button",{className:"digit",id:"five",onClick:t,children:"5"}),Object(a.jsx)("button",{className:"digit",id:"six",onClick:t,children:"6"}),Object(a.jsx)("button",{className:"digit",id:"seven",onClick:t,children:"7"}),Object(a.jsx)("button",{className:"digit",id:"eight",onClick:t,children:"8"}),Object(a.jsx)("button",{className:"digit",id:"nine",onClick:t,children:"9"}),Object(a.jsx)("button",{className:"digit",id:"zero",onClick:t,children:"0"}),Object(a.jsx)("button",{className:"decimal",id:"decimal",onClick:t,children:"."}),Object(a.jsx)("button",{className:"clear",id:"clear",onClick:t,children:"AC"})]}),Object(a.jsx)("div",{className:"equals",children:Object(a.jsx)("button",{className:"operator",id:"equals",onClick:t,children:"="})})]})};var b=function(i){return Object(a.jsx)("div",{children:Object(a.jsx)("div",{id:"display",children:i.display})})},j=function(i){Object(h.a)(e,i);var t=Object(p.a)(e);function e(i){var a;return Object(r.a)(this,e),(a=t.call(this,i)).state={display:"0"},a.handleClick=a.handleClick.bind(Object(d.a)(a)),a.updateDisplay=a.updateDisplay.bind(Object(d.a)(a)),a.calculate=a.calculate.bind(Object(d.a)(a)),a.display="0",a.firstOperand="0",a.waitingForSecondOperand=!1,a.operator=null,a}return Object(o.a)(e,[{key:"calculate",value:function(i,t,e){return"+"===e?i+t:"-"===e?i-t:"*"===e?i*t:"/"===e?i/t:t}},{key:"updateDisplay",value:function(){this.setState({display:this.display})}},{key:"inputDigit",value:function(i){this.waitingForSecondOperand?this.waitingForSecondOperand&&("-"===this.display?(this.display+=i,console.log(this.display)):this.display=i,this.waitingForSecondOperand=!1,console.log("waitingForSecondOperand:",this.waitingForSecondOperand)):("0"===this.display?this.display=i:this.display+=i,console.log("waitingForSecondOperand:",this.waitingForSecondOperand))}},{key:"inputOperator",value:function(i){var t=parseFloat(this.display);if("0"!==this.firstOperand||isNaN(t)){if(this.operator&&this.waitingForSecondOperand)"-"===i&&"="!==this.operator?this.display="-":"-"!==i?(this.display="0",this.operator=i):"-"===i&&"="===this.operator&&(this.operator=i),console.log(i);else if(this.operator){var e=this.calculate(this.firstOperand,t,this.operator);this.display=String(e),this.firstOperand=e,this.operator=i}}else this.firstOperand=t,this.operator=i;this.waitingForSecondOperand=!0,console.log("firstOperand:",this.firstOperand),console.log("operator:",this.operator),console.log("waitingForSecondOperand:",this.waitingForSecondOperand)}},{key:"inputDecimal",value:function(){this.display.includes(".")||(this.display+="."),!0===this.waitingForSecondOperand&&(this.display="0.",this.waitingForSecondOperand=!1)}},{key:"handleClick",value:function(i){switch(i.target.className){case"digit":this.inputDigit(i.target.innerHTML),this.updateDisplay();break;case"decimal":this.inputDecimal("."),this.updateDisplay();break;case"operator":this.inputOperator(i.target.innerHTML),this.updateDisplay();break;case"clear":this.display="0",this.firstOperand="0",this.operator=null,this.updateDisplay()}}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("div",{id:"title",children:"Calculator"}),Object(a.jsx)(b,{display:this.state.display}),Object(a.jsx)(u,{handleClick:this.handleClick})]})}}]),e}(n.Component),O=function(i){i&&i instanceof Function&&e.e(3).then(e.bind(null,17)).then((function(t){var e=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,c=t.getTTFB;e(i),a(i),n(i),s(i),c(i)}))};l.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(j,{})}),document.getElementById("root")),O()},4:function(i,t,e){}},[[16,1,2]]]);
//# sourceMappingURL=main.9367d493.chunk.js.map