"use strict";(self.webpackChunkautomaly_com=self.webpackChunkautomaly_com||[]).push([[3608],{63169:(e,a,t)=>{t.r(a),t.d(a,{default:()=>o});t(67294);var r=t(39960),s=t(95999),i=t(10833),c=t(7372),l=t(92503),n=t(85893);function h(e){let{year:a,posts:t}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.Z,{as:"h3",id:a,children:a}),(0,n.jsx)("ul",{children:t.map((e=>(0,n.jsx)("li",{children:(0,n.jsxs)(r.Z,{to:e.metadata.permalink,children:[e.metadata.formattedDate," - ",e.metadata.title]})},e.metadata.date)))})]})}function d(e){let{years:a}=e;return(0,n.jsx)("section",{className:"margin-vert--lg",children:(0,n.jsx)("div",{className:"container",children:(0,n.jsx)("div",{className:"row",children:a.map(((e,a)=>(0,n.jsx)("div",{className:"col col--4 margin-vert--lg",children:(0,n.jsx)(h,{...e})},a)))})})})}function o(e){let{archive:a}=e;const t=(0,s.I)({id:"theme.blog.archive.title",message:"Archive",description:"The page & hero title of the blog archive page"}),r=(0,s.I)({id:"theme.blog.archive.description",message:"Archive",description:"The page & hero description of the blog archive page"}),h=function(e){const a=e.reduce(((e,a)=>{const t=a.metadata.date.split("-")[0],r=e.get(t)??[];return e.set(t,[a,...r])}),new Map);return Array.from(a,(e=>{let[a,t]=e;return{year:a,posts:t}}))}(a.blogPosts);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.d,{title:t,description:r}),(0,n.jsxs)(c.Z,{children:[(0,n.jsx)("header",{className:"hero hero--primary",children:(0,n.jsxs)("div",{className:"container",children:[(0,n.jsx)(l.Z,{as:"h1",className:"hero__title",children:t}),(0,n.jsx)("p",{className:"hero__subtitle",children:r})]})}),(0,n.jsx)("main",{children:h.length>0&&(0,n.jsx)(d,{years:h})})]})]})}}}]);