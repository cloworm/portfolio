(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{12:function(e,t,n){},13:function(e,t){},15:function(e,t){},16:function(e,t,n){"use strict";n.r(t);var r=n(1),i=n(0),c=n.n(i),o=n(6),l=n.n(o),s=(n(12),n(5)),a=function(e){var t=e.color;return Object(r.jsx)(s.a.div,{className:"relative inline-block z-auto",whileHover:{scale:1.3,opacity:0,transition:{ease:"easeOut",duration:.15},transitionEnd:{scale:1}},whileTap:{scale:1.3,opacity:0,transition:{ease:"easeOut",duration:.15},transitionEnd:{scale:1}},children:Object(r.jsx)(s.a.div,{className:"h-24 w-24 rounded-full bg-theme_oceanBlue ".concat("green"===t?"radial-gradient-green":"pink"===t?"radial-gradient-pink":"radial-gradient-purple"),animate:{translateY:-15},transition:{ease:[.445,.05,.55,.95],repeat:1/0,repeatType:"reverse",duration:1}})})},d=function(){return Object(r.jsxs)("div",{className:"relative bg-gradient-to-br from-theme_oceanBlue to-theme_mediumPurple px-10 py-10 text-center",children:[Object(r.jsxs)("a",{className:"transition-all text-white hover:text-theme_aquamarine",href:"http://github.com/cloworm","aria-label":"github",target:"_blank",rel:"noopener noreferrer",children:[Object(r.jsxs)("svg",{className:"inline",width:"25px",height:"25px",role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[Object(r.jsx)("title",{children:"GitHub icon"}),Object(r.jsx)("path",{fill:"currentColor",d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"})]}),Object(r.jsx)("span",{className:"pl-2 text-xl align-middle",children:"cloworm"})]}),Object(r.jsx)("div",{className:"inline-block absolute -top-10 left-10 lg:-top-16 lg:left-24",children:Object(r.jsx)(a,{})}),Object(r.jsx)("div",{className:"inline-block absolute -top-28 left-16 lg:-top-4 lg:left-8",children:Object(r.jsx)(a,{color:"pink"})}),Object(r.jsx)("div",{className:"inline-block absolute -top-16 left-28 lg:top-1 lg:left-28",children:Object(r.jsx)(a,{color:"green"})})]})},h=n(3),b=n(2),p=n.n(b),u=function(){var e=Object(i.useState)(!1),t=Object(h.a)(e,2),n=t[0],r=t[1];return Object(i.useEffect)((function(){r((function(){return!0}))}),[]),n},j=function(e){var t=e.light,n=void 0===t?"#F8E5EF":t,c=e.dark,o=void 0===c?"#FF6194":c,l=u(),s=Object(i.useRef)(),a=Object(i.useRef)();Object(i.useEffect)((function(){if(null===p.a||void 0===p.a?void 0:p.a.view)return function(){p.a.view.remove()}}),[]),Object(i.useEffect)((function(){if((null===s||void 0===s?void 0:s.current)||(null===a||void 0===a?void 0:a.current)){var e=new b.Gradient;e.stops=[new b.GradientStop(new b.Color(n)),new b.GradientStop(new b.Color(o))],s.current.strokeColor={gradient:e,origin:[0,a.current.width],destination:[0,0]}}}),[n,o]);var d=Object(i.useCallback)((function(){if(null===s||void 0===s?void 0:s.current){for(var e=p.a.view.center.divide(new b.Point(10,1)),t=0;t<25;t++)s.current.add(e.add(new b.Point(35*t,0)));p.a.view.onMouseMove=function(e){if(null===s||void 0===s?void 0:s.current){s.current.firstSegment.point=e.point;for(var t=0;t<24;t++){var n=s.current.segments[t],r=n.next,i=n.point.subtract(r.point);i.length=35,r.point=n.point.subtract(i)}s.current.smooth({type:"continuous"})}}}}),[]),h=Object(i.useCallback)((function(e){null!==e&&(a.current=e,p.a.setup(e),s.current=new b.Path({strokeColor:{gradient:{stops:["#F8E5EF","#FF6194"]},origin:[0,e.width],destination:[0,0]},strokeWidth:20,strokeCap:"round"}),d())}),[d]);return l?Object(r.jsx)("div",{className:"h-screen bg-gradient-to-b from-theme_oceanBlue to-theme_mediumPurple",children:Object(r.jsx)("canvas",{className:"h-screen w-full canvas-resize hidden sm:block",ref:h,id:"canvas","data-paper-resize":"true"})}):Object(r.jsx)("div",{})},g=function(){var e=Object(i.useState)({light:"#F8E5EF",dark:"#F9ABCE"}),t=Object(h.a)(e,2),n=t[0],c=t[1],o=Object(i.useCallback)((function(e){var t=e.light,n=e.dark;c({light:t,dark:n})}),[]);return Object(r.jsxs)("div",{className:"relative",children:[Object(r.jsx)("div",{children:Object(r.jsx)(j,{light:n.light,dark:n.dark})}),Object(r.jsx)("header",{className:"absolute top-0 left-0 right-0 lg:px-40 min-h-screen flex flex-col justify-center items-center text-center",children:Object(r.jsxs)("div",{className:"relative",children:[Object(r.jsx)("div",{className:"absolute -top-72 lg:top-16 -right-3 lg:-right-10",onMouseEnter:function(){return o({light:"#E9E7FD",dark:"#AC70EA"})},children:Object(r.jsx)(a,{})}),Object(r.jsx)("div",{className:"absolute -top-60 lg:top-24 right-12",onMouseEnter:function(){return o({light:"#78EED0",dark:"#59AAB9"})},children:Object(r.jsx)(a,{color:"green"})}),Object(r.jsx)("div",{className:"absolute -top-56 lg:top-32 -right-5",onMouseEnter:function(){return o({light:"#F8E5EF",dark:"#FF6194"})},children:Object(r.jsx)(a,{color:"pink"})}),Object(r.jsx)("h1",{className:"text-3xl pb-1 text-white",children:"Hi, I'm Chloe Echikson"}),Object(r.jsx)("div",{className:"text-left pb-1",children:Object(r.jsxs)("a",{className:"transition-all text-white hover:text-theme_aquamarine",href:"https://www.linkedin.com/in/chloeechikson","aria-label":"linkedin",target:"_blank",rel:"noopener noreferrer",children:[Object(r.jsxs)("svg",{className:"inline",width:"30px",height:"30px",role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[Object(r.jsx)("title",{children:"LinkedIn icon"}),Object(r.jsx)("path",{fill:"currentColor",d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})]}),Object(r.jsx)("span",{className:"pl-2 text-3xl align-middle",children:"chloe.echikson"})]})}),Object(r.jsx)("div",{className:"text-left",children:Object(r.jsxs)("a",{className:"transition-all text-white hover:text-theme_aquamarine",href:"http://github.com/cloworm","aria-label":"github",target:"_blank",rel:"noopener noreferrer",children:[Object(r.jsxs)("svg",{className:"inline",width:"30px",height:"30px",role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[Object(r.jsx)("title",{children:"GitHub icon"}),Object(r.jsx)("path",{fill:"currentColor",d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"})]}),Object(r.jsx)("span",{className:"pl-2 text-3xl align-middle",children:"cloworm"})]})})]})}),Object(r.jsxs)("div",{className:"flex flex-col bg-theme_ghostWhite absolute bottom-0 left-0 right-0 flex flex-row items-center justify-center z-10 pt-14 clip-ellipse",children:[Object(r.jsx)("a",{href:"#projects",children:Object(r.jsx)("p",{className:"font-light text-base tracking-wider",children:"PROJECTS"})}),Object(r.jsx)("div",{className:"animate-bounce",children:Object(r.jsx)("a",{href:"#projects",children:Object(r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"40",viewBox:"0 0 24 24",width:"40",children:[Object(r.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),Object(r.jsx)("path",{d:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"})]})})})]})]})},m=function(e){var t=e.children,n=e.url,c=Object(i.useCallback)((function(e){e.stopPropagation()}),[]);return Object(r.jsx)("div",{children:Object(r.jsx)("a",{onClick:c,href:n,target:"_blank",rel:"noopener noreferrer",className:"inline-block hover:bg-theme_frenchPink bg-gradient-to-tr from-theme_frenchPink to-theme_carnationPink rounded-full font-semiBold text-white px-6 py-2",children:t})})},x=function(e){var t=e.tags;return Object(r.jsx)(r.Fragment,{children:t.map((function(e,n){return Object(r.jsxs)("div",{className:"inline-block text-sm text-gray-400",children:[e,"\xa0",n<t.length-1?Object(r.jsx)("span",{children:"\xb7\xa0"}):""]},n)}))})},f=function(e){var t=e.year,n=e.name,c=e.description,o=e.repo,l=e.link,s=e.bgImage,a=e.bgPosition,d=e.flipped,h=e.tags,b=Object(i.useCallback)((function(){window.open(l,"_blank","noopener noreferrer")}),[l]),p=Object(i.useCallback)((function(e){e.stopPropagation()}),[]);return Object(r.jsxs)("div",{onClick:b,role:"button","aria-label":"Live Demo",className:"\n        grid\n        relative\n        transition-all\n        rounded-3xl\n        group\n        transition-all\n        text-left\n        lg:grid-cols-2\n        mb-20\n        transform\n        neumorphic\n        hover:neumorphic-hover\n        bg-white\n        cursor-pointer\n      ",children:[Object(r.jsxs)("div",{className:"".concat(d?"order-first lg:order-1 rounded-t-3xl lg:rounded-t-none lg:rounded-r-3xl":"order-first rounded-t-3xl lg:rounded-t-none lg:rounded-l-3xl"," px-6 py-6 lg:px-8 lg:py-8 bg-white"),children:[Object(r.jsx)("p",{className:"text-sm font-semibold text-theme_carnationPink",children:t}),Object(r.jsx)("div",{className:"pb-3",children:Object(r.jsxs)("p",{className:"text-2xl font-bold tracking-wide align-center",children:[n,Object(r.jsx)("a",{className:"relative -top-1 pl-2.5 hover:text-theme_frenchPink",href:o,target:"_blank",rel:"noopener noreferrer",onClick:p,children:Object(r.jsxs)("svg",{className:"inline",width:"28px",height:"28px",role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[Object(r.jsx)("title",{children:"GitHub icon"}),Object(r.jsx)("path",{fill:"currentColor",d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"})]})})]})}),Object(r.jsx)("p",{className:"lg:pb-4",children:c}),Object(r.jsxs)("div",{className:"hidden lg:block",children:[Object(r.jsx)("div",{className:"pb-6",children:Object(r.jsx)(x,{tags:h})}),Object(r.jsx)("div",{children:Object(r.jsx)(m,{url:l,children:"Launch Demo"})})]})]}),Object(r.jsx)("div",{style:{backgroundImage:s},className:"\n          bg-cover\n          ".concat(a||"bg-left-top","\n          bg-no-repeat\n          ").concat("lg:rounded-3xl","\n          flex justify-center\n          h-40 lg:h-auto\n          border-l-8 border-r-8 lg:border-8 border-white\n        ")}),Object(r.jsxs)("div",{className:"lg:hidden bg-white rounded-b-xl px-6 py-6",children:[Object(r.jsx)("div",{className:"pb-4",children:Object(r.jsx)(x,{tags:h})}),Object(r.jsx)("div",{children:Object(r.jsx)(m,{url:l,children:"Launch Demo"})})]})]})},v=function(){var e=!0;return Object(r.jsx)("div",{id:"projects",className:"flex justify-center",children:Object(r.jsxs)("div",{className:"relative px-6 md:px-10 lg:px-20 xl:w-3/5 2xl:w-1/2 py-20",children:[Object(r.jsx)("h2",{className:"text-3xl font-extralight tracking-widest pb-12 text-center",children:"PROJECT SHOWCASE"}),Object(r.jsx)(f,{year:2020,name:"Countdown",flipped:e=!e,description:"Countdown timer with 3D flip animations",repo:"https://github.com/cloworm/countdown",link:"https://countdown.cloworm.vercel.app/",bgPosition:"bg-center",bgImage:"url('https://user-images.githubusercontent.com/5566310/103051331-942dae80-4564-11eb-8d6e-7b757d03e8c8.png')",tags:["TypeScript","React","Next.js","Vercel","Tailwind CSS","Responsive"]}),Object(r.jsx)(f,{year:2020,name:"Todo App",flipped:e=!e,description:"Todo App with sortable items and light/dark mode",repo:"https://github.com/cloworm/todo",link:"https://cloworm-todo.netlify.app/",bgPosition:"bg-center",bgImage:"url('https://user-images.githubusercontent.com/5566310/102437990-7c48ae80-3fe9-11eb-8bf1-ef0ae5b72767.png')",tags:["TypeScript","React","Next.js","Recoil","Netlify","Tailwind CSS","Framer Motion","Responsive"]}),Object(r.jsx)(f,{year:2020,name:"Pomodoro",flipped:e=!e,description:"Pomodoro Timer with customizable theming",repo:"https://github.com/cloworm/pomodoro",link:"https://cloworm-pomodoro.vercel.app/",bgPosition:"bg-center",bgImage:"url('https://user-images.githubusercontent.com/5566310/103488386-0068a780-4dda-11eb-8f45-aa23206a7ae2.png')",tags:["TypeScript","React","Next.js","Vercel","Tailwind CSS","Responsive"]}),Object(r.jsx)(f,{year:2020,name:"Shortly",flipped:e=!e,description:"Url shortener built on top of shrtco.de",repo:"https://github.com/cloworm/shortly",link:"https://shortly.cloworm.vercel.app/",bgImage:"url('https://user-images.githubusercontent.com/5566310/102733370-25a1e400-430b-11eb-9bb4-852053c4fb4c.png')",tags:["TypeScript","React","Next.js","Recoil","Vercel","Tailwind CSS","Framer Motion","Responsive"]}),Object(r.jsx)(f,{year:2016,name:"Deco",flipped:e=!e,description:"Augmented Reality mobile tool for interior designers",repo:"https://github.com/yuyingliu331/deco",link:"https://www.youtube.com/watch?v=b7y7sqlsfZ8",bgPosition:"bg-center",bgImage:"url('https://user-images.githubusercontent.com/5566310/103108017-cd702800-4611-11eb-8da0-bf617623839b.png')",tags:["TypeScript","Ionic","Angular","Mobile","AR","Postgres","Sequelize"]}),Object(r.jsx)(f,{year:2016,name:"RegEx",flipped:e=!e,description:"An update-as-you-type regular expression pattern-matcher with the ability to match multiple texts at once",repo:"https://github.com/cloworm/regex-playground",link:"http://regex-playground.cloworm.com/",bgImage:"url('https://user-images.githubusercontent.com/5566310/103107945-17a4d980-4611-11eb-9fba-d70261ed555a.png')",tags:["React","Node","Express","Material UI"]})]})})},O=function(){return Object(r.jsxs)("div",{className:"bg-theme_ghostWhite",children:[Object(r.jsx)(g,{}),Object(r.jsx)(v,{}),Object(r.jsx)(d,{})]})};l.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(O,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.60d6b1d1.chunk.js.map