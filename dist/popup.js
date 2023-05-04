import{l as H}from"./log.js";import{w as at,d as ut}from"./client-state.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const _ of i.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&o(_)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();var oe,f,De,C,Pe,Ke,ue,X={},Fe=[],ft=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function A(t,e){for(var n in e)t[n]=e[n];return t}function Be(t){var e=t.parentNode;e&&e.removeChild(t)}function dt(t,e,n){var o,s,i,_={};for(i in e)i=="key"?o=e[i]:i=="ref"?s=e[i]:_[i]=e[i];if(arguments.length>2&&(_.children=arguments.length>3?oe.call(arguments,2):n),typeof t=="function"&&t.defaultProps!=null)for(i in t.defaultProps)_[i]===void 0&&(_[i]=t.defaultProps[i]);return J(t,_,o,s,null)}function J(t,e,n,o,s){var i={type:t,props:e,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:s??++De};return s==null&&f.vnode!=null&&f.vnode(i),i}function re(t){return t.children}function M(t,e){this.props=t,this.context=e}function F(t,e){if(e==null)return t.__?F(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null)return n.__e;return typeof t.type=="function"?F(t):null}function je(t){var e,n;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null){t.__e=t.__c.base=n.__e;break}return je(t)}}function Ae(t){(!t.__d&&(t.__d=!0)&&C.push(t)&&!Z.__r++||Pe!==f.debounceRendering)&&((Pe=f.debounceRendering)||Ke)(Z)}function Z(){var t,e,n,o,s,i,_,c;for(C.sort(ue);t=C.shift();)t.__d&&(e=C.length,o=void 0,s=void 0,_=(i=(n=t).__v).__e,(c=n.__P)&&(o=[],(s=A({},i)).__v=i.__v+1,ye(c,i,s,n.__n,c.ownerSVGElement!==void 0,i.__h!=null?[_]:null,o,_??F(i),i.__h),Ge(o,i),i.__e!=_&&je(i)),C.length>e&&C.sort(ue));Z.__r=0}function ze(t,e,n,o,s,i,_,c,u,v){var r,y,d,a,h,N,m,g=o&&o.__k||Fe,w=g.length;for(n.__k=[],r=0;r<e.length;r++)if((a=n.__k[r]=(a=e[r])==null||typeof a=="boolean"||typeof a=="function"?null:typeof a=="string"||typeof a=="number"||typeof a=="bigint"?J(null,a,null,null,a):Array.isArray(a)?J(re,{children:a},null,null,null):a.__b>0?J(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):a)!=null){if(a.__=n,a.__b=n.__b+1,(d=g[r])===null||d&&a.key==d.key&&a.type===d.type)g[r]=void 0;else for(y=0;y<w;y++){if((d=g[y])&&a.key==d.key&&a.type===d.type){g[y]=void 0;break}d=null}ye(t,a,d=d||X,s,i,_,c,u,v),h=a.__e,(y=a.ref)&&d.ref!=y&&(m||(m=[]),d.ref&&m.push(d.ref,null,a),m.push(y,a.__c||h,a)),h!=null?(N==null&&(N=h),typeof a.type=="function"&&a.__k===d.__k?a.__d=u=We(a,u,t):u=Re(t,a,d,g,h,u),typeof n.type=="function"&&(n.__d=u)):u&&d.__e==u&&u.parentNode!=t&&(u=F(d))}for(n.__e=N,r=w;r--;)g[r]!=null&&(typeof n.type=="function"&&g[r].__e!=null&&g[r].__e==n.__d&&(n.__d=qe(o).nextSibling),Ye(g[r],g[r]));if(m)for(r=0;r<m.length;r++)Je(m[r],m[++r],m[++r])}function We(t,e,n){for(var o,s=t.__k,i=0;s&&i<s.length;i++)(o=s[i])&&(o.__=t,e=typeof o.type=="function"?We(o,e,n):Re(n,o,o,s,o.__e,e));return e}function Re(t,e,n,o,s,i){var _,c,u;if(e.__d!==void 0)_=e.__d,e.__d=void 0;else if(n==null||s!=i||s.parentNode==null)e:if(i==null||i.parentNode!==t)t.appendChild(s),_=null;else{for(c=i,u=0;(c=c.nextSibling)&&u<o.length;u+=1)if(c==s)break e;t.insertBefore(s,i),_=i}return _!==void 0?_:s.nextSibling}function qe(t){var e,n,o;if(t.type==null||typeof t.type=="string")return t.__e;if(t.__k){for(e=t.__k.length-1;e>=0;e--)if((n=t.__k[e])&&(o=qe(n)))return o}return null}function ht(t,e,n,o,s){var i;for(i in n)i==="children"||i==="key"||i in e||ee(t,i,null,n[i],o);for(i in e)s&&typeof e[i]!="function"||i==="children"||i==="key"||i==="value"||i==="checked"||n[i]===e[i]||ee(t,i,e[i],n[i],o)}function Ie(t,e,n){e[0]==="-"?t.setProperty(e,n??""):t[e]=n==null?"":typeof n!="number"||ft.test(e)?n:n+"px"}function ee(t,e,n,o,s){var i;e:if(e==="style")if(typeof n=="string")t.style.cssText=n;else{if(typeof o=="string"&&(t.style.cssText=o=""),o)for(e in o)n&&e in n||Ie(t.style,e,"");if(n)for(e in n)o&&n[e]===o[e]||Ie(t.style,e,n[e])}else if(e[0]==="o"&&e[1]==="n")i=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+i]=n,n?o||t.addEventListener(e,i?xe:Ce,i):t.removeEventListener(e,i?xe:Ce,i);else if(e!=="dangerouslySetInnerHTML"){if(s)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!=="width"&&e!=="height"&&e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e in t)try{t[e]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&e[4]!=="-"?t.removeAttribute(e):t.setAttribute(e,n))}}function Ce(t){return this.l[t.type+!1](f.event?f.event(t):t)}function xe(t){return this.l[t.type+!0](f.event?f.event(t):t)}function ye(t,e,n,o,s,i,_,c,u){var v,r,y,d,a,h,N,m,g,w,j,L,we,z,W,S=e.type;if(e.constructor!==void 0)return null;n.__h!=null&&(u=n.__h,c=e.__e=n.__e,e.__h=null,i=[c]),(v=f.__b)&&v(e);try{e:if(typeof S=="function"){if(m=e.props,g=(v=S.contextType)&&o[v.__c],w=v?g?g.props.value:v.__:o,n.__c?N=(r=e.__c=n.__c).__=r.__E:("prototype"in S&&S.prototype.render?e.__c=r=new S(m,w):(e.__c=r=new M(m,w),r.constructor=S,r.render=pt),g&&g.sub(r),r.props=m,r.state||(r.state={}),r.context=w,r.__n=o,y=r.__d=!0,r.__h=[],r._sb=[]),r.__s==null&&(r.__s=r.state),S.getDerivedStateFromProps!=null&&(r.__s==r.state&&(r.__s=A({},r.__s)),A(r.__s,S.getDerivedStateFromProps(m,r.__s))),d=r.props,a=r.state,r.__v=e,y)S.getDerivedStateFromProps==null&&r.componentWillMount!=null&&r.componentWillMount(),r.componentDidMount!=null&&r.__h.push(r.componentDidMount);else{if(S.getDerivedStateFromProps==null&&m!==d&&r.componentWillReceiveProps!=null&&r.componentWillReceiveProps(m,w),!r.__e&&r.shouldComponentUpdate!=null&&r.shouldComponentUpdate(m,r.__s,w)===!1||e.__v===n.__v){for(e.__v!==n.__v&&(r.props=m,r.state=r.__s,r.__d=!1),r.__e=!1,e.__e=n.__e,e.__k=n.__k,e.__k.forEach(function(R){R&&(R.__=e)}),j=0;j<r._sb.length;j++)r.__h.push(r._sb[j]);r._sb=[],r.__h.length&&_.push(r);break e}r.componentWillUpdate!=null&&r.componentWillUpdate(m,r.__s,w),r.componentDidUpdate!=null&&r.__h.push(function(){r.componentDidUpdate(d,a,h)})}if(r.context=w,r.props=m,r.__P=t,L=f.__r,we=0,"prototype"in S&&S.prototype.render){for(r.state=r.__s,r.__d=!1,L&&L(e),v=r.render(r.props,r.state,r.context),z=0;z<r._sb.length;z++)r.__h.push(r._sb[z]);r._sb=[]}else do r.__d=!1,L&&L(e),v=r.render(r.props,r.state,r.context),r.state=r.__s;while(r.__d&&++we<25);r.state=r.__s,r.getChildContext!=null&&(o=A(A({},o),r.getChildContext())),y||r.getSnapshotBeforeUpdate==null||(h=r.getSnapshotBeforeUpdate(d,a)),W=v!=null&&v.type===re&&v.key==null?v.props.children:v,ze(t,Array.isArray(W)?W:[W],e,n,o,s,i,_,c,u),r.base=e.__e,e.__h=null,r.__h.length&&_.push(r),N&&(r.__E=r.__=null),r.__e=!1}else i==null&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=vt(n.__e,e,n,o,s,i,_,u);(v=f.diffed)&&v(e)}catch(R){e.__v=null,(u||i!=null)&&(e.__e=c,e.__h=!!u,i[i.indexOf(c)]=null),f.__e(R,e,n)}}function Ge(t,e){f.__c&&f.__c(e,t),t.some(function(n){try{t=n.__h,n.__h=[],t.some(function(o){o.call(n)})}catch(o){f.__e(o,n.__v)}})}function vt(t,e,n,o,s,i,_,c){var u,v,r,y=n.props,d=e.props,a=e.type,h=0;if(a==="svg"&&(s=!0),i!=null){for(;h<i.length;h++)if((u=i[h])&&"setAttribute"in u==!!a&&(a?u.localName===a:u.nodeType===3)){t=u,i[h]=null;break}}if(t==null){if(a===null)return document.createTextNode(d);t=s?document.createElementNS("http://www.w3.org/2000/svg",a):document.createElement(a,d.is&&d),i=null,c=!1}if(a===null)y===d||c&&t.data===d||(t.data=d);else{if(i=i&&oe.call(t.childNodes),v=(y=n.props||X).dangerouslySetInnerHTML,r=d.dangerouslySetInnerHTML,!c){if(i!=null)for(y={},h=0;h<t.attributes.length;h++)y[t.attributes[h].name]=t.attributes[h].value;(r||v)&&(r&&(v&&r.__html==v.__html||r.__html===t.innerHTML)||(t.innerHTML=r&&r.__html||""))}if(ht(t,d,y,s,c),r)e.__k=[];else if(h=e.props.children,ze(t,Array.isArray(h)?h:[h],e,n,o,s&&a!=="foreignObject",i,_,i?i[0]:n.__k&&F(n,0),c),i!=null)for(h=i.length;h--;)i[h]!=null&&Be(i[h]);c||("value"in d&&(h=d.value)!==void 0&&(h!==t.value||a==="progress"&&!h||a==="option"&&h!==y.value)&&ee(t,"value",h,y.value,!1),"checked"in d&&(h=d.checked)!==void 0&&h!==t.checked&&ee(t,"checked",h,y.checked,!1))}return t}function Je(t,e,n){try{typeof t=="function"?t(e):t.current=e}catch(o){f.__e(o,n)}}function Ye(t,e,n){var o,s;if(f.unmount&&f.unmount(t),(o=t.ref)&&(o.current&&o.current!==t.__e||Je(o,null,e)),(o=t.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(i){f.__e(i,e)}o.base=o.__P=null,t.__c=void 0}if(o=t.__k)for(s=0;s<o.length;s++)o[s]&&Ye(o[s],e,n||typeof t.type!="function");n||t.__e==null||Be(t.__e),t.__=t.__e=t.__d=void 0}function pt(t,e,n){return this.constructor(t,n)}function yt(t,e,n){var o,s,i;f.__&&f.__(t,e),s=(o=typeof n=="function")?null:n&&n.__k||e.__k,i=[],ye(e,t=(!o&&n||e).__k=dt(re,null,[t]),s||X,X,e.ownerSVGElement!==void 0,!o&&n?[n]:s?null:e.firstChild?oe.call(e.childNodes):null,i,!o&&n?n:s?s.__e:e.firstChild,o),Ge(i,t)}oe=Fe.slice,f={__e:function(t,e,n,o){for(var s,i,_;e=e.__;)if((s=e.__c)&&!s.__)try{if((i=s.constructor)&&i.getDerivedStateFromError!=null&&(s.setState(i.getDerivedStateFromError(t)),_=s.__d),s.componentDidCatch!=null&&(s.componentDidCatch(t,o||{}),_=s.__d),_)return s.__E=s}catch(c){t=c}throw t}},De=0,M.prototype.setState=function(t,e){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=A({},this.state),typeof t=="function"&&(t=t(A({},n),this.props)),t&&A(n,t),t!=null&&this.__v&&(e&&this._sb.push(e),Ae(this))},M.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),Ae(this))},M.prototype.render=re,C=[],Ke=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,ue=function(t,e){return t.__v.__b-e.__v.__b},Z.__r=0;var me,$,_e,Ee,Ne=0,Qe=[],Y=[],Oe=f.__b,He=f.__r,Te=f.diffed,Ue=f.__c,Le=f.unmount;function Xe(t,e){f.__h&&f.__h($,t,Ne||e),Ne=0;var n=$.__H||($.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({__V:Y}),n.__[t]}function te(t,e){var n=Xe(me++,3);!f.__s&&et(n.__H,e)&&(n.__=t,n.i=e,$.__H.__h.push(n))}function Ze(t,e){var n=Xe(me++,7);return et(n.__H,e)?(n.__V=t(),n.i=e,n.__h=t,n.__V):n.__}function mt(){for(var t;t=Qe.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(Q),t.__H.__h.forEach(fe),t.__H.__h=[]}catch(e){t.__H.__h=[],f.__e(e,t.__v)}}f.__b=function(t){$=null,Oe&&Oe(t)},f.__r=function(t){He&&He(t),me=0;var e=($=t.__c).__H;e&&(_e===$?(e.__h=[],$.__h=[],e.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=Y,n.__N=n.i=void 0})):(e.__h.forEach(Q),e.__h.forEach(fe),e.__h=[])),_e=$},f.diffed=function(t){Te&&Te(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(Qe.push(e)!==1&&Ee===f.requestAnimationFrame||((Ee=f.requestAnimationFrame)||gt)(mt)),e.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==Y&&(n.__=n.__V),n.i=void 0,n.__V=Y})),_e=$=null},f.__c=function(t,e){e.some(function(n){try{n.__h.forEach(Q),n.__h=n.__h.filter(function(o){return!o.__||fe(o)})}catch(o){e.some(function(s){s.__h&&(s.__h=[])}),e=[],f.__e(o,n.__v)}}),Ue&&Ue(t,e)},f.unmount=function(t){Le&&Le(t);var e,n=t.__c;n&&n.__H&&(n.__H.__.forEach(function(o){try{Q(o)}catch(s){e=s}}),n.__H=void 0,e&&f.__e(e,n.__v))};var Me=typeof requestAnimationFrame=="function";function gt(t){var e,n=function(){clearTimeout(o),Me&&cancelAnimationFrame(e),setTimeout(t)},o=setTimeout(n,100);Me&&(e=requestAnimationFrame(n))}function Q(t){var e=$,n=t.__c;typeof n=="function"&&(t.__c=void 0,n()),$=e}function fe(t){var e=$;t.__c=t.__(),$=e}function et(t,e){return!t||t.length!==e.length||e.some(function(n,o){return n!==t[o]})}function se(){throw new Error("Cycle detected")}function ge(){if(T>1)T--;else{for(var t,e=!1;V!==void 0;){var n=V;for(V=void 0,de++;n!==void 0;){var o=n.o;if(n.o=void 0,n.f&=-3,!(8&n.f)&&nt(n))try{n.c()}catch(s){e||(t=s,e=!0)}n=o}}if(de=0,T--,e)throw t}}var p=void 0,V=void 0,T=0,de=0,ne=0;function tt(t){if(p!==void 0){var e=t.n;if(e===void 0||e.t!==p)return e={i:0,S:t,p:p.s,n:void 0,t:p,e:void 0,x:void 0,r:e},p.s!==void 0&&(p.s.n=e),p.s=e,t.n=e,32&p.f&&t.S(e),e;if(e.i===-1)return e.i=0,e.n!==void 0&&(e.n.p=e.p,e.p!==void 0&&(e.p.n=e.n),e.p=p.s,e.n=void 0,p.s.n=e,p.s=e),e}}function b(t){this.v=t,this.i=0,this.n=void 0,this.t=void 0}b.prototype.h=function(){return!0};b.prototype.S=function(t){this.t!==t&&t.e===void 0&&(t.x=this.t,this.t!==void 0&&(this.t.e=t),this.t=t)};b.prototype.U=function(t){if(this.t!==void 0){var e=t.e,n=t.x;e!==void 0&&(e.x=n,t.e=void 0),n!==void 0&&(n.e=e,t.x=void 0),t===this.t&&(this.t=n)}};b.prototype.subscribe=function(t){var e=this;return ke(function(){var n=e.value,o=32&this.f;this.f&=-33;try{t(n)}finally{this.f|=o}})};b.prototype.valueOf=function(){return this.value};b.prototype.toString=function(){return this.value+""};b.prototype.toJSON=function(){return this.value};b.prototype.peek=function(){return this.v};Object.defineProperty(b.prototype,"value",{get:function(){var t=tt(this);return t!==void 0&&(t.i=this.i),this.v},set:function(t){if(p instanceof I&&function(){throw new Error("Computed cannot have side-effects")}(),t!==this.v){de>100&&se(),this.v=t,this.i++,ne++,T++;try{for(var e=this.t;e!==void 0;e=e.x)e.t.N()}finally{ge()}}}});function E(t){return new b(t)}function nt(t){for(var e=t.s;e!==void 0;e=e.n)if(e.S.i!==e.i||!e.S.h()||e.S.i!==e.i)return!0;return!1}function it(t){for(var e=t.s;e!==void 0;e=e.n){var n=e.S.n;if(n!==void 0&&(e.r=n),e.S.n=e,e.i=-1,e.n===void 0){t.s=e;break}}}function ot(t){for(var e=t.s,n=void 0;e!==void 0;){var o=e.p;e.i===-1?(e.S.U(e),o!==void 0&&(o.n=e.n),e.n!==void 0&&(e.n.p=o)):n=e,e.S.n=e.r,e.r!==void 0&&(e.r=void 0),e=o}t.s=n}function I(t){b.call(this,void 0),this.x=t,this.s=void 0,this.g=ne-1,this.f=4}(I.prototype=new b).h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===ne))return!0;if(this.g=ne,this.f|=1,this.i>0&&!nt(this))return this.f&=-2,!0;var t=p;try{it(this),p=this;var e=this.x();(16&this.f||this.v!==e||this.i===0)&&(this.v=e,this.f&=-17,this.i++)}catch(n){this.v=n,this.f|=16,this.i++}return p=t,ot(this),this.f&=-2,!0};I.prototype.S=function(t){if(this.t===void 0){this.f|=36;for(var e=this.s;e!==void 0;e=e.n)e.S.S(e)}b.prototype.S.call(this,t)};I.prototype.U=function(t){if(this.t!==void 0&&(b.prototype.U.call(this,t),this.t===void 0)){this.f&=-33;for(var e=this.s;e!==void 0;e=e.n)e.S.U(e)}};I.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var t=this.t;t!==void 0;t=t.x)t.t.N()}};I.prototype.peek=function(){if(this.h()||se(),16&this.f)throw this.v;return this.v};Object.defineProperty(I.prototype,"value",{get:function(){1&this.f&&se();var t=tt(this);if(this.h(),t!==void 0&&(t.i=this.i),16&this.f)throw this.v;return this.v}});function bt(t){return new I(t)}function rt(t){var e=t.u;if(t.u=void 0,typeof e=="function"){T++;var n=p;p=void 0;try{e()}catch(o){throw t.f&=-2,t.f|=8,be(t),o}finally{p=n,ge()}}}function be(t){for(var e=t.s;e!==void 0;e=e.n)e.S.U(e);t.x=void 0,t.s=void 0,rt(t)}function kt(t){if(p!==this)throw new Error("Out-of-order effect");ot(this),p=t,this.f&=-2,8&this.f&&be(this),ge()}function B(t){this.x=t,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}B.prototype.c=function(){var t=this.S();try{if(8&this.f||this.x===void 0)return;var e=this.x();typeof e=="function"&&(this.u=e)}finally{t()}};B.prototype.S=function(){1&this.f&&se(),this.f|=1,this.f&=-9,rt(this),it(this),T++;var t=p;return p=this,kt.bind(this,t)};B.prototype.N=function(){2&this.f||(this.f|=2,this.o=V,V=this)};B.prototype.d=function(){this.f|=8,1&this.f||be(this)};function ke(t){var e=new B(t);try{e.c()}catch(n){throw e.d(),n}return e.d.bind(e)}var le;function U(t,e){f[t]=e.bind(null,f[t]||function(){})}function ie(t){le&&le(),le=t&&t.S()}function st(t){var e=this,n=t.data,o=D(n);o.value=n;var s=Ze(function(){for(var i=e.__v;i=i.__;)if(i.__c){i.__c.__$f|=4;break}return e.__$u.c=function(){e.base.data=s.peek()},bt(function(){var _=o.value.value;return _===0?0:_===!0?"":_||""})},[]);return s.value}st.displayName="_st";Object.defineProperties(b.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:st},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}});U("__b",function(t,e){if(typeof e.type=="string"){var n,o=e.props;for(var s in o)if(s!=="children"){var i=o[s];i instanceof b&&(n||(e.__np=n={}),n[s]=i,o[s]=i.peek())}}t(e)});U("__r",function(t,e){ie();var n,o=e.__c;o&&(o.__$f&=-2,(n=o.__$u)===void 0&&(o.__$u=n=function(s){var i;return ke(function(){i=this}),i.c=function(){o.__$f|=1,o.setState({})},i}())),ie(n),t(e)});U("__e",function(t,e,n,o){ie(),t(e,n,o)});U("diffed",function(t,e){ie();var n;if(typeof e.type=="string"&&(n=e.__e)){var o=e.__np,s=e.props;if(o){var i=n.U;if(i)for(var _ in i){var c=i[_];c!==void 0&&!(_ in o)&&(c.d(),i[_]=void 0)}else n.U=i={};for(var u in o){var v=i[u],r=o[u];v===void 0?(v=$t(n,u,r,s),i[u]=v):v.o(r,s)}}}t(e)});function $t(t,e,n,o){var s=e in t&&t.ownerSVGElement===void 0,i=E(n);return{o:function(_,c){i.value=_,o=c},d:ke(function(){var _=i.value.value;o[e]!==_&&(o[e]=_,s?t[e]=_:_?t.setAttribute(e,_):t.removeAttribute(e))})}}U("unmount",function(t,e){if(typeof e.type=="string"){var n=e.__e;if(n){var o=n.U;if(o){n.U=void 0;for(var s in o){var i=o[s];i&&i.d()}}}}else{var _=e.__c;if(_){var c=_.__$u;c&&(_.__$u=void 0,c.d())}}t(e)});U("__h",function(t,e,n,o){o<3&&(e.__$f|=2),t(e,n,o)});M.prototype.shouldComponentUpdate=function(t,e){var n=this.__$u;if(!(n&&n.s!==void 0||4&this.__$f)||3&this.__$f)return!0;for(var o in e)return!0;for(var s in t)if(s!=="__source"&&t[s]!==this.props[s])return!0;for(var i in this.props)if(!(i in t))return!0;return!1};function D(t){return Ze(function(){return E(t)},[])}const St=()=>{const t=E(""),e=E("loading");return{openAIAPIKey:t,step:e}},wt="_isPadded_o6rnv_1",Pt={isPadded:wt};var At=0;function l(t,e,n,o,s,i){var _,c,u={};for(c in e)c=="ref"?_=e[c]:u[c]=e[c];var v={type:t,props:u,key:n,ref:_,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--At,__source:s,__self:i};if(typeof t=="function"&&(_=t.defaultProps))for(c in _)u[c]===void 0&&(u[c]=_[c]);return f.vnode&&f.vnode(v),v}const $e=({isPadded:t=!0,children:e})=>l("div",{class:t?Pt.isPadded:"",children:e}),It=({appState:t})=>{const e=E(1);return te(()=>{const n=setInterval(()=>{e.value++},1e3);return()=>{clearInterval(n)}},[]),console.log("LoadingView"),te(()=>{console.log("LoadingView mounted"),chrome.storage.local.get(["openAIAPIKey"]).then(n=>{if(n.openAIAPIKey){t.openAIAPIKey.value=n.openAIAPIKey,t.step.value="ready";return}t.step.value="missing-api-key"})},[]),l($e,{isPadded:!0,children:"Loading..."})};function Ct(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var _t={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var e={}.hasOwnProperty;function n(){for(var o=[],s=0;s<arguments.length;s++){var i=arguments[s];if(i){var _=typeof i;if(_==="string"||_==="number")o.push(i);else if(Array.isArray(i)){if(i.length){var c=n.apply(null,i);c&&o.push(c)}}else if(_==="object"){if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]")){o.push(i.toString());continue}for(var u in i)e.call(i,u)&&i[u]&&o.push(u)}}}return o.join(" ")}t.exports?(n.default=n,t.exports=n):window.classNames=n})()})(_t);var xt=_t.exports;const Se=Ct(xt),Et="_main_g5n4z_1",Nt="_isError_g5n4z_12",Ot="_isSuccess_g5n4z_17",Ht="_isInfo_g5n4z_22",q={main:Et,isError:Nt,isSuccess:Ot,isInfo:Ht},K=({children:t,level:e="info"})=>l("p",{class:Se(q.main,{[q.isError]:e==="error",[q.isSuccess]:e==="success",[q.isInfo]:e==="info"}),children:t}),Tt="_main_1i52c_1",Ut="_isDefault_1i52c_24",Lt="_isPrimary_1i52c_34",ce={main:Tt,isDefault:Ut,isPrimary:Lt},x=({children:t,level:e="default",onClick:n,disabled:o=!1})=>l("button",{disabled:o,onClick:n,class:Se(ce.main,{[ce.isPrimary]:e==="primary",[ce.isDefault]:e==="default"}),children:t}),Mt="_vgroup_1wonl_1",Vt="_hgroup_1wonl_8",lt={vgroup:Mt,hgroup:Vt},he=({children:t})=>l("div",{class:lt.hgroup,children:t}),ve=({children:t})=>l("div",{class:lt.vgroup,children:t}),Dt="_main_eztuz_1",Kt={main:Dt},ct=({isVisible:t,children:e})=>l("div",{class:Kt.main,hidden:!t,children:e}),Ft="_main_b92hk_1",Bt={main:Ft},pe=()=>l("div",{class:Bt.main}),jt="_main_d9pdn_1",zt={main:jt},Wt=({value:t,onChange:e,isPassword:n=!1,placeholder:o})=>l("input",{placeholder:o,class:zt.main,type:n?"password":"text",value:t,onInput:s=>e(s.currentTarget.value)}),Rt=async t=>(await at(1e3),fetch("https://api.openai.com/v1/models",{headers:{Authorization:`Bearer ${t}`}}).then(e=>e.ok)),qt=({appState:t})=>{const e=D(t.openAIAPIKey.value),n=D(!1),o=D("unknown");return l($e,{children:[l(ct,{isVisible:n.value,children:l("p",{children:"Checking status..."})}),l("h1",{children:"Settings"}),l("p",{children:["OpenAI API key is missing. ",l("br",{})," You can get one"," ",l("a",{href:"https://help.openai.com/en/articles/4936850-where-do-i-find-my-secret-api-key",target:"_blank",children:"here"}),"."]}),l(ve,{children:[l(Wt,{placeholder:"sk-...",value:e.value,onChange:s=>{o.value="unknown",e.value=s}}),l(he,{children:[l(x,{level:"primary",disabled:e.value.length<5,onClick:()=>{t.openAIAPIKey.value=e.value,chrome.storage.local.set({openAIAPIKey:e.value},()=>{t.step.value="ready"})},children:"Save"}),l(x,{onClick:()=>{n.value=!0,Rt(e.value).then(s=>{n.value=!1,o.value=s?"valid":"invalid"})},children:"Check"}),l(x,{onClick:()=>{chrome.storage.local.clear().then(()=>{t.openAIAPIKey.value="",t.step.value="loading"})},children:"Clear my data"}),l(pe,{}),t.openAIAPIKey.value?l(x,{onClick:()=>{t.step.value="ready"},children:"Back"}):null]}),l(ve,{children:[o.value==="valid"?l(K,{level:"success",children:"API key is valid"}):null,o.value==="invalid"?l(K,{level:"error",children:"API key is invalid"}):null]})]})]})},Gt="_main_tltvv_1",Jt="_isOff_tltvv_27",Yt="_isOn_tltvv_31",Qt="_inOn_tltvv_58",ae={main:Gt,isOff:Jt,isOn:Yt,inOn:Qt},Xt=({value:t,onChange:e})=>l("button",{class:Se(ae.main,{[ae.isOn]:t,[ae.isOff]:!t}),onClick:()=>e(!t)}),Zt="_main_1145y_1",en="_topNav_1145y_4",tn="_bottomNav_1145y_5",nn="_inactive_1145y_17",on="_section_1145y_23",rn="_timings_1145y_31",sn="_timingsSeparator_1145y_45",P={main:Zt,topNav:en,bottomNav:tn,inactive:nn,section:on,timings:rn,timingsSeparator:sn},k=E({...ut}),G=E(null),Ve=t=>{const e=Math.floor(t/60),n=Math.floor(t%60);return`${e}:${n.toString().padStart(2,"0")}`},_n=({appState:t})=>{var i,_;te(()=>{H({appState:t}),H("connecting to the background script"),(async()=>{const[u]=await chrome.tabs.query({active:!0,currentWindow:!0}),v=u==null?void 0:u.id;if(!v){H("no tab id");return}G.value=chrome.tabs.connect(v),G.value.onMessage.addListener(r=>{r.type==="content:state:update"&&(H("got state update",r.state),k.value={...r.state})})})()},[]);const e=c=>{if(!G.value){H("no port");return}G.value.postMessage(c)},n=D(!1),o=c=>{c?e({type:"content:enable-blocker",openAIAPIKey:t.openAIAPIKey.value}):n.value=!0,k.value={...k.value,isBlockerEnabled:c}},s=()=>{e({type:"content:disable-blocker"}),window.close()};return l($e,{isPadded:!1,children:[l(ct,{isVisible:n.value,children:l(x,{level:"primary",onClick:s,children:"Reload tab"})}),l(ve,{children:[l("header",{class:P.topNav,children:l(he,{children:[l(Xt,{value:k.value.isBlockerEnabled,onChange:o}),l(pe,{}),l(x,{onClick:()=>t.step.value="missing-api-key",children:"Settings"})]})}),k.value.isBlockerEnabled&&k.value.tabStatus==="idle"&&((i=k.value.foundSponsoredTimestamps)!=null&&i.length)?l("details",{class:P.section,children:[l("summary",{children:["Found"," ",l("strong",{children:k.value.foundSponsoredTimestamps.length})," ","sponsored segments"]}),l("ol",{class:P.timings,children:k.value.foundSponsoredTimestamps.map((c,u)=>l("li",{children:[l("time",{children:Ve(c.startSeconds)}),l("span",{class:P.timingsSeparator}),l("time",{children:Ve(c.endSeconds)})]},u))})]}):null,k.value.isBlockerEnabled&&k.value.tabStatus==="idle"&&!((_=k.value.foundSponsoredTimestamps)!=null&&_.length)?l("div",{class:P.section,children:l(K,{children:"No sponsored content found."})}):null,k.value.isBlockerEnabled?null:l("div",{class:P.inactive,children:[l("p",{children:"The extension is not active in this tab"}),l(x,{level:"primary",onClick:()=>o(!0),children:"Spread that shit"})]}),k.value.tabStatus==="error"?l("div",{class:P.section,children:l(K,{level:"error",children:"Unrecognised error, try refreshing the page"})}):null,k.value.tabStatus==="processing"?l("div",{class:P.section,children:l(K,{children:"Processing video..."})}):null,l("footer",{class:P.bottomNav,children:l(he,{children:[l(pe,{}),l("a",{href:"./first-run.html",target:"_blank",children:"About"}),l("a",{href:"https://sonnet.io",target:"_blank",children:"Feedback"})]})})]})]})},O=St(),ln=()=>(te(()=>{H("Init popup")},[]),O.step.value==="loading"?l(It,{appState:O}):O.step.value==="missing-api-key"?l(qt,{appState:O}):O.step.value==="ready"?l(_n,{appState:O}):null),cn=t=>yt(l(ln,{}),t);cn(document.body);
//# sourceMappingURL=popup.js.map
