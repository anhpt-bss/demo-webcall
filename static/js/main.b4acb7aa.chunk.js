(this.webpackJsonppeerjs=this.webpackJsonppeerjs||[]).push([[0],{10:function(n,e,o){},11:function(n,e){function o(n){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}o.keys=function(){return[]},o.resolve=o,n.exports=o,o.id=11},13:function(n,e,o){"use strict";o.r(e);var t=o(1),l=o.n(t),i=o(4),r=o.n(i),c=(o(10),o(3)),u=o(5),d=o.n(u),a=o(0);var v=function(){var n=Object(t.useState)(""),e=Object(c.a)(n,2),o=e[0],l=e[1],i=Object(t.useState)(""),r=Object(c.a)(i,2),u=r[0],v=r[1],s=Object(t.useRef)(null),j=Object(t.useRef)(null),f=Object(t.useRef)(null),b=Object(t.useRef)(null),g=Object(t.useRef)(null);Object(t.useEffect)((function(){var n=new d.a;console.log("peer",n),n.on("open",(function(n){console.log("id",n),l(n)})),n.on("call",(function(n){var e,o,t,l;console.log("on call",n),((null===(e=navigator)||void 0===e?void 0:e.getUserMedia)||(null===(o=navigator)||void 0===o?void 0:o.webkitGetUserMedia)||(null===(t=navigator)||void 0===t?void 0:t.mozGetUserMedia))({video:null===n||void 0===n||null===(l=n.metadata)||void 0===l?void 0:l.video,audio:!0},(function(e){var o;s.current.srcObject=e,null===s||void 0===s||null===(o=s.current)||void 0===o||o.play(),null===n||void 0===n||n.answer(e),n.on("stream",(function(n){var e;j.current.srcObject=n,null===j||void 0===j||null===(e=j.current)||void 0===e||e.play()})),g.current=e}),(function(n){console.log("Failed to get local stream",n)})),b.current=n})),n.on("close",(function(){console.log("Connection to PeerServer closed"),O()})),f.current=n}),[]);var O=function(){var n,e,o;(null===b||void 0===b?void 0:b.current)&&(null===b||void 0===b||null===(n=b.current)||void 0===n||n.close(),s.current.srcObject=null,j.current.srcObject=null,null===g||void 0===g||null===(e=g.current)||void 0===e||null===(o=e.getTracks())||void 0===o||o.forEach((function(n){return null===n||void 0===n?void 0:n.stop()})))};return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("div",{children:o}),Object(a.jsx)("input",{type:"text",value:u,onChange:function(n){var e;return v(null===n||void 0===n||null===(e=n.target)||void 0===e?void 0:e.value)}}),Object(a.jsxs)("div",{children:[Object(a.jsx)("button",{onClick:function(){return function(n){var e,o,t;((null===(e=navigator)||void 0===e?void 0:e.getUserMedia)||(null===(o=navigator)||void 0===o?void 0:o.webkitGetUserMedia)||(null===(t=navigator)||void 0===t?void 0:t.mozGetUserMedia))({video:!1,audio:!0},(function(e){var o,t;s.current.srcObject=e,null===s||void 0===s||null===(o=s.current)||void 0===o||o.play();var l=null===f||void 0===f||null===(t=f.current)||void 0===t?void 0:t.call(n,e,{metadata:{video:!1}});l.on("stream",(function(n){var e;console.log("remoteStream",n),j.current.srcObject=n,null===j||void 0===j||null===(e=j.current)||void 0===e||e.play()})),b.current=l,g.current=e}),(function(n){console.log("Failed to get local stream",n)}))}(u)},children:"Audio Call"}),Object(a.jsx)("button",{onClick:function(){return function(n){var e,o,t;((null===(e=navigator)||void 0===e?void 0:e.getUserMedia)||(null===(o=navigator)||void 0===o?void 0:o.webkitGetUserMedia)||(null===(t=navigator)||void 0===t?void 0:t.mozGetUserMedia))({video:!0,audio:!0},(function(e){var o,t;s.current.srcObject=e,null===s||void 0===s||null===(o=s.current)||void 0===o||o.play();var l=null===f||void 0===f||null===(t=f.current)||void 0===t?void 0:t.call(n,e,{metadata:{video:!0}});l.on("stream",(function(n){var e;console.log("remoteStream",n),j.current.srcObject=n,null===j||void 0===j||null===(e=j.current)||void 0===e||e.play()})),b.current=l,g.current=e}),(function(n){console.log("Failed to get local stream",n)}))}(u)},children:"Video Call"}),Object(a.jsx)("button",{onClick:function(){if(null===g||void 0===g?void 0:g.current){var n,e=null===g||void 0===g||null===(n=g.current)||void 0===n?void 0:n.getAudioTracks();null===e||void 0===e||e.forEach((function(n){n.enabled=!(null===n||void 0===n?void 0:n.enabled)}))}},children:"Toggle Audio"}),Object(a.jsx)("button",{onClick:function(){if(null===g||void 0===g?void 0:g.current){var n,e=null===g||void 0===g||null===(n=g.current)||void 0===n?void 0:n.getVideoTracks();null===e||void 0===e||e.forEach((function(n){n.enabled=!(null===n||void 0===n?void 0:n.enabled)}))}},children:"Toggle Video"}),Object(a.jsx)("button",{onClick:function(){return O(u)},children:"Hang Up"})]}),Object(a.jsx)("div",{children:Object(a.jsx)("video",{ref:s,style:{width:"100px"}})}),Object(a.jsx)("div",{children:Object(a.jsx)("video",{ref:j,style:{width:"100px"}})})]})},s=function(n){n&&n instanceof Function&&o.e(3).then(o.bind(null,14)).then((function(e){var o=e.getCLS,t=e.getFID,l=e.getFCP,i=e.getLCP,r=e.getTTFB;o(n),t(n),l(n),i(n),r(n)}))};r.a.render(Object(a.jsx)(l.a.StrictMode,{children:Object(a.jsx)(v,{})}),document.getElementById("root")),s()}},[[13,1,2]]]);
//# sourceMappingURL=main.b4acb7aa.chunk.js.map