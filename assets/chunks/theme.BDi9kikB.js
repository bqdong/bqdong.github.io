import{_ as a,r as p,o as e,c as n,a as i,b as o,d as u,e as f,F as m,f as v,t as h,u as g,g as l,h as r}from"./framework.gmiA0OLA.js";const $={},k={class:"md-content"};function b(c,t){const s=p("Content");return e(),n("div",k,[i(s)])}const x=a($,[["render",b]]),y={};function C(c,t){return e(),n("div",null,t[0]||(t[0]=[o("div",{class:"logo"},null,-1),o("nav",{class:"navbar"},[o("ul")],-1),o("div",{class:"separator"},null,-1),o("div",{class:"actions"},null,-1)]))}const D=a(y,[["render",C],["__scopeId","data-v-17a38c87"]]),w=JSON.parse('[{"title":"Hello world","postDate":"2024-12-02 13:41:21","path":"/blog/2024/build-blog-with-vitepress.html"},{"title":"Background for responsive design","postDate":"2024-12-02 13:41:21","path":"/blog/2024/responsive-design.html"}]'),B={class:"post-items-wrapper"},I=["href"],N=u({__name:"Home",setup(c){const t=f(()=>w.sort((s,_)=>s.postDate>_.postDate?-1:0));return(s,_)=>(e(),n("div",B,[(e(!0),n(m,null,v(t.value,d=>(e(),n("div",null,[o("a",{href:d.path},h(d.title),9,I)]))),256))]))}}),F=a(N,[["__scopeId","data-v-d6a6fe6a"]]),H={};function L(c,t){const s=p("Content");return e(),n("div",null,[i(s)])}const R=a(H,[["render",L]]),S={};function V(c,t){return e(),n("div",null,"404")}const A=a(S,[["render",V],["__scopeId","data-v-3a437215"]]),E={class:"wrapper"},J=u({__name:"Layout",setup(c){const{frontmatter:t,page:s}=g();return(_,d)=>(e(),n("div",E,[l(s).isNotFound?(e(),r(A,{key:0})):(e(),n(m,{key:1},[i(D),l(t).home?(e(),r(F,{key:0})):l(t).about?(e(),r(x,{key:1})):(e(),r(R,{key:2}))],64))]))}}),M=a(J,[["__scopeId","data-v-72b2e80d"]]),P={Layout:M,enhanceApp(){}};export{P as R};
