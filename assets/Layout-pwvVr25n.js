import{G as r,a as c,j as n,N as i,L as l,e as o,O as x}from"./index-fyX-0t_3.js";function d(s){return r({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M406.5 399.6C387.4 352.9 341.5 320 288 320H224c-53.5 0-99.4 32.9-118.5 79.6C69.9 362.2 48 311.7 48 256C48 141.1 141.1 48 256 48s208 93.1 208 208c0 55.7-21.9 106.2-57.5 143.6zm-40.1 32.7C334.4 452.4 296.6 464 256 464s-78.4-11.6-110.5-31.7c7.3-36.7 39.7-64.3 78.5-64.3h64c38.8 0 71.2 27.6 78.5 64.3zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-272a40 40 0 1 1 0-80 40 40 0 1 1 0 80zm-88-40a88 88 0 1 0 176 0 88 88 0 1 0 -176 0z"},child:[]}]})(s)}function h(){const s=c(),e={fontWeight:"bold",textDecoration:"underline",color:"#161616"};async function t(){try{await o.signOut(),s("/login")}catch{return null}}return n.jsxs("header",{"aria-label":"primary navigation",children:[n.jsx("a",{href:"#content",className:"skip-nav-link",children:"skip navigation"}),n.jsx("nav",{className:"navbar",role:"navigation",children:n.jsxs("div",{className:"navbar-container container",children:[n.jsx("input",{type:"checkbox","aria-label":"toggle"}),n.jsxs("div",{className:"hamburger-lines",children:[n.jsx("span",{className:"line line1"}),n.jsx("span",{className:"line line2"}),n.jsx("span",{className:"line line3"})]}),n.jsxs("ul",{className:"menu-items",children:[n.jsx("li",{children:n.jsx(i,{to:"/about",style:({isActive:a})=>a?e:null,children:"About"})}),n.jsxs("li",{children:[" ",n.jsx(i,{to:"/host",style:({isActive:a})=>a?e:null,children:"Host"})]}),n.jsx("li",{children:n.jsx(i,{to:"/vans",style:({isActive:a})=>a?e:null,children:"Vans"})}),n.jsx("li",{children:n.jsx(l,{to:"/login",className:"login-link","aria-label":"log in ",children:n.jsx(d,{})})}),n.jsx("li",{children:n.jsx("button",{onClick:t,className:"logOut-btn",children:"Log out"})})]}),n.jsx(l,{className:"site-logo",to:"/Vans-App",children:"#VanLife"})]})})]})}function u(){return n.jsx("footer",{children:"© 2024 #VANLIFE"})}function m(){return n.jsxs("div",{className:"site-wrapper",children:[n.jsx(h,{}),n.jsx("main",{id:"content",children:n.jsx(x,{})}),n.jsx(u,{})]})}export{m as default};
