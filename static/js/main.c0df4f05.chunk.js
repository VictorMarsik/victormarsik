(this["webpackJsonpvictormarsik.github.io"]=this["webpackJsonpvictormarsik.github.io"]||[]).push([[0],{39:function(e){e.exports=JSON.parse('{"a":{"url":"https://api.openweathermap.org/data/2.5/weather?q=Ottawa&appid=36ad57b7cf3a59fc2de69a11d40e90a7&units=metric"}}')},48:function(e,n,t){},63:function(e,n,t){"use strict";t.r(n);var i,c,a,r,o,s,l,j,d,b,m,h,p,u,f,O,x,g,y,w,k,v,C,N,E,S,P,I=t(0),z=t.n(I),A=t(14),B=t.n(A),D=(t(48),t(10)),M=t(3),F=t(4),J=(F.a.div(i||(i=Object(M.a)(["\n  background-color: #cccccc;\n  padding-bottom: 2rem;\n"]))),t(9)),W=t(13),H=t(37),L=t.n(H),T=Object(F.a)(W.a)(c||(c=Object(M.a)(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n"]))),G=F.a.p(a||(a=Object(M.a)(["\n  font-size: 3.5rem;\n  font-family: 'Nunito';\n  margin: 0 0 1rem;\n  text-align: center;\n  color: white;\n"]))),K=F.a.img(r||(r=Object(M.a)(["\n  border-radius: 50%;\n  width: 100%;\n"]))),_=F.a.div(o||(o=Object(M.a)(["\n  display: flex;\n  justify-content: center;\n  padding-bottom: 2rem;\n"]))),R=Object(F.a)(L.a)(s||(s=Object(M.a)(["\n  font-size: 2rem;\n  font-family: 'Nunito';\n  margin: 0 0 2rem;\n  text-align: center;\n  color: white;\n"]))),V=t.p+"static/media/profile.2075e436.jpg",q=(t.p,t.p,t.p,t.p,t.p,t.p,t.p+"static/media/blackbox2.016770db.jpg"),U=t.p+"static/media/blackbox4.08659ad7.JPG",X=(t.p,t.p+"static/media/ewb1.c42565e3.png"),Q=t.p+"static/media/ewb2.4a0f1b41.JPG",Y=t(1),Z={name:"Victor D. Marsik",introduction:"Hi! I'm an Electrical Engineer student based in Ottawa",education:{header:"Education",body:[{college:"Carleton University. Department of Electrical and Computer Engineering",degree:["Bachelor of Engineering - Electrical Engineering",Object(Y.jsx)("br",{}),"Minor - Computer Science"],year:"Class of 2023 - Ottawa, Canada"}]},work:{header:"Work Experience",body:[{company:"SigmaPoint Technologies Inc.",title:"Project Manager Engineer Intern",link:"https://www.sigmapoint.com/",description:["Worked done for the X-Ray project ~(July 2020 to July 2021)"]},{company:"SigmaPoint Technologies Inc.",title:"Quality Assurance Engineer Intern",link:"https://optym.com/",description:["Take work done from resume (only from April 2020 to July 2020 (PFMEA)"]},{company:"Health Canada",title:"Consumer Product Safety Engineer Intern",link:"https://www.canada.ca/en/health-canada.html",description:["Worked done at Health Canada Summer 2019"]}]},skills:{header:"Skills",list:["Matlab","Eagle CAD","PSpice","Arena Simulation","AutoDesk CAD","Creo CAD","Xilinth Vivado","HDL Design","FPGA Programming","Git","Java","C++","Python","C","C#","HTML","CSS","Bootstrap","Machine Learning"]},projects:{header:"Projects",body:[{title:"Bicycle Black Box",description:"What was done in the project? take from resume old groupchat",pictures:[U,q]},{title:"Director of Kumvana Fellowship Project, Engineers Without Borders",description:"What is the project? What was done? take from old resumes",pictures:[X,Q]}]}},$=function(){var e=Z.name,n=Z.introduction;return Object(Y.jsx)(T,{children:Object(Y.jsxs)(J.a,{sm:12,md:7,children:[Object(Y.jsx)(G,{children:e}),Object(Y.jsx)(R,{startDelay:1e3,children:n}),Object(Y.jsx)(_,{children:Object(Y.jsx)(J.a,{lg:7,children:Object(Y.jsx)(K,{src:V})})})]})})},ee=t(31),ne=t.n(ee),te=t(38),ie=t(11),ce=t(28),ae=t(39),re=F.a.div(l||(l=Object(M.a)(["\n  display: flex;\n  flex-direction: row;\n  padding: 2rem;\n  justify-content: center;\n"]))),oe=F.a.div(j||(j=Object(M.a)(["\n  display: flex;\n  justify-content: right;\n"]))),se=F.a.p(d||(d=Object(M.a)(["\n  font-size: 1rem;\n  font-family: 'Nunito';\n  margin: 0 0 1rem;\n  text-align: right;\n  color: white;\n"]))),le=t(43),je=function(){var e=Object(I.useState)({}),n=Object(ie.a)(e,2),t=n[0],i=n[1];return Object(I.useEffect)((function(){function e(){return(e=Object(te.a)(ne.a.mark((function e(){var n;return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(ae.a.url);case 2:return n=e.sent,e.next=5,n.json();case 5:n=e.sent,i({city:n.name,temp:n.main.temp,description:n.weather[0].description.toLowerCase().split(" ").map((function(e){return e.charAt(0).toUpperCase()+e.substring(1)})).join(" ")});case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(Y.jsxs)(re,{children:[Object(Y.jsxs)(J.a,{sm:8,children:[Object(Y.jsx)(ce.SocialIcon,{url:"https://www.linkedin.com/in/victor-marsik-07038413b/",target:"_blank",bgColor:"#766f5f",style:{height:60,width:60,marginRight:"1rem"}}),Object(Y.jsx)(ce.SocialIcon,{url:"https://github.com/VictorMarsik",target:"_blank",bgColor:"#766f5f",style:{height:60,width:60,marginRight:"1rem"}}),Object(Y.jsx)(ce.SocialIcon,{url:"mailto:victormarsik@gmail.com",target:"_blank",bgColor:"#766f5f",style:{height:60,width:60}})]}),Object(Y.jsx)(J.a,{sm:4,children:Object(Y.jsx)(le.a,{queries:{small:{maxWidth:575}},children:function(e){return e.small?Object(Y.jsx)(Y.Fragment,{}):Object(Y.jsx)(Y.Fragment,{children:t&&Object(Y.jsxs)(oe,{children:[Object(Y.jsxs)(se,{children:["What's the current weather like in ".concat(t.city,"?"),Object(Y.jsx)("br",{}),Object(Y.jsx)("b",{children:"".concat(t.description,", ").concat(Math.round(t.temp)," ")}),Object(Y.jsx)("span",{children:"\u2109"})]}),Object(Y.jsx)("br",{})]})})}})})]})},de=Object(F.a)(W.a)(b||(b=Object(M.a)(["\n  display: flex;\n  justify-content: center;\n  padding: 0 1rem;\n"]))),be=F.a.p(m||(m=Object(M.a)(["\n  font-size: 2rem;\n  font-family: 'Nunito';\n  font-weight: bold;\n  margin: 0;\n"]))),me=F.a.p(h||(h=Object(M.a)(["\n  font-size: 1rem;\n  font-family: 'Nunito';\n"]))),he=function(){var e=Z.education;return Object(Y.jsx)(de,{children:Object(Y.jsx)(J.a,{md:8,xs:12,children:Object(Y.jsxs)(D.a.Item,{eventKey:"0",children:[Object(Y.jsx)(D.a.Header,{children:Object(Y.jsx)(be,{children:e.header})}),Object(Y.jsx)(D.a.Body,{children:e.body.map((function(e){return Object(Y.jsxs)(me,{children:[e.college,Object(Y.jsx)("br",{}),e.degree,Object(Y.jsx)("br",{}),e.year]})}))})]})})})},pe=Object(F.a)(W.a)(p||(p=Object(M.a)(["\n  display: flex;\n  justify-content: center;\n  padding: 1rem;\n"]))),ue=F.a.p(u||(u=Object(M.a)(["\n  font-size: 2rem;\n  font-family: 'Nunito';\n  font-weight: bold;\n  margin: 0;\n"]))),fe=F.a.div(f||(f=Object(M.a)(["\n  display: flex;\n  justify-content: left;\n  flex-direction: column;\n"]))),Oe=F.a.a(O||(O=Object(M.a)(["\n  font-size: 1.2rem;\n  font-weight: bold;\n  font-family: 'Nunito';\n"]))),xe=F.a.p(x||(x=Object(M.a)(["\n  font-size: 1.1rem;\n  font-family: 'Nunito';\n  margin: 0;\n"]))),ge=F.a.li(g||(g=Object(M.a)(["\n  font-size: 1rem;\n  font-family: 'Nunito';\n"]))),ye=function(){var e=Z.work;return Object(Y.jsx)(pe,{children:Object(Y.jsx)(J.a,{md:8,xs:12,children:Object(Y.jsxs)(D.a.Item,{eventKey:"1",children:[Object(Y.jsx)(D.a.Header,{children:Object(Y.jsx)(ue,{children:e.header})}),Object(Y.jsx)(D.a.Body,{children:e.body.map((function(e){return Object(Y.jsxs)(fe,{children:[Object(Y.jsx)(Oe,{href:e.link,target:"_blank",children:e.company}),Object(Y.jsx)(xe,{children:e.title}),Object(Y.jsx)("ul",{children:e.description.map((function(e){return Object(Y.jsx)(ge,{children:e})}))})]})}))})]})})})},we=t(32),ke=Object(F.a)(W.a)(y||(y=Object(M.a)(["\n  display: flex;\n  justify-content: center;\n  padding: 0 1rem 1rem 1rem;\n"]))),ve=F.a.p(w||(w=Object(M.a)(["\n  font-size: 2rem;\n  font-family: 'Nunito';\n  font-weight: bold;\n  margin: 0;\n"]))),Ce=F.a.div(k||(k=Object(M.a)(["\n  display: flex;\n  justify-content: center;\n  padding-bottom: 1rem;\n"]))),Ne=F.a.div(v||(v=Object(M.a)(["\n  display: flex;\n  justify-content: center;\n"]))),Ee=F.a.p(C||(C=Object(M.a)(["\n  font-size: 1.7rem;\n  font-family: 'Nunito';\n  margin: 0;\n  padding-bottom: 0.5rem;\n  font-weight: bold;\n"]))),Se=F.a.p(N||(N=Object(M.a)(["\n  font-size: 1rem;\n  font-family: 'Nunito';\n  margin: 0;\n  padding-bottom: 0.5rem;\n"]))),Pe=function(e){var n=e.length,t=e.project,i=e.index;return Object(Y.jsx)(Ne,{children:Object(Y.jsxs)(J.a,{md:10,xs:12,children:[Object(Y.jsx)(Ee,{children:t.title}),Object(Y.jsx)(Ce,{children:Object(Y.jsx)(we.a,{interval:5e3,children:t.pictures.map((function(e,n){return Object(Y.jsx)(we.a.Item,{children:Object(Y.jsx)("img",{className:"w-100",src:e,alt:"".concat(n," slide")})})}))})}),Object(Y.jsx)(Se,{children:t.description}),i<n-1?Object(Y.jsx)("hr",{className:"project-divider"}):null]})})},Ie=function(){var e=Z.projects,n=e.body;return Object(Y.jsx)(ke,{children:Object(Y.jsx)(J.a,{md:8,xs:12,children:Object(Y.jsxs)(D.a.Item,{eventKey:"2",children:[Object(Y.jsx)(D.a.Header,{children:Object(Y.jsx)(ve,{children:e.header})}),Object(Y.jsx)(D.a.Body,{children:n.map((function(e,t){return Object(Y.jsx)(Pe,{length:n.length,project:e,index:t})}))})]})})})},ze=t(42),Ae=Object(F.a)(W.a)(E||(E=Object(M.a)(["\n  display: flex;\n  justify-content: center;\n  padding: 0 1rem 1rem 1rem;\n"]))),Be=F.a.p(S||(S=Object(M.a)(["\n  font-size: 2rem;\n  font-family: 'Nunito';\n  font-weight: bold;\n  margin: 0;\n  color: white;\n"]))),De=Object(F.a)(ze.a)(P||(P=Object(M.a)(["\n  margin-right: 0.75rem;\n  color: black;\n"]))),Me=function(){var e=Z.skills;return Object(Y.jsx)(Ae,{children:Object(Y.jsxs)(J.a,{md:8,xs:12,children:[Object(Y.jsx)(Be,{children:e.header}),e.list.map((function(e){return Object(Y.jsx)(De,{pill:!0,className:"myPill",bg:null,children:e})}))]})})};var Fe=function(){return Object(Y.jsxs)("div",{className:"App",children:[Object(Y.jsx)(je,{}),Object(Y.jsx)($,{}),Object(Y.jsxs)(D.a,{children:[Object(Y.jsx)(he,{}),Object(Y.jsx)(ye,{}),Object(Y.jsx)(Ie,{}),Object(Y.jsx)(Me,{})]})]})},Je=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,65)).then((function(n){var t=n.getCLS,i=n.getFID,c=n.getFCP,a=n.getLCP,r=n.getTTFB;t(e),i(e),c(e),a(e),r(e)}))};t(62);B.a.render(Object(Y.jsx)(z.a.StrictMode,{children:Object(Y.jsx)(Fe,{})}),document.getElementById("root")),Je()}},[[63,1,2]]]);
//# sourceMappingURL=main.c0df4f05.chunk.js.map