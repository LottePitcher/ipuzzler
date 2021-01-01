!function(){var t={228:function(t){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}},858:function(t){t.exports=function(t){if(Array.isArray(t))return t}},506:function(t){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},575:function(t){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},100:function(t,e,n){var i=n(489),r=n(67);function s(e,n,o){return r()?t.exports=s=Reflect.construct:t.exports=s=function(t,e,n){var r=[null];r.push.apply(r,e);var s=new(Function.bind.apply(t,r));return n&&i(s,n.prototype),s},s.apply(null,arguments)}t.exports=s},913:function(t){function e(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}t.exports=function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}},754:function(t){function e(n){return t.exports=e=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},e(n)}t.exports=e},205:function(t,e,n){var i=n(489);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}},430:function(t){t.exports=function(t){return-1!==Function.toString.call(t).indexOf("[native code]")}},67:function(t){t.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}},884:function(t){t.exports=function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],i=!0,r=!1,s=void 0;try{for(var o,u=t[Symbol.iterator]();!(i=(o=u.next()).done)&&(n.push(o.value),!e||n.length!==e);i=!0);}catch(t){r=!0,s=t}finally{try{i||null==u.return||u.return()}finally{if(r)throw s}}return n}}},521:function(t){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},585:function(t,e,n){var i=n(8),r=n(506);t.exports=function(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?r(t):e}},489:function(t){function e(n,i){return t.exports=e=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},e(n,i)}t.exports=e},38:function(t,e,n){var i=n(858),r=n(884),s=n(379),o=n(521);t.exports=function(t,e){return i(t)||r(t,e)||s(t,e)||o()}},8:function(t){function e(n){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=e=function(t){return typeof t}:t.exports=e=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(n)}t.exports=e},379:function(t,e,n){var i=n(228);t.exports=function(t,e){if(t){if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(t,e):void 0}}},957:function(t,e,n){var i=n(754),r=n(489),s=n(430),o=n(100);function u(e){var n="function"==typeof Map?new Map:void 0;return t.exports=u=function(t){if(null===t||!s(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,e)}function e(){return o(t,arguments,i(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r(e,t)},u(e)}t.exports=u}},e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={exports:{}};return t[i](r,r.exports,n),r.exports}n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,{a:e}),e},n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",function(){"use strict";var t=n(575),e=n.n(t),i=n(913),r=n.n(i),s=n(506),o=n.n(s),u=n(205),l=n.n(u),c=n(585),a=n.n(c),h=n(754),f=n.n(h),d=n(957),p=n.n(d),v=function(){function t(n,i,r){var s=this;e()(this,t),this.uri=r||"",this.cells=n,this.allCells.forEach((function(t){return t.puzzle=s})),this.clues=i,this.focusedCell=null,this.direction="across",this.acrossHeading="Across",this.downHeading="Down"}return r()(t,[{key:"isClueBirectional",value:function(t){return this.clues.across[t]&&this.clues.down[t]}},{key:"switchDirection",value:function(){return"across"==this.direction?this.direction="down":this.direction="across"}},{key:"getState",value:function(){return this.cells.map((function(t){return t.map((function(t){return t.value||"_"})).join("")})).join("")}},{key:"setState",value:function(t){var e=t.split(""),n=this.cells.flat();e.forEach((function(t,e){return n[e].setValue("_"!=t?t:"")}))}},{key:"setFocus",value:function(t,e,n){this.setFocusToCell(this.cells[t][e],n)}},{key:"focusClue",value:function(t,e){var n=this.clues[e][t];this.setFocusToClue(n)}},{key:"setCellValue",value:function(t){this.focusedCell&&(this.focusedCell.setValue(t),t&&this.advanceFocus(this.direction))}},{key:"setFocusToClue",value:function(t){this.direction=t.direction,this.setFocusToCell(t.cells[0])}},{key:"setFocusToCell",value:function(t,e){t&&t.hasInput&&(this.focusedCell==t?t.isBirectional&&e&&this.switchDirection():(this.focusedCell=t,t.clues[this.direction]||this.switchDirection()),this.focusedCell=t,this.focusedClue=t.clues[this.direction],this.cells.flat().forEach((function(t){return t.clearHighlight()})),this.allClues.forEach((function(t){return t.clearHighlight()})),this.focusedClue.addHighlight())}},{key:"getCell",value:function(t,e){return t<0||t>=this.cells.length||e<0||e>=this.cells[t].length?null:this.cells[t][e]}},{key:"advanceFocus",value:function(t){var e=this.focusedCell.clues[t],n=e.cells.indexOf(this.focusedCell)+1;n<e.cells.length?this.setFocusToCell(e.cells[n]):e.next&&this.setFocusToClue(e.next)}},{key:"retreatFocus",value:function(t){var e=this.focusedCell.clues[t];if(e){var n=e.cells.indexOf(this.focusedCell)-1;n>=0&&this.setFocusToCell(e.cells[n])}}},{key:"home",value:function(){this.setFocusToCell(this.focusedClue.cells[0])}},{key:"end",value:function(){this.setFocusToCell(this.focusedClue.cells[this.focusedClue.cells.length-1])}},{key:"backspace",value:function(){this.setCellValue(""),this.retreatFocus(this.direction)}},{key:"clearFocus",value:function(){this.focusedCell=null,this.focusedClue=null,this.cells.flat().forEach((function(t){return t.clearHighlight()})),this.allClues.forEach((function(t){return t.clearHighlight()}))}},{key:"moveFocus",value:function(t){var e,n,i=null===(e=this.focusedCell)||void 0===e?void 0:e.position;if(i){switch(t){case"up":n=this.getCell(i.row-1,i.col);break;case"down":n=this.getCell(i.row+1,i.col);break;case"left":n=this.getCell(i.row,i.col-1);break;case"right":n=this.getCell(i.row,i.col+1)}this.setFocusToCell(n)}}},{key:"checkClue",value:function(){this.focusedClue&&this.focusedClue.check()}},{key:"clearClue",value:function(){this.focusedClue&&this.focusedClue.clear()}},{key:"cheatClue",value:function(){this.focusedClue&&this.focusedClue.cheat()}},{key:"checkGrid",value:function(){this.allCells.forEach((function(t){return t.check()}))}},{key:"clearGrid",value:function(){this.allCells.forEach((function(t){return t.clear()}))}},{key:"cheatGrid",value:function(){this.allCells.forEach((function(t){return t.cheat()}))}},{key:"allClues",get:function(){return this.clues.across.concat(this.clues.down).filter((function(t){return t}))}},{key:"allCells",get:function(){return this.cells.flat()}},{key:"width",get:function(){return this.cells[0].length}},{key:"height",get:function(){return this.cells.length}},{key:"cookieName",get:function(){return this.uri.replace(/[^a-z0-9]+/gi,"-")}}]),t}(),y=function(){function t(n,i){var r=this;if(e()(this,t),this.direction=i,this.number=parseInt(n.number),this.text=n.clue,this.enumeration=n.enumeration,this.label=(n.label||String(this.number)).replace(/\//g,",").toLowerCase(),this.cells=[],this.continuations=[],n.continued&&n.continued.map){this.continuations=n.continued.map((function(e){var i=new t(e,e.direction.toLowerCase());return i.text="See ".concat(n.number),i.direction!=r.direction&&(i.text+=" "+r.direction),i.root=r,i})),this.next=this.continuations[0];for(var s=0;s<this.continuations.length-1;s++)this.continuations[s].next=this.continuations[s+1]}}return r()(t,[{key:"addHighlight",value:function(){this.allClues.forEach((function(t){return t.isActive=!0})),this.allCells.forEach((function(t){return t.addHighlight()}))}},{key:"clearHighlight",value:function(){this.allClues.forEach((function(t){return t.isActive=!1}))}},{key:"toClueList",value:function(){return[this].concat(this.continuations)}},{key:"check",value:function(){this.allCells.forEach((function(t){return t.check()}))}},{key:"clear",value:function(){this.allCells.forEach((function(t){return t.clear()}))}},{key:"cheat",value:function(){this.allCells.forEach((function(t){return t.cheat()}))}},{key:"elementId",get:function(){return"clue-".concat(this.number,"-").concat(this.direction)}},{key:"allCells",get:function(){var t,e=null!==(t=this.root)&&void 0!==t?t:this;return e.cells.concat(e.continuations.map((function(t){return t.cells})).flat())}},{key:"allClues",get:function(){var t,e=null!==(t=this.root)&&void 0!==t?t:this;return[e].concat(e.continuations)}}]),t}(),b=function(){function t(n,i){e()(this,t),this.row=n,this.col=i}return r()(t,[{key:"isInside",value:function(t){return!(this.row<0||this.row>=t.length||this.col<0||this.col>=t[this.row].length)}},{key:"increment",value:function(e){switch(e){case"down":return new t(this.row+1,this.col);case"across":return new t(this.row,this.col+1)}}}]),t}(),C=function(){function t(n,i,r){if(e()(this,t),this.isActive=!1,this.style="",this.position=new b(i,r),this.previous={},this.next={},this.clues={},this.value="",null===n)this.style="blank";else if("number"==typeof n.cell?this.number=n.cell:this.number="number"==typeof n?n:NaN,n.style)switch(n.style.barred){case"T":this.style="barred-top";break;case"L":this.style="barred-left";break;case"TL":this.style="barred-top barred-left"}else"#"==n&&(this.style="block")}return r()(t,[{key:"setValue",value:function(t){this.hasInput&&(this.value=t&&t.toUpperCase?t.toUpperCase():"")}},{key:"addHighlight",value:function(){this.isActive=!0}},{key:"clearHighlight",value:function(){this.isActive=!1}},{key:"isEndOfRange",value:function(t){return!this.hasInput||!("across"!=t||!this.previous.across||!/left/.test(this.style))||!("down"!=t||!this.previous.down||!/top/.test(this.style))}},{key:"check",value:function(){(this.value&&this.value.toUpperCase?this.value.toUpperCase():"")!==(this.solution&&this.solution.toUpperCase?this.solution.toUpperCase():"")&&this.clear()}},{key:"cheat",value:function(){this.solution&&this.setValue(this.solution)}},{key:"clear",value:function(){this.setValue("")}},{key:"isBirectional",get:function(){return this.clues.across&&this.clues.down}},{key:"hasInput",get:function(){return!/bl(an|oc)k/.test(this.style)}}]),t}(),k=function(){function t(){e()(this,t)}return r()(t,null,[{key:"parse",value:function(e,n){var i,r,s=e.puzzle.map((function(t,e){return t.map((function(t,n){return new C(t,e,n)}))}));t.attachSolutions(s,e.solution);var o=Object.keys(e.clues),u=o.find((function(t){return/^across/i.test(t)})),l=o.find((function(t){return/^down/i.test(t)})),c=e.clues[u],a=e.clues[l],h=Array.isArray(c)?c:[];h=h.map((function(t){return new y(t,"across").toClueList()})).flat();var f=Array.isArray(a)?a:[];f=f.map((function(t){return new y(t,"down").toClueList()})).flat();var d={across:[],down:[]};return h.concat(f).forEach((function(e){var n=t.findCellForClue(s,e);e.position=n.position,e.cells=t.findCellList(s,e.position,e.direction),e.cells.forEach((function(t){return t.clues[e.direction]=e})),d[e.direction][e.number]=e})),d.across.heading=null!==(i=u.split(":")[1])&&void 0!==i?i:"Across",d.down.heading=null!==(r=l.split(":")[1])&&void 0!==r?r:"Down",new v(s,d,n)}},{key:"attachSolutions",value:function(t,e){e&&t.forEach((function(t,n){return t.forEach((function(t,i){if(e[n]&&e[n][i]){var r=e[n][i].value||e[n][i];r.toUpperCase&&/[A-Z]/i.test(r)&&(t.solution=r.toUpperCase())}}))}))}},{key:"findCellForClue",value:function(t,e){return t.flat().find((function(t){return t.number==e.number}))}},{key:"findCellList",value:function(e,n,i,r){if(!n.isInside(e))return[];var s=e[n.row][n.col];return s.previous[i]=r,s.isEndOfRange(i)?[]:(r&&(r.next[i]=s),[s].concat(t.findCellList(e,n.increment(i),i,s)))}}]),t}(),m=n(38),g=n.n(m),w=function(){function t(n){e()(this,t),this.dom=n,this.spans=[],this.inputs=[],this.labels=[],this.clueListItems=[],this.buttons=[],this.grid=null,this.aboveClueBar=null,this.belowClueBar=null}return r()(t,[{key:"html",value:function(t,e,n){for(var i=document.createElement(t),r=0,s=Object.entries(e||{});r<s.length;r++){var o=g()(s[r],2),u=o[0],l=o[1];i.setAttribute(u,l)}return n&&(i.innerText=n),i}},{key:"update",value:function(t){this.spans.forEach((function(e,n){return e.forEach((function(e,i){var r=t.cells[n][i];r==t.focusedCell?e.input.focus():e&&e.input&&e.input.blur(),e.input&&(e.input.value=r.value),r.isActive?e.classList.add("highlighted"):e.classList.remove("highlighted")}))})),this.clueListItems.forEach((function(t){t.clue.isActive?t.clue.root?t.classList.add("halflighted"):t.classList.add("highlighted"):(t.classList.remove("highlighted"),t.classList.remove("halflighted"))})),t.focusedClue?(this.drawClue(t.focusedClue,this.aboveClueBar,!0),this.drawClue(t.focusedClue,this.belowClueBar,!0)):(this.aboveClueBar.innerHTML="",this.belowClueBar.innerHTML=""),this.savePuzzleStateToCookie(t)}},{key:"savePuzzleStateToCookie",value:function(t){var e=t.getState(),n=new Date(2100,1,1);document.cookie=t.cookieName+"="+e+";expires="+n.toUTCString()+";path=/"}},{key:"loadPuzzleStateFromCookie",value:function(t){var e=decodeURIComponent(document.cookie).split(/; */).map((function(t){return t.split("=")})).find((function(e){return e[0]==t.cookieName}));e&&e.length>1&&t.setState(e[1])}},{key:"createCellSpan",value:function(t,e,n){var i=this.html("span");if(t.style&&(i.className=t.style),t.number){var r=this.html("label");r.innerHTML=t.number,i.appendChild(r),this.labels.push(r)}if(t.hasInput){var s=this.html("input",{"data-row":e,"data-col":n,value:t.value});i.appendChild(s),i.input=s,this.inputs.push(s)}return i}},{key:"recalculateFontSizes",value:function(t,e){var n=Math.ceil(t/(1.8*e.width));n>10&&n<16&&(n=16),this.inputs.forEach((function(t){return t.style.fontSize=n+"px"}));var i=Math.ceil(t/(4*e.width));this.labels.forEach((function(t){return t.style.fontSize=i+"px"}));var r,s,o=Math.min(window.innerWidth,document.body.scrollWidth,document.body.clientWidth);if(o>768){var u=Math.min(420/e.width);u<24&&(u=24),u>64&&(u=64),r=e.width*u,s=e.height*u}else r=o-10,s=Math.floor(e.height/e.width*r);this.grid.style.width=r+"px",this.aboveClueBar.style.width=r+"px",this.belowClueBar.style.width=r+"px",this.grid.style.height=s+"px"}},{key:"createClueEnumerationSpan",value:function(t){var e=this.html("span");return e.innerText="(".concat(t.enumeration.trim().replace(/ /g,","),")"),e}},{key:"createClueList",value:function(t,e){var n=this,i=t.clues[e.toLowerCase()],r="".concat(e.toLowerCase(),"-clue-list"),s=this.html("section",{class:"puzzle-clue-list",id:r}),o=this.html("h2");o.innerHTML=i.heading,s.appendChild(o);var u=this.html("ol");return i.forEach((function(t){var e=n.html("li",{id:t.elementId,"data-clue-number":t.number,"data-clue-direction":t.direction});n.drawClue(t,e),e.clue=t,n.clueListItems.push(e),u.appendChild(e)})),s.appendChild(u),s}},{key:"drawClue",value:function(t,e,n){e.innerText=t.text;var i=this.html("label");i.innerText=t.label+(n?"".concat(t.direction[0]):""),e.insertBefore(i,e.firstChild),t.enumeration&&e.appendChild(this.createClueEnumerationSpan(t))}},{key:"drawButtons",value:function(){var t=this.html("button",{id:"check-clue-button"},"Check clue"),e=this.html("button",{id:"clear-clue-button"},"Clear clue"),n=this.html("button",{id:"cheat-clue-button"},"Cheat clue"),i=this.html("div",{id:"clue-buttons"});i.appendChild(t),i.appendChild(e),i.appendChild(n);var r=this.html("button",{id:"check-grid-button"},"Check grid"),s=this.html("button",{id:"clear-grid-button"},"Clear grid"),o=this.html("button",{id:"cheat-grid-button"},"Cheat grid"),u=this.html("div",{id:"clue-buttons"});u.appendChild(r),u.appendChild(s),u.appendChild(o),this.buttons.push(t),this.buttons.push(e),this.buttons.push(n),this.buttons.push(r),this.buttons.push(s),this.buttons.push(o);var l=this.html("div");return l.appendChild(i),l.appendChild(u),l}},{key:"render",value:function(t){var e=this;this.loadPuzzleStateFromCookie(t);var n=this.html("div",{class:"ipuzzler"});this.dom.appendChild(n);var i=this.html("link",{type:"text/css",href:"css/ipuzzler.css",rel:"stylesheet"});n.appendChild(i),this.grid=this.html("div",{class:"puzzle-grid"}),this.grid.style.gridTemplate="repeat(".concat(t.height,", 1fr) / repeat(").concat(t.width,", 1fr)");var r=this.html("div");this.aboveClueBar=this.html("div",{class:"clue-bar",id:"above-clue-bar"}),this.belowClueBar=this.html("div",{class:"clue-bar",id:"below-clue-bar"}),r.appendChild(this.aboveClueBar),r.appendChild(this.grid),r.appendChild(this.belowClueBar),r.appendChild(this.drawButtons()),n.appendChild(r),this.spans=t.cells.map((function(t,n){return t.map((function(t,i){var r=e.createCellSpan(t,n,i);return e.grid.appendChild(r),r}))})),n.appendChild(this.createClueList(t,"Across")),n.appendChild(this.createClueList(t,"Down"))}},{key:"resize",value:function(t){var e=Math.min(this.grid.offsetWidth,this.grid.offsetHeight);this.recalculateFontSizes(e,t)}}]),t}();var z=function(t){l()(u,t);var n,i,s=(n=u,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=f()(n);if(i){var r=f()(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return a()(this,t)});function u(){var t;return e()(this,u),(t=s.call(this)).shadow=t.attachShadow({mode:"open"}),t.addEventListener("keydown",t.keydown),window.addEventListener("resize",t.resize.bind(o()(t))),t}return r()(u,[{key:"load",value:function(t){var e=this;fetch(t).then((function(t){return t.json()})).then((function(n){return e.init(n,t)}))}},{key:"init",value:function(t,e){var n=this;this.puzzle=k.parse(t,e),this.renderer=new w(this.shadow),this.renderer.render(this.puzzle),this.renderer.inputs.forEach((function(t){t.addEventListener("focus",n.inputFocus.bind(n)),t.addEventListener("mousedown",n.inputMouseDown.bind(n))})),this.renderer.clueListItems.forEach((function(t){return t.addEventListener("click",n.clueListItemClick.bind(n))})),this.renderer.buttons.forEach((function(t){return t.addEventListener("click",n.buttonClick.bind(n))})),this.resize()}},{key:"connectedCallback",value:function(){var t=this.getAttribute("src");t&&this.load(t)}},{key:"attributeChangedCallback",value:function(t,e,n){switch(t){case"url":this.load(n)}}},{key:"resize",value:function(t){this.renderer&&"function"==typeof this.renderer.resize&&this.renderer.resize(this.puzzle)}},{key:"inputMouseDown",value:function(t){var e=t.composedPath()[0],n=e.getAttribute("data-row"),i=e.getAttribute("data-col");this.puzzle.setFocus(n,i,!0),this.renderer.update(this.puzzle)}},{key:"inputFocus",value:function(t){var e=t.composedPath()[0],n=e.getAttribute("data-row"),i=e.getAttribute("data-col");this.puzzle.setFocus(n,i),this.renderer.update(this.puzzle)}},{key:"clueListItemClick",value:function(t){var e=t.target.closest("li"),n=parseInt(e.getAttribute("data-clue-number")),i=e.getAttribute("data-clue-direction");this.puzzle.focusClue(n,i),this.renderer.update(this.puzzle)}},{key:"buttonClick",value:function(t){switch(t.composedPath()[0].id){case"check-clue-button":this.puzzle.checkClue();break;case"clear-clue-button":this.puzzle.clearClue();break;case"cheat-clue-button":this.puzzle.cheatClue();break;case"check-grid-button":this.puzzle.checkGrid();break;case"clear-grid-button":this.puzzle.clearGrid();break;case"cheat-grid-button":confirm("Are you sure you want to reveal all solutions?")&&this.puzzle.cheatGrid()}this.renderer.update(this.puzzle)}},{key:"keydown",value:function(t){if(!(t.ctrlKey||t.altKey||t.metaKey)){switch(t.code){case"ArrowUp":this.puzzle.direction="down",this.puzzle.moveFocus("up");break;case"ArrowDown":this.puzzle.direction="down",this.puzzle.moveFocus("down");break;case"ArrowLeft":this.puzzle.direction="across",this.puzzle.moveFocus("left");break;case"ArrowRight":this.puzzle.direction="across",this.puzzle.moveFocus("right");break;case"Home":this.puzzle.home();break;case"End":this.puzzle.end();break;case"Backspace":this.puzzle.backspace();break;case"Delete":this.puzzle.setCellValue("");break;case"Escape":this.puzzle.clearFocus()}/^[a-z]$/i.test(t.key)&&(this.puzzle.setCellValue(t.key),t.preventDefault()),this.renderer.update(this.puzzle)}}}],[{key:"observedAttributes",get:function(){return["url"]}}]),u}(p()(HTMLElement));customElements.define("ipuzzler-puzzle",z)}(),function(){"use strict";n.p}()}();
//# sourceMappingURL=ipuzzler.js.map