import{S as z,i as G,s as Q,k as I,l as O,m as P,h as g,n as h,b as L,D as E,E as J,F as ne,o as oe,_ as fe,q as ce,a as H,r as ue,c as M,G as A,H as de,u as me,g as v,d as b,e as T,v as U,f as W,x as K,y as j,z as S,A as B,B as N,I as R,L as X,M as Y,N as re,O as ie,P as se,Q as ae}from"./index.fa95ab18.js";import{t as _e}from"./posts.9bf54a43.js";import{d as C}from"./icon.c348f8dd.js";import{H as he,P as ge,F as pe}from"./footer.77a085ba.js";function Z(s,e,n){const l=s.slice();return l[5]=e[n].depth,l[6]=e[n].title,l[7]=e[n].slug,l}function $(s){let e,n,l=s[6]+"",t,i,r,f,a,c,d;function w(){return s[4](s[7])}return{c(){e=I("li"),n=I("span"),t=ce(l),f=H(),this.h()},l(m){e=O(m,"LI",{id:!0,class:!0});var u=P(e);n=O(u,"SPAN",{dir:!0,id:!0,class:!0});var D=P(n);t=ue(D,l),D.forEach(g),f=M(u),u.forEach(g),this.h()},h(){h(n,"dir","ltr"),h(n,"id",i=`toc-link-${s[7]}`),h(n,"class",r="cursor-pointer border-l-4 border-transparent transition-all hover:border-primary hover:bg-base-content hover:bg-opacity-10 active:bg-primary active:text-primary-content active:font-bold pr-4 "+(s[5]<=2?"py-3":"py-2")),A(n,"pl-4",s[5]<=2),A(n,"pl-8",s[5]===3),A(n,"pl-12",s[5]===4),A(n,"pl-16",s[5]===5),A(n,"pl-20",s[5]===6),h(e,"id",a=`toc-item-${s[7]}`),h(e,"class","flex flex-col")},m(m,u){L(m,e,u),E(e,n),E(n,t),E(e,f),c||(d=de(n,"click",w),c=!0)},p(m,u){s=m,u&1&&l!==(l=s[6]+"")&&me(t,l),u&1&&i!==(i=`toc-link-${s[7]}`)&&h(n,"id",i),u&1&&r!==(r="cursor-pointer border-l-4 border-transparent transition-all hover:border-primary hover:bg-base-content hover:bg-opacity-10 active:bg-primary active:text-primary-content active:font-bold pr-4 "+(s[5]<=2?"py-3":"py-2"))&&h(n,"class",r),u&1&&A(n,"pl-4",s[5]<=2),u&1&&A(n,"pl-8",s[5]===3),u&1&&A(n,"pl-12",s[5]===4),u&1&&A(n,"pl-16",s[5]===5),u&1&&A(n,"pl-20",s[5]===6),u&1&&a!==(a=`toc-item-${s[7]}`)&&h(e,"id",a)},d(m){m&&g(e),c=!1,d()}}}function ve(s){let e,n,l,t=s[0],i=[];for(let r=0;r<t.length;r+=1)i[r]=$(Z(s,t,r));return{c(){e=I("aside"),n=I("nav"),l=I("ul");for(let r=0;r<i.length;r+=1)i[r].c();this.h()},l(r){e=O(r,"ASIDE",{class:!0});var f=P(e);n=O(f,"NAV",{id:!0,"aria-label":!0,dir:!0,class:!0});var a=P(n);l=O(a,"UL",{dir:!0,id:!0});var c=P(l);for(let d=0;d<i.length;d+=1)i[d].l(c);c.forEach(g),a.forEach(g),f.forEach(g),this.h()},h(){h(l,"dir","ltr"),h(l,"id","toc-list-root"),h(n,"id","post-toc"),h(n,"aria-label","TableOfContent"),h(n,"dir","rtl"),h(n,"class","max-h-[calc(100vh-12rem)] overflow-y-hidden hover:overflow-y-auto"),h(e,"class","sticky top-16 py-8")},m(r,f){L(r,e,f),E(e,n),E(n,l);for(let a=0;a<i.length;a+=1)i[a]&&i[a].m(l,null)},p(r,[f]){if(f&1){t=r[0];let a;for(a=0;a<t.length;a+=1){const c=Z(r,t,a);i[a]?i[a].p(c,f):(i[a]=$(c),i[a].c(),i[a].m(l,null))}for(;a<i.length;a+=1)i[a].d(1);i.length=t.length}},i:J,o:J,d(r){r&&g(e),ne(i,r)}}}function be(s,e,n){let{toc:l}=e,t=[],i=!0,r=[];oe(()=>{if(window.screen.availWidth>=1280){const a=new IntersectionObserver(d=>d.forEach(w=>w.isIntersecting?t.push(w.target.id):n(1,t=t.filter(m=>m!==w.target.id))),{rootMargin:"-64px 0px 0px 0px"}),c=new IntersectionObserver(d=>n(2,i=d[0].isIntersecting));Array.from(document.querySelectorAll("main h2, main h3, main h4, main h5, main h6")).forEach(d=>a.observe(d)),c.observe(document.getElementsByTagName("main")[0])}}),fe(()=>{typeof headingsObserver<"u"&&headingsObserver.disconnect(),typeof articleObserver<"u"&&articleObserver.disconnect()});const f=a=>document.getElementById(a).scrollIntoView({behavior:"smooth"});return s.$$set=a=>{"toc"in a&&n(0,l=a.toc)},s.$$.update=()=>{s.$$.dirty&2&&t.length>0&&n(3,r=t),s.$$.dirty&4&&i===!1&&n(3,r=[]),s.$$.dirty&9&&r&&l.forEach(a=>{var c,d;return r.includes(a.slug)?(c=document.getElementById(`toc-link-${a.slug}`))==null?void 0:c.classList.add("!border-accent"):(d=document.getElementById(`toc-link-${a.slug}`))==null?void 0:d.classList.remove("!border-accent")})},[l,t,i,r,f]}class ye extends z{constructor(e){super(),G(this,e,be,ve,Q,{toc:0})}}function ee(s,e,n){const l=s.slice();return l[2]=e[n],l}function we(s){let e,n,l=Object.values(s[1]),t=[];for(let r=0;r<l.length;r+=1)t[r]=te(ee(s,l,r));const i=r=>b(t[r],1,1,()=>{t[r]=null});return{c(){for(let r=0;r<t.length;r+=1)t[r].c();e=T()},l(r){for(let f=0;f<t.length;f+=1)t[f].l(r);e=T()},m(r,f){for(let a=0;a<t.length;a+=1)t[a]&&t[a].m(r,f);L(r,e,f),n=!0},p(r,f){if(f&3){l=Object.values(r[1]);let a;for(a=0;a<l.length;a+=1){const c=ee(r,l,a);t[a]?(t[a].p(c,f),v(t[a],1)):(t[a]=te(c),t[a].c(),v(t[a],1),t[a].m(e.parentNode,e))}for(U(),a=l.length;a<t.length;a+=1)i(a);W()}},i(r){if(!n){for(let f=0;f<l.length;f+=1)v(t[f]);n=!0}},o(r){t=t.filter(Boolean);for(let f=0;f<t.length;f+=1)b(t[f]);n=!1},d(r){ne(t,r),r&&g(e)}}}function te(s){let e,n,l;var t=s[2];function i(r){return{props:{post:r[0]}}}return t&&(e=K(t,i(s))),{c(){e&&j(e.$$.fragment),n=T()},l(r){e&&S(e.$$.fragment,r),n=T()},m(r,f){e&&B(e,r,f),L(r,n,f),l=!0},p(r,f){const a={};if(f&1&&(a.post=r[0]),t!==(t=r[2])){if(e){U();const c=e;b(c.$$.fragment,1,0,()=>{N(c,1)}),W()}t?(e=K(t,i(r)),j(e.$$.fragment),v(e.$$.fragment,1),B(e,n.parentNode,n)):e=null}else t&&e.$set(a)},i(r){l||(e&&v(e.$$.fragment,r),l=!0)},o(r){e&&b(e.$$.fragment,r),l=!1},d(r){r&&g(n),e&&N(e,r)}}}function ke(s){let e,n=Object.keys(s[1]).length,l,t=n&&we(s);return{c(){e=I("div"),t&&t.c(),this.h()},l(i){e=O(i,"DIV",{class:!0});var r=P(e);t&&t.l(r),r.forEach(g),this.h()},h(){h(e,"class","sticky top-24 hidden xl:flex flex-col gap-4 w-fit h-[calc(100vh-12rem)] ml-auto mr-8 my-8 justify-center")},m(i,r){L(i,e,r),t&&t.m(e,null),l=!0},p(i,[r]){n&&t.p(i,r)},i(i){l||(v(t),l=!0)},o(i){b(t),l=!1},d(i){i&&g(e),t&&t.d()}}}function Ee(s,e,n){let{post:l}=e;const t=Object.assign({});return s.$$set=i=>{"post"in i&&n(0,l=i.post)},[l,t]}class Ie extends z{constructor(e){super(),G(this,e,Ee,ke,Q,{post:0})}}function Oe(s){let e,n;return e=new Ie({props:{post:s[0]}}),{c(){j(e.$$.fragment)},l(l){S(e.$$.fragment,l)},m(l,t){B(e,l,t),n=!0},p(l,t){const i={};t&1&&(i.post=l[0]),e.$set(i)},i(l){n||(v(e.$$.fragment,l),n=!0)},o(l){b(e.$$.fragment,l),n=!1},d(l){N(e,l)}}}function le(s){let e,n,l;return n=new ye({props:{toc:s[0].toc}}),{c(){e=I("div"),j(n.$$.fragment),this.h()},l(t){e=O(t,"DIV",{class:!0});var i=P(e);S(n.$$.fragment,i),i.forEach(g),this.h()},h(){h(e,"class","h-full hidden xl:block")},m(t,i){L(t,e,i),B(n,e,null),l=!0},p(t,i){const r={};i&1&&(r.toc=t[0].toc),n.$set(r)},i(t){l||(v(n.$$.fragment,t),l=!0)},o(t){b(n.$$.fragment,t),l=!1},d(t){t&&g(e),N(n)}}}function Pe(s){let e;const n=s[1].default,l=re(n,s,s[2],null);return{c(){l&&l.c()},l(t){l&&l.l(t)},m(t,i){l&&l.m(t,i),e=!0},p(t,i){l&&l.p&&(!e||i&4)&&ie(l,n,t,t[2],e?ae(n,t[2],i,null):se(t[2]),null)},i(t){e||(v(l,t),e=!0)},o(t){b(l,t),e=!1},d(t){l&&l.d(t)}}}function De(s){let e,n,l,t,i,r,f,a,c,d,w,m,u,D,k,V;e=new he({props:{post:s[0]}});let y=Oe(s),_=s[0].toc&&le(s);return u=new ge({props:{post:s[0],$$slots:{default:[Pe]},$$scope:{ctx:s}}}),k=new pe({props:{sticky:!0}}),{c(){j(e.$$.fragment),n=H(),l=I("div"),t=I("div"),y&&y.c(),f=H(),a=I("div"),_&&_.c(),w=H(),m=I("div"),j(u.$$.fragment),D=H(),j(k.$$.fragment),this.h()},l(o){S(e.$$.fragment,o),n=M(o),l=O(o,"DIV",{class:!0});var p=P(l);t=O(p,"DIV",{class:!0});var F=P(t);y&&y.l(F),F.forEach(g),f=M(p),a=O(p,"DIV",{class:!0});var q=P(a);_&&_.l(q),q.forEach(g),w=M(p),m=O(p,"DIV",{class:!0});var x=P(m);S(u.$$.fragment,x),D=M(x),S(k.$$.fragment,x),x.forEach(g),p.forEach(g),this.h()},h(){h(t,"class","flex-1 w-full order-first ease-out transform mx-auto xl:mr-0 xl:ml-0"),h(a,"class","flex-1 w-full xl:order-last ease-out transform mx-auto xl:ml-0 xl:mr-0"),h(m,"class","flex-none w-full max-w-screen-md mx-auto xl:mx-0"),h(l,"class","flex flex-col flex-nowrap justify-center xl:flex-row xl:flex-wrap")},m(o,p){B(e,o,p),L(o,n,p),L(o,l,p),E(l,t),y&&y.m(t,null),E(l,f),E(l,a),_&&_.m(a,null),E(l,w),E(l,m),B(u,m,null),E(m,D),B(k,m,null),V=!0},p(o,[p]){const F={};p&1&&(F.post=o[0]),e.$set(F),y.p(o,p),o[0].toc?_?(_.p(o,p),p&1&&v(_,1)):(_=le(o),_.c(),v(_,1),_.m(a,null)):_&&(U(),b(_,1,1,()=>{_=null}),W());const q={};p&1&&(q.post=o[0]),p&4&&(q.$$scope={dirty:p,ctx:o}),u.$set(q)},i(o){V||(v(e.$$.fragment,o),v(y),R(()=>{V&&(r&&r.end(1),i=X(t,C,{x:25,duration:300,delay:500}),i.start())}),v(_),R(()=>{V&&(d&&d.end(1),c=X(a,C,{x:-25,duration:300,delay:500}),c.start())}),v(u.$$.fragment,o),v(k.$$.fragment,o),V=!0)},o(o){b(e.$$.fragment,o),b(y),i&&i.invalidate(),r=Y(t,C,{x:25,duration:300}),b(_),c&&c.invalidate(),d=Y(a,C,{x:-25,duration:300}),b(u.$$.fragment,o),b(k.$$.fragment,o),V=!1},d(o){N(e,o),o&&g(n),o&&g(l),y&&y.d(),o&&r&&r.end(),_&&_.d(),o&&d&&d.end(),N(u),N(k)}}}function Ve(s,e,n){let{$$slots:l={},$$scope:t}=e,{post:i}=e;return s.$$set=r=>{"post"in r&&n(0,i=r.post),"$$scope"in r&&n(2,t=r.$$scope)},[i,l,t]}class Ae extends z{constructor(e){super(),G(this,e,Ve,De,Q,{post:0})}}function je(s){let e;const n=s[13].default,l=re(n,s,s[14],null);return{c(){l&&l.c()},l(t){l&&l.l(t)},m(t,i){l&&l.m(t,i),e=!0},p(t,i){l&&l.p&&(!e||i&16384)&&ie(l,n,t,t[14],e?ae(n,t[14],i,null):se(t[14]),null)},i(t){e||(v(l,t),e=!0)},o(t){b(l,t),e=!1},d(t){l&&l.d(t)}}}function Be(s){let e,n;return e=new Ae({props:{post:s[0],$$slots:{default:[je]},$$scope:{ctx:s}}}),{c(){j(e.$$.fragment)},l(l){S(e.$$.fragment,l)},m(l,t){B(e,l,t),n=!0},p(l,[t]){const i={};t&16384&&(i.$$scope={dirty:t,ctx:l}),e.$set(i)},i(l){n||(v(e.$$.fragment,l),n=!0)},o(l){b(e.$$.fragment,l),n=!1},d(l){N(e,l)}}}function Ne(s,e,n){let{$$slots:l={},$$scope:t}=e,{path:i}=e,{slug:r}=e,{toc:f}=e,{created:a}=e,{updated:c}=e,{published:d}=e,{summary:w}=e,{tags:m}=e,{flags:u}=e,{title:D}=e,{image:k}=e,{in_reply_to:V}=e,y={path:i,slug:r,toc:f,created:a,updated:c,published:d,summary:w,tags:m,flags:u,title:D,image:k,in_reply_to:V},_={type:_e(y),...y};return s.$$set=o=>{"path"in o&&n(1,i=o.path),"slug"in o&&n(2,r=o.slug),"toc"in o&&n(3,f=o.toc),"created"in o&&n(4,a=o.created),"updated"in o&&n(5,c=o.updated),"published"in o&&n(6,d=o.published),"summary"in o&&n(7,w=o.summary),"tags"in o&&n(8,m=o.tags),"flags"in o&&n(9,u=o.flags),"title"in o&&n(10,D=o.title),"image"in o&&n(11,k=o.image),"in_reply_to"in o&&n(12,V=o.in_reply_to),"$$scope"in o&&n(14,t=o.$$scope)},[_,i,r,f,a,c,d,w,m,u,D,k,V,l,t]}class He extends z{constructor(e){super(),G(this,e,Ne,Be,Q,{path:1,slug:2,toc:3,created:4,updated:5,published:6,summary:7,tags:8,flags:9,title:10,image:11,in_reply_to:12})}}export{He as P};
