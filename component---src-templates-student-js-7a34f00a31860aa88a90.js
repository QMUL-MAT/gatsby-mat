(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[801],{5018:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var n=r(7294),a=r(1064);function l(e){var t="header"in e&&null!=e.header,r={};return t&&(r.background="linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("+e.header+")",r.backgroundSize="cover"),n.createElement(a.Z,{brightNavbar:!t,title:e.headTitle||e.pageTitle},n.createElement("div",{id:"page-content"},n.createElement("div",{id:"header-top",className:t?"":"empty",style:r},n.createElement("h1",null,e.pageTitle)),n.createElement("div",{class:"content-container "+(e.grey?"grey":"white")},e.children)))}},4830:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var n=r(7294),a=r(5444),l=r(2347);function c(e){return n.createElement("div",{className:"project_card-module--card--2E_AH"},n.createElement(a.Link,{to:"/projects/"+e.slug},n.createElement(l.G,{image:(0,l.d)(e.image),className:"project_card-module--image--3XudH"}),n.createElement("span",{className:"project_card-module--arrow--zAImz"}),n.createElement("div",{className:"project_card-module--card-content--Jw7Wr"},n.createElement("h2",null,e.title," ",n.createElement("i",null,e.year)),e.student?n.createElement("p",null,n.createElement("strong",null,"Student: "),e.student.frontmatter.name):n.createElement(n.Fragment,null))))}},4280:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return m}});var n=r(7294),a=r(2347),l=r(5018),c=r(4830);function m(e){var t=e.data,r=t.student;return n.createElement(l.Z,{pageTitle:"Student",headTitle:r.frontmatter.name,header:"/images/students_header.jpg"},n.createElement("div",{class:"columns"},n.createElement("div",{class:"column is-one-third text-content"},n.createElement(a.G,{image:(0,a.d)(r.frontmatter.image)}),n.createElement("h1",null,r.frontmatter.name),n.createElement("div",{className:"metadata"},r.frontmatter.alumni?n.createElement("p",null,"MAT Alumni"):n.createElement(n.Fragment,null),n.createElement("p",null,n.createElement("b",null,"Course:")," ",r.frontmatter.course),n.createElement("p",null,n.createElement("b",null,"Year:")," ",r.frontmatter.year),r.frontmatter.website?n.createElement("p",null,n.createElement("b",null,"Website:")," ",n.createElement("a",{href:""+r.frontmatter.website},r.frontmatter.website)):n.createElement(n.Fragment,null)),n.createElement("div",{dangerouslySetInnerHTML:{__html:r.html}})),n.createElement("div",{class:"column is-two-third"},n.createElement("div",{class:"columns is-multiline"},t.projects.nodes.map((function(e){return n.createElement("div",{class:"column is-half"},n.createElement(c.Z,{title:e.frontmatter.title,year:e.frontmatter.year,slug:e.fields.slug,image:e.frontmatter.image}))}))))))}}}]);
//# sourceMappingURL=component---src-templates-student-js-7a34f00a31860aa88a90.js.map