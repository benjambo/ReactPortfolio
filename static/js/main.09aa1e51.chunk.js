(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{12:function(e,s,a){},26:function(e,s,a){},28:function(e,s,a){},29:function(e,s,a){},42:function(e,s,a){"use strict";a.r(s);var t=a(0),c=a(1),n=a.n(c),i=a(13),l=a.n(i),r=(a(12),a(25),a(26),a(27),a(28),a(29),a(30),a(31),a(32),a(2)),o=a.n(r);o.a.easing.jswing=o.a.easing.swing,o.a.extend(o.a.easing,{def:"easeOutQuad",swing:function(e,s,a,t,c){return o.a.easing[o.a.easing.def](e,s,a,t,c)},easeInQuad:function(e,s,a,t,c){return t*(s/=c)*s+a},easeOutQuad:function(e,s,a,t,c){return-t*(s/=c)*(s-2)+a},easeInOutQuad:function(e,s,a,t,c){return(s/=c/2)<1?t/2*s*s+a:-t/2*(--s*(s-2)-1)+a},easeInCubic:function(e,s,a,t,c){return t*(s/=c)*s*s+a},easeOutCubic:function(e,s,a,t,c){return t*((s=s/c-1)*s*s+1)+a},easeInOutCubic:function(e,s,a,t,c){return(s/=c/2)<1?t/2*s*s*s+a:t/2*((s-=2)*s*s+2)+a},easeInQuart:function(e,s,a,t,c){return t*(s/=c)*s*s*s+a},easeOutQuart:function(e,s,a,t,c){return-t*((s=s/c-1)*s*s*s-1)+a},easeInOutQuart:function(e,s,a,t,c){return(s/=c/2)<1?t/2*s*s*s*s+a:-t/2*((s-=2)*s*s*s-2)+a},easeInQuint:function(e,s,a,t,c){return t*(s/=c)*s*s*s*s+a},easeOutQuint:function(e,s,a,t,c){return t*((s=s/c-1)*s*s*s*s+1)+a},easeInOutQuint:function(e,s,a,t,c){return(s/=c/2)<1?t/2*s*s*s*s*s+a:t/2*((s-=2)*s*s*s*s+2)+a},easeInSine:function(e,s,a,t,c){return-t*Math.cos(s/c*(Math.PI/2))+t+a},easeOutSine:function(e,s,a,t,c){return t*Math.sin(s/c*(Math.PI/2))+a},easeInOutSine:function(e,s,a,t,c){return-t/2*(Math.cos(Math.PI*s/c)-1)+a},easeInExpo:function(e,s,a,t,c){return 0===s?a:t*Math.pow(2,10*(s/c-1))+a},easeOutExpo:function(e,s,a,t,c){return s===c?a+t:t*(1-Math.pow(2,-10*s/c))+a},easeInOutExpo:function(e,s,a,t,c){return 0===s?a:s===c?a+t:(s/=c/2)<1?t/2*Math.pow(2,10*(s-1))+a:t/2*(2-Math.pow(2,-10*--s))+a},easeInCirc:function(e,s,a,t,c){return-t*(Math.sqrt(1-(s/=c)*s)-1)+a},easeOutCirc:function(e,s,a,t,c){return t*Math.sqrt(1-(s=s/c-1)*s)+a},easeInOutCirc:function(e,s,a,t,c){return(s/=c/2)<1?-t/2*(Math.sqrt(1-s*s)-1)+a:t/2*(Math.sqrt(1-(s-=2)*s)+1)+a},easeInElastic:function(e,s,a,t,c){var n=1.70158,i=0,l=t;if(0===s)return a;if(1===(s/=c))return a+t;if(i||(i=.3*c),l<Math.abs(t)){l=t;n=i/4}else n=i/(2*Math.PI)*Math.asin(t/l);return-l*Math.pow(2,10*(s-=1))*Math.sin((s*c-n)*(2*Math.PI)/i)+a},easeOutElastic:function(e,s,a,t,c){var n=1.70158,i=0,l=t;if(0===s)return a;if(1===(s/=c))return a+t;if(i||(i=.3*c),l<Math.abs(t)){l=t;n=i/4}else n=i/(2*Math.PI)*Math.asin(t/l);return l*Math.pow(2,-10*s)*Math.sin((s*c-n)*(2*Math.PI)/i)+t+a},easeInOutElastic:function(e,s,a,t,c){var n=1.70158,i=0,l=t;if(0===s)return a;if(2===(s/=c/2))return a+t;if(i||(i=c*(.3*1.5)),l<Math.abs(t)){l=t;n=i/4}else n=i/(2*Math.PI)*Math.asin(t/l);return s<1?l*Math.pow(2,10*(s-=1))*Math.sin((s*c-n)*(2*Math.PI)/i)*-.5+a:l*Math.pow(2,-10*(s-=1))*Math.sin((s*c-n)*(2*Math.PI)/i)*.5+t+a},easeInBack:function(e,s,a,t,c,n){return void 0===n&&(n=1.70158),t*(s/=c)*s*((n+1)*s-n)+a},easeOutBack:function(e,s,a,t,c,n){return void 0===n&&(n=1.70158),t*((s=s/c-1)*s*((n+1)*s+n)+1)+a},easeInOutBack:function(e,s,a,t,c,n){return void 0===n&&(n=1.70158),(s/=c/2)<1?t/2*(s*s*((1+(n*=1.525))*s-n))+a:t/2*((s-=2)*s*((1+(n*=1.525))*s+n)+2)+a},easeInBounce:function(e,s,a,t,c){return t-o.a.easing.easeOutBounce(e,c-s,0,t,c)+a},easeOutBounce:function(e,s,a,t,c){return(s/=c)<1/2.75?t*(7.5625*s*s)+a:s<2/2.75?t*(7.5625*(s-=1.5/2.75)*s+.75)+a:s<2.5/2.75?t*(7.5625*(s-=2.25/2.75)*s+.9375)+a:t*(7.5625*(s-=2.625/2.75)*s+.984375)+a},easeInOutBounce:function(e,s,a,t,c){return s<c/2?.5*o.a.easing.easeInBounce(e,2*s,0,t,c)+a:.5*o.a.easing.easeOutBounce(e,2*s-c,0,t,c)+.5*t+a}});a(35);var d=a(3),j=a(4),m=a(6),b=a(5),h=a.p+"static/media/logoLight.64083e60.png",u=a.p+"static/media/logoDark.1cc20a4a.png",O=function(e){Object(m.a)(a,e);var s=Object(b.a)(a);function a(){var e;return Object(d.a)(this,a),(e=s.call(this)).state={logo:u},e}return Object(j.a)(a,[{key:"componentDidMount",value:function(){var e=this,s=o()("nav").outerHeight();o()(".navbar-toggler").on("click",(function(){o()("#mainNav").hasClass("navbar-reduce")||o()("#mainNav").addClass("navbar-reduce")})),o()("body").scrollspy({target:"#mainNav",offset:s}),o()(".js-scroll").on("click",(function(){o()(".navbar-collapse").collapse("hide")})),window.addEventListener("scroll",(function(){window.pageYOffset>50?(document.querySelector(".navbar-expand-md").classList.add("navbar-reduce"),document.querySelector(".navbar-expand-md").classList.remove("navbar-trans"),e.setState({logo:h})):(document.querySelector(".navbar-expand-md").classList.add("navbar-trans"),document.querySelector(".navbar-expand-md").classList.remove("navbar-reduce"),e.setState({logo:u}))})),o()('a.js-scroll[href*="#"]:not([href="#"])').on("click",(function(){if(window.location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")&&window.location.hostname===this.hostname){var e=o()(this.hash);if((e=e.length?e:o()("[name="+this.hash.slice(1)+"]")).length)return o()("html, body").animate({scrollTop:e.offset().top-s+5},1e3,"easeInExpo"),!1}})),o()(".js-scroll").on("click",(function(){o()(".navbar-collapse").collapse("hide")}))}},{key:"render",value:function(){return Object(t.jsx)("nav",{className:"navbar navbar-b navbar-trans navbar-expand-md fixed-top",id:"mainNav",children:Object(t.jsxs)("div",{className:"container",children:[Object(t.jsx)("a",{className:"navbar-brand js-scroll",href:"#page-top",children:"Benjamin Schelling"}),Object(t.jsxs)("button",{className:"navbar-toggler collapsed",type:"button","data-toggle":"collapse","data-target":"#navbarDefault","aria-controls":"navbarDefault","aria-expanded":"false","aria-label":"Toggle navigation",children:[Object(t.jsx)("span",{}),Object(t.jsx)("span",{}),Object(t.jsx)("span",{})]}),Object(t.jsx)("div",{className:"navbar-collapse collapse justify-content-end",id:"navbarDefault",children:Object(t.jsxs)("ul",{className:"navbar-nav",children:[Object(t.jsx)("li",{className:"nav-item",children:Object(t.jsx)("a",{className:"nav-link js-scroll active",href:"#home",children:"Home"})}),Object(t.jsx)("li",{className:"nav-item",children:Object(t.jsx)("a",{className:"nav-link js-scroll",href:"#about",children:"About"})}),Object(t.jsx)("li",{className:"nav-item",children:Object(t.jsx)("a",{className:"nav-link js-scroll",href:"#work",children:"Work"})}),Object(t.jsx)("li",{className:"nav-item",children:Object(t.jsx)("a",{className:"nav-link js-scroll",href:"#contact",children:"Contact"})})]})})]})})}}]),a}(n.a.Component),x=a(14),p=a.n(x),v=(a.p,function(e){Object(m.a)(a,e);var s=Object(b.a)(a);function a(){return Object(d.a)(this,a),s.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){return Object(t.jsxs)("div",{id:"home",className:"intro route bg-image background",children:[Object(t.jsx)("div",{className:"video-container"}),Object(t.jsx)("div",{className:"intro-content display-table",children:Object(t.jsx)("div",{className:"table-cell",children:Object(t.jsxs)("div",{className:"container",children:[Object(t.jsxs)("h1",{className:"intro-title mb-4",children:["Hello, I'm ",Object(t.jsx)("br",{}),"Benjamin Schelling"]}),Object(t.jsxs)("p",{className:"intro-subtitle",children:[Object(t.jsx)("span",{className:"text-slider-items"}),Object(t.jsx)("strong",{className:"text-slider",children:Object(t.jsx)(p.a,{strings:["Full Stack Developer","Software Engineer"],typeSpeed:80,backDelay:1100,backSpeed:30,loop:!0})})]}),Object(t.jsx)("p",{className:"pt-3",children:Object(t.jsx)("a",{className:"btn btn-primary btn js-scroll px-4",href:"#work",role:"button",children:"View My Work"})})]})})})]})}}]),a}(n.a.Component)),N=function(e){Object(m.a)(a,e);var s=Object(b.a)(a);function a(){var e;return Object(d.a)(this,a),(e=s.call(this)).state={skills:[{id:"JavaScript_skill",content:"JavaScript",porcentage:"90%",value:"90"},{id:"ReactJS_skill",content:"ReactJS",porcentage:"90%",value:"90"},{id:"NodeJS_skill",content:"NodeJS",porcentage:"90%",value:"90"},{id:"Java_skill",content:"Java",porcentage:"90%",value:"90"},{id:"Express_skill",content:"Express",porcentage:"70%",value:"70"},{id:"MongoDB_skill",content:"MongoDB Atlas",porcentage:"70%",value:"70"},{id:"Wordpress_skill",content:"Wordpress",porcentage:"70%",value:"70"},{id:"SQL_skill",content:"SQL",porcentage:"70%",value:"70"},{id:"HTML5_skill",content:"HTML5 & CSS3",porcentage:"95%",value:"95"}],about_me:[{id:"first-p-about",content:"I\u2019m a 24 year old software engineering student. I have a high interest in IT and love working among technology. During my studies and my own personal interest I have learned to work with Java, JavaScript, ReactJS, NodeJS, Express, MongoDB, SQL, HTML and CSS on strong bases and with these tools I have extensively boosted my knowledge in web and software development. I\u2019m determined on developing myself and on learning new skills."},{id:"second-p-about",content:"I proudly want to showcase my projects down below. I've created web applications with a ReactJS frontend, NodeJS backend and a MongoDB Atlas database. I've also used RESTAPIs which my project Newsy is a good example of. This site also has authentication which gives the user more functionality on the page after login."}]},e}return Object(j.a)(a,[{key:"render",value:function(){return Object(t.jsx)("section",{id:"about",className:"about-mf sect-pt4 route",children:Object(t.jsx)("div",{className:"container",children:Object(t.jsx)("div",{className:"row",children:Object(t.jsx)("div",{className:"col-sm-12",children:Object(t.jsx)("div",{className:"box-shadow-full",children:Object(t.jsxs)("div",{className:"row",children:[Object(t.jsxs)("div",{className:"col-md-6",children:[Object(t.jsx)("div",{className:"row",children:Object(t.jsx)("div",{className:"col-sm-6 col-md-5",style:{margin:"0 auto"},children:Object(t.jsx)("div",{className:"about-img",style:{textAlign:"center"},children:Object(t.jsx)("img",{className:"img-fluid rounded b-shadow-a",alt:""})})})}),Object(t.jsx)("div",{className:"skill-mf",children:this.state.skills.map((function(e){return Object(t.jsxs)(n.a.Fragment,{children:[Object(t.jsx)("span",{children:e.content})," ",Object(t.jsx)("span",{className:"pull-right",children:e.porcentage}),Object(t.jsx)("div",{className:"progress",children:Object(t.jsx)("div",{className:"progress-bar",role:"progressbar",style:{width:e.porcentage},"aria-valuenow":e.value,"aria-valuemin":"0","aria-valuemax":"100"})})]},e.id)}))})]}),Object(t.jsx)("div",{className:"col-md-6",children:Object(t.jsxs)("div",{className:"about-me pt-4 pt-md-0",children:[Object(t.jsx)("div",{className:"title-box-2",children:Object(t.jsx)("h5",{className:"title-left",children:"About Me"})}),this.state.about_me.map((function(e){return Object(t.jsx)("p",{className:"lead",children:e.content},e.id)}))]})})]})})})})})})}}]),a}(n.a.Component),f=a(17),g=function(e){Object(m.a)(a,e);var s=Object(b.a)(a);function a(){return Object(d.a)(this,a),s.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){return Object(t.jsx)("section",{id:"work",className:"portfolio-mf sect-pt4 route",children:Object(t.jsxs)("div",{className:"container",children:[Object(t.jsx)("div",{className:"row",children:Object(t.jsx)("div",{className:"col-sm-12",children:Object(t.jsxs)("div",{className:"title-box text-center",children:[Object(t.jsx)("h3",{className:"title-a",children:"Portfolio"}),Object(t.jsx)("p",{className:"subtitle-a",children:"Here my most recent projects"}),Object(t.jsx)("div",{className:"line-mf"})]})})}),Object(t.jsxs)("div",{className:"row",children:[Object(t.jsx)("div",{className:"col-md-4",children:Object(t.jsxs)("div",{className:"work-box",children:[Object(t.jsx)("div",{className:"work-img",children:Object(t.jsx)("img",{src:"https://images.pexels.com/photos/6335/man-coffee-cup-pen.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",alt:"",className:"img-fluid"})}),Object(t.jsx)("div",{className:"work-content",children:Object(t.jsxs)("div",{className:"row",children:[Object(t.jsxs)("div",{className:"col-sm-8",children:[Object(t.jsx)("h2",{className:"w-title",children:"Newsy"}),Object(t.jsx)("div",{className:"w-more",children:Object(t.jsx)("span",{className:"w-ctegory",children:"ReactJS RestAPI NodeJS Express MongoDB HTML5 CSS3"})}),Object(t.jsx)(f.a,{className:"w-button",variant:"light",href:"https://github.com/benjambo/Newsy",children:"Github"})]}),Object(t.jsx)("div",{className:"col-sm-4",children:Object(t.jsx)("div",{className:"w-like"})})]})})]})}),Object(t.jsx)("div",{className:"col-md-4",children:Object(t.jsxs)("div",{className:"work-box",children:[Object(t.jsx)("div",{className:"work-img",children:Object(t.jsx)("img",{src:"https://images.pexels.com/photos/351300/pexels-photo-351300.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",alt:"",className:"img-fluid"})}),Object(t.jsx)("div",{className:"work-content",children:Object(t.jsxs)("div",{className:"row",children:[Object(t.jsxs)("div",{className:"col-sm-8",children:[Object(t.jsx)("h2",{className:"w-title",children:"Bikester"}),Object(t.jsxs)("div",{className:"w-more",children:[Object(t.jsx)("span",{className:"w-ctegory",children:"ReactJS RestAPI HTML5 CSS3"})," "]})]}),Object(t.jsx)("div",{className:"w-like",children:Object(t.jsx)("div",{className:"col-sm-4"})})]})})]})}),Object(t.jsx)("div",{className:"col-md-4",children:Object(t.jsxs)("div",{className:"work-box",children:[Object(t.jsx)("div",{className:"work-img",children:Object(t.jsx)("img",{src:"https://images.pexels.com/photos/965625/pexels-photo-965625.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1300",alt:"",className:"img-fluid"})}),Object(t.jsx)("div",{className:"work-content",children:Object(t.jsxs)("div",{className:"row",children:[Object(t.jsxs)("div",{className:"col-sm-8",children:[Object(t.jsx)("h2",{className:"w-title",children:"MovieSurfer"}),Object(t.jsx)("div",{className:"w-more",children:Object(t.jsx)("span",{className:"w-ctegory",children:"ReactJS Java mySQL Spring HTML5 CSS3"})})]}),Object(t.jsx)("div",{className:"col-sm-4",children:Object(t.jsx)("div",{className:"w-like"})})]})})]})}),Object(t.jsx)("div",{className:"col-md-4",children:Object(t.jsxs)("div",{className:"work-box",children:[Object(t.jsx)("div",{className:"work-img",children:Object(t.jsx)("img",{src:"https://images.pexels.com/photos/221210/pexels-photo-221210.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",alt:"",className:"img-fluid"})}),Object(t.jsx)("div",{className:"work-content",children:Object(t.jsxs)("div",{className:"row",children:[Object(t.jsxs)("div",{className:"col-sm-8",children:[Object(t.jsx)("h2",{className:"w-title",children:"iBeet"}),Object(t.jsx)("div",{className:"w-more",children:Object(t.jsx)("span",{className:"w-ctegory",children:"Java AndroidStudio"})})]}),Object(t.jsx)("div",{className:"col-sm-4",children:Object(t.jsx)("div",{className:"w-like"})})]})})]})}),Object(t.jsx)("div",{className:"col-md-4",children:Object(t.jsxs)("div",{className:"work-box",children:[Object(t.jsx)("div",{className:"work-img",children:Object(t.jsx)("img",{src:"https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",alt:"",className:"img-fluid"})}),Object(t.jsx)("div",{className:"work-content",children:Object(t.jsxs)("div",{className:"row",children:[Object(t.jsxs)("div",{className:"col-sm-8",children:[Object(t.jsx)("h2",{className:"w-title",children:"Sumwan The Game"}),Object(t.jsx)("div",{className:"w-more",children:Object(t.jsx)("span",{className:"w-ctegory",children:"C# Unity"})})]}),Object(t.jsx)("div",{className:"col-sm-4",children:Object(t.jsx)("div",{className:"w-like"})})]})})]})}),Object(t.jsx)("div",{className:"col-md-4",children:Object(t.jsxs)("div",{className:"work-box",children:[Object(t.jsx)("div",{className:"work-img",children:Object(t.jsx)("img",{src:"https://images.pexels.com/photos/982612/pexels-photo-982612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",alt:"",className:"img-fluid"})}),Object(t.jsx)("div",{className:"work-content",children:Object(t.jsxs)("div",{className:"row",children:[Object(t.jsxs)("div",{className:"col-sm-8",children:[Object(t.jsx)("h2",{className:"w-title",children:"Cup O'Roast"}),Object(t.jsx)("div",{className:"w-more",children:Object(t.jsx)("span",{className:"w-ctegory",children:"HTML5 CSS3 Bootstrap Javascript"})})]}),Object(t.jsx)("div",{className:"col-sm-4",children:Object(t.jsx)("div",{className:"w-like"})})]})})]})})]})]})})}}]),a}(n.a.Component),w=function(e){Object(m.a)(a,e);var s=Object(b.a)(a);function a(){return Object(d.a)(this,a),s.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){return Object(t.jsxs)("section",{className:"paralax-mf footer-paralax bg-image sect-mt4 route",style:{backgroundImage:"url(https://images.pexels.com/photos/3648850/pexels-photo-3648850.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)"},children:[Object(t.jsx)("div",{className:"overlay-mf"}),Object(t.jsx)("div",{className:"container",children:Object(t.jsx)("div",{className:"row",children:Object(t.jsx)("div",{className:"col-sm-12",children:Object(t.jsx)("div",{className:"contact-mf",children:Object(t.jsx)("div",{id:"contact",className:"box-shadow-full",children:Object(t.jsxs)("div",{className:"row",children:[Object(t.jsxs)("div",{className:"col-md-6",children:[Object(t.jsx)("div",{className:"title-box-2",children:Object(t.jsx)("h5",{className:"title-left",children:"Send A Message"})}),Object(t.jsx)("div",{children:Object(t.jsxs)("form",{action:"https://formspree.io/f/xeqpbazr",method:"POST",className:"contactForm",children:[Object(t.jsx)("div",{id:"sendmessage",children:"Your message has been sent. Thank you!"}),Object(t.jsx)("div",{id:"errormessage"}),Object(t.jsxs)("div",{className:"row",children:[Object(t.jsx)("div",{className:"col-md-12 mb-3",children:Object(t.jsxs)("div",{className:"form-group",children:[Object(t.jsx)("input",{type:"text",name:"name",className:"form-control",id:"name",placeholder:"Your Name","data-rule":"minlen:4","data-msg":"Please enter at least 4 chars"}),Object(t.jsx)("div",{className:"validation"})]})}),Object(t.jsx)("div",{className:"col-md-12 mb-3",children:Object(t.jsxs)("div",{className:"form-group",children:[Object(t.jsx)("input",{type:"email",className:"form-control",name:"email",id:"email",placeholder:"Your Email","data-rule":"email","data-msg":"Please enter a valid email"}),Object(t.jsx)("div",{className:"validation"})]})}),Object(t.jsx)("div",{className:"col-md-12 mb-3",children:Object(t.jsxs)("div",{className:"form-group",children:[Object(t.jsx)("input",{type:"text",className:"form-control",name:"subject",id:"subject",placeholder:"Subject","data-rule":"minlen:4","data-msg":"Please enter at least 8 chars of subject"}),Object(t.jsx)("div",{className:"validation"})]})}),Object(t.jsx)("div",{className:"col-md-12 mb-3",children:Object(t.jsxs)("div",{className:"form-group",children:[Object(t.jsx)("textarea",{className:"form-control",name:"message",rows:"5","data-rule":"required","data-msg":"Please write something for us",placeholder:"Message"}),Object(t.jsx)("div",{className:"validation"})]})}),Object(t.jsx)("div",{className:"col-md-12",children:Object(t.jsx)("button",{type:"submit",className:"button button-a button-big button-rouded",children:"Send Message"})})]})]})})]}),Object(t.jsxs)("div",{className:"col-md-6",children:[Object(t.jsx)("div",{className:"title-box-2 pt-4 pt-md-0",children:Object(t.jsx)("h5",{className:"title-left",children:"Get in Touch"})}),Object(t.jsxs)("div",{className:"more-info",children:[Object(t.jsxs)("p",{className:"lead",children:["Whether you want to get in touch, talk about a project collaboration, or just say hi, I'd love to hear from you.",Object(t.jsx)("br",{}),"Simply fill the from and send me an email."]}),Object(t.jsxs)("ul",{className:"list-ico",children:[Object(t.jsxs)("li",{children:[Object(t.jsx)("span",{className:"ion-ios-location"})," ",Object(t.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.google.com/maps/place/Uutiskatu+3,+00240+Helsinki/@60.2036909,24.9201223,19.55z/data=!4m5!3m4!1s0x469209ed15a1bbd7:0x56ba182486f5d7a!8m2!3d60.203713!4d24.920196",children:"00240 Helsinki"})]}),Object(t.jsxs)("li",{children:[Object(t.jsx)("span",{className:"ion-ios-telephone"})," ",Object(t.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"tel:+358409656771",children:"+358 40 9656771"})]}),Object(t.jsxs)("li",{children:[Object(t.jsx)("span",{className:"ion-email"})," ",Object(t.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"mailto:beni.schelling@gmail.com",children:"beni.schelling@gmail.com"})]})]})]}),Object(t.jsx)("div",{className:"socials",children:Object(t.jsxs)("ul",{children:[Object(t.jsx)("li",{children:Object(t.jsx)("a",{href:"https://github.com/benjambo",target:"_blank",rel:"noopener noreferrer",children:Object(t.jsx)("span",{className:"ico-circle",children:Object(t.jsx)("i",{className:"ion-social-github"})})})}),Object(t.jsx)("li",{children:Object(t.jsx)("a",{href:"https://linkedin.com/in/benschelling",target:"_blank",rel:"noopener noreferrer",children:Object(t.jsx)("span",{className:"ico-circle",children:Object(t.jsx)("i",{className:"ion-social-linkedin"})})})}),Object(t.jsx)("li",{children:Object(t.jsx)("a",{href:"https://instagram.com/benjaminjoshin",target:"_blank",rel:"noopener noreferrer",children:Object(t.jsx)("span",{className:"ico-circle",children:Object(t.jsx)("i",{className:"ion-social-instagram"})})})})]})})]})]})})})})})}),Object(t.jsx)("footer",{children:Object(t.jsx)("div",{className:"container",children:Object(t.jsx)("div",{className:"row",children:Object(t.jsx)("div",{className:"col-sm-12",children:Object(t.jsx)("div",{className:"copyright-box"})})})})})]})}}]),a}(n.a.Component),k=function(e){Object(m.a)(a,e);var s=Object(b.a)(a);function a(){return Object(d.a)(this,a),s.apply(this,arguments)}return Object(j.a)(a,[{key:"componentDidMount",value:function(){o()(".back-to-top").click((function(){return o()("html, body").animate({scrollTop:0},1500,"easeInOutExpo"),!1})),window.addEventListener("scroll",(function(){window.pageYOffset>100?(document.querySelector(".back-to-top").classList.remove("fadeOut"),document.querySelector(".back-to-top").style.display="block",document.querySelector(".back-to-top").classList.add("fadeIn")):(document.querySelector(".back-to-top").classList.remove("fadeIn"),document.querySelector(".back-to-top").classList.add("fadeOut"))}))}},{key:"render",value:function(){return Object(t.jsx)("a",{href:"#",className:"back-to-top animated",children:Object(t.jsx)("i",{className:"fa fa-chevron-up"})})}}]),a}(n.a.Component),y=function(e){Object(m.a)(a,e);var s=Object(b.a)(a);function a(){return Object(d.a)(this,a),s.apply(this,arguments)}return Object(j.a)(a,[{key:"componentDidMount",value:function(){o()(window).on("load",(function(){o()("#preloader").length&&o()("#preloader").delay(100).fadeOut("slow",(function(){o()(this).remove()}))}))}},{key:"render",value:function(){return Object(t.jsx)("div",{id:"preloader"})}}]),a}(n.a.Component),S=function(){return Object(t.jsxs)(n.a.Fragment,{children:[Object(t.jsx)(O,{}),Object(t.jsx)(v,{}),Object(t.jsx)(N,{}),Object(t.jsx)(g,{}),Object(t.jsx)(w,{}),Object(t.jsx)(k,{}),Object(t.jsx)(y,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(Object(t.jsx)(S,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.09aa1e51.chunk.js.map