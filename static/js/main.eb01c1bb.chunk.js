(this.webpackJsonpprocesso_seletivo_anima=this.webpackJsonpprocesso_seletivo_anima||[]).push([[0],{13:function(e,a,t){e.exports=t(25)},18:function(e,a,t){},19:function(e,a,t){},20:function(e,a,t){},21:function(e,a,t){},25:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(10),i=t.n(r),o=(t(18),t(1)),s=t(2),c=t(4),d=t(3),m=(t(19),t(20),t(5),t(8)),u=function(e){e.barWidth;return l.a.createElement("div",null,l.a.createElement("div",{className:"employeeWrapper"},l.a.createElement("h3",{className:"employeeName"},e.name),l.a.createElement("p",{className:"employeeInfo"},e.children),l.a.createElement("p",{className:"additionalInfo"},"Ao clicar no bot\xe3o acima, uma caixa de di\xe1logo se abrir\xe1 perguntando quantos reais voc\xea deseja adicionar \xe0 barra de progresso. A barra deve come\xe7ar em R$0 e vai at\xe9 R$200. Ao adicionar um valor, o ret\xe2ngulo na parte direita superior ficar\xe1 verde, enquanto n\xe3o o fizer, ficar\xe1 vermelho."),l.a.createElement("p",{className:"maxValue"},"Max: R$200"),e.green?l.a.createElement(m.a,{animated:!0,now:e.barWidth/2,label:"R$".concat(e.barWidth)}):l.a.createElement(m.a,{animated:!0,now:0})))},v=(t(21),t(7)),p=t.n(v),f=function(e){Object(c.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={listOpen:!1,headerTitle:n.props.title,location:[{id:0,title:"New York",selected:!1,key:"location"},{id:1,title:"Dublin",selected:!1,key:"location"},{id:2,title:"California",selected:!1,key:"location"},{id:3,title:"Istanbul",selected:!1,key:"location"},{id:4,title:"Izmir",selected:!1,key:"location"},{id:5,title:"Oslo",selected:!1,key:"location"}]},n}return Object(s.a)(t,[{key:"handleClickOutside",value:function(){this.setState({listOpen:!1})}},{key:"toggleList",value:function(){this.setState((function(e){return{listOpen:!e.listOpen}}))}},{key:"render",value:function(){var e=this,a=Array.from(this.props.list),t=this.state,n=t.listOpen,r=t.headerTitle;return l.a.createElement("div",{className:"dd-wrapper"},l.a.createElement("div",{className:"dd-header",onClick:function(){return e.toggleList()}},l.a.createElement("div",{className:"dd-header-title"},r),n?l.a.createElement(p.a,{name:"angle-up",size:"2x"}):l.a.createElement(p.a,{name:"angle-down",size:"2x"})),n&&l.a.createElement("ul",{className:"list-unstyled-components"},a.map((function(e){return l.a.createElement("li",{className:"dd-list-item",key:e.id},e.title)}))))}}]),t}(n.Component),E=function(e){Object(c.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={list:[{id:1,title:"First Option"},{id:2,title:"Second Option"},{id:3,title:"Third Option"}]},e}return Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{class:"wrapper"},l.a.createElement("nav",{id:"sidebar"},l.a.createElement("div",{class:"sidebar-header"},l.a.createElement("h4",null,"Processo seletivo"),l.a.createElement("h6",null,"Front-End")),l.a.createElement("ul",{class:"list-unstyled components"},l.a.createElement("li",null,l.a.createElement("a",null,l.a.createElement(f,{title:"Home",list:this.state.list}))),l.a.createElement("li",null,l.a.createElement("a",null,"About")),l.a.createElement("li",null,l.a.createElement("a",null,l.a.createElement(f,{title:"Our Jobs",list:this.state.list}))),l.a.createElement("li",null,l.a.createElement("a",null,"Portfolio")),l.a.createElement("li",null,l.a.createElement("a",null,"Contact")))))}}]),t}(n.Component),g=t(12),h=function(e){Object(c.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={error:null,items:[{id:"",employee_name:"",employee_salary:"",employee_age:"",profie_image:"",value:""}],valuesInserted:[{id:0,value:0,green:!1},{id:1,value:0,green:!1},{id:2,value:0,green:!1},{id:3,value:0,green:!1},{id:4,value:0,green:!1},{id:5,value:0,green:!1},{id:6,value:0,green:!1},{id:7,value:0,green:!1},{id:8,value:0,green:!1},{id:9,value:0,green:!1},{id:10,value:0,green:!1},{id:11,value:0,green:!1},{id:12,value:0,green:!1},{id:13,value:0,green:!1},{id:14,value:0,green:!1},{id:15,value:0,green:!1},{id:16,value:0,green:!1},{id:17,value:0,green:!1},{id:18,value:0,green:!1},{id:19,value:0,green:!1},{id:20,value:0,green:!1},{id:21,value:0,green:!1},{id:22,value:0,green:!1},{id:23,value:0,green:!1}],maxValue:200,creating:!1,idModal:0,firstValue:""},e.catchInfo=function(a){var t=parseInt(a.target.value,10)+parseInt(e.state.valuesInserted[e.state.idModal].value,10);t>200&&(t=200),e.setState({firstValue:t}),console.log("firstvalue:",e.state.firstValue)},e.startCreateEventHandler=function(a){e.setState({creating:!0});var t=parseInt(a,10);e.setState({idModal:t})},e.stopCreateEventHandlerCancel=function(a,t){e.setState({creating:!1})},e.stopCreateEventHandlerConfirm=function(a,t){var n=e.state.valuesInserted.slice();n[e.state.idModal].value=e.state.firstValue,n[e.state.idModal].value>0&&(n[e.state.idModal].green=!0),e.setState({valuesInserted:n}),e.setState({creating:!1})},e.findIdBarWidth=function(a){var t=parseInt(a.id),n=e.state.valuesInserted.find((function(e){return e.id===t-1}));return void 0!==n&&n.value},e.findId=function(a){var t=parseInt(a.id),n=e.state.valuesInserted.find((function(e){return e.id===t-1}));return void 0!==n&&n.green},e}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("http://dummy.restapiexample.com/api/v1/employees").then((function(e){return e.json()})).then((function(a){e.setState({items:a.data})}),(function(a){e.setState({error:a})}))}},{key:"render",value:function(){var e=this,a=this.state,t=a.error,n=a.items;return t?l.a.createElement("div",null,"Error: ",t.message):l.a.createElement("div",{className:"geral"},l.a.createElement(E,null),this.state.creating&&l.a.createElement("div",{className:"divModal"},l.a.createElement("header",{className:"modalHeader"},l.a.createElement("h1",null,"Inserir valor em reais para ",this.state.items[this.state.idModal].employee_name)),l.a.createElement("section",{className:"modalContent"},l.a.createElement("input",{type:"text",onChange:function(a){return e.catchInfo(a)}})),l.a.createElement("section",{className:"modalActions"},l.a.createElement("button",{className:"btnModal",onClick:function(){return e.stopCreateEventHandlerCancel()}},"Cancelar"),l.a.createElement("button",{className:"btnModal",onClick:function(){return e.stopCreateEventHandlerConfirm(e.state.idModal)}},"Confirmar"))),l.a.createElement("div",{className:"container"},console.log("estado criando: ",this.state.creating),l.a.createElement("div",{className:"row mt-5"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("h2",{className:"titulo"},"Pessoas cadastradas e seus valores"),l.a.createElement("div",{className:"employees"},n.map((function(a){return l.a.createElement("div",{className:"row mt-5"},l.a.createElement("div",{className:"row mt-5"},l.a.createElement("div",{className:"col-12"},l.a.createElement(u,{id:a.id,name:a.employee_name,salary:a.employee_salary,age:a.employee_age,profileImage:a.profie_image,barWidth:e.findIdBarWidth(a),idModal:e.state.idModal,green:e.findId(a)},l.a.createElement("div",{class:"row"},l.a.createElement("div",{className:"col-4 offset-8"},e.findId(a)?l.a.createElement("div",{class:"employeeHeaderWithValue"}):l.a.createElement("div",{class:"employeeHeaderWithoutValue"}))),l.a.createElement("h6",null,"Id:",a.id,"  Sal\xe1rio: ",l.a.createElement(g.a,{thousandSeparator:!0,prefix:"R$",value:a.employee_salary,style:{border:"none",background:"#91a2eb",color:"#FFFFFF",width:"9%"}}),"    Idade: ",a.employee_age),l.a.createElement("div",{class:"row"},l.a.createElement("div",{className:"col offset-9"},l.a.createElement("button",{className:"createEventButton",onClick:function(){return e.startCreateEventHandler(a.id-1)}},l.a.createElement("i",{className:"icon+"}," + "),"Adicionar um valor em reais")))))))})))))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[13,1,2]]]);
//# sourceMappingURL=main.eb01c1bb.chunk.js.map