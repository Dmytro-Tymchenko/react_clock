(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(7),o=n.n(c),a=n(2),i=n(3),l=n(5),s=n(4),r=n(1),m=n.n(r),u=(n(12),n(0)),h=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(a.a)(this,n);for(var c=arguments.length,o=new Array(c),i=0;i<c;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={time:new Date},e.timer=void 0,e.handleDocumentTime=function(){e.setState({time:new Date})},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.timer=window.setInterval(this.handleDocumentTime,1e3)}},{key:"componentDidUpdate",value:function(e){e.clockName!==this.props.clockName&&console.debug("Renamed from ".concat(e.clockName," to ").concat(this.props.clockName)),console.info("".concat(this.state.time.toUTCString().slice(-12,-4)))}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.timer)}},{key:"render",value:function(){var e=this.state.time,t=this.props.clockName;return Object(u.jsxs)("div",{className:"Clock",children:[Object(u.jsx)("strong",{className:"Clock__name",children:t})," time is ",Object(u.jsx)("span",{className:"Clock__time",children:e.toUTCString().slice(-12,-4)})]})}}]),n}(m.a.Component);function d(){var e=Date.now().toString().slice(-4);return"Clock-".concat(e)}var k=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(a.a)(this,n);for(var c=arguments.length,o=new Array(c),i=0;i<c;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={hasClock:!0,clockName:"Clock-0"},e.timedId=0,e.handleDocumentRightClick=function(t){t.preventDefault(),e.setState({hasClock:!1})},e.handleDocumentLeftClick=function(){e.setState({hasClock:!0})},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;document.addEventListener("contextmenu",this.handleDocumentRightClick),document.addEventListener("click",this.handleDocumentLeftClick),this.timedId=window.setInterval((function(){e.setState({clockName:d()})}),3300)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("contextmenu",this.handleDocumentLeftClick),document.removeEventListener("click",this.handleDocumentLeftClick),window.clearInterval(this.timedId)}},{key:"render",value:function(){var e=this.state.hasClock;return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"React clock"}),e&&Object(u.jsx)(h,{clockName:this.state.clockName})]})}}]),n}(m.a.Component);o.a.render(Object(u.jsx)(k,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.0e383678.chunk.js.map