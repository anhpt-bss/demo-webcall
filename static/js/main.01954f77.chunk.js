(this.webpackJsonppeerjs=this.webpackJsonppeerjs||[]).push([[0],{10:function(e,t,n){},11:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=11},13:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),o=n(4),i=n.n(o),a=(n(10),n(3)),u=n(5),l=n.n(u),s=n(0);var d=function(){var e=Object(r.useState)(""),t=Object(a.a)(e,2),n=t[0],c=t[1],o=Object(r.useState)(""),i=Object(a.a)(o,2),u=i[0],d=i[1],j=Object(r.useRef)(null),b=Object(r.useRef)(null),f=Object(r.useRef)(null),g=Object(r.useRef)(null),v=Object(r.useRef)(null);Object(r.useEffect)((function(){var e=new l.a;console.log("peer",e),e.on("open",(function(e){console.log("id",e),c(e)})),e.on("call",(function(e){console.log("on call",e),(navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia)({video:e.metadata.video,audio:!0},(function(t){j.current.srcObject=t,j.current.play(),e.answer(t),e.on("stream",(function(e){b.current.srcObject=e,b.current.play()})),v.current=t}),(function(e){console.log("Failed to get local stream",e)})),g.current=e})),e.on("close",(function(){console.log("Connection to PeerServer closed"),O()})),f.current=e}),[]);var O=function(){g.current&&(g.current.close(),j.current.srcObject=null,b.current.srcObject=null,v.current.getTracks().forEach((function(e){return e.stop()})))};return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("div",{children:n}),Object(s.jsx)("input",{type:"text",value:u,onChange:function(e){return d(e.target.value)}}),Object(s.jsxs)("div",{children:[Object(s.jsx)("button",{onClick:function(){return e=u,void(navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia)({video:!1,audio:!0},(function(t){j.current.srcObject=t,j.current.play();var n=f.current.call(e,t,{metadata:{video:!1}});n.on("stream",(function(e){console.log("remoteStream",e),b.current.srcObject=e,b.current.play()})),g.current=n,v.current=t}),(function(e){console.log("Failed to get local stream",e)}));var e},children:"Audio Call"}),Object(s.jsx)("button",{onClick:function(){return e=u,void(navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia)({video:!0,audio:!0},(function(t){j.current.srcObject=t,j.current.play();var n=f.current.call(e,t,{metadata:{video:!0}});n.on("stream",(function(e){console.log("remoteStream",e),b.current.srcObject=e,b.current.play()})),g.current=n,v.current=t}),(function(e){console.log("Failed to get local stream",e)}));var e},children:"Video Call"}),Object(s.jsx)("button",{onClick:function(){v.current&&v.current.getAudioTracks().forEach((function(e){e.enabled=!e.enabled}))},children:"Toggle Audio"}),Object(s.jsx)("button",{onClick:function(){v.current&&v.current.getVideoTracks().forEach((function(e){e.enabled=!e.enabled}))},children:"Toggle Video"}),Object(s.jsx)("button",{onClick:function(){return O(u)},children:"Hang Up"})]}),Object(s.jsx)("div",{children:Object(s.jsx)("video",{ref:j,style:{width:"100px"}})}),Object(s.jsx)("div",{children:Object(s.jsx)("video",{ref:b,style:{width:"100px"}})})]})},j=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),o(e),i(e)}))};i.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(d,{})}),document.getElementById("root")),j()}},[[13,1,2]]]);
//# sourceMappingURL=main.01954f77.chunk.js.map