(this["webpackJsonpcovid-19"]=this["webpackJsonpcovid-19"]||[]).push([[0],{40:function(e,t,a){e.exports=a(80)},45:function(e,t,a){},75:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(32),c=a.n(r),o=(a(45),a(13)),u=a(5),i=a(37),s=(a(46),a(15)),m=a.n(s),d=a(39),E=a(16),h=a(33),b=a.n(h),g=a(35),y=a.n(g);a(73);var x=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)([]),s=Object(o.a)(c,2),h=s[0],g=s[1],x=Object(n.useState)(""),p=Object(o.a)(x,2),v=p[0],f=p[1],w=Object(n.useState)(!0),k=Object(o.a)(w,2),T=k[0],j=k[1],C=Object(n.useState)(!1),O=Object(o.a)(C,2),S=O[0],I=O[1];Object(n.useEffect)((function(){m.a.all([m.a.get("https://corona.lmao.ninja/v2/all"),m.a.get("https://corona.lmao.ninja/v2/countries?sort=country")]).then((function(e){r(e[0].data),g(e[1].data),j(!1)})).catch((function(e){console.log(e)}))}),[]);var A=new Date(parseInt(a.updated)).toString(),B=h.filter((function(e){return""!==v?e.country.includes(v):e})).map((function(e,t){return l.a.createElement(u.a,{key:t,bg:"light",text:"dark","class-name":"text-center",style:{margin:"10px"}},l.a.createElement(u.a.Img,{varient:"top",src:e.countryInfo.flag}),l.a.createElement(u.a.Body,null,l.a.createElement(u.a.Title,null,e.country),l.a.createElement(u.a.Text,null,"Cases ",e.cases),l.a.createElement(u.a.Text,null,"Deaths ",e.deaths),l.a.createElement(u.a.Text,null,"Recovered ",e.recovered),l.a.createElement(u.a.Text,null,"Today's cases ",e.todayCase),l.a.createElement(u.a.Text,null,"Today's deaths ",e.todayDeaths),l.a.createElement(u.a.Text,null,"Active ",e.active),l.a.createElement(u.a.Text,null,"Critical ",e.critical)))}));return l.a.createElement("div",{style:{backgroundColor:S?"black":"white",color:S?"white":"black"}},l.a.createElement("br",null),l.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},l.a.createElement(b.a,{size:50,color:"green",loading:T})),l.a.createElement("br",null),l.a.createElement("h2",{style:{textAlign:"center"}},"Covid-19 Live Stats"),l.a.createElement("br",null),l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement(y.a,{defaultChecked:!1,icons:{checked:"\ud83c\udf1c",unchecked:"\ud83c\udf1e"},onChange:function(){I(!S)}})),l.a.createElement("br",null),l.a.createElement(i.a,null,l.a.createElement(u.a,{bg:"secondary",text:"white",className:"text-center",stylemargin:{margin:"10px"}},l.a.createElement(u.a.Body,null,l.a.createElement(u.a.Title,null,"Cases"),l.a.createElement(u.a.Text,null,a.cases)),l.a.createElement(u.a.Footer,null,l.a.createElement("small",null,"Last updated ",A))),l.a.createElement(u.a,{bg:"danger",text:"white",className:"text-center",stylemargin:{margin:"10px"}},l.a.createElement(u.a.Body,null,l.a.createElement(u.a.Title,null,"Death"),l.a.createElement(u.a.Text,null,a.deaths)),l.a.createElement(u.a.Footer,null,l.a.createElement("small",null,"Last updated ",A))),l.a.createElement(u.a,{bg:"success",text:"white",className:"text-center",stylemargin:{margin:"10px"}},l.a.createElement(u.a.Body,null,l.a.createElement(u.a.Title,null,"Recovered"),l.a.createElement(u.a.Text,null,a.recovered)),l.a.createElement(u.a.Footer,null,l.a.createElement("small",null,"Last updated ",A)))),l.a.createElement(E.a,null,l.a.createElement(E.a.Group,{controlId:"formGroupSearch"},l.a.createElement(E.a.Control,{type:"text",placeholder:"Search a country",onChange:function(e){return f(e.target.value)}}))),l.a.createElement(d.a,{queries:[{columns:2,query:"min-width: 500px"},{columns:3,query:"min-width: 1000px"}]},B))};var p=function(){return l.a.createElement("div",{style:{backgroundColor:"white",height:"90vh",textAlign:"center"}},l.a.createElement("br",null),l.a.createElement("h2",null,"About"),l.a.createElement("div",{style:{padding:"20px",backgroundColor:"green",color:"white",margin:"20px",borderRadius:"20px"}},l.a.createElement("h4",null,"Who built this website?"),l.a.createElement("div",{style:{frontsize:"20px"}},"This is created by Nutrifrnd."),l.a.createElement("br",null),l.a.createElement("h4",null,"How to connect?"),l.a.createElement("div",{style:{fronysize:"20px"}},"Go and check our website you will get all details ","",l.a.createElement("a",{href:"https://bit.ly/3c0IzIE",target:"_blank"},"here"),".")))},v=(a(75),a(14));var f=function(){return l.a.createElement("nav",null,l.a.createElement(v.b,{style:{color:"white",textDecoration:"none"},to:"/"},l.a.createElement("div",null,"Nutrifrnd")),l.a.createElement("ul",{className:"nav-links"},l.a.createElement(v.b,{style:{color:"white",textDecoration:"none"},to:"/about"},l.a.createElement("li",null,"About"))))},w=a(6);var k=function(){return l.a.createElement(v.a,null,l.a.createElement("div",null,l.a.createElement(f,null),l.a.createElement(w.c,null,l.a.createElement(w.a,{exact:!0,path:"/",component:x}),l.a.createElement(w.a,{path:"/about",component:p}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[40,1,2]]]);
//# sourceMappingURL=main.68a61983.chunk.js.map