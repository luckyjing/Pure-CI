webpackJsonp([1],{0:function(e,t){e.exports=React},188:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){$(".error-msg").text(e)}function c(e){$(".signin-error").text(e)}var s=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),m=a(0),u=n(m);n(a(8)),a(358);var f=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))}return l(t,e),s(t,[{key:"componentDidMount",value:function(){this.props.dispatch}},{key:"render",value:function(){return u.default.createElement("div",null,u.default.createElement("div",{className:"form"},u.default.createElement("div",{className:"form-toggle"}),u.default.createElement("div",{className:"form-panel one"},u.default.createElement("div",{className:"form-header"},u.default.createElement("h1",null,"登录")),u.default.createElement("div",{className:"form-content login-form"},u.default.createElement("form",null,u.default.createElement("div",{className:"form-group"},u.default.createElement("label",{for:"username"},"邮箱"),u.default.createElement("input",{type:"text",id:"email",name:"email",required:"required"})),u.default.createElement("div",{className:"form-group"},u.default.createElement("label",{for:"password"},"密码"),u.default.createElement("input",{type:"password",id:"password",name:"password",required:"required"})),u.default.createElement("div",{className:"form-group error-msg",style:{minHeight:25}}),u.default.createElement("div",{className:"form-group"},u.default.createElement("button",{className:"log-in-btn"},"登 录"))))),u.default.createElement("div",{className:"form-panel two"},u.default.createElement("div",{className:"form-header"},u.default.createElement("h1",null,"注册")),u.default.createElement("div",{className:"form-content signin-form"},u.default.createElement("form",null,u.default.createElement("div",{className:"form-group"},u.default.createElement("label",{for:"nickname"},"昵称"),u.default.createElement("input",{type:"text",id:"nickname",name:"nickname",required:"required"})),u.default.createElement("div",{className:"form-group"},u.default.createElement("label",{for:"email"},"邮箱"),u.default.createElement("input",{type:"text",id:"email",name:"email",required:"required"})),u.default.createElement("div",{className:"form-group"},u.default.createElement("label",{for:"password"},"密码"),u.default.createElement("input",{type:"password",id:"password",name:"password",required:"required"})),u.default.createElement("div",{className:"form-group"},u.default.createElement("label",{for:"cpassword"},"重复密码"),u.default.createElement("input",{type:"password",id:"cpassword",name:"cpassword",required:"required"})),u.default.createElement("div",{className:"form-group signin-error"}),u.default.createElement("div",{className:"form-group"},u.default.createElement("button",{className:"sign-in-btn"},"注 册")))))))}}]),t}(m.Component);ReactDOM.render(u.default.createElement(f,null),document.getElementById("stage")),$(document).ready(function(){function e(){$(".form-panel.one").addClass("hidden"),$(".form-panel.two").addClass("active"),$(".form").animate({height:a},200)}var t=$(".form-panel.two").height(),a=$(".form-panel.two")[0].scrollHeight;location.pathname.indexOf("signin")>=0&&e(),$(".form-panel.two").not(".form-panel.two.active").on("click",function(t){t.preventDefault(),$(".form-toggle").addClass("visible"),e()}),$(".form-toggle").on("click",function(e){e.preventDefault(),$(this).removeClass("visible"),$(".form-panel.one").removeClass("hidden"),$(".form-panel.two").removeClass("active"),$(".form").animate({height:t},200)})}),$(".log-in-btn").on("click",function(e){e.preventDefault(),$.ajax({type:"post",url:"/session",data:JSON.stringify({email:$('.login-form [name="email"]').val(),password:$('.login-form [name="password"]').val()}),dataType:"json",contentType:"application/json; charset=utf-8"}).done(function(e){200==e.code?location.href="/":i(e.msg)})}),$(".sign-in-btn").on("click",function(e){e.preventDefault(),$.ajax({type:"post",url:"/user",data:JSON.stringify({email:$('.signin-form [name="email"]').val(),password:$('.signin-form [name="password"]').val(),nickname:$('.signin-form [name="nickname"]').val()}),dataType:"json",contentType:"application/json; charset=utf-8"}).done(function(e){200==e.code?location.href="/":c(e.msg)})})},358:function(e,t){},513:function(e,t,a){e.exports=a(188)},8:function(e,t){e.exports=ReactDOM}},[513]);