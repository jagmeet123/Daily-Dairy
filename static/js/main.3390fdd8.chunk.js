(this.webpackJsonpauth=this.webpackJsonpauth||[]).push([[0],{43:function(e,t,s){},64:function(e,t,s){},65:function(e,t,s){},66:function(e,t,s){},67:function(e,t,s){},68:function(e,t,s){},69:function(e,t,s){"use strict";s.r(t);var n=s(2),c=s(25),a=s.n(c),i=s(22),l=s.n(i),o=s(24),r=s(16),j=s(18),d=s(12),b=s(26);s(53),s(54);b.a.initializeApp({apiKey:"AIzaSyAjpad3ovQyrAAtCI1ev3EZ5rcACYT0HMg",authDomain:"anonymous-69946.firebaseapp.com",projectId:"anonymous-69946",storageBucket:"anonymous-69946.appspot.com",messagingSenderId:"79270649652",appId:"1:79270649652:web:c6aa387e295c9eac738f61"});var u=b.a.firestore(),h=(b.a.auth(),new b.a.auth.GoogleAuthProvider,b.a,s(3)),O=s(27),x=(s(64),function(e){e.handleUser;var t=e.user,s=e.email;e.setEmail,e.password,e.setPassword,e.SignInOrSignUp,e.setInUp;return Object(h.jsxs)("nav",{class:"navbar navbar-expand-lg navbar-dark bg-secondary",children:[Object(h.jsx)(j.b,{class:"navbar-brand",to:"/",children:"Navbar"}),Object(h.jsx)("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(h.jsx)("span",{class:"navbar-toggler-icon"})}),Object(h.jsxs)("div",{class:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(h.jsxs)("ul",{class:"navbar-nav mr-auto",children:[Object(h.jsx)("li",{class:"nav-item active",children:Object(h.jsxs)(j.b,{class:"nav-link",to:t?"/home":"/login",children:[Object(h.jsx)("span",{children:"Home"})," ",Object(h.jsx)("span",{class:"sr-only"})]})}),Object(h.jsx)("li",{class:"nav-item",children:Object(h.jsx)(j.b,{class:"nav-link",to:"/allPosts",children:Object(h.jsx)("span",{children:"All Posts"})})}),Object(h.jsx)("div",{class:"nav-item",className:"username",children:Object(h.jsx)("p",{children:t?Object(h.jsx)("p",{children:"Welcome: "+s.split("@")[0]}):""})})]}),t?Object(h.jsxs)("form",{class:"form-inline my-2 my-lg-0",children:[Object(h.jsx)("input",{class:"form-control mr-sm-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(h.jsx)("button",{class:"btn btn-outline-success my-2 my-sm-0",type:"submit",children:"Search"})]}):Object(h.jsx)("button",{className:"mind",children:"What's On Your mind?"})]})]})}),p=(s(43),s(72)),m=function(){return Object(h.jsx)("div",{className:"slider123",children:Object(h.jsxs)(p.a,{children:[Object(h.jsxs)(p.a.Item,{children:[Object(h.jsx)("img",{className:"d-block w-100",src:"https://mdbootstrap.com/img/Photos/Slides/img%20(62).jpg",alt:"Second slide"}),Object(h.jsx)(p.a.Caption,{children:Object(h.jsx)("h3",{children:"Life is what happens when you're busy making other plans.\u201d \u2014 John Lennon."})})]}),Object(h.jsxs)(p.a.Item,{children:[Object(h.jsx)("img",{className:"d-block w-100",src:"https://mdbootstrap.com/img/Photos/Slides/img%20(69).jpg",alt:"First slide"}),Object(h.jsx)(p.a.Caption,{children:Object(h.jsx)("h3",{children:"\u201c Get busy living or get busy dying.\u201d"})})]}),Object(h.jsxs)(p.a.Item,{children:[Object(h.jsx)("img",{className:"d-block w-100",src:"https://mdbootstrap.com/img/Photos/Slides/img%20(67).jpg",alt:"Third slide"}),Object(h.jsx)(p.a.Caption,{children:Object(h.jsx)("h3",{children:"\u201c You only live once, but if you do it right, once is enough.\u201d "})})]})]})})},g=s(73),v=s(71);s(65);var f=function(e){console.log(e.modalVisible),e.setPosts;var t=Object(n.useState)(null),s=Object(r.a)(t,2),c=s[0],a=s[1],i=Object(n.useState)(null),l=Object(r.a)(i,2),o=l[0],j=l[1];return Object(h.jsxs)("div",{className:"modal123 ".concat(e.modalVisible?"":"hide"),children:[Object(h.jsx)("div",{className:"heading",children:Object(h.jsx)("p",{children:"CREATE POST"})}),Object(h.jsx)("button",{className:"ModalClose",onClick:function(){e.setModalVisible(!1)},children:"CLOSE"}),Object(h.jsx)("button",{className:"ModalClose",onClick:function(){console.log("save"),u.collection("posts").add({index:c,Body:o,email:e.email}),e.setModalVisible(!1)},children:"SAVE"}),Object(h.jsxs)("div",{className:"",children:[Object(h.jsx)("p",{children:"Blog Number:"}),Object(h.jsx)("input",{onChange:function(e){return a(e.currentTarget.value)}})]}),Object(h.jsx)("div",{children:"What's On Your Mind?"}),Object(h.jsx)("textarea",{onChange:function(e){return j(e.currentTarget.value)},className:"mindModal"})]})},S=function(e){var t=e.handleUser,s=e.user,c=e.email,a=e.setEmail,i=(e.password,e.setPassword),j=(e.hasAccount,e.setHasAccount),b=Object(n.useState)([]),p=Object(r.a)(b,2),S=p[0],y=p[1],N=Object(n.useState)(!1),w=Object(r.a)(N,2),I=w[0],P=w[1];return Object(n.useEffect)((function(){(function(){var t=Object(o.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.collection("posts").orderBy("index","asc").onSnapshot((function(t){var s=[];t.forEach((function(t){t.data().email==e.email&&s.push({id:t.id,data:t.data()}),console.log(t)})),y(s)}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]),Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{children:Object(h.jsx)(x,{email:e.email,user:s})}),e.user?Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:"container123",children:[Object(h.jsx)("div",{children:Object(h.jsx)(m,{})}),Object(h.jsxs)("div",{className:"posts123",children:[Object(h.jsx)("div",{className:"newPost",children:Object(h.jsx)("button",{onClick:function(){P(!0)},children:"Add Post"})}),1==I?Object(h.jsx)(f,{modalVisible:!0,setModalVisible:P,email:c,setPosts:y,AllPosts:S}):"",S.map((function(e){return Object(h.jsx)("div",{className:"posts",children:Object(h.jsxs)(g.a,{children:[Object(h.jsxs)(g.a.Header,{as:"h5",children:["Blog-",e.data.index]}),Object(h.jsxs)(g.a.Body,{children:[Object(h.jsx)(g.a.Text,{children:e.data.Body}),Object(h.jsx)(v.a,{variant:"primary",children:"Go somewhere"})]})]})},e.data.index)}))]})]}),Object(h.jsx)("button",{className:"signOut123",onClick:function(){O.a.auth().signOut().then((function(){console.log("Succesfully logged out.."),t(null),a(null),i(null),j(null)})).catch((function(){console.log("errow while log out")}))},children:"Sign Out"})]}):Object(h.jsx)(d.a,{to:"/login"})]})},y=(s(66),function(){return Object(h.jsxs)("div",{className:"abc",children:[Object(h.jsx)("div",{children:Object(h.jsx)(x,{})}),Object(h.jsxs)("div",{className:"blogContainer",children:[Object(h.jsxs)("div",{className:"blogContainerData",children:[Object(h.jsx)("p",{children:"BLOGS"}),Object(h.jsx)("span",{children:"Blogging is just writing \u2014 writing using a particularly efficient type of publishing technology."})]}),Object(h.jsx)("button",{children:Object(h.jsx)(j.b,{to:"/login",className:"btn",children:" Login "})})]})]})}),N=(s(67),function(e){var t=e.handleUser,s=e.user,n=e.email,c=e.setEmail,a=e.password,i=e.setPassword,l=e.SignInOrSignUp,o=e.setInUp;return console.log("email:",n,a),Object(h.jsxs)("div",{className:"Login-box",children:[s?Object(h.jsx)(d.a,{to:"/home"}):"",Object(h.jsx)(x,{}),Object(h.jsx)("div",{children:Object(h.jsx)("section",{className:"loginemail",children:Object(h.jsxs)("div",{className:"loginContainer",children:[Object(h.jsx)("h1",{children:"SIGN UP LOGIN"}),Object(h.jsxs)("div",{className:"email",children:[Object(h.jsx)("label",{children:"UserName"}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"text",autoFocus:!0,required:!0,value:n||"",onChange:function(e){c(e.currentTarget.value)}})]}),Object(h.jsx)("br",{}),Object(h.jsxs)("div",{className:"password",children:[Object(h.jsx)("label",{children:"Password"}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"password",autoFocus:!0,required:!0,value:a||"",onChange:function(e){return i(e.currentTarget.value)}})]}),Object(h.jsx)("div",{className:"Login",children:Object(h.jsx)("button",{className:"LogIn-btn",onClick:function(e){"signup"==l?function(e){e.preventDefault(),console.log(n),O.a.auth().createUserWithEmailAndPassword(n,a).then((function(e){console.log(e),t({email:n,password:a})})).catch((function(e){console.log(e)}))}(e):function(e){e.preventDefault(),console.log(n),O.a.auth().signInWithEmailAndPassword(n,a).then((function(e){console.log(e),t({email:n,password:a})})).catch((function(e){console.log(e)}))}(e)},children:"signup"==l?"SIGN UP":"SIGN IN"})}),Object(h.jsx)("div",{className:"signIN",children:Object(h.jsxs)("p",{children:["You Have An Account? ",Object(h.jsx)("button",{onClick:function(){o("signup"==l?"signin":"signup")},children:Object(h.jsx)("span",{children:"signup"==l?"SIGN IN":"SIGN UP"})})]})})]})})})]})}),w=(s(68),function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),s=t[0],c=t[1];return Object(n.useEffect)((function(){(function(){var e=Object(o.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.collection("posts").onSnapshot((function(e){var t=[];e.forEach((function(e){console.log(e.data()),t.push({index:e.data().index,Body:e.data().Body,email:e.data().email})})),c(t)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{children:"All POSTS"}),Object(h.jsx)("div",{children:Object(h.jsx)(x,{})}),Object(h.jsx)("div",{className:"containerAllPosts",children:s.map((function(e){return Object(h.jsx)("div",{className:"posts",children:Object(h.jsxs)(g.a,{children:[Object(h.jsxs)(g.a.Header,{as:"h5",children:["Blog-",e.index]}),Object(h.jsxs)(g.a.Body,{children:[Object(h.jsx)(g.a.Title,{children:"Special title treatment"}),Object(h.jsx)(g.a.Text,{children:e.Body}),Object(h.jsx)(v.a,{variant:"primary",children:"Go somewhere"})]})]})},e.index)}))})]})});var I=function(){var e=Object(n.useState)(null),t=Object(r.a)(e,2),s=t[0],c=t[1],a=Object(n.useState)(null),i=Object(r.a)(a,2),b=i[0],O=i[1],x=Object(n.useState)(null),p=Object(r.a)(x,2),m=p[0],g=p[1],v=Object(n.useState)(null),f=Object(r.a)(v,2),I=(f[0],f[1],Object(n.useState)(null)),P=Object(r.a)(I,2),C=(P[0],P[1],Object(n.useState)(!1)),A=Object(r.a)(C,2),k=(A[0],A[1],Object(n.useState)("signin")),E=Object(r.a)(k,2),U=E[0],B=E[1];return Object(n.useEffect)((function(){(function(){var e=Object(o.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.collection("posts").limit(3).orderBy("index","asc").get();case 2:e.sent.forEach((function(e){console.log(e.data().Body)}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),console.log(U),Object(h.jsx)("div",{children:Object(h.jsx)(j.a,{children:Object(h.jsxs)(d.d,{children:[Object(h.jsx)(d.b,{path:"/home",children:Object(h.jsx)(S,{user:s,handleUser:c,email:b,setEmail:O,password:m,setPassword:g,SignInOrSignUp:U,setInUp:B})}),Object(h.jsx)(d.b,{path:"/allPosts",children:Object(h.jsx)(w,{})}),Object(h.jsx)(d.b,{path:"/login",children:Object(h.jsx)(N,{handleUser:c,user:s,email:b,setEmail:O,password:m,setPassword:g,SignInOrSignUp:U,setInUp:B})}),Object(h.jsx)(d.b,{path:"/",children:Object(h.jsx)(y,{})})]})})})};a.a.render(Object(h.jsx)(I,{}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.3390fdd8.chunk.js.map