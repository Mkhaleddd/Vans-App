import{G as E,r as a,a as F,j as e,N as L,b as p,s as k,c as I,d as M,e as i,f as N}from"./index-U32W3gIB.js";function m(l){return E({tag:"svg",attr:{version:"1.1",x:"0px",y:"0px",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"path",attr:{fill:"#FFC107",d:`M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12\r
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24\r
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z`},child:[]},{tag:"path",attr:{fill:"#FF3D00",d:`M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657\r
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z`},child:[]},{tag:"path",attr:{fill:"#4CAF50",d:`M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36\r
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z`},child:[]},{tag:"path",attr:{fill:"#1976D2",d:`M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571\r
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z`},child:[]}]})(l)}function W({title:l,login:s,description:x,navText:v}){const[g,f]=a.useState(""),[c,j]=a.useState(""),[C,w]=a.useState(""),n=F(),[u,d]=a.useState(""),[r,o]=a.useState(!1);async function b(){const t=new p;k(i,t).then(async()=>{n("/host")})}async function y(){const t=new p;I(i,t).then(async()=>{n("/host")})}const S=async t=>{if(t.preventDefault(),c!=C){d("Passwords are not matched");return}try{o(!0),await M(i,g,c),n("/login")}catch(h){o(!1),d(h.message)}},P=async t=>{t.preventDefault();try{o(!0),await N(i,g,c),n("/host")}catch(h){o(!1),d(h.message)}};return e.jsxs("div",{className:"login-container",children:[e.jsx("h1",{children:l}),u&&e.jsx("h3",{className:"red","aria-live":"assertive",children:u}),e.jsxs("form",{className:"login-form",onSubmit:s?P:S,children:[e.jsx("input",{name:"email",type:"email",placeholder:"Email address",onChange:t=>f(t.target.value),required:!0}),e.jsx("input",{name:"password",type:"password",placeholder:"Password",onChange:t=>j(t.target.value),required:!0}),!s&&e.jsx("input",{name:"match-password",type:"password",placeholder:"Confirm Your Password",onChange:t=>w(t.target.value),required:!0}),s&&e.jsx("button",{disabled:r,children:r?"logging in":"Log In"}),!s&&e.jsx("button",{disabled:r,children:r?"Sumbitting":"Sumbit "}),e.jsx("p",{children:x}),e.jsx(L,{to:s?"/signup":"/login",children:v}),s&&e.jsx(e.Fragment,{children:e.jsxs("div",{children:["or Contiune With",e.jsxs("button",{id:"google-signin-desktop",onClick:b,children:[" ",e.jsx(m,{}),"oogle"]}),e.jsxs("button",{id:"google-signin-mobile",onClick:y,children:[" ",e.jsx(m,{}),"oogle"]})]})})]})]})}export{W as S};
