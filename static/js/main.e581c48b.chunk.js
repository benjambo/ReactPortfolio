(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{13:function(e,t,s){},27:function(e,t,s){},29:function(e,t,s){},30:function(e,t,s){},37:function(e,t,s){},44:function(e,t,s){"use strict";s.r(t);var a=s(0),c=s(1),n=s.n(c),i=s(15),l=s.n(i),o=(s(13),s(26),s(27),s(28),s(29),s(30),s(31),s(32),s(33),s(34),s(2)),r=s.n(o);r.a.easing.jswing=r.a.easing.swing,r.a.extend(r.a.easing,{def:"easeOutQuad",swing:function(e,t,s,a,c){return r.a.easing[r.a.easing.def](e,t,s,a,c)},easeInQuad:function(e,t,s,a,c){return a*(t/=c)*t+s},easeOutQuad:function(e,t,s,a,c){return-a*(t/=c)*(t-2)+s},easeInOutQuad:function(e,t,s,a,c){return(t/=c/2)<1?a/2*t*t+s:-a/2*(--t*(t-2)-1)+s},easeInCubic:function(e,t,s,a,c){return a*(t/=c)*t*t+s},easeOutCubic:function(e,t,s,a,c){return a*((t=t/c-1)*t*t+1)+s},easeInOutCubic:function(e,t,s,a,c){return(t/=c/2)<1?a/2*t*t*t+s:a/2*((t-=2)*t*t+2)+s},easeInQuart:function(e,t,s,a,c){return a*(t/=c)*t*t*t+s},easeOutQuart:function(e,t,s,a,c){return-a*((t=t/c-1)*t*t*t-1)+s},easeInOutQuart:function(e,t,s,a,c){return(t/=c/2)<1?a/2*t*t*t*t+s:-a/2*((t-=2)*t*t*t-2)+s},easeInQuint:function(e,t,s,a,c){return a*(t/=c)*t*t*t*t+s},easeOutQuint:function(e,t,s,a,c){return a*((t=t/c-1)*t*t*t*t+1)+s},easeInOutQuint:function(e,t,s,a,c){return(t/=c/2)<1?a/2*t*t*t*t*t+s:a/2*((t-=2)*t*t*t*t+2)+s},easeInSine:function(e,t,s,a,c){return-a*Math.cos(t/c*(Math.PI/2))+a+s},easeOutSine:function(e,t,s,a,c){return a*Math.sin(t/c*(Math.PI/2))+s},easeInOutSine:function(e,t,s,a,c){return-a/2*(Math.cos(Math.PI*t/c)-1)+s},easeInExpo:function(e,t,s,a,c){return 0===t?s:a*Math.pow(2,10*(t/c-1))+s},easeOutExpo:function(e,t,s,a,c){return t===c?s+a:a*(1-Math.pow(2,-10*t/c))+s},easeInOutExpo:function(e,t,s,a,c){return 0===t?s:t===c?s+a:(t/=c/2)<1?a/2*Math.pow(2,10*(t-1))+s:a/2*(2-Math.pow(2,-10*--t))+s},easeInCirc:function(e,t,s,a,c){return-a*(Math.sqrt(1-(t/=c)*t)-1)+s},easeOutCirc:function(e,t,s,a,c){return a*Math.sqrt(1-(t=t/c-1)*t)+s},easeInOutCirc:function(e,t,s,a,c){return(t/=c/2)<1?-a/2*(Math.sqrt(1-t*t)-1)+s:a/2*(Math.sqrt(1-(t-=2)*t)+1)+s},easeInElastic:function(e,t,s,a,c){var n=1.70158,i=0,l=a;if(0===t)return s;if(1===(t/=c))return s+a;if(i||(i=.3*c),l<Math.abs(a)){l=a;n=i/4}else n=i/(2*Math.PI)*Math.asin(a/l);return-l*Math.pow(2,10*(t-=1))*Math.sin((t*c-n)*(2*Math.PI)/i)+s},easeOutElastic:function(e,t,s,a,c){var n=1.70158,i=0,l=a;if(0===t)return s;if(1===(t/=c))return s+a;if(i||(i=.3*c),l<Math.abs(a)){l=a;n=i/4}else n=i/(2*Math.PI)*Math.asin(a/l);return l*Math.pow(2,-10*t)*Math.sin((t*c-n)*(2*Math.PI)/i)+a+s},easeInOutElastic:function(e,t,s,a,c){var n=1.70158,i=0,l=a;if(0===t)return s;if(2===(t/=c/2))return s+a;if(i||(i=c*(.3*1.5)),l<Math.abs(a)){l=a;n=i/4}else n=i/(2*Math.PI)*Math.asin(a/l);return t<1?l*Math.pow(2,10*(t-=1))*Math.sin((t*c-n)*(2*Math.PI)/i)*-.5+s:l*Math.pow(2,-10*(t-=1))*Math.sin((t*c-n)*(2*Math.PI)/i)*.5+a+s},easeInBack:function(e,t,s,a,c,n){return void 0===n&&(n=1.70158),a*(t/=c)*t*((n+1)*t-n)+s},easeOutBack:function(e,t,s,a,c,n){return void 0===n&&(n=1.70158),a*((t=t/c-1)*t*((n+1)*t+n)+1)+s},easeInOutBack:function(e,t,s,a,c,n){return void 0===n&&(n=1.70158),(t/=c/2)<1?a/2*(t*t*((1+(n*=1.525))*t-n))+s:a/2*((t-=2)*t*((1+(n*=1.525))*t+n)+2)+s},easeInBounce:function(e,t,s,a,c){return a-r.a.easing.easeOutBounce(e,c-t,0,a,c)+s},easeOutBounce:function(e,t,s,a,c){return(t/=c)<1/2.75?a*(7.5625*t*t)+s:t<2/2.75?a*(7.5625*(t-=1.5/2.75)*t+.75)+s:t<2.5/2.75?a*(7.5625*(t-=2.25/2.75)*t+.9375)+s:a*(7.5625*(t-=2.625/2.75)*t+.984375)+s},easeInOutBounce:function(e,t,s,a,c){return t<c/2?.5*r.a.easing.easeInBounce(e,2*t,0,a,c)+s:.5*r.a.easing.easeOutBounce(e,2*t-c,0,a,c)+.5*a+s}});s(36);var d=s(3),j=s(4),m=s(6),b=s(5),u=s.p+"static/media/logoLight.64083e60.png",h=s.p+"static/media/logoDark.1cc20a4a.png",p=function(e){Object(m.a)(s,e);var t=Object(b.a)(s);function s(){var e;return Object(d.a)(this,s),(e=t.call(this)).state={logo:h},e}return Object(j.a)(s,[{key:"componentDidMount",value:function(){var e=this,t=r()("nav").outerHeight();r()(".navbar-toggler").on("click",(function(){r()("#mainNav").hasClass("navbar-reduce")||r()("#mainNav").addClass("navbar-reduce")})),r()("body").scrollspy({target:"#mainNav",offset:t}),r()(".js-scroll").on("click",(function(){r()(".navbar-collapse").collapse("hide")})),window.addEventListener("scroll",(function(){window.pageYOffset>50?(document.querySelector(".navbar-expand-md").classList.add("navbar-reduce"),document.querySelector(".navbar-expand-md").classList.remove("navbar-trans"),e.setState({logo:u})):(document.querySelector(".navbar-expand-md").classList.add("navbar-trans"),document.querySelector(".navbar-expand-md").classList.remove("navbar-reduce"),e.setState({logo:h}))})),r()('a.js-scroll[href*="#"]:not([href="#"])').on("click",(function(){if(window.location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")&&window.location.hostname===this.hostname){var e=r()(this.hash);if((e=e.length?e:r()("[name="+this.hash.slice(1)+"]")).length)return r()("html, body").animate({scrollTop:e.offset().top-t+5},1e3,"easeInExpo"),!1}})),r()(".js-scroll").on("click",(function(){r()(".navbar-collapse").collapse("hide")}))}},{key:"render",value:function(){return Object(a.jsx)("nav",{className:"navbar navbar-b navbar-trans navbar-expand-md fixed-top",id:"mainNav",children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("a",{className:"navbar-brand js-scroll",href:"#page-top",children:Object(a.jsx)("img",{src:this.state.logo,alt:"logo",style:{maxWidth:"100px"}})}),Object(a.jsxs)("button",{className:"navbar-toggler collapsed",type:"button","data-toggle":"collapse","data-target":"#navbarDefault","aria-controls":"navbarDefault","aria-expanded":"false","aria-label":"Toggle navigation",children:[Object(a.jsx)("span",{}),Object(a.jsx)("span",{}),Object(a.jsx)("span",{})]}),Object(a.jsx)("div",{className:"navbar-collapse collapse justify-content-end",id:"navbarDefault",children:Object(a.jsxs)("ul",{className:"navbar-nav",children:[Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)("a",{className:"nav-link js-scroll active",href:"#home",children:"Home"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)("a",{className:"nav-link js-scroll",href:"#about",children:"About"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)("a",{className:"nav-link js-scroll",href:"#work",children:"Work"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)("a",{className:"nav-link js-scroll",href:"#contact",children:"Contact"})})]})})]})})}}]),s}(n.a.Component),x=(s(37),s(16)),O=s.n(x),v=s.p+"static/media/coding.8c4a694b.mp4",A=function(e){Object(m.a)(s,e);var t=Object(b.a)(s);function s(){return Object(d.a)(this,s),t.apply(this,arguments)}return Object(j.a)(s,[{key:"render",value:function(){return Object(a.jsxs)("div",{id:"home",className:"intro route bg-image background",children:[Object(a.jsx)("div",{className:"video-container",children:Object(a.jsx)("video",{autoPlay:"autoplay",muted:!0,loop:"loop",className:"myVideo",children:Object(a.jsx)("source",{className:"myVideo",src:v,type:"video/mp4"})})}),Object(a.jsx)("div",{className:"intro-content display-table",children:Object(a.jsx)("div",{className:"table-cell",children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsxs)("h1",{className:"intro-title mb-4",children:["Hello, I'm ",Object(a.jsx)("br",{}),"Benjamin Schelling"]}),Object(a.jsxs)("p",{className:"intro-subtitle",children:[Object(a.jsx)("span",{className:"text-slider-items"}),Object(a.jsx)("strong",{className:"text-slider",children:Object(a.jsx)(O.a,{strings:["Full Stack Developer","Software Engineer"],typeSpeed:80,backDelay:1100,backSpeed:30,loop:!0})})]}),Object(a.jsx)("p",{className:"pt-3",children:Object(a.jsx)("a",{className:"btn btn-primary btn js-scroll px-4",href:"#work",role:"button",children:"View My Work"})})]})})})]})}}]),s}(n.a.Component),g=function(e){Object(m.a)(s,e);var t=Object(b.a)(s);function s(){var e;return Object(d.a)(this,s),(e=t.call(this)).state={skills:[{id:"JavaScript_skill",content:"JavaScript",porcentage:"90%",value:"90"},{id:"ReactJS_skill",content:"ReactJS",porcentage:"90%",value:"90"},{id:"NodeJS_skill",content:"NodeJS",porcentage:"90%",value:"90"},{id:"Java_skill",content:"Java",porcentage:"90%",value:"90"},{id:"Express_skill",content:"Express",porcentage:"70%",value:"70"},{id:"MongoDB_skill",content:"MongoDB Atlas",porcentage:"70%",value:"70"},{id:"Wordpress_skill",content:"Wordpress",porcentage:"70%",value:"70"},{id:"SQL_skill",content:"SQL",porcentage:"70%",value:"70"},{id:"HTML5_skill",content:"HTML5 & CSS3",porcentage:"95%",value:"95"}],about_me:[{id:"first-p-about",content:"I\u2019m a 24 year old software engineering student. I have a high interest in IT and love working among technology. During my studies and my own personal interest I have learned to work with Java, JavaScript, ReactJS, NodeJS, Express, MongoDB, SQL, HTML and CSS on strong bases and with these tools I have extensively boosted my knowledge in web and software development. I\u2019m determined on developing myself and on learning new skills."},{id:"second-p-about",content:"I proudly want to showcase my projects down below. I've created web applications with a ReactJS frontend, NodeJS backend and a MongoDB Atlas database. I've also used RESTAPIs which my project Newsy is a good example of. This site also has authentication which gives the user more functionality on the page after login."}]},e}return Object(j.a)(s,[{key:"render",value:function(){return Object(a.jsx)("section",{id:"about",className:"about-mf sect-pt4 route",children:Object(a.jsx)("div",{className:"container",children:Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col-sm-12",children:Object(a.jsx)("div",{className:"box-shadow-full",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsxs)("div",{className:"col-md-6",children:[Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col-sm-6 col-md-5",style:{margin:"0 auto"},children:Object(a.jsx)("div",{className:"about-img",style:{textAlign:"center"},children:Object(a.jsx)("img",{className:"img-fluid rounded b-shadow-a",alt:""})})})}),Object(a.jsx)("div",{className:"skill-mf",children:this.state.skills.map((function(e){return Object(a.jsxs)(n.a.Fragment,{children:[Object(a.jsx)("span",{children:e.content})," ",Object(a.jsx)("span",{className:"pull-right",children:e.porcentage}),Object(a.jsx)("div",{className:"progress",children:Object(a.jsx)("div",{className:"progress-bar",role:"progressbar",style:{width:e.porcentage},"aria-valuenow":e.value,"aria-valuemin":"0","aria-valuemax":"100"})})]},e.id)}))})]}),Object(a.jsx)("div",{className:"col-md-6",children:Object(a.jsxs)("div",{className:"about-me pt-4 pt-md-0",children:[Object(a.jsx)("div",{className:"title-box-2",children:Object(a.jsx)("h5",{className:"title-left",children:"About Me"})}),this.state.about_me.map((function(e){return Object(a.jsx)("p",{className:"lead",children:e.content},e.id)}))]})})]})})})})})})}}]),s}(n.a.Component),N=s(8),f="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAUYSURBVFiFxZdtiFRlFMd/586L7Uvu2q4lq9a6M/feWQfKHEUyjUCNKA0RMjA/WJm9GEb1RaJPfikKrAwiBYUwUcyIMP3Si4QQpK4v2bLO3JlN0vIFV0nXt507z+nDzKzXdWfclbI/DPfOc/7nnP957vM899wQN4Ebiz3e3Ny8b3RT0x9nzp49fDM+QMK2lzQ1Ne1qam7e19PT83s1rlU1ueu6WNYWoEFV80NJDlDiNorqVsdx2m5ZAMasARqAj9PZ7JeO4zSnUqlIJXoymYwmEommdDa7CVgL3CWqH96SAMdxZgCPAceu5vMrbdt+RFSP954/v7aSj9/Xt0ELhWOJePyhETU1byFyEnjKcZypwxaA6kIAFfmoRNwIjBCR/RVdirYaFdkYiUT6BD4BENWnK/lIJUPCtjsVJlqFglMIh1OiuhnVH9PZ7CwAx3HGYsxKETFWOPxeV1fXCUDceHw3Ig+ryIJQoeAZyzoM7E97XmpYM6AwHsh3dXfnLGNmFOXKFwHl34jIa8AK4/tfXXNjE4BlzIzaxsY0YIB7K+WpJMAC6hDpBYxaVgPFSKf77ar3B/iTKM2miJwCUMtq6OjoyAOXgZHDFWCAHlQbk8lkVOA4QAjaA/aNAf7nFKtHYSJFNceTyWQ9UMc14UMWACIeIL7vTzWwsxR8ueu6dwKkPW+pBY+pyOy0570K0NbW1gC8XFK4M5/PTwNANTNsAQI7irWahZlMZrfA90ArxrxfomiX532XyWR+KFcfCYVWA2MVvs1kMnv6d5Jl7Ri+gHx+E3AVWNY+YcJ9Yd9fDPykIr9V8kH1MCK7EHkuGYvFBZYAl0RkS5VCKyPhOKtV9Q2BX67k848ePXr0SjV+GamWltreurrdwGRVfTeTzb5diVv1KK7r7X1H4IDCtBGRyIqhJAforat7E5gM7Onz/VXVuKFqxhMXLuQbRo3aaYk0qsimnp6eU0MRMHrUqIuIhLGsl3K53LmhCv9fIACtra13RMPhVxBJ3KakneFo9LPOzs6+MMCISGQ9sOh2JC/D7+t7AHihvAjn387kJSyAa7ugtnRVVV2usG4Qh0MUX6vHAB/VpcGXE3C8ZN8LXEJ1sYrMCf6A1wP8WoBwMIPC6Uw2++nEeDxZEFl2XXrVzelsdptr208Ac9PZ7Ib29vadxvefBURE1h/xvG2ubU8SMEeKXdF1aGtr2xsJhT4AouWx6wSIiAL0gd6wP0VM/1V1dDwen9TV1XXAte19wFQKhe0AArNN6WhOxGLTNRRaE4gyFtVoMGz1nrAKLJhXut0O/Hkkl9ufbG0do9DffplQKC+q50T1HKqXUb1nYJzwwIGhQooCVhnYbkELoH44/CSBojKZzF5gTvm/G49vQeSZf0UAIinXdVvS6fQh27aLjaplzUO1n5JsbR3jh8MzS/x6YObAMLcuAERU5wLrPM87OG7cuBpUZwcJ+Wj0QVHdWi3ILa8BAKNaXgfU19TMotj9DAuDCvB9v1uMmSLGTBHV6UB6MJ7ArFRLSy2AwtxB4vzcH8eYKVx/DgADH4FqQywWuzuXy50GOsoiXcf5S1XjFJvReMCj5kJ9/aJEIvG1KRTml5sLgbGplpbaju7uvwNxcBzHksAaKXHBte1CYDYuAScDnJFAc+n+IoNPs39DMXAeODNgbDxQ/rS7kva8mrLTrxRbaygekZU+KCs948EW80iqtOMCh6BUdUH1eeAgxXb7v4ZBpINQ6EWAfwC/yukvYXD2zwAAAABJRU5ErkJggg==",w="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFNTE3OEEyQTk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFNTE3OEEyQjk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTI4OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTI5OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+m4QGuQAAAyRJREFUeNrEl21ojWEYx895TDPbMNlBK46IUiNmPvHBSUjaqc0H8pF5+aDUKPEBqU2NhRQpX5Rv5jWlDIWlMCv7MMSWsWwmb3tpXub4XXWdPHvc9/Gc41nu+nedc7/8r/99PffLdYdDPsvkwsgkTBwsA/PADJCnzX2gHTwBt8Hl7p537/3whn04XoDZDcpBlk+9P8AFcAghzRkJwPF4zGGw0Y9QS0mAM2AnQj77FqCzrtcwB1Hk81SYojHK4DyGuQ6mhIIrBWB9Xm7ug/6B/nZrBHBegrkFxoVGpnwBMSLR9EcEcC4qb8pP14BWcBcUgewMnF3T34VqhWMFkThLJAalwnENOAKiHpJq1FZgI2AT6HZtuxZwR9GidSHtI30jOrbawxlVX78/AbNfhHlomEUJJI89O2MqeE79T8/nk8nMBm/dK576hZgmA3cp/R4l9/UeSxiHLVIlNm4nFfT0bxyuIj7LHRTKai+zdJobwMKzcZSJb0ePV5PKN+BqAAKE47UlMnERELMM3EdYP/yrd+XYb2mOiYBiQ8OQnoRBlXrl9JZix7D1pHTazu4MoyBcnYamqAjIMTR8G4FT8LuhLsexXYYjICBiqhQBvYb6fLZIJCjPypVvaOoVAW2WcasCnL2Nq82xHJNSqlCeFcDshaPK0twkAhosjZL31QYw+1rlMpWGMArl23SBsZZO58F2tlJXmjOXS+s4WGvpMiBJT/I2PInZ6lIs9/hBsNS1hS6BG0DSqmYEDRlCXQrmy50P1oDRKTSegmNbUsA0zDMwRhPJXeCE3vWLPQMvan6X8AgIa1vcR4AkGZkDR4ejJ1UHpsaVI0g2LInpOsNFUud1rhxSV+fzC9Woz2EZkWQuja7/B+jUrgtIMpy9YCW4n4K41YfzRneW5E1KJTe4B2Zq1Q5EHEtj4U3AfEzR5SVY4l7QYQPJdN2as7RKBF0BPZqqH4VgMAMBL8Byxr7y8zCZiDlnOcEKIPmUpgB5Z2ww5RdOiiRiNajUmWda5IG6WbhsyY2fx6m8gLcoJDJFkH219M3We1+cnda93pfycZpIJEL/s/wSYADmOAwAQgdpBAAAAABJRU5ErkJggg==",k="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAhQAAAIUB4uz/wQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAGRSURBVFiF7da/SlxBFMfxz/oHg4uxC0pShKDNWiWCTd4jpS8hKewCeZMU+hSBFAELK/+AEPMHC0kKFdSsRhKzKeZeHNe9cOdeXVPsDwZ27r3nnO+emTNzGGige1ajx/w5nuEpHmESTYxjIvp2JJqf4DJ6d4wztLPfP/AVu9gpgmlhC507HuuY6Q7exF4fgufjE8ZigMU+Bs/HKxjKAOa7U9IHvYgBWvcAMBcDTCUYdvAW5zUBpuPJd+XX7m9m8wTvsnmVPfAtBmhXAMi1gLUKAAexk981AAhLuZiYydPYOIW8F0Cuh1gt6eciNkxZxyKAJt4Im7OMn3Zs/KsGQEN6+js4ip0cVQR4KZztVapgPwbYTQR4rF4JdrBBuFIJJXHjhipQQ7hMxkt+X6RDrk7CL4nGdYPD5xhg+xYcpupaY9ISOpqq65k6/mC2m2hZvU2Vsolf50GHI4CP+CAcy8fZswcYLUxiOV0IJbeJ91jCSv6yuyntpSGhMZ0QqmZYOHJ76afwBy6FRvVUSPdAA/2/+gdrjHZjP6MqBQAAAABJRU5ErkJggg==",M="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAErSURBVFiF7dgxSgNBFMbxX6IpAkoKg1VSCAZJLG30ELmLYGPhGYRcQKxFxAPkGKKNeAFJkXgALQYljBOzxt0syH7wmjf77fvvzM7OzBLUxS1meC84ZrjDgbnikzUUjmOCzgaucGT9aqJbE7pkuwQAmNWE7pjXC07xmGiDfVziMMo/4AzPCU8NA4ywFzfGYzPMQH6S8B1n8A0Tvm+JfoYbtRO+dgZfP/bVM5gKVQVQAVQAFUCeAK1VrskT4AKNH9qbOI+TqdVwgKclxdp4TeSnwkYjpV1sxcnNJYV+q5ZsQ/Glf/USVgC5Aaw0n/+ieGt1L8zZRWrgOuFbKVLfAXiTnuewI8ceWASwNtWFpy1L0zrGJQKMCafUsg6nvU+SDm6ExaTowlPhV0APPgCIP7xOwsIxFwAAAABJRU5ErkJggg==",y=function(e){Object(m.a)(s,e);var t=Object(b.a)(s);function s(){var e;Object(d.a)(this,s);for(var a=arguments.length,c=new Array(a),n=0;n<a;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).buttonNews=[{onClick:function(){return window.open("https://github.com/benjambo/Newsy")},src:w},{onClick:function(){return window.open("https://benjambo.github.io/Newsy/#/")},src:f}],e.buttonBike=[{onClick:function(){return window.open("https://github.com/benjambo/BikeApp")},src:w},{onClick:function(){return window.open("https://benjambo.github.io/BikeApp/#/")},src:f}],e.buttonMovie=[{onClick:function(){return window.open("https://github.com/benjambo/MovieSurfer")},src:w},{onClick:function(){return window.open("https://moviesurfer-app.herokuapp.com")},src:f}],e.buttoniBeet=[{onClick:function(){return window.open("https://github.com/benjambo/iBeet")},src:w},{onClick:function(){return window.open("https://drive.google.com/file/d/1uo0Kev8sFCPjIgD1F6f4zxuuvpxeOXIt/view")},src:k}],e.buttonSum=[{onClick:function(){return window.open("https://trello.com/b/BzLJ8w88/sumwans-socks")},src:M},{onClick:function(){return window.open("https://drive.google.com/file/d/1OKzLJIzBJRLKhQ6Vbz1Wsp1wR-lX65tp/view")},src:k}],e.buttonCup=[{onClick:function(){return window.open("https://github.com/Jepu32/ProjectCoffee")},src:w},{onClick:function(){return window.open("http://users.metropolia.fi/~benjambo/Projekti/Coffee.html")},src:f}],e}return Object(j.a)(s,[{key:"render",value:function(){return Object(a.jsx)("section",{id:"work",className:"portfolio-mf sect-pt4 route",children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col-sm-12",children:Object(a.jsxs)("div",{className:"title-box text-center",children:[Object(a.jsx)("h3",{className:"title-a",children:"Portfolio"}),Object(a.jsx)("p",{className:"subtitle-a",children:"Here my most recent projects"}),Object(a.jsx)("div",{className:"line-mf"})]})})}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-md-4",children:Object(a.jsxs)("div",{className:"work-box",children:[Object(a.jsx)("div",{className:"work-img",children:Object(a.jsx)("img",{src:"https://images.pexels.com/photos/6335/man-coffee-cup-pen.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",alt:"",className:"img-fluid"})}),Object(a.jsx)("div",{className:"work-content",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsxs)("div",{className:"col-sm-8",children:[Object(a.jsx)("h2",{className:"w-title",children:"Newsy"}),Object(a.jsx)("div",{className:"w-more",children:Object(a.jsx)("span",{className:"w-ctegory",children:"ReactJS RestAPI NodeJS Express MongoDB HTML5 CSS3"})})]}),Object(a.jsx)(N.a,{buttonType:"plus",dimension:40,buttonsList:this.buttonNews,top:"2%",left:"80%",direction:"up"}),Object(a.jsx)("div",{className:"col-sm-4",children:Object(a.jsx)("div",{className:"w-like"})})]})})]})}),Object(a.jsx)("div",{className:"col-md-4",children:Object(a.jsxs)("div",{className:"work-box",children:[Object(a.jsx)("div",{className:"work-img",children:Object(a.jsx)("img",{src:"https://images.pexels.com/photos/351300/pexels-photo-351300.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",alt:"",className:"img-fluid"})}),Object(a.jsx)("div",{className:"work-content",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsxs)("div",{className:"col-sm-8",children:[Object(a.jsx)("h2",{className:"w-title",children:"Bikester"}),Object(a.jsxs)("div",{className:"w-more",children:[Object(a.jsx)("span",{className:"w-ctegory",children:"ReactJS RestAPI HTML5 CSS3"})," "]})]}),Object(a.jsxs)("div",{className:"w-like",children:[Object(a.jsx)(N.a,{buttonType:"plus",dimension:40,buttonsList:this.buttonBike,top:"2%",left:"80%",direction:"up"}),Object(a.jsx)("div",{className:"col-sm-4"})]})]})})]})}),Object(a.jsx)("div",{className:"col-md-4",children:Object(a.jsxs)("div",{className:"work-box",children:[Object(a.jsx)("div",{className:"work-img",children:Object(a.jsx)("img",{src:"https://images.pexels.com/photos/965625/pexels-photo-965625.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1300",alt:"",className:"img-fluid"})}),Object(a.jsx)("div",{className:"work-content",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsxs)("div",{className:"col-sm-8",children:[Object(a.jsx)("h2",{className:"w-title",children:"MovieSurfer"}),Object(a.jsx)("div",{className:"w-more",children:Object(a.jsx)("span",{className:"w-ctegory",children:"ReactJS Java mySQL Spring HTML5 CSS3"})})]}),Object(a.jsx)(N.a,{buttonType:"plus",dimension:40,buttonsList:this.buttonMovie,top:"2%",left:"80%",direction:"up"}),Object(a.jsx)("div",{className:"col-sm-4",children:Object(a.jsx)("div",{className:"w-like"})})]})})]})}),Object(a.jsx)("div",{className:"col-md-4",children:Object(a.jsxs)("div",{className:"work-box",children:[Object(a.jsx)("div",{className:"work-img",children:Object(a.jsx)("img",{src:"https://images.pexels.com/photos/221210/pexels-photo-221210.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",alt:"",className:"img-fluid"})}),Object(a.jsx)("div",{className:"work-content",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsxs)("div",{className:"col-sm-8",children:[Object(a.jsx)("h2",{className:"w-title",children:"iBeet"}),Object(a.jsx)("div",{className:"w-more",children:Object(a.jsx)("span",{className:"w-ctegory",children:"Java AndroidStudio"})})]}),Object(a.jsx)(N.a,{buttonType:"plus",dimension:40,buttonsList:this.buttoniBeet,top:"2%",left:"80%",direction:"up"}),Object(a.jsx)("div",{className:"col-sm-4",children:Object(a.jsx)("div",{className:"w-like"})})]})})]})}),Object(a.jsx)("div",{className:"col-md-4",children:Object(a.jsxs)("div",{className:"work-box",children:[Object(a.jsx)("div",{className:"work-img",children:Object(a.jsx)("img",{src:"https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",alt:"",className:"img-fluid"})}),Object(a.jsx)("div",{className:"work-content",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsxs)("div",{className:"col-sm-8",children:[Object(a.jsx)("h2",{className:"w-title",children:"Sumwan The Game"}),Object(a.jsx)("div",{className:"w-more",children:Object(a.jsx)("span",{className:"w-ctegory",children:"C# Unity"})})]}),Object(a.jsx)(N.a,{buttonType:"plus",dimension:40,buttonsList:this.buttonSum,top:"2%",left:"80%",direction:"up"}),Object(a.jsx)("div",{className:"col-sm-4",children:Object(a.jsx)("div",{className:"w-like"})})]})})]})}),Object(a.jsx)("div",{className:"col-md-4",children:Object(a.jsxs)("div",{className:"work-box",children:[Object(a.jsx)("div",{className:"work-img",children:Object(a.jsx)("img",{src:"https://images.pexels.com/photos/982612/pexels-photo-982612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",alt:"",className:"img-fluid"})}),Object(a.jsx)("div",{className:"work-content",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsxs)("div",{className:"col-sm-8",children:[Object(a.jsx)("h2",{className:"w-title",children:"Cup O'Roast"}),Object(a.jsx)("div",{className:"w-more",children:Object(a.jsx)("span",{className:"w-ctegory",children:"HTML5 CSS3 Bootstrap Javascript"})})]}),Object(a.jsx)(N.a,{buttonType:"plus",dimension:40,buttonsList:this.buttonCup,top:"2%",left:"80%",direction:"up"}),Object(a.jsx)("div",{className:"col-sm-4",children:Object(a.jsx)("div",{className:"w-like"})})]})})]})})]})]})})}}]),s}(n.a.Component),I=function(e){Object(m.a)(s,e);var t=Object(b.a)(s);function s(){return Object(d.a)(this,s),t.apply(this,arguments)}return Object(j.a)(s,[{key:"render",value:function(){return Object(a.jsxs)("section",{className:"paralax-mf footer-paralax bg-image sect-mt4 route",style:{backgroundImage:"url(https://images.pexels.com/photos/3648850/pexels-photo-3648850.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)"},children:[Object(a.jsx)("div",{className:"overlay-mf"}),Object(a.jsx)("div",{className:"container",children:Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col-sm-12",children:Object(a.jsx)("div",{className:"contact-mf",children:Object(a.jsx)("div",{id:"contact",className:"box-shadow-full",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsxs)("div",{className:"col-md-6",children:[Object(a.jsx)("div",{className:"title-box-2",children:Object(a.jsx)("h5",{className:"title-left",children:"Send A Message"})}),Object(a.jsx)("div",{children:Object(a.jsxs)("form",{action:"https://formspree.io/f/xeqpbazr",method:"POST",className:"contactForm",children:[Object(a.jsx)("div",{id:"sendmessage",children:"Your message has been sent. Thank you!"}),Object(a.jsx)("div",{id:"errormessage"}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-md-12 mb-3",children:Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("input",{type:"text",name:"name",className:"form-control",id:"name",placeholder:"Your Name","data-rule":"minlen:4","data-msg":"Please enter at least 4 chars"}),Object(a.jsx)("div",{className:"validation"})]})}),Object(a.jsx)("div",{className:"col-md-12 mb-3",children:Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("input",{type:"email",className:"form-control",name:"email",id:"email",placeholder:"Your Email","data-rule":"email","data-msg":"Please enter a valid email"}),Object(a.jsx)("div",{className:"validation"})]})}),Object(a.jsx)("div",{className:"col-md-12 mb-3",children:Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("input",{type:"text",className:"form-control",name:"subject",id:"subject",placeholder:"Subject","data-rule":"minlen:4","data-msg":"Please enter at least 8 chars of subject"}),Object(a.jsx)("div",{className:"validation"})]})}),Object(a.jsx)("div",{className:"col-md-12 mb-3",children:Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("textarea",{className:"form-control",name:"message",rows:"5","data-rule":"required","data-msg":"Please write something for us",placeholder:"Message"}),Object(a.jsx)("div",{className:"validation"})]})}),Object(a.jsx)("div",{className:"col-md-12",children:Object(a.jsx)("button",{type:"submit",className:"button button-a button-big button-rouded",children:"Send Message"})})]})]})})]}),Object(a.jsxs)("div",{className:"col-md-6",children:[Object(a.jsx)("div",{className:"title-box-2 pt-4 pt-md-0",children:Object(a.jsx)("h5",{className:"title-left",children:"Get in Touch"})}),Object(a.jsxs)("div",{className:"more-info",children:[Object(a.jsxs)("p",{className:"lead",children:["Whether you want to get in touch, talk about a project collaboration, or just say hi, I'd love to hear from you.",Object(a.jsx)("br",{}),"Simply fill the from and send me an email."]}),Object(a.jsxs)("ul",{className:"list-ico",children:[Object(a.jsxs)("li",{children:[Object(a.jsx)("span",{className:"ion-ios-location"})," ",Object(a.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.google.com/maps/place/Uutiskatu+3,+00240+Helsinki/@60.2036909,24.9201223,19.55z/data=!4m5!3m4!1s0x469209ed15a1bbd7:0x56ba182486f5d7a!8m2!3d60.203713!4d24.920196",children:"00240 Helsinki"})]}),Object(a.jsxs)("li",{children:[Object(a.jsx)("span",{className:"ion-ios-telephone"})," ",Object(a.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"tel:+358409656771",children:"+358 40 9656771"})]}),Object(a.jsxs)("li",{children:[Object(a.jsx)("span",{className:"ion-email"})," ",Object(a.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"mailto:beni.schelling@gmail.com",children:"beni.schelling@gmail.com"})]})]})]}),Object(a.jsx)("div",{className:"socials",children:Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"https://github.com/benjambo",target:"_blank",rel:"noopener noreferrer",children:Object(a.jsx)("span",{className:"ico-circle",children:Object(a.jsx)("i",{className:"ion-social-github"})})})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"https://linkedin.com/in/benschelling",target:"_blank",rel:"noopener noreferrer",children:Object(a.jsx)("span",{className:"ico-circle",children:Object(a.jsx)("i",{className:"ion-social-linkedin"})})})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"https://instagram.com/benjaminjoshin",target:"_blank",rel:"noopener noreferrer",children:Object(a.jsx)("span",{className:"ico-circle",children:Object(a.jsx)("i",{className:"ion-social-instagram"})})})})]})})]})]})})})})})}),Object(a.jsx)("footer",{children:Object(a.jsx)("div",{className:"container",children:Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col-sm-12",children:Object(a.jsx)("div",{className:"copyright-box"})})})})})]})}}]),s}(n.a.Component),S=function(e){Object(m.a)(s,e);var t=Object(b.a)(s);function s(){return Object(d.a)(this,s),t.apply(this,arguments)}return Object(j.a)(s,[{key:"componentDidMount",value:function(){r()(".back-to-top").click((function(){return r()("html, body").animate({scrollTop:0},1500,"easeInOutExpo"),!1})),window.addEventListener("scroll",(function(){window.pageYOffset>100?(document.querySelector(".back-to-top").classList.remove("fadeOut"),document.querySelector(".back-to-top").style.display="block",document.querySelector(".back-to-top").classList.add("fadeIn")):(document.querySelector(".back-to-top").classList.remove("fadeIn"),document.querySelector(".back-to-top").classList.add("fadeOut"))}))}},{key:"render",value:function(){return Object(a.jsx)("a",{href:"#",className:"back-to-top animated",children:Object(a.jsx)("i",{className:"fa fa-chevron-up"})})}}]),s}(n.a.Component),B=function(e){Object(m.a)(s,e);var t=Object(b.a)(s);function s(){return Object(d.a)(this,s),t.apply(this,arguments)}return Object(j.a)(s,[{key:"componentDidMount",value:function(){r()(window).on("load",(function(){r()("#preloader").length&&r()("#preloader").delay(100).fadeOut("slow",(function(){r()(this).remove()}))}))}},{key:"render",value:function(){return Object(a.jsx)("div",{id:"preloader"})}}]),s}(n.a.Component),C=function(){return Object(a.jsxs)(n.a.Fragment,{children:[Object(a.jsx)(p,{}),Object(a.jsx)(A,{}),Object(a.jsx)(g,{}),Object(a.jsx)(y,{}),Object(a.jsx)(I,{}),Object(a.jsx)(S,{}),Object(a.jsx)(B,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(Object(a.jsx)(C,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[44,1,2]]]);
//# sourceMappingURL=main.e581c48b.chunk.js.map