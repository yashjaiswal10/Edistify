(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{100:function(e,t,n){},101:function(e,t,n){},102:function(e,t,n){},120:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(20),l=n.n(r),c=(n(70),n(21)),s=n.n(c),i=n(31),u=n(8),m=n(9),d=n(11),p=n(10),f=n(12),h=n(16),v=(n(72),n(73),n(15)),g=(n(74),function(e){return o.a.createElement("li",{className:"navItemLi",onClick:e.closenav},o.a.createElement(v.c,{to:e.link,exact:!0},e.children))}),E=n(39),b=n(14),_=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).state={navOpen:!1},n.closeNav=function(){n.setState({navOpen:!1})},n.openNav=function(){n.setState({navOpen:!0})},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e;return e=this.props.token?o.a.createElement(o.a.Fragment,null,o.a.createElement(g,{link:"/",closenav:this.closeNav},"Home"),o.a.createElement(g,{link:"/posts",closenav:this.closeNav},"Posts"),o.a.createElement(g,{link:"/newpost",closenav:this.closeNav},"Create New Post"),o.a.createElement(g,{link:"/userprofile/"+this.props.userId,closenav:this.closeNav},"My Profile"),o.a.createElement(g,{link:"/logout",closenav:this.closeNav},"Logout")):o.a.createElement(o.a.Fragment,null,o.a.createElement(g,{link:"/",closenav:this.closeNav},"Home"),o.a.createElement(g,{link:"/auth",closenav:this.closeNav},"Sign Up"),o.a.createElement(g,{link:"/signin",closenav:this.closeNav},"Sign In"),o.a.createElement(g,{link:"/posts",closenav:this.closeNav},"Posts")),o.a.createElement("nav",{className:"nav"},o.a.createElement("label",{htmlFor:"menu"},"menu"),o.a.createElement("input",{type:"checkbox",id:"menu"}),o.a.createElement("div",{className:"navigationButton__marks",onClick:this.openNav},o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null)),o.a.createElement(E.a,{mountOnEnter:!0,unmountOnExit:!0,in:this.state.navOpen,timeout:700,classNames:{enter:"",enterActive:"OpenNav",exit:"",exitActive:"CloseNav"}},o.a.createElement("div",{className:"nav__navItems"},o.a.createElement("div",{className:"nav__navItems__close"},o.a.createElement("div",{className:"nav__navItems__close__marks",onClick:this.closeNav},o.a.createElement("div",null),o.a.createElement("div",null))),o.a.createElement("ul",{className:"nav__navItems__items"},e))))}}]),t}(a.Component),k=Object(b.b)(function(e){return{token:e.auth.token,userId:e.auth.userId}})(_),N=(n(81),function(e){return o.a.createElement("footer",null,o.a.createElement("p",null,"\xa9BlogPosts, Inc, All Rights Reserved. ",o.a.createElement("span",null,"Terms of Service")))}),y=function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(k,null),o.a.createElement("main",null,e.children,o.a.createElement(N,null)))},I=n(13),S=n.n(I),O=(n(98),n(27)),w=function(e){return o.a.createElement("div",{className:"recent_posts__flex__post"},o.a.createElement("div",{className:"recent_posts__flex__post__image"},o.a.createElement("img",{className:"lazyload","data-src":e.photo,alt:"recent post Pic"})),o.a.createElement("h2",null,e.title),o.a.createElement("p",null,e.body),o.a.createElement("div",{className:"recent_posts__flex__post__postedBy"},"Posted By ",o.a.createElement("span",null,e.postCreator)," on ",o.a.createElement("span",null,e.createdAt)),o.a.createElement(O.a,{click:e.onGoToPost},"Read More"))},j=function(e){return e.blogs.map(function(t){return o.a.createElement(w,{key:t._id,photo:t.photo,title:t.title,body:t.body.substring(0,150)+"...",postCreator:t.user.name,createdAt:t.createdAt,onGoToPost:e.goToPost.bind(void 0,t._id)})})},P=n(28),x=(n(101),function(e){return o.a.createElement("div",{className:"mostActiveUsers__flex__user"},o.a.createElement("div",{className:"mostActiveUsers__flex__user__image"},o.a.createElement("img",{className:"lazyload","data-src":e.userPhoto,alt:"userPic"})),o.a.createElement("h4",null,e.name),o.a.createElement("p",null,"Number of Blogs: ",o.a.createElement("span",null,e.postNumber)),o.a.createElement(O.a,{click:e.onGoToProfile},"View Profile"))}),A=function(e){return e.users.map(function(t){return o.a.createElement(x,{key:t._id,userPhoto:t.photo,name:t.name,postNumber:t.posts.length,onGoToProfile:e.goToProfile.bind(void 0,t._id)})})},T=n(38),C=(n(102),T.a("allPosts",1,function(e){e.objectStoreNames.contains("posts")||e.createObjectStore("posts",{keyPath:"_id"}),e.objectStoreNames.contains("users")||e.createObjectStore("users",{keyPath:"_id"}),e.objectStoreNames.contains("sync-posts")||e.createObjectStore("sync-posts",{keyPath:"body"})}));var B=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).signal=S.a.CancelToken.source(),n.state={blogs:[],mostLikedBlog:null,followedUsers:[]},n.goToPost=function(e){n.props.history.push({pathname:"/post/"+e})},n.goToProfile=function(e){n.props.history.push("/userprofile/"+e)},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;S.a.post("/graphql",{query:"\n                query {\n                    posts {\n                    _id\n                    title\n                    body\n                    photo\n                    createdAt\n                    user {\n                      _id\n                      name\n                    }\n                    likes {\n                        _id\n                        name\n                    }\n                }\n                }\n            "},{headers:{"Content-Type":"application/json"},cancelToken:this.signal.token}).then(function(t){var n=t.data.data.posts,a=n.sort(function(e,t){return t.likes.length-e.likes.length}).shift();e.setState({blogs:n,mostLikedBlog:a})});return S.a.post("/graphql",{query:"\n                query {\n                    users {\n                    _id\n                    name\n                    photo\n                    posts {\n                    _id\n                    }\n                    followers {\n                        _id\n                    }\n                }  \n                }\n            "},{headers:{"Content-Type":"application/json"},cancelToken:this.signal.token}).then(function(t){var n=t.data.data.users;e.setState({followedUsers:n})})}},{key:"componentWillUnmount",value:function(){this.signal.cancel("cancelled")}},{key:"render",value:function(){var e,t=this,n=this.state,a=n.blogs,r=n.mostLikedBlog,l=n.followedUsers;return null===a||null===r||null===l?o.a.createElement(P.a,null):("indexedDB"in window&&(e="users",C.then(function(t){return t.transaction(e,"readonly").objectStore(e).getAll()})).then(function(e){navigator.onLine||t.setState({followedUsers:e})}),o.a.createElement(o.a.Fragment,null,o.a.createElement("section",{className:"section-most-viewed"},o.a.createElement("h2",null,"Most Liked Blog"),o.a.createElement("div",{className:"section-most-viewed__blog-parent"},o.a.createElement("div",{className:"section-most-viewed__blog-parent__blog"},o.a.createElement("p",null,"Blog Created By ",this.state.mostLikedBlog.user.name),o.a.createElement("h1",null,this.state.mostLikedBlog.title),o.a.createElement("p",null,this.state.mostLikedBlog.body.substring(0,200)+"..."),o.a.createElement(v.b,{to:"/post/"+this.state.mostLikedBlog._id},"Read More")),o.a.createElement("div",{className:"section-most-viewed__blog-parent__image"},o.a.createElement("img",{src:this.state.mostLikedBlog.photo,alt:"Blog_Pic"})))),o.a.createElement("div",{className:"recent_posts"},o.a.createElement("h1",null,"Recent Blogs"),o.a.createElement("div",{className:"recent_posts__flex"},o.a.createElement(j,{blogs:this.state.blogs.sort(function(e,t){return new Date(t.createdAt)-new Date(e.createdAt)}).slice(0,3),goToPost:this.goToPost}))),o.a.createElement("div",{className:"mostActiveUsers"},o.a.createElement("h2",null,"Most Followed Users"),o.a.createElement("div",{className:"mostActiveUsers__flex"},o.a.createElement(A,{users:this.state.followedUsers.slice(0,3).sort(function(e,t){return t.followers.length-e.followers.length}),goToProfile:this.goToProfile})))))}}]),t}(a.Component),L=n(30),U=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.props.onLogout()}},{key:"render",value:function(){return o.a.createElement(h.a,{to:"/"})}}]),t}(a.Component),G=Object(b.b)(function(e){return{token:e.auth.token,userId:e.auth.userId}},function(e){return{onLogout:function(){return e(L.b())}}})(U),D=n(61),F=n.n(D),M=o.a.lazy(function(){return n.e(9).then(n.bind(null,140))}),z=o.a.lazy(function(){return n.e(8).then(n.bind(null,209))}),R=o.a.lazy(function(){return n.e(7).then(n.bind(null,212))}),q=o.a.lazy(function(){return Promise.all([n.e(0),n.e(2),n.e(10)]).then(n.bind(null,210))}),W=o.a.lazy(function(){return Promise.all([n.e(0),n.e(2),n.e(1),n.e(6)]).then(n.bind(null,211))}),X=o.a.lazy(function(){return Promise.all([n.e(0),n.e(1),n.e(12),n.e(11)]).then(n.bind(null,213))}),H=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).state={installButton:!1},n.deferredPrompt=null,n.installApp=Object(i.a)(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.deferredPrompt){e.next=2;break}return e.abrupt("return",!1);case 2:return n.deferredPrompt.prompt(),e.next=5,n.deferredPrompt.userChoice;case 5:"accepted"==e.sent.outcome?console.log("App Installed"):console.log("App not installed"),n.deferredPrompt=null,n.setState({installButton:!1});case 9:case"end":return e.stop()}},e)})),n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("beforeinstallprompt",function(t){if(t.preventDefault(),e.deferredPrompt=t,window.matchMedia&&window.matchMedia("(display-mode: standalone)").matches||!0===window.navigator.standalone)return!1;e.setState({installButton:!0})}),this.props.onAuth()}},{key:"render",value:function(){return o.a.createElement(y,null,o.a.createElement(a.Suspense,{fallback:o.a.createElement(P.a,null)},o.a.createElement("div",{style:{width:"100%",backgroundColor:"#5CDB95"}},o.a.createElement(F.a,{condition:this.state.installButton,style:{border:"none",fontFamily:"inherit",fontSize:"inherit",cursor:"pointer",padding:"10px 20px",display:"inline-block",margin:"15px -25px",letterSpacing:"1px",fontWeight:700,outline:"none",position:"relative",background:"#cb4e4e",color:"#fff",boxShadow:"0 6px #ab3c3c",borderRadius:"0 0 5px 5px",left:"50%",transform:"translateX(-50%)"},onClick:this.installApp},"Install As Application")),o.a.createElement(h.d,null,this.props.token?null:o.a.createElement(h.b,{path:"/auth",render:function(e){return o.a.createElement(M,e)},exact:!0}),this.props.token?null:o.a.createElement(h.b,{path:"/signin",render:function(e){return o.a.createElement(z,e)},exact:!0}),o.a.createElement(h.b,{path:"/userprofile/:id",render:function(e){return o.a.createElement(R,e)},exact:!0}),this.props.token?o.a.createElement(h.b,{path:"/newpost",render:function(e){return o.a.createElement(q,e)},exact:!0}):null,o.a.createElement(h.b,{path:"/post/:id",render:function(e){return o.a.createElement(W,e)},exact:!0}),o.a.createElement(h.b,{path:"/posts",render:function(e){return o.a.createElement(X,e)},exact:!0}),this.props.token?o.a.createElement(h.b,{path:"/logout",component:G}):null,o.a.createElement(h.b,{path:"/",component:B,exact:!0}),o.a.createElement(h.a,{to:"/"}))))}}]),t}(a.Component),J=Object(h.g)(Object(b.b)(function(e){return{token:e.auth.token}},function(e){return{onAuth:function(){return e(L.a())}}})(H)),V=n(18),K=n(23),Q=n(49),Y={userId:null,token:null,loading:!1,error:null},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Q.SIGNINSTART:return Object(K.a)({},e,{loading:!0});case Q.SIGNINSUCCESS:return Object(K.a)({},e,{userId:t.userId,token:t.token,loading:!1});case Q.SIGNINFAIL:return Object(K.a)({},e,{error:t.error});case Q.LOGOUT:return Object(K.a)({},e,{userId:null,token:null,loading:!1});default:return e}},$=n(62),ee=Object(V.c)({auth:Z}),te=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||V.d,ne=Object(V.e)(ee,te(Object(V.a)(function(e){return function(e){return function(t){return e(t)}}},$.a))),ae=o.a.createElement(b.a,{store:ne},o.a.createElement(v.a,null,o.a.createElement(J,null)));l.a.render(ae,document.getElementById("root"))},27:function(e,t,n){"use strict";var a=n(0),o=n.n(a);n(99);t.a=function(e){var t=["myButton"];return e.centered&&t.push("centered"),e.red&&t.push("red"),o.a.createElement("button",{onClick:e.click,className:t.join(" "),type:e.type,disabled:e.disabled},e.children)}},28:function(e,t,n){"use strict";var a=n(0),o=n.n(a);n(100);t.a=function(e){return o.a.createElement("div",{className:"loader"},"Loading...")}},30:function(e,t,n){"use strict";n.d(t,"d",function(){return l}),n.d(t,"b",function(){return c}),n.d(t,"c",function(){return s}),n.d(t,"a",function(){return i});var a=n(13),o=n.n(a),r=n(49),l=function(e){return{type:r.SIGNINFAIL,error:e}},c=function(){return navigator.serviceWorker.ready.then(function(e){e.pushManager.getSubscription().then(function(e){e&&e.unsubscribe().then(function(t){var n=new FormData;return n.append("endpoint",e.endpoint),n.append("userId",localStorage.getItem("userId")),o.a.post("/unsubscribe",n,{headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer "+localStorage.getItem("token")}}).then(function(e){console.log(e)}).catch(function(e){console.log(e)})}).catch(function(e){console.log(e)})})}).then(function(){setTimeout(function(){localStorage.removeItem("token"),localStorage.removeItem("userId"),localStorage.removeItem("expDate")},500)}),{type:r.LOGOUT}},s=function(e,t){return function(n){n(function(e,t){return localStorage.setItem("token",e),localStorage.setItem("userId",t),localStorage.setItem("expDate",(new Date).getTime()+36e5),{type:r.SIGNINSUCCESS,token:e,userId:t}}(e,t)),setTimeout(function(){n(c())},36e5)}},i=function(){return function(e){if(localStorage.getItem("token"))if(new Date(localStorage.getItem("expDate"))<new Date)e(c());else{var t=localStorage.getItem("token"),n=localStorage.getItem("userId");e(s(t,n))}else e(c())}}},49:function(e,t,n){"use strict";n.r(t),n.d(t,"SIGNINSTART",function(){return a}),n.d(t,"SIGNINFAIL",function(){return o}),n.d(t,"SIGNINSUCCESS",function(){return r}),n.d(t,"LOGOUT",function(){return l});var a="SIGNINSTART",o="SIGNINFAIL",r="SIGNINSUCCESS",l="LOGOUT"},65:function(e,t,n){e.exports=n(120)},70:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},81:function(e,t,n){},98:function(e,t,n){},99:function(e,t,n){}},[[65,4,5]]]);
//# sourceMappingURL=main.6ff8bd67.chunk.js.map