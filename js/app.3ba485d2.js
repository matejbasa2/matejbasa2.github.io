(function(t){function e(e){for(var i,s,r=e[0],l=e[1],c=e[2],u=0,p=[];u<r.length;u++)s=r[u],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&p.push(n[s][0]),n[s]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);d&&d(e);while(p.length)p.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],i=!0,r=1;r<a.length;r++){var l=a[r];0!==n[l]&&(i=!1)}i&&(o.splice(e--,1),t=s(s.s=a[0]))}return t}var i={},n={app:0},o=[];function s(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=i,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(a,i,function(e){return t[e]}.bind(null,i));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var d=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var i=a("85ec"),n=a.n(i);n.a},"0428":function(t,e,a){},"15e2":function(t,e,a){"use strict";var i=a("3156"),n=a.n(i);n.a},"18b6":function(t,e,a){},"1b35":function(t,e,a){"use strict";var i=a("7899"),n=a.n(i);n.a},2355:function(t,e,a){},3156:function(t,e,a){},"38ca":function(t,e,a){"use strict";var i=a("ef17"),n=a.n(i);n.a},4830:function(t,e,a){"use strict";var i=a("18b6"),n=a.n(i);n.a},"4ef8":function(t,e,a){t.exports=a.p+"img/one.9c429588.jpg"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:{"text-dark":!t.nightMode,"text-light":t.nightMode},attrs:{id:"app"}},[a("Navbar",{attrs:{nightMode:t.nightMode},on:{scroll:t.scrollTo,nightMode:t.switchMode}}),a("section",{staticClass:"first"},[a("div",{staticClass:"parent"},[a("Home",{attrs:{nightMode:t.nightMode}}),a("About",{attrs:{id:"about",nightMode:t.nightMode}}),a("Skills",{attrs:{id:"skills",nightMode:t.nightMode}}),a("Contact",{attrs:{id:"contact",nightMode:t.nightMode}}),a("Footer",{attrs:{nightMode:t.nightMode}})],1)]),t._m(0),a("div",{staticClass:"slider"})],1)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"intro"},[a("div",{staticClass:"intro-text"},[a("h1",{staticClass:"hide"},[a("span",{staticClass:"text"},[t._v("My")])]),a("h1",{staticClass:"hide"},[a("span",{staticClass:"text"},[t._v("Portfolio")])])])])}],s=(a("4160"),a("caad"),a("2532"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav",{staticClass:"navbar navbar-expand-lg navbar-light fixed-top p-st",class:{"bg-light":!t.nightMode,"navbar-blur":t.navbarConfig.blur,"bg-dark2":t.nightMode}},[a("div",{staticClass:"container"},[a("a",{staticClass:"navbar-brand",attrs:{href:"/"},on:{click:function(e){return e.preventDefault(),t.$emit("scroll","home")}}},[a("Logo",{attrs:{nightMode:t.nightMode}})],1),a("Burger",{on:{"toggle-menu":function(e){t.active=!t.active}}}),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[a("ul",{staticClass:"navbar-nav ml-auto"},[a("li",{staticClass:"nav-item mx-2"},[a("a",{staticClass:"nav-link",class:{"text-light":t.nightMode},attrs:{href:"/about"},on:{click:function(e){return e.preventDefault(),t.$emit("scroll","about")}}},[t._v("about")])]),a("li",{staticClass:"nav-item mx-2"},[a("a",{staticClass:"nav-link",class:{"text-light":t.nightMode},attrs:{href:"/skills"},on:{click:function(e){return e.preventDefault(),t.$emit("scroll","skills")}}},[t._v("skills")])]),a("li",{staticClass:"nav-item mx-2"},[a("a",{staticClass:"nav-link",class:{"text-light":t.nightMode},attrs:{href:"/contact"},on:{click:function(e){return e.preventDefault(),t.$emit("scroll","contact")}}},[t._v("contact")])]),a("li",{staticClass:"nav-item ml-2"},[a("a",{staticClass:"nav-link",class:{"text-light":t.nightMode},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.switchMode(e)}}},[a("i",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:t.nightMode?"Light Mode":"Night Mode",expression:"nightMode ? 'Light Mode' : 'Night Mode'",modifiers:{bottom:!0}}],class:{"fas fa-moon":t.nightMode,"far fa-moon":!t.nightMode}})])])])])],1)])])}),r=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"logo-div"},[a("span",{staticClass:"logo-title-name",class:{pgray:!t.nightMode,"text-light":t.nightMode}}),a("span",{staticClass:"logo-title-dot pblue"},[t._v(t._s(t.dot))])])},c=[],d={name:"Baša Matej",logo_name:"matej",config:{use_cookies:!0,navbar:{blur:!1}},description:"I graduated as a Computer & Information Science engieneer at University of Ljubljana, Slovenia. I am mostly interested in Software Development, Front-end design, Back-end design, UX Design. I'm seeking exciting opportunities related to the same.<br><br>I'm a detail oriented person and I keep my goals and tasks organized to maintain productivity. I would bring to table a wide range of software skills, ranging from design and development to overall computer savy skills. I love to strive for perfection and believe that the skills that I have attained from my studies and work experience define me. I'm looking forward to implementing and polishing my skills in any opportunity that I receive. ",links:{linkedin:"https://www.linkedin.com/in/matej-baša/",github:"https://github.com/matejbasa2",resume_slo:"CV_Baša_slo.pdf",resume_eng:"CV_Baša_eng.pdf"},education:[{name:"University of Ljubljana, Faculty of Computer & Information Science",place:"Ljubljana, Slovenija",date:"2016 - 2021",degree:"Bachelors in Computer & Information Science",description:"Currently pursuing my Master's in Computer Science, while specializing in the field of Multi platform app development.",skills:["Graphic Design","Multimedia Technologies","Software Engineering","Digital Circuits","Digital Signal Processing","Algorithms","Data Mining","Web Development","Artificial Intelligence","Operating Systems","System Software","Game development"]},{name:"Highschool of Electrotechnology",place:"Novo mesto, Slovenija",date:"2012 - 2016",degree:"Secondary Professional Education (Highschool Diploma)",description:"Graduated from Manipal Institute of Technology, Manipal with a bachelors degree in Computer and Communications Engineering.",skills:["Networks","Plain & Rich Text Editors","Algorithms","Web Development","Computer Hardware","Database Management"]}],experience:[{name:"Adacta D.O.O.",place:"Ljubljana, Slovenia",date:"2021",position:"Quality Assurance Engineer",description:"Responsible for maintenance & development of automatic testing environment and all included test cases. Creation of upgrade scripts for platform version updates and similar. General help with development of insurrance software and continuous integration of those projects.",skills:["Markup","Powershell","Javascript & Typescript","Mocha & Chai","Docker","Github & Gitlab","Jira","Continuous integration"]},{name:"Visionect D.O.O.",place:"Ljubljana, Slovenia",date:"2020",position:"Quality Assurance Engineer",description:"Worked as a quality assurance engineer, where I was implementing scripts used for automated testing of different web app components for the company's Joan product line with the help of Pupeteer.",skills:["HTML","CSS","Javascript & Node.js","Pupetteer","Docker","Github","Jira","Scrum","Visual Studio Code"]},{name:"Project at Faculty of Electrical Engineering",place:"Ljubljana, Slovenia",date:"2019",position:"Android App Developer",description:"Developed an Android app that simulates device communication with optical data transfer, which I achieved by using the camera and flashlight of mobile devices. The app was used as an example of optical transfer technologies at Tehniski Muzej Slovenije, which served to motivate children and help them with learning.",skills:["Android (Java)","XML"]},{name:"Slovenian Society of Potters, Handicrafts Baša",place:"",date:"2013 - Present",position:"Website Manager",description:"Working as a part-time web developer for the Slovenian Society of Potters and Handicrafts Baša, where I manage & edit the site content.",skills:["HTML","CSS","FTP","Javascript","Bootstrap"]}],skills:[{title:"languages",info:["Python","Java","Javascript","Assembly","C++","SQL"],icon:"fa fa-code"},{title:"data frameworks",info:["Numpy","Pandas","OpenCV"],icon:"fa fa-cubes"},{title:"web technologies",info:["Vue","React","Node","HTML","CSS","Bootstrap"],icon:"fas fa-laptop-code"},{title:"databases",info:["MongoDB","MySQL","MariaDB","SQLite"],icon:"fa fa-database"},{title:"operating systems & tools",info:["MacOS","Ubuntu","Windows","Android","Agile","Github","Docker","Scrum","JIRA","Firebase"],icon:"fas fa-tools"},{title:"design",info:["Illustrator","XD","Photoshop","Premiere Pro","Sony Vegas","Gimp"],icon:"fa fa-pencil-square-o"}],portfolio:[{name:"Group Hub",pictures:[{img:a("4ef8")},{img:a("846e")},{img:a("8a14")},{img:a("5ec9")},{img:a("dae2")}],technologies:["Android","Jetpack","Java","Firebase","Google Cloud API","Geofencing"],category:"Mobile Application",date:"2020 - 2021",github:"https://github.com/hrishikeshpaul/music-sheet-recognizer-backend",visit:"https://github.com/hrishikeshpaul/music-sheet-recognizer-backend",description:"An Android app that offers users location based functionalities. This app was developed mostly for personal use and as a college assignment. With the help of Google Maps & Firebase APIs, I have developed the app to be a customizable and efficient way of tracking users withing a group and offer them location deppendant information and notifications."}],recommendations:[{title:"In his internship, Hrishikesh has demonstrated excellent learning ability, and with a dedicated, task oriented approach, he was able to complete his assignment ahead of time.",author:"Ushanas Shastri",position:"CTO",company:"Viteos Capital Market Services",location:"Mumbai"},{title:"I feel his budding leadership abilities will become even more effective in a diverse and challenging environment.",author:"Anil Dukkipatty",position:"CTO",company:"Elemential Labs",location:"Mumbai"},{title:"He has gained great knowledge and experience of SDE, and has learned ot develop the application keeping in mind the client's perpective and also making it creative.",author:"Chintan Shah",position:"Director",company:"Hridayam Soft Solution",location:"Mumbai"},{title:"During the course of his employment we have found him to be a self-started who was motivated, duty bound and a highly commited team player.",author:"Mrinal Pai",position:"Co-Founder & Director",company:"Skylark Drones",location:"Bangalore"}]},u=d,p={name:"Logo",props:{nightMode:{type:Boolean}},data:function(){return{name:u.logo_name}}},h=p,m=(a("5a36"),a("2877")),g=Object(m["a"])(h,l,c,!1,null,"7b5ec8a1",null),f=g.exports,b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"float-right",class:{active:t.isBurgerActive},attrs:{id:"burger"},on:{click:function(e){return e.preventDefault(),t.toggle(e)}}},[t._m(0),t._v(" > ")])},v=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"burger-button",attrs:{type:"button",title:"Menu"}},[a("span",{staticClass:"burger-bar burger-bar-1"}),a("span",{staticClass:"burger-bar burger-bar-2"}),a("span",{staticClass:"burger-bar burger-bar-3"})])}],k={name:"Burger",props:{isBurgerActive:{type:Boolean,required:!0,default:!1}},methods:{toggle:function(){this.isBurgerActive=!this.isBurgerActive,this.$emit("toggle-menu")}}},y=k,w=Object(m["a"])(y,b,v,!1,null,null,null),C=w.exports,M={name:"Navbar",props:{nightMode:{type:Boolean}},data:function(){return{navbarConfig:u.config.navbar,localNightMode:this.nightMode,isBurgerActive:!1}},components:{Logo:f,Burger:C},methods:{switchMode:function(){this.localNightMode=!this.localNightMode,this.$emit("nightMode",this.localNightMode)},toggle:function(){this.isBurgerActive=!this.isBurgerActive}}},x=M,_=(a("4830"),Object(m["a"])(x,s,r,!1,null,"3781a1be",null)),j=_.exports,S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"controler",staticClass:"pt-5 p-st",class:{"bg-white":!t.nightMode,"bg-dark":t.nightMode}},[a("div",{staticClass:"container",attrs:{"data-aos":"fade","data-aos-once":"true","data-aos-duration":"1000"}},[a("div",{staticClass:"row align-items-center"},[a("div",{staticClass:"col-xl-6 col-bg-6 col-md-6 col-sm-12"},[a("div",{ref:"sceneContainer",attrs:{id:"scene-container"}})]),a("div",{staticClass:"col-xl-6 col-bg-6 col-md-6 col-sm-12 pt-5"},[a("span",{staticClass:"home-title",class:{pgray:!t.nightMode,"text-light":t.nightMode}},[t._v("Hi! ")]),a("div",[a("p",{domProps:{innerHTML:t._s(t.description)}})]),a("div",{staticClass:"text-center pb-4"},[a("button",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:"LinkedIn",expression:"'LinkedIn'",modifiers:{bottom:!0}}],staticClass:"btn btn-outline-secondary mx-2",on:{click:function(e){return t.open("linkedin")}}},[a("i",{staticClass:"fab fa-linkedin"})]),a("button",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:"GitHub",expression:"'GitHub'",modifiers:{bottom:!0}}],staticClass:"btn btn-outline-secondary mx-2",on:{click:function(e){return t.open("github")}}},[a("i",{staticClass:"fab fa-github"})]),a("button",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:"Resume SLO",expression:"'Resume SLO'",modifiers:{bottom:!0}}],staticClass:"btn btn-outline-secondary mx-2",on:{click:function(e){return t.open("resume_slo")}}},[a("i",{staticClass:"fa fa-file"})]),a("button",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:"Resume ENG",expression:"'Resume ENG'",modifiers:{bottom:!0}}],staticClass:"btn btn-outline-secondary mx-2",on:{click:function(e){return t.open("resume_eng")}}},[a("i",{staticClass:"fa fa-file"})])])])])])])},I=[],L=(a("a4d3"),a("e01a"),a("b0c0"),a("4c53"),a("5a89")),O=a("4721"),B=a("34ad"),E={name:"Home",components:{},props:{nightMode:{type:Boolean}},data:function(){return{container:null,canvas:null,scene:null,camera:null,controls:null,renderer:null,raycaster:null,resized:null,controler:null,obj:null,plane:null,mouse:null,planeAspectRatio:null,fov:null,pointOfIntersection:null,description:u.description,resume:u.links.resume,linkedin:u.links.linkedin,github:u.links.github,name:u.name}},methods:{open:function(t){switch(t){case"linkedin":window.open(this.linkedin,"_blank");break;case"github":window.open(this.github,"_blank");break;case"resume":window.open(this.resume,"_blank");break}},mouseMove:function(t){this.obj&&(this.targetX=t.clientX/window.innerWidth*2-1,this.targetY=-t.clientY/window.innerHeight*2+1,this.obj.rotation.y=.8*(this.targetX-this.obj.rotation.y),this.obj.rotation.x=-.2*(this.targetY-this.obj.rotation.x),this.obj.rotation.z=.1*(this.targetY-this.obj.rotation.x))},init:function(){var t=this;this.container=this.$refs.sceneContainer,this.controler=this.$refs.controler,this.fov=1;var e=this.container.clientWidth/this.container.clientHeight,a=1,i=1e3,n=new L["Q"](this.fov,e,a,i);n.position.set(0,0,25),this.camera=n,this.scene=new L["ab"];var o=new L["n"](16777215,2236962,3),s=new L["h"](16777215,4);s.position.set(5,10,10),this.scene.add(o,s),this.controls=new O["a"](this.camera,this.container),this.controls.enableZoom=!1,this.$isMobile()?(this.controls.enabled=!0,this.controler.removeEventListener("mousemove",this.mouseMove)):(this.controls.enabled=!1,this.controler.addEventListener("mousemove",this.mouseMove));var r=new B["a"];r.load("/avatar.glb",(function(e){t.obj=e.scene;var a=(new L["c"]).setFromObject(t.obj),i=new L["mb"];a.getCenter(i),t.obj.position.sub(i),t.scene.add(t.obj)})),this.renderer=new L["pb"]({antialias:!0,alpha:!0}),this.renderer.setSize(this.container.clientWidth,this.container.clientHeight),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.gammaFactor=2.2,this.renderer.outputEncoding=L["qb"],this.renderer.physicallyCorrectLights=!0,this.container.appendChild(this.renderer.domElement),this.animate(),window.addEventListener("resize",(function(){t.camera.aspect=t.container.clientWidth/t.container.clientHeight,t.camera.updateProjectionMatrix(),t.renderer.setSize(t.container.clientWidth,t.container.clientHeight),t.renderer.setPixelRatio(window.devicePixelRatio);var e=(new L["c"]).setFromObject(t.obj),a=new L["mb"];e.getCenter(a),t.obj.position.sub(a)}))},animate:function(){requestAnimationFrame(this.animate),this.renderer.render(this.scene,this.camera)}},mounted:function(){this.init()}},A=E,T=(a("5770"),Object(m["a"])(A,S,I,!1,null,"18050774",null)),P=T.exports,D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"py-4 p-st",class:{"bg-light":!t.nightMode,"bg-dark2":t.nightMode,"text-light":t.nightMode}},[a("div",{staticClass:"container"},[a("div",{staticClass:"text-center",attrs:{"data-aos":"fade","data-aos-once":"true","data-aos-duration":"1000"}},[a("span",{staticClass:"title text-center",class:{pgray:!t.nightMode,"text-light":t.nightMode}},[t._v("about me")])]),a("hr",{class:{pgray:!t.nightMode,"bg-secondary":t.nightMode},attrs:{width:"50%"}}),a("div",{staticClass:"row"},[a("div",{staticClass:"col-xl-6 col-bg-6 col-md-6 col-sm-12"},[a("Timeline",{attrs:{data:t.education,nightMode:t.nightMode}})],1),a("div",{staticClass:"col-xl-6 col-bg-6 col-md-6 col-sm-12"},[a("Timeline",{attrs:{data:t.experience,nightMode:t.nightMode}})],1)])])])},$=[],H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"mx-3 mt-3 mb-5"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-xl-12 col-bg-12 col-md-12 col-sm-12"},[a("p",{staticClass:"title1",attrs:{"data-aos":"fade","data-aos-once":"true","data-aos-easing":"ease-in-out","data-aos-mirror":"true","data-aos-duration":"1000"}},[t._v(" "+t._s(t.data.title)+" ")]),t._l(t.data.data,(function(e,i){return a("ul",{key:e.name,staticClass:"timeline m-0 pt-1",style:{"transition-delay":i/4.2+"s"},attrs:{"data-aos":"fade-up","data-offset":"10","data-aos-once":"true","data-aos-easing":"ease-in-out","data-aos-mirror":"true","data-aos-duration":"500"}},[a("li",{staticClass:"m-0 pb-2"},[a("div",[a("div",{staticClass:"px-2 title2"},[t._v(t._s(e.name)+", "+t._s(e.place))]),a("div",{staticClass:"px-2 title3"},[t._v(" "+t._s(e.degree||e.position)+" "+t._s(e.gpa?"("+e.gpa+")":"")+" ")]),a("div",{staticClass:"px-2 date"},[t._v(t._s(e.date))]),a("div",{staticClass:"px-2 pb-2 pt-2",staticStyle:{"text-align":"justify"}},[t._v(" "+t._s(e.description)+" ")]),t._l(e.skills,(function(e){return a("span",{key:e,staticClass:"mx-2 badge p-2 mb-2",class:{"bg-dark2":t.nightMode}},[t._v(t._s(e))])})),a("p",{staticClass:"m-2"})],2)])])}))],2)])])])},N=[],G={name:"Timeline",props:{data:{type:Object},nightMode:{type:Boolean}}},V=G,F=(a("86a9"),Object(m["a"])(V,H,N,!1,null,"36e1a1bf",null)),R=F.exports,J={name:"About",components:{Timeline:R},props:{nightMode:{type:Boolean}},data:function(){return{education:{title:"education",data:u.education},experience:{title:"experiences",data:u.experience}}}},z=J,W=(a("15e2"),Object(m["a"])(z,D,$,!1,null,"533fe5dd",null)),Q=W.exports,X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"p-st",class:{"bg-white":!t.nightMode,"bg-dark":t.nightMode}},[a("div",{staticClass:"container py-4"},[a("div",{staticClass:"text-center",attrs:{"data-aos":"fade","data-aos-once":"true","data-aos-duration":"1000"}},[a("span",{staticClass:"title text-center",class:{pgray:!t.nightMode,"text-light":t.nightMode}},[t._v("skills")])]),a("hr",{class:{pgray:!t.nightMode,"bg-secondary":t.nightMode},attrs:{width:"50%"}}),a("br"),a("div",{staticClass:"row"},t._l(t.skills,(function(e,i){return a("div",{key:e.title,staticClass:"col-xl-4 col-bg-4 col-md-4 col-sm-12 text-center pb-5 px-4",style:{"transition-delay":i/4.2+"s"},attrs:{"data-aos":"fade-up","data-aos-offset":"10","data-aos-delay":"30","data-aos-duration":"500","data-aos-easing":"ease-in-out","data-aos-mirror":"true","data-aos-once":"true"}},[a("div",{staticClass:"bg-div"},[a("i",{class:e.icon})]),a("div",{staticClass:"title2 pt-2"},[t._v(t._s(e.title))]),a("hr",{class:{pgray:!t.nightMode,"bg-secondary":t.nightMode},attrs:{width:"50%"}}),a("span",{staticClass:"title3"},[t._v(t._s(e.info.join(", ")))])])})),0)])])},q=[],U={name:"Skills",props:{nightMode:{type:Boolean}},data:function(){return{skills:u.skills}}},Y=U,Z=(a("a25a"),Object(m["a"])(Y,X,q,!1,null,"7f07f048",null)),K=Z.exports,tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"p-st",class:{"bg-white":!t.nightMode,"bg-dark":t.nightMode}},[a("div",{staticClass:"container py-4"},[a("div",{staticClass:"text-center",attrs:{"data-aos":"fade","data-aos-once":"true","data-aos-duration":"1000"}},[a("span",{staticClass:"title text-center",class:{pgray:!t.nightMode,"text-light":t.nightMode}},[t._v("contact")])]),a("hr",{class:{pgray:!t.nightMode,"bg-secondary":t.nightMode},attrs:{width:"50%"}}),a("v-container",{staticClass:"mt-6"},[a("v-layout",{attrs:{wrap:"","my-5":""}},[t._l(t.contactLinks,(function(t,e){return[a("v-flex",{key:e,attrs:{sm6:"",md4:"",xs12:""}},[a("my-contact-info",{attrs:{contact:t}})],1)]}))],2)],1)],1)])},et=[],at=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-list-item",{style:{"transition-delay":t.idx/4.2+"s"},attrs:{"data-aos":"fade-up","data-aos-offset":"10","data-aos-delay":"30","data-aos-duration":"500","data-aos-easing":"ease-in-out","data-aos-mirror":"true","data-aos-once":"true"}},[a("v-list-item-icon",{staticClass:"pa-0 mr-2 icon"},[a("v-btn",{attrs:{icon:"",href:t.contact.link,target:"_blank"}},[a("v-icon",{staticStyle:{color:"rgb(212, 149, 97)"},attrs:{large:""}},[t._v(t._s(t.contact.icon))])],1)],1),a("v-list-item-content",[a("v-list-item-title",{class:{porange:!t.nightMode,"text-light":t.nightMode}},[t._v(t._s(t.contact.value))]),a("v-list-item-subtitle",{class:{pgray:!t.nightMode,"bg-secondary":t.nightMode}},[t._v(t._s(t.contact.name))])],1)],1)},it=[],nt={props:{contact:{type:Object,default:function(){return{}},nightMode:{type:Boolean}}}},ot=nt,st=(a("ff7f"),a("6544")),rt=a.n(st),lt=a("8336"),ct=a("132d"),dt=a("da13"),ut=a("5d23"),pt=a("34c3"),ht=Object(m["a"])(ot,at,it,!1,null,null,null),mt=ht.exports;rt()(ht,{VBtn:lt["a"],VIcon:ct["a"],VListItem:dt["a"],VListItemContent:ut["a"],VListItemIcon:pt["a"],VListItemSubtitle:ut["b"],VListItemTitle:ut["c"]});var gt={name:"Contact",components:{MyContactInfo:mt},props:{nightMode:{type:Boolean}},data:function(){return{contactLinks:[{name:"Email",value:"matej.basa2@gmail.com",link:"mailto:matej.basa2@gmail.com",icon:"mdi-email"},{name:"LinkedIn",value:"Matej Baša",link:"https://www.linkedin.com/in/matej-ba%C5%A1a-a654451a6/",icon:"mdi-linkedin"},{name:"Github",value:"matejbasa2",link:"https://github.com/matejbasa2/",icon:"mdi-github"},{name:"Facebook",value:"Matej Baša",link:"https://www.facebook.com/matej_basa",icon:"mdi-facebook"},{name:"Instagram",value:"@non5ens3",link:"https://www.instagram.com/uzir.thapa/",icon:"mdi-instagram"}]}},methods:{}},ft=gt,bt=(a("1b35"),a("a523")),vt=a("0e8f"),kt=a("a722"),yt=Object(m["a"])(ft,tt,et,!1,null,"5de666ce",null),wt=yt.exports;rt()(yt,{VContainer:bt["a"],VFlex:vt["a"],VLayout:kt["a"]});var Ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg-secondary"},[a("div",{staticClass:"container py-3"},[a("div",{staticClass:"row pt-1 align-items-center"},[t._m(0),a("div",{staticClass:"col-xl-6 col-bg-6 col-md-6 col-sm-6"},[a("div",{staticClass:"text-center"},[a("button",{directives:[{name:"tooltip",rawName:"v-tooltip.top",value:"LinkedIn",expression:"'LinkedIn'",modifiers:{top:!0}}],staticClass:"btn btn-outline-secondary mx-2",on:{click:function(e){return t.open("linkedin")}}},[a("i",{staticClass:"fab fa-linkedin"})]),a("button",{directives:[{name:"tooltip",rawName:"v-tooltip.top",value:"GitHub",expression:"'GitHub'",modifiers:{top:!0}}],staticClass:"btn btn-outline-secondary mx-2",on:{click:function(e){return t.open("github")}}},[a("i",{staticClass:"fab fa-github"})]),a("button",{directives:[{name:"tooltip",rawName:"v-tooltip.top",value:"Resume",expression:"'Resume'",modifiers:{top:!0}}],staticClass:"btn btn-outline-secondary mx-2",on:{click:function(e){return t.open("resume")}}},[a("i",{staticClass:"fa fa-file"})])])])])])])},Mt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-xl-6 col-bg-6 col-md-6 col-sm-6 pbelow",staticStyle:{color:"white"}},[a("span",[t._v("Made by: Matej Baša - 2021")])])}],xt={name:"Footer",data:function(){return{resume:u.links.resume,linkedin:u.links.linkedin,github:u.links.github}},methods:{open:function(t){switch(t){case"linkedin":window.open(this.linkedin,"_blank");break;case"github":window.open(this.github,"_blank");break;case"resume":window.open(this.resume,"_blank");break}}}},_t=xt,jt=(a("38ca"),Object(m["a"])(_t,Ct,Mt,!1,null,"668d22a0",null)),St=jt.exports,It=a("cffa"),Lt={name:"App",components:{Navbar:j,Home:P,About:Q,Skills:K,Contact:wt,Footer:St},data:function(){return{nightMode:!1,config:u.config}},created:function(){this.config.use_cookies&&(this.nightMode="true"===this.$cookie.get("nightMode"))},mounted:function(){var t=It["a"].timeline({defaults:{ease:"power1.out"}});t.to(".text",{y:"0%",duration:1,ease:"power1.out",stagger:.25}),t.to(".slider",{y:"-100%",duration:1.5,delay:.5}),t.to(".intro",{y:"-100%",duration:1},"-=1"),["about","contact","skills","portfolio"].forEach((function(t){if(window.location.href.includes(t)){var e=document.getElementById(t).offsetTop;window.scrollTo({top:e-35,behavior:"smooth"})}}))},methods:{switchMode:function(t){this.config.use_cookies&&this.$cookie.set("nightMode",t),this.nightMode=t},scrollTo:function(t){if("home"==t)this.$router.push("/"),window.scrollTo({top:-80,behavior:"smooth"});else{var e=document.getElementById(t).offsetTop;window.scrollTo({top:e-35,behavior:"smooth"}),this.$router.history.current.path!=="/".concat(t)&&this.$router.push("/".concat(t))}}}},Ot=Lt,Bt=(a("034f"),Object(m["a"])(Ot,n,o,!1,null,null,null)),Et=Bt.exports,At=a("227f"),Tt=a.n(At),Pt=a("f309");i["a"].use(Pt["a"]);var Dt=new Pt["a"]({}),$t=(a("612f"),a("0086")),Ht=a.n($t),Nt=a("eda8"),Gt=a("227c"),Vt=a.n(Gt),Ft=a("951b"),Rt=a("e37d"),Jt=a("ba48"),zt=a.n(Jt),Wt=a("7ec9");i["a"].use(Rt["a"]),i["a"].use(Ft["a"]),i["a"].use(Vt.a),i["a"].use(Wt),i["a"].use(Nt["a"]),i["a"].use(zt.a),i["a"].use(Ht.a,{disableClick:!1,touchClass:"",tapTolerance:10,touchHoldTolerance:400,swipeTolerance:30,longTapTimeInterval:400,namespace:"touch"}),i["a"].config.productionTip=!1;var Qt=[{path:"/"}],Xt=new Ft["a"]({mode:"history",routes:Qt});new i["a"]({created:function(){Tt.a.init()},router:Xt,vuetify:Dt,render:function(t){return t(Et)}}).$mount("#app")},5770:function(t,e,a){"use strict";var i=a("c671"),n=a.n(i);n.a},"5a36":function(t,e,a){"use strict";var i=a("bf1c"),n=a.n(i);n.a},"5ec9":function(t,e,a){t.exports=a.p+"img/four.b620608f.jpg"},7899:function(t,e,a){},"846e":function(t,e,a){t.exports=a.p+"img/two.6e292c7b.jpg"},"85ec":function(t,e,a){},"86a9":function(t,e,a){"use strict";var i=a("f108"),n=a.n(i);n.a},"8a14":function(t,e,a){t.exports=a.p+"img/three.85b5ed72.jpg"},a25a:function(t,e,a){"use strict";var i=a("0428"),n=a.n(i);n.a},bf1c:function(t,e,a){},c671:function(t,e,a){},dae2:function(t,e,a){t.exports=a.p+"img/five.ee94ede4.jpg"},ef17:function(t,e,a){},f108:function(t,e,a){},ff7f:function(t,e,a){"use strict";var i=a("2355"),n=a.n(i);n.a}});
//# sourceMappingURL=app.3ba485d2.js.map