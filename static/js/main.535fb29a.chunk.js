(this.webpackJsonpuntitled=this.webpackJsonpuntitled||[]).push([[0],{19:function(t,e,n){},28:function(t,e,n){},29:function(t,e,n){},32:function(t,e,n){},38:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n.n(c),i=n(21),s=n.n(i),j=(n(28),n(29),n(1));var a=function(){return Object(j.jsx)("div",{})},o=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,39)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,i=e.getLCP,s=e.getTTFB;n(t),c(t),r(t),i(t),s(t)}))},u=n(12),b=n(2),h=n(7),l=n(8),O=n(10),d=n(9),p=function(t){Object(O.a)(n,t);var e=Object(d.a)(n);function n(){return Object(h.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(j.jsx)("div",{children:Object(j.jsx)("div",{children:Object(j.jsx)("h1",{children:"About"})})})}}]),n}(c.Component),f=function(t){Object(O.a)(n,t);var e=Object(d.a)(n);function n(){return Object(h.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(j.jsx)("div",{children:Object(j.jsx)("div",{children:Object(j.jsx)("h1",{children:"Error"})})})}}]),n}(c.Component),x=n(16),v=n.n(x),m=n(22),g=(n(19),function(t){Object(O.a)(n,t);var e=Object(d.a)(n);function n(){return Object(h.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(j.jsx)("div",{children:Object(j.jsx)("a",{href:this.props.url,target:"_blank",children:Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("img",{src:this.props.src}),Object(j.jsx)("h2",{children:this.props.title})]})})})}}]),n}(c.Component)),y=(n(32),function(t){Object(O.a)(n,t);var e=Object(d.a)(n);function n(){return Object(h.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(j.jsx)("div",{children:Object(j.jsxs)("nav",{className:"navcontainer",children:[Object(j.jsx)(u.b,{to:"/",children:Object(j.jsxs)("h1",{children:["|\xa0 ",Object(j.jsx)("span",{children:"home"})," \xa0 "]})}),Object(j.jsx)(u.b,{to:"/projects",children:Object(j.jsxs)("h1",{children:["|\xa0 ",Object(j.jsx)("span",{children:"projects"})," \xa0|"]})}),Object(j.jsx)(u.b,{to:"/about",children:Object(j.jsxs)("h1",{children:["\xa0 ",Object(j.jsx)("span",{children:"about"})," \xa0|"]})})]})})}}]),n}(c.Component)),k=function(t){Object(O.a)(n,t);var e=Object(d.a)(n);function n(t){var c;return Object(h.a)(this,n),(c=e.call(this,t)).state={projects:[]},c}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=Object(m.a)(v.a.mark((function t(){var e=this;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.github.com/users/ColeHoffs/repos").then((function(t){return t.json()})).then((function(t){return t.filter((function(t){return"include"===t.description}))})).then((function(t){for(var n=[],c=0;c<t.length;c++){console.log(t);var r=t[c].name,i="https://raw.githubusercontent.com/ColeHoffs/"+t[c].name+"/main/thumbnail.PNG",s=t[c].html_url;n.push(Object(j.jsx)(g,{src:i,title:r,url:s},c))}e.setState({projects:n})}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return Object(j.jsx)("div",{children:Object(j.jsx)("div",{className:"container",children:this.state.projects})})}}]),n}(c.Component);s.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(u.a,{children:Object(j.jsxs)("div",{children:[Object(j.jsx)(y,{}),Object(j.jsxs)(b.c,{children:[Object(j.jsx)(b.a,{exact:!0,path:"/projects",component:Object(b.f)(k)}),Object(j.jsx)(b.a,{exact:!0,path:"/about",component:Object(b.f)(p)}),Object(j.jsx)(b.a,{exact:!0,path:"/",component:Object(b.f)(a)}),Object(j.jsx)(b.a,{component:f})]})]})})}),document.getElementById("root")),o()}},[[38,1,2]]]);
//# sourceMappingURL=main.535fb29a.chunk.js.map