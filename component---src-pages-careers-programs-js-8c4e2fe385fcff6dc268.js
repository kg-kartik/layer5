(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{QbOQ:function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),r=t.n(a),i=t("vOnD"),o=t("Bl7J"),l=t("vrFN"),s=t("mvsK"),c=t("iJo/"),m=t("Z2HG"),u=t("DZth"),p=t("WL7g");n.default=function(){return r.a.createElement(i.a,{theme:p.a},r.a.createElement(o.a,null,r.a.createElement(u.a,null),r.a.createElement(l.a,{title:"Open Source Internship Programs",description:"The Service Mesh Community at Layer5 - Learn, Share, Engage. Join the largest collection of service mesh projects and their maintainers in the world."}),r.a.createElement(s.a,null),r.a.createElement(m.a,null),r.a.createElement(c.a,null)))}},YP3a:function(e,n,t){"use strict";var a=t("q1tI"),r=t.n(a),i=t("Wbzz"),o=t("m7xX"),l=t.n(o),s=t("vOnD").d.div.withConfig({displayName:"pageHeaderstyle__PageHeaderWrapper",componentId:"bliqzc-0"})(["\n        position: relative;\n        overflow: hidden;\n        z-index:1;\n        .page-header {\n            text-align: center;\n            position: relative;\n            height: auto;\n            margin: 3rem auto;\n            padding: 0 1rem 0;\n            z-index: 99;\n        }\n        \n        .feature-image{\n            margin: 2rem auto;\n            max-height: 62.5rem;\n            max-width: 31rem;\n            object-fit: contain;    \n        }\n        .breadcrumbs {\n            display: flex;\n            justify-content: center;\n            margin-top: 1.5rem;  \n            h5 {\n                display: inline-block;\n                margin:0 0.4rem;\n                opacity: .7;\n            }\n            p{\n                margin: 0;\n                display: inline-block;\n            }\n        } \n    }\n"]),c=t("tBDR"),m=function(e,n){return r.a.createElement(r.a.Fragment,null,n?r.a.createElement(i.Link,{to:"/community/members/"+l()(e.name)},r.a.createElement("span",null,e.name)):r.a.createElement("span",null,e.name))};n.a=function(e){var n=e.category,t=e.title,a=e.subtitle,o=e.author,u=e.thumbnail,p=!1;o&&(p=Object(i.useStaticQuery)("1485533831").allMdx.nodes.some((function(e){return e.frontmatter.name==o.name})));return r.a.createElement(s,null,r.a.createElement("div",{className:"page-header"},u&&r.a.createElement("div",{className:"feature-image"},r.a.createElement(c.a,Object.assign({},u,{imgStyle:{objectFit:"contain"},alt:t}))),r.a.createElement("h1",null,t),a&&r.a.createElement("h3",null,a),n&&r.a.createElement("div",{className:"breadcrumbs"},r.a.createElement("span",null,r.a.createElement("h5",null,"Category:"),r.a.createElement("p",{key:n},r.a.createElement(i.Link,{to:"/blog/category/"+l()(n)},r.a.createElement("span",null,n)))),o&&r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,r.a.createElement("h5",null,"By:"),r.a.createElement("p",null,m(o,p))))),!n&&o&&r.a.createElement("div",{className:"breadcrumbs post"},r.a.createElement("h5",null,"By:"),r.a.createElement("span",null,m(o,p)))))}},Z2HG:function(e,n,t){"use strict";var a=t("q1tI"),r=t.n(a),i=t("Wbzz"),o=t("xFQ1"),l=t("YP3a"),s=t("tBDR"),c=t("vOnD").d.div.withConfig({displayName:"ProgramGridstyle__ProgramsPageWrapper",componentId:"sc-1ikyabo-0"})(["\n    .programs-page-wrapper{\n        margin: 4rem 0;\n\n        h5{\n            font-weight: 600;\n            text-align: center;\n        }\n    }\n    .sub-header_wrapper{\n        margin: 1rem 0;\n\n        h5{\n            font-size: 1.1rem; \n            font-weight: 600;\n            color: black;\n        }\n    }\n\n    .icon{\n        height: 12rem;\n        width: 12rem;\n        margin: 0 auto 1.5rem auto;\n        position: relative;\n        \n        img{\n            display: block;\n            position: absolute;\n            top: 0;\n            bottom: 0;\n            margin: auto;\n        }\n    }\n    .sub-section_icon{\n        height: 8rem;\n        width: 8rem;\n    }\n\n    .program{\n        height: 18rem;\n        width: 20rem;\n        padding: 5px;\n        margin: auto;\n        background: rgba(247,247,247,1);\n        justify-content: center;\n        border-radius: 1rem;\n        transition: all 0.2s;\n        transition-timing-function: ease-in-out;\n        \n        &:hover{\n            box-shadow: 0px 4px 20px 2px ",";\n        }\n    }\n    .sub-section_program{\n        width: 18rem;\n        height: 13rem;\n    }\n\n    .programs-col{\n        flex: 0 0 33%;\n        max-width: 100%;\n        margin: 1rem 0;\n    }\n    @media only screen and (max-width:1200px){\n        .programs-col{\n            flex: 0 0 50%;\n        }\n    }\n    @media only screen and (max-width:700px){\n        .programs-col{\n            flex: 0 0 100%;\n        }\n    }\n"],(function(e){return e.theme.shadowLightColor}));n.a=function(e){var n=e.hide_path,t=e.sub_section,a=Object(i.useStaticQuery)("2165690778"),m=n?"":"Programs";return r.a.createElement(c,null,r.a.createElement(l.a,{title:"Open Source Internship Programs",subtitle:"Build Your Career at Layer5",path:m}),r.a.createElement("div",{className:t?"sub-header_wrapper":"programs-page-wrapper"},r.a.createElement(o.b,null,r.a.createElement("div",{className:"program-grid-wrapper"},r.a.createElement(o.c,null,a.allMdx.nodes.map((function(e){var n=e.id,a=e.frontmatter,l=e.fields;return r.a.createElement(o.a,{key:n,className:"programs-col"},r.a.createElement(i.Link,{to:l.slug},r.a.createElement("div",{className:"program "+(t?"sub-section_program":"")},r.a.createElement("div",{className:"icon "+(t?"sub-section_icon":"")},r.a.createElement(s.a,Object.assign({},a.thumbnail,{imgStyle:{objectFit:"contain"},alt:a.title}))),r.a.createElement("h5",null,a.title))))})))),r.a.createElement("p",null,"The quickly growing Layer5 community represents the largest collection of service mesh projects and their maintainers in the world. Our projects establish industry standards and enable service developers, owners, and operators with repeatable patterns and best practices for managing all aspects of distributed services. Our shared commitment to the open source spirit push the Layer5 community and its projects forward. New members are always welcome."),"HashiCorp is driven by its people who are the stewards of our culture and principles which have been the foundational characteristics of. Join us on the journey to enabling the world's most innovative companies make the transition to cloud, and multi-cloud through simple workflows and automation.",r.a.createElement("p",null,"Layer5 goes out of its way to welcome and encourage new contributors. We often assign newcomers an onboarding buddy, a MeshMate, to ensure that newcomers get both introduced to the projects within the community and introduced around to other individuals. We strive to help them get a foothold on a crevice of one of our initiatives, instilling and nurturing a sense of ownership, so that they feel at-home as they become a regular contributor."),r.a.createElement("p",null,"We also spend a great deal of time trying to recognize and uplift contributors on the Layer5 and Meshery Twitter accounts whether “contribution” means code or any of the other various forms of being involved int the projects and community. Likewise, we try to lift up contributors’ works on the Layer5 and Meshery LinkedIn pages, too. And, while it’s not a world stage, we openly and publicly share our community meetings on YouTube."),r.a.createElement("p",null,"Open source contributors come in all shapes, sizes, colors and so on. All are welcome in the Layer5 projects and community!!"))))}},m7xX:function(e,n){e.exports=function(e){return e.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}},tBDR:function(e,n,t){"use strict";var a=t("zLVn"),r=t("q1tI"),i=t.n(r),o=t("9eSz"),l=t.n(o);n.a=function(e){var n=e.childImageSharp,t=e.extension,r=e.publicURL,o=e.alt,s=Object(a.a)(e,["childImageSharp","extension","publicURL","alt"]);return n||"svg"!==t?i.a.createElement(l.a,Object.assign({fluid:n.fluid},s,{alt:o})):i.a.createElement("div",{className:"gatsby-image-wrapper"},i.a.createElement("img",{src:r,alt:o}))}}}]);
//# sourceMappingURL=component---src-pages-careers-programs-js-8c4e2fe385fcff6dc268.js.map