(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{13:function(e,a,s){},26:function(e,a,s){},28:function(e,a,s){},29:function(e,a,s){},36:function(e,a,s){},43:function(e,a,s){"use strict";s.r(a);var t=s(0),n=s(1),c=s.n(n),l=s(14),i=s.n(l),r=(s(13),s(25),s(26),s(27),s(28),s(29),s(30),s(31),s(32),s(33),s(2)),o=s.n(r);o.a.easing.jswing=o.a.easing.swing,o.a.extend(o.a.easing,{def:"easeOutQuad",swing:function(e,a,s,t,n){return o.a.easing[o.a.easing.def](e,a,s,t,n)},easeInQuad:function(e,a,s,t,n){return t*(a/=n)*a+s},easeOutQuad:function(e,a,s,t,n){return-t*(a/=n)*(a-2)+s},easeInOutQuad:function(e,a,s,t,n){return(a/=n/2)<1?t/2*a*a+s:-t/2*(--a*(a-2)-1)+s},easeInCubic:function(e,a,s,t,n){return t*(a/=n)*a*a+s},easeOutCubic:function(e,a,s,t,n){return t*((a=a/n-1)*a*a+1)+s},easeInOutCubic:function(e,a,s,t,n){return(a/=n/2)<1?t/2*a*a*a+s:t/2*((a-=2)*a*a+2)+s},easeInQuart:function(e,a,s,t,n){return t*(a/=n)*a*a*a+s},easeOutQuart:function(e,a,s,t,n){return-t*((a=a/n-1)*a*a*a-1)+s},easeInOutQuart:function(e,a,s,t,n){return(a/=n/2)<1?t/2*a*a*a*a+s:-t/2*((a-=2)*a*a*a-2)+s},easeInQuint:function(e,a,s,t,n){return t*(a/=n)*a*a*a*a+s},easeOutQuint:function(e,a,s,t,n){return t*((a=a/n-1)*a*a*a*a+1)+s},easeInOutQuint:function(e,a,s,t,n){return(a/=n/2)<1?t/2*a*a*a*a*a+s:t/2*((a-=2)*a*a*a*a+2)+s},easeInSine:function(e,a,s,t,n){return-t*Math.cos(a/n*(Math.PI/2))+t+s},easeOutSine:function(e,a,s,t,n){return t*Math.sin(a/n*(Math.PI/2))+s},easeInOutSine:function(e,a,s,t,n){return-t/2*(Math.cos(Math.PI*a/n)-1)+s},easeInExpo:function(e,a,s,t,n){return 0===a?s:t*Math.pow(2,10*(a/n-1))+s},easeOutExpo:function(e,a,s,t,n){return a===n?s+t:t*(1-Math.pow(2,-10*a/n))+s},easeInOutExpo:function(e,a,s,t,n){return 0===a?s:a===n?s+t:(a/=n/2)<1?t/2*Math.pow(2,10*(a-1))+s:t/2*(2-Math.pow(2,-10*--a))+s},easeInCirc:function(e,a,s,t,n){return-t*(Math.sqrt(1-(a/=n)*a)-1)+s},easeOutCirc:function(e,a,s,t,n){return t*Math.sqrt(1-(a=a/n-1)*a)+s},easeInOutCirc:function(e,a,s,t,n){return(a/=n/2)<1?-t/2*(Math.sqrt(1-a*a)-1)+s:t/2*(Math.sqrt(1-(a-=2)*a)+1)+s},easeInElastic:function(e,a,s,t,n){var c=1.70158,l=0,i=t;if(0===a)return s;if(1===(a/=n))return s+t;if(l||(l=.3*n),i<Math.abs(t)){i=t;c=l/4}else c=l/(2*Math.PI)*Math.asin(t/i);return-i*Math.pow(2,10*(a-=1))*Math.sin((a*n-c)*(2*Math.PI)/l)+s},easeOutElastic:function(e,a,s,t,n){var c=1.70158,l=0,i=t;if(0===a)return s;if(1===(a/=n))return s+t;if(l||(l=.3*n),i<Math.abs(t)){i=t;c=l/4}else c=l/(2*Math.PI)*Math.asin(t/i);return i*Math.pow(2,-10*a)*Math.sin((a*n-c)*(2*Math.PI)/l)+t+s},easeInOutElastic:function(e,a,s,t,n){var c=1.70158,l=0,i=t;if(0===a)return s;if(2===(a/=n/2))return s+t;if(l||(l=n*(.3*1.5)),i<Math.abs(t)){i=t;c=l/4}else c=l/(2*Math.PI)*Math.asin(t/i);return a<1?i*Math.pow(2,10*(a-=1))*Math.sin((a*n-c)*(2*Math.PI)/l)*-.5+s:i*Math.pow(2,-10*(a-=1))*Math.sin((a*n-c)*(2*Math.PI)/l)*.5+t+s},easeInBack:function(e,a,s,t,n,c){return void 0===c&&(c=1.70158),t*(a/=n)*a*((c+1)*a-c)+s},easeOutBack:function(e,a,s,t,n,c){return void 0===c&&(c=1.70158),t*((a=a/n-1)*a*((c+1)*a+c)+1)+s},easeInOutBack:function(e,a,s,t,n,c){return void 0===c&&(c=1.70158),(a/=n/2)<1?t/2*(a*a*((1+(c*=1.525))*a-c))+s:t/2*((a-=2)*a*((1+(c*=1.525))*a+c)+2)+s},easeInBounce:function(e,a,s,t,n){return t-o.a.easing.easeOutBounce(e,n-a,0,t,n)+s},easeOutBounce:function(e,a,s,t,n){return(a/=n)<1/2.75?t*(7.5625*a*a)+s:a<2/2.75?t*(7.5625*(a-=1.5/2.75)*a+.75)+s:a<2.5/2.75?t*(7.5625*(a-=2.25/2.75)*a+.9375)+s:t*(7.5625*(a-=2.625/2.75)*a+.984375)+s},easeInOutBounce:function(e,a,s,t,n){return a<n/2?.5*o.a.easing.easeInBounce(e,2*a,0,t,n)+s:.5*o.a.easing.easeOutBounce(e,2*a-n,0,t,n)+.5*t+s}});s(35);var d=s(3),j=s(4),h=s(6),m=s(5),b=s.p+"static/media/benjamin-color.0dd5209d.jpg",x=s.p+"static/media/benjamin-black.e8ff37de.jpg",u=function(e){Object(h.a)(s,e);var a=Object(m.a)(s);function s(){var e;return Object(d.a)(this,s),(e=a.call(this)).state={logo:b},e}return Object(j.a)(s,[{key:"componentDidMount",value:function(){var e=this,a=o()("nav").outerHeight();o()(".navbar-toggler").on("click",(function(){o()("#mainNav").hasClass("navbar-reduce")||o()("#mainNav").addClass("navbar-reduce")})),o()("body").scrollspy({target:"#mainNav",offset:a}),o()(".js-scroll").on("click",(function(){o()(".navbar-collapse").collapse("hide")})),window.addEventListener("scroll",(function(){window.pageYOffset>50?(document.querySelector(".navbar-expand-md").classList.add("navbar-reduce"),document.querySelector(".navbar-expand-md").classList.remove("navbar-trans"),e.setState({logo:x})):(document.querySelector(".navbar-expand-md").classList.add("navbar-trans"),document.querySelector(".navbar-expand-md").classList.remove("navbar-reduce"),e.setState({logo:b}))})),o()('a.js-scroll[href*="#"]:not([href="#"])').on("click",(function(){if(window.location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")&&window.location.hostname===this.hostname){var e=o()(this.hash);if((e=e.length?e:o()("[name="+this.hash.slice(1)+"]")).length)return o()("html, body").animate({scrollTop:e.offset().top-a+5},1e3,"easeInExpo"),!1}})),o()(".js-scroll").on("click",(function(){o()(".navbar-collapse").collapse("hide")}))}},{key:"render",value:function(){return Object(t.jsx)("nav",{className:"navbar navbar-b navbar-trans navbar-expand-md fixed-top",id:"mainNav",children:Object(t.jsxs)("div",{className:"container",children:[Object(t.jsx)("a",{className:"navbar-brand js-scroll",href:"#page-top",children:"Benjamin Schelling"}),Object(t.jsxs)("button",{className:"navbar-toggler collapsed",type:"button","data-toggle":"collapse","data-target":"#navbarDefault","aria-controls":"navbarDefault","aria-expanded":"false","aria-label":"Toggle navigation",children:[Object(t.jsx)("span",{}),Object(t.jsx)("span",{}),Object(t.jsx)("span",{})]}),Object(t.jsx)("div",{className:"navbar-collapse collapse justify-content-end",id:"navbarDefault",children:Object(t.jsxs)("ul",{className:"navbar-nav",children:[Object(t.jsx)("li",{className:"nav-item",children:Object(t.jsx)("a",{className:"nav-link js-scroll active",href:"#home",children:"Home"})}),Object(t.jsx)("li",{className:"nav-item",children:Object(t.jsx)("a",{className:"nav-link js-scroll",href:"#about",children:"About"})}),Object(t.jsx)("li",{className:"nav-item",children:Object(t.jsx)("a",{className:"nav-link js-scroll",href:"#work",children:"Work"})}),Object(t.jsx)("li",{className:"nav-item",children:Object(t.jsx)("a",{className:"nav-link js-scroll",href:"#contact",children:"Contact"})})]})})]})})}}]),s}(c.a.Component),p=(s(36),s(15)),g=s.n(p),O=function(e){Object(h.a)(s,e);var a=Object(m.a)(s);function s(){return Object(d.a)(this,s),a.apply(this,arguments)}return Object(j.a)(s,[{key:"render",value:function(){return Object(t.jsxs)("div",{id:"home",className:"intro route bg-image background",children:[Object(t.jsx)("div",{id:"stars"}),Object(t.jsx)("div",{id:"stars2"}),Object(t.jsx)("div",{id:"stars3"}),Object(t.jsx)("div",{className:"intro-content display-table",children:Object(t.jsx)("div",{className:"table-cell",children:Object(t.jsxs)("div",{className:"container",children:[Object(t.jsxs)("h1",{className:"intro-title mb-4",children:["Hello, I'm ",Object(t.jsx)("br",{}),"Benjamin Schelling"]}),Object(t.jsxs)("p",{className:"intro-subtitle",children:[Object(t.jsx)("span",{className:"text-slider-items"}),Object(t.jsx)("strong",{className:"text-slider",children:Object(t.jsx)(g.a,{strings:["Full Stack Developer","Software Engineer"],typeSpeed:80,backDelay:1100,backSpeed:30,loop:!0})})]}),Object(t.jsx)("p",{className:"pt-3",children:Object(t.jsx)("a",{className:"btn btn-primary btn js-scroll px-4",href:"#work",role:"button",children:"View My Work"})})]})})})]})}}]),s}(c.a.Component),v=function(e){Object(h.a)(s,e);var a=Object(m.a)(s);function s(){var e;return Object(d.a)(this,s),(e=a.call(this)).state={skills:[{id:"JavaScript_skill",content:"JavaScript",porcentage:"90%",value:"90"},{id:"ReactJS_skill",content:"ReactJS",porcentage:"90%",value:"90"},{id:"NodeJS_skill",content:"NodeJS",porcentage:"90%",value:"90"},{id:"Java_skill",content:"Java",porcentage:"90%",value:"90"},{id:"Express_skill",content:"Express",porcentage:"70%",value:"70"},{id:"MongoDB_skill",content:"MongoDB Atlas",porcentage:"70%",value:"70"},{id:"Wordpress_skill",content:"Wordpress",porcentage:"70%",value:"70"},{id:"SQL_skill",content:"SQL",porcentage:"70%",value:"70"},{id:"HTML5_skill",content:"HTML5 & CSS3",porcentage:"95%",value:"95"}],about_me:[{id:"first-p-about",content:"I\u2019m a 24 year old software engineering student. I have a high interest in IT and love working among technology. During my studies and my own personal interest I have learned to work with Java, JavaScript, ReactJS, NodeJS, Express, MongoDB, SQL, HTML and CSS on strong bases and with these tools I have extensively boosted my knowledge in web and software development. I\u2019m determined on developing myself and on learning new skills."},{id:"second-p-about",content:"I proudly want to showcase my projects down below. I've created web applications with a ReactJS frontend, NodeJS backend and a MongoDB Atlas database. I've also used RESTAPIs which my project Newsy is a good example of. This site also has authentication which gives the user more functionality on the page after login."}]},e}return Object(j.a)(s,[{key:"render",value:function(){return Object(t.jsx)("section",{id:"about",className:"about-mf sect-pt4 route",children:Object(t.jsx)("div",{className:"container",children:Object(t.jsx)("div",{className:"row",children:Object(t.jsx)("div",{className:"col-sm-12",children:Object(t.jsx)("div",{className:"box-shadow-full",children:Object(t.jsxs)("div",{className:"row",children:[Object(t.jsxs)("div",{className:"col-md-6",children:[Object(t.jsx)("div",{className:"row",children:Object(t.jsx)("div",{className:"col-sm-6 col-md-5",style:{margin:"0 auto"},children:Object(t.jsx)("div",{className:"about-img",style:{textAlign:"center"},children:Object(t.jsx)("img",{className:"img-fluid rounded b-shadow-a",alt:""})})})}),Object(t.jsx)("div",{className:"skill-mf",children:this.state.skills.map((function(e){return Object(t.jsxs)(c.a.Fragment,{children:[Object(t.jsx)("span",{children:e.content})," ",Object(t.jsx)("span",{className:"pull-right",children:e.porcentage}),Object(t.jsx)("div",{className:"progress",children:Object(t.jsx)("div",{className:"progress-bar",role:"progressbar",style:{width:e.porcentage},"aria-valuenow":e.value,"aria-valuemin":"0","aria-valuemax":"100"})})]},e.id)}))})]}),Object(t.jsx)("div",{className:"col-md-6",children:Object(t.jsxs)("div",{className:"about-me pt-4 pt-md-0",children:[Object(t.jsx)("div",{className:"title-box-2",children:Object(t.jsx)("h5",{className:"title-left",children:"About Me"})}),this.state.about_me.map((function(e){return Object(t.jsx)("p",{className:"lead",children:e.content},e.id)}))]})})]})})})})})})}}]),s}(c.a.Component),f=s.p+"static/media/image2.918e02fd.jpg",y=s.p+"static/media/image3.dab09f29.jpg",N=s.p+"static/media/image4.0208209b.jpg",w=s.p+"static/media/image5.064bdceb.jpg",k=s.p+"static/media/image6.d815fbd7.jpg",S=function(e){Object(h.a)(s,e);var a=Object(m.a)(s);function s(){return Object(d.a)(this,s),a.apply(this,arguments)}return Object(j.a)(s,[{key:"render",value:function(){return Object(t.jsx)("section",{id:"work",className:"portfolio-mf sect-pt4 route",children:Object(t.jsxs)("div",{className:"container",children:[Object(t.jsx)("div",{className:"row",children:Object(t.jsx)("div",{className:"col-sm-12",children:Object(t.jsxs)("div",{className:"title-box text-center",children:[Object(t.jsx)("h3",{className:"title-a",children:"Portfolio"}),Object(t.jsx)("p",{className:"subtitle-a",children:"Here my most recent projects"}),Object(t.jsx)("div",{className:"line-mf"})]})})}),Object(t.jsxs)("div",{className:"row",children:[Object(t.jsx)("div",{className:"col-md-4",children:Object(t.jsxs)("div",{className:"work-box",children:[Object(t.jsxs)("a",{href:"https://images.pexels.com/photos/6335/man-coffee-cup-pen.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940","data-lightbox":"gallery-vmarine",children:[Object(t.jsx)("div",{className:"work-img",children:Object(t.jsx)("img",{src:"https://images.pexels.com/photos/6335/man-coffee-cup-pen.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",alt:"",className:"img-fluid"})}),Object(t.jsx)("div",{className:"work-content",children:Object(t.jsxs)("div",{className:"row",children:[Object(t.jsxs)("div",{className:"col-sm-8",children:[Object(t.jsx)("h2",{className:"w-title",children:"Newsy"}),Object(t.jsx)("div",{className:"w-more",children:Object(t.jsx)("span",{className:"w-ctegory",children:"ReactJS RestAPI NodeJS Express MongoDB HTML5 CSS3"})})]}),Object(t.jsx)("div",{className:"col-sm-4",children:Object(t.jsx)("div",{className:"w-like",children:Object(t.jsx)("span",{className:"ion-ios-plus-outline"})})})]})})]}),Object(t.jsx)("a",{href:"https://images.pexels.com/photos/351300/pexels-photo-351300.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940","data-lightbox":"gallery-vmarine",style:{display:"none"},children:"jsx-a11y/anchor-has-content warning"}),Object(t.jsx)("a",{href:y,"data-lightbox":"gallery-vmarine",style:{display:"none"},children:"jsx-a11y/anchor-has-content warning"}),Object(t.jsx)("a",{href:N,"data-lightbox":"gallery-vmarine",style:{display:"none"},children:"jsx-a11y/anchor-has-content warning"}),Object(t.jsx)("a",{href:w,"data-lightbox":"gallery-vmarine",style:{display:"none"},children:"jsx-a11y/anchor-has-content warning"}),Object(t.jsx)("a",{href:k,"data-lightbox":"gallery-vmarine",style:{display:"none"},children:"jsx-a11y/anchor-has-content warning"})]})}),Object(t.jsx)("div",{className:"col-md-4",children:Object(t.jsxs)("div",{className:"work-box",children:[Object(t.jsxs)("a",{href:"https://images.pexels.com/photos/351300/pexels-photo-351300.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940","data-lightbox":"gallery-aguadeluz",children:[Object(t.jsx)("div",{className:"work-img",children:Object(t.jsx)("img",{src:"https://images.pexels.com/photos/351300/pexels-photo-351300.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",alt:"",className:"img-fluid"})}),Object(t.jsx)("div",{className:"work-content",children:Object(t.jsxs)("div",{className:"row",children:[Object(t.jsxs)("div",{className:"col-sm-8",children:[Object(t.jsx)("h2",{className:"w-title",children:"Bikester"}),Object(t.jsxs)("div",{className:"w-more",children:[Object(t.jsx)("span",{className:"w-ctegory",children:"ReactJS RestAPI HTML5 CSS3"})," "]})]}),Object(t.jsx)("div",{className:"col-sm-4",children:Object(t.jsx)("div",{className:"w-like",children:Object(t.jsx)("span",{className:"ion-ios-plus-outline"})})})]})})]}),Object(t.jsx)("a",{href:f,"data-lightbox":"gallery-aguadeluz",style:{display:"none"},children:"jsx-a11y/anchor-has-content warning"}),Object(t.jsx)("a",{href:y,"data-lightbox":"gallery-aguadeluz",style:{display:"none"},children:"jsx-a11y/anchor-has-content warning"}),Object(t.jsx)("a",{href:N,"data-lightbox":"gallery-aguadeluz",style:{display:"none"},children:"jsx-a11y/anchor-has-content warning"}),Object(t.jsx)("a",{href:w,"data-lightbox":"gallery-aguadeluz",style:{display:"none"},children:"jsx-a11y/anchor-has-content warning"}),Object(t.jsx)("a",{href:k,"data-lightbox":"gallery-aguadeluz",style:{display:"none"},children:"jsx-a11y/anchor-has-content warning"})]})}),Object(t.jsx)("div",{className:"col-md-4",children:Object(t.jsxs)("div",{className:"work-box",children:[Object(t.jsxs)("a",{href:"https://images.pexels.com/photos/965625/pexels-photo-965625.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1300","data-lightbox":"gallery-todo",children:[Object(t.jsx)("div",{className:"work-img",children:Object(t.jsx)("img",{src:"https://images.pexels.com/photos/965625/pexels-photo-965625.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1300",alt:"",className:"img-fluid"})}),Object(t.jsx)("div",{className:"work-content",children:Object(t.jsxs)("div",{className:"row",children:[Object(t.jsxs)("div",{className:"col-sm-8",children:[Object(t.jsx)("h2",{className:"w-title",children:"MovieSurfer"}),Object(t.jsx)("div",{className:"w-more",children:Object(t.jsx)("span",{className:"w-ctegory",children:"ReactJS Java mySQL Spring HTML5 CSS3"})})]}),Object(t.jsx)("div",{className:"col-sm-4",children:Object(t.jsx)("div",{className:"w-like",children:Object(t.jsx)("span",{className:"ion-ios-plus-outline"})})})]})})]}),Object(t.jsx)("a",{href:f,"data-lightbox":"gallery-todo",style:{display:"none"},children:"jsx-a11y/anchor-has-content warning"}),Object(t.jsx)("a",{href:y,"data-lightbox":"gallery-todo",style:{display:"none"},children:"jsx-a11y/anchor-has-content warning"}),Object(t.jsx)("a",{href:N,"data-lightbox":"gallery-todo",style:{display:"none"},children:"jsx-a11y/anchor-has-content warning"}),Object(t.jsx)("a",{href:w,"data-lightbox":"gallery-todo",style:{display:"none"},children:"jsx-a11y/anchor-has-content warning"}),Object(t.jsx)("a",{href:k,"data-lightbox":"gallery-todo",style:{display:"none"},children:"jsx-a11y/anchor-has-content warning"})]})}),Object(t.jsx)("div",{className:"col-md-4",children:Object(t.jsxs)("div",{className:"work-box",children:[Object(t.jsxs)("a",{href:"https://images.pexels.com/photos/221210/pexels-photo-221210.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500","data-lightbox":"gallery-medlingos",children:[Object(t.jsx)("div",{className:"work-img",children:Object(t.jsx)("img",{src:"https://images.pexels.com/photos/221210/pexels-photo-221210.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",alt:"",className:"img-fluid"})}),Object(t.jsx)("div",{className:"work-content",children:Object(t.jsxs)("div",{className:"row",children:[Object(t.jsxs)("div",{className:"col-sm-8",children:[Object(t.jsx)("h2",{className:"w-title",children:"iBeet"}),Object(t.jsx)("div",{className:"w-more",children:Object(t.jsx)("span",{className:"w-ctegory",children:"Java AndroidStudio"})})]}),Object(t.jsx)("div",{className:"col-sm-4",children:Object(t.jsx)("div",{className:"w-like",children:Object(t.jsx)("span",{className:"ion-ios-plus-outline"})})})]})})]}),Object(t.jsx)("a",{href:f,"data-lightbox":"gallery-medlingos",style:{display:"none"},children:"jsx-a11y/anchor-has-content warning"}),Object(t.jsx)("a",{href:y,"data-lightbox":"gallery-medlingos",style:{display:"none"},children:"jsx-a11y/anchor-has-content warning"}),Object(t.jsx)("a",{href:N,"data-lightbox":"gallery-medlingos",style:{display:"none"},children:"jsx-a11y/anchor-has-content warning"}),Object(t.jsx)("a",{href:w,"data-lightbox":"gallery-medlingos",style:{display:"none"},children:"jsx-a11y/anchor-has-content warning"}),Object(t.jsx)("a",{href:k,"data-lightbox":"gallery-medlingos",style:{display:"none"},children:"jsx-a11y/anchor-has-content warning"})]})}),Object(t.jsx)("div",{className:"col-md-4",children:Object(t.jsxs)("div",{className:"work-box",children:[Object(t.jsxs)("a",{href:"https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500","data-lightbox":"gallery-smth",children:[Object(t.jsx)("div",{className:"work-img",children:Object(t.jsx)("img",{src:"https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",alt:"",className:"img-fluid"})}),Object(t.jsx)("div",{className:"work-content",children:Object(t.jsxs)("div",{className:"row",children:[Object(t.jsxs)("div",{className:"col-sm-8",children:[Object(t.jsx)("h2",{className:"w-title",children:"Sumwan The Game"}),Object(t.jsx)("div",{className:"w-more",children:Object(t.jsx)("span",{className:"w-ctegory",children:"C# Unity"})})]}),Object(t.jsx)("div",{className:"col-sm-4",children:Object(t.jsx)("div",{className:"w-like",children:Object(t.jsx)("span",{className:"ion-ios-plus-outline"})})})]})})]}),Object(t.jsx)("a",{href:f,"data-lightbox":"gallery-smth",style:{display:"none"},children:"jsx-a11y/anchor-has-content warning"}),Object(t.jsx)("a",{href:y,"data-lightbox":"gallery-smth",style:{display:"none"},children:"jsx-a11y/anchor-has-content warning"}),Object(t.jsx)("a",{href:N,"data-lightbox":"gallery-smth",style:{display:"none"},children:"jsx-a11y/anchor-has-content warning"}),Object(t.jsx)("a",{href:w,"data-lightbox":"gallery-smth",style:{display:"none"},children:"jsx-a11y/anchor-has-content warning"}),Object(t.jsx)("a",{href:k,"data-lightbox":"gallery-smth",style:{display:"none"},children:"jsx-a11y/anchor-has-content warning"})]})}),Object(t.jsx)("div",{className:"col-md-4",children:Object(t.jsxs)("div",{className:"work-box",children:[Object(t.jsxs)("a",{href:"https://images.pexels.com/photos/982612/pexels-photo-982612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500","data-lightbox":"gallery-mf",children:[Object(t.jsx)("div",{className:"work-img",children:Object(t.jsx)("img",{src:"https://images.pexels.com/photos/982612/pexels-photo-982612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",alt:"",className:"img-fluid"})}),Object(t.jsx)("div",{className:"work-content",children:Object(t.jsxs)("div",{className:"row",children:[Object(t.jsxs)("div",{className:"col-sm-8",children:[Object(t.jsx)("h2",{className:"w-title",children:"Cup O'Roast"}),Object(t.jsx)("div",{className:"w-more",children:Object(t.jsx)("span",{className:"w-ctegory",children:"HTML5 CSS3 Bootstrap Javascript"})})]}),Object(t.jsx)("div",{className:"col-sm-4",children:Object(t.jsx)("div",{className:"w-like",children:Object(t.jsx)("span",{className:"ion-ios-plus-outline"})})})]})})]}),Object(t.jsx)("a",{href:f,"data-lightbox":"gallery-mf",style:{display:"none"},children:"jsx-a11y/anchor-has-content warning"}),Object(t.jsx)("a",{href:y,"data-lightbox":"gallery-mf",style:{display:"none"},children:"jsx-a11y/anchor-has-content warning"}),Object(t.jsx)("a",{href:N,"data-lightbox":"gallery-mf",style:{display:"none"},children:"jsx-a11y/anchor-has-content warning"}),Object(t.jsx)("a",{href:w,"data-lightbox":"gallery-mf",style:{display:"none"},children:"jsx-a11y/anchor-has-content warning"}),Object(t.jsx)("a",{href:k,"data-lightbox":"gallery-mf",style:{display:"none"},children:"jsx-a11y/anchor-has-content warning"})]})})]})]})})}}]),s}(c.a.Component),M=function(e){Object(h.a)(s,e);var a=Object(m.a)(s);function s(){return Object(d.a)(this,s),a.apply(this,arguments)}return Object(j.a)(s,[{key:"render",value:function(){return Object(t.jsxs)("section",{className:"paralax-mf footer-paralax bg-image sect-mt4 route",style:{backgroundImage:"url(https://images.pexels.com/photos/3648850/pexels-photo-3648850.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)"},children:[Object(t.jsx)("div",{className:"overlay-mf"}),Object(t.jsx)("div",{className:"container",children:Object(t.jsx)("div",{className:"row",children:Object(t.jsx)("div",{className:"col-sm-12",children:Object(t.jsx)("div",{className:"contact-mf",children:Object(t.jsx)("div",{id:"contact",className:"box-shadow-full",children:Object(t.jsxs)("div",{className:"row",children:[Object(t.jsxs)("div",{className:"col-md-6",children:[Object(t.jsx)("div",{className:"title-box-2",children:Object(t.jsx)("h5",{className:"title-left",children:"Send A Message"})}),Object(t.jsx)("div",{children:Object(t.jsxs)("form",{action:"https://formspree.io/f/xeqpbazr",method:"POST",className:"contactForm",children:[Object(t.jsx)("div",{id:"sendmessage",children:"Your message has been sent. Thank you!"}),Object(t.jsx)("div",{id:"errormessage"}),Object(t.jsxs)("div",{className:"row",children:[Object(t.jsx)("div",{className:"col-md-12 mb-3",children:Object(t.jsxs)("div",{className:"form-group",children:[Object(t.jsx)("input",{type:"text",name:"name",className:"form-control",id:"name",placeholder:"Your Name","data-rule":"minlen:4","data-msg":"Please enter at least 4 chars"}),Object(t.jsx)("div",{className:"validation"})]})}),Object(t.jsx)("div",{className:"col-md-12 mb-3",children:Object(t.jsxs)("div",{className:"form-group",children:[Object(t.jsx)("input",{type:"email",className:"form-control",name:"email",id:"email",placeholder:"Your Email","data-rule":"email","data-msg":"Please enter a valid email"}),Object(t.jsx)("div",{className:"validation"})]})}),Object(t.jsx)("div",{className:"col-md-12 mb-3",children:Object(t.jsxs)("div",{className:"form-group",children:[Object(t.jsx)("input",{type:"text",className:"form-control",name:"subject",id:"subject",placeholder:"Subject","data-rule":"minlen:4","data-msg":"Please enter at least 8 chars of subject"}),Object(t.jsx)("div",{className:"validation"})]})}),Object(t.jsx)("div",{className:"col-md-12 mb-3",children:Object(t.jsxs)("div",{className:"form-group",children:[Object(t.jsx)("textarea",{className:"form-control",name:"message",rows:"5","data-rule":"required","data-msg":"Please write something for us",placeholder:"Message"}),Object(t.jsx)("div",{className:"validation"})]})}),Object(t.jsx)("div",{className:"col-md-12",children:Object(t.jsx)("button",{type:"submit",className:"button button-a button-big button-rouded",children:"Send Message"})})]})]})})]}),Object(t.jsxs)("div",{className:"col-md-6",children:[Object(t.jsx)("div",{className:"title-box-2 pt-4 pt-md-0",children:Object(t.jsx)("h5",{className:"title-left",children:"Get in Touch"})}),Object(t.jsxs)("div",{className:"more-info",children:[Object(t.jsxs)("p",{className:"lead",children:["Whether you want to get in touch, talk about a project collaboration, or just say hi, I'd love to hear from you.",Object(t.jsx)("br",{}),"Simply fill the from and send me an email."]}),Object(t.jsxs)("ul",{class:"list-ico",children:[Object(t.jsxs)("li",{children:[Object(t.jsx)("span",{class:"ion-ios-location"})," ",Object(t.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.google.com/maps/place/Uutiskatu+3,+00240+Helsinki/@60.2036909,24.9201223,19.55z/data=!4m5!3m4!1s0x469209ed15a1bbd7:0x56ba182486f5d7a!8m2!3d60.203713!4d24.920196",children:"00240 Helsinki"})]}),Object(t.jsxs)("li",{children:[Object(t.jsx)("span",{class:"ion-ios-telephone"})," ",Object(t.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"tel:+358409656771",children:"+358 40 9656771"})]}),Object(t.jsxs)("li",{children:[Object(t.jsx)("span",{class:"ion-email"})," ",Object(t.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"mailto:beni.schelling@gmail.com",children:"beni.schelling@gmail.com"})]})]})]}),Object(t.jsx)("div",{className:"socials",children:Object(t.jsxs)("ul",{children:[Object(t.jsx)("li",{children:Object(t.jsx)("a",{href:"https://github.com/benjambo",target:"_blank",rel:"noopener noreferrer",children:Object(t.jsx)("span",{className:"ico-circle",children:Object(t.jsx)("i",{className:"ion-social-github"})})})}),Object(t.jsx)("li",{children:Object(t.jsx)("a",{href:"https://linkedin.com/in/benschelling",target:"_blank",rel:"noopener noreferrer",children:Object(t.jsx)("span",{className:"ico-circle",children:Object(t.jsx)("i",{className:"ion-social-linkedin"})})})}),Object(t.jsx)("li",{children:Object(t.jsx)("a",{href:"https://instagram.com/benjaminjoshin",target:"_blank",rel:"noopener noreferrer",children:Object(t.jsx)("span",{className:"ico-circle",children:Object(t.jsx)("i",{className:"ion-social-instagram"})})})})]})})]})]})})})})})}),Object(t.jsx)("footer",{children:Object(t.jsx)("div",{className:"container",children:Object(t.jsx)("div",{className:"row",children:Object(t.jsx)("div",{className:"col-sm-12",children:Object(t.jsx)("div",{className:"copyright-box"})})})})})]})}}]),s}(c.a.Component),I=function(e){Object(h.a)(s,e);var a=Object(m.a)(s);function s(){return Object(d.a)(this,s),a.apply(this,arguments)}return Object(j.a)(s,[{key:"componentDidMount",value:function(){o()(".back-to-top").click((function(){return o()("html, body").animate({scrollTop:0},1500,"easeInOutExpo"),!1})),window.addEventListener("scroll",(function(){window.pageYOffset>100?(document.querySelector(".back-to-top").classList.remove("fadeOut"),document.querySelector(".back-to-top").style.display="block",document.querySelector(".back-to-top").classList.add("fadeIn")):(document.querySelector(".back-to-top").classList.remove("fadeIn"),document.querySelector(".back-to-top").classList.add("fadeOut"))}))}},{key:"render",value:function(){return Object(t.jsx)("a",{href:"#",className:"back-to-top animated",children:Object(t.jsx)("i",{className:"fa fa-chevron-up"})})}}]),s}(c.a.Component),C=function(e){Object(h.a)(s,e);var a=Object(m.a)(s);function s(){return Object(d.a)(this,s),a.apply(this,arguments)}return Object(j.a)(s,[{key:"componentDidMount",value:function(){o()(window).on("load",(function(){o()("#preloader").length&&o()("#preloader").delay(100).fadeOut("slow",(function(){o()(this).remove()}))}))}},{key:"render",value:function(){return Object(t.jsx)("div",{id:"preloader"})}}]),s}(c.a.Component),J=function(){return Object(t.jsxs)(c.a.Fragment,{children:[Object(t.jsx)(u,{}),Object(t.jsx)(O,{}),Object(t.jsx)(v,{}),Object(t.jsx)(S,{}),Object(t.jsx)(M,{}),Object(t.jsx)(I,{}),Object(t.jsx)(C,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(t.jsx)(J,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[43,1,2]]]);
//# sourceMappingURL=main.b2956e29.chunk.js.map