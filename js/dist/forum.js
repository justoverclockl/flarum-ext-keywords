module.exports=function(t){var e={};function r(o){if(e[o])return e[o].exports;var a=e[o]={i:o,l:!1,exports:{}};return t[o].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=t,r.c=e,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(o,a,function(e){return t[e]}.bind(null,a));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=7)}([function(t,e){t.exports=flarum.core.compat.app},function(t,e){t.exports=flarum.core.compat["components/IndexPage"]},function(t,e){t.exports=flarum.core.compat["common/extend"]},function(t,e){t.exports=flarum.core.compat["forum/components/CommentPost"]},function(t,e){t.exports=flarum.core.compat["components/Page"]},function(t,e){t.exports=flarum.core.compat["common/helpers/listItems"]},function(t,e){t.exports=flarum.core.compat["components/LinkButton"]},function(t,e,r){"use strict";r.r(e);var o=r(0),a=r.n(o),n=r(2),s=r(3),i=r.n(s),c=function(){var t=this,e=JSON.parse(a.a.forum.attribute("AdDef"));Object.keys(e).filter((function(r){var o;o=!0===a.a.forum.attribute("ParseOnce")?new RegExp("\\b("+r+")\\b(?![^<]*>|[^<>]*</[^p])","i"):new RegExp("\\b("+r+")\\b(?![^<]*>|[^<>]*</[^p])","gi"),t.attrs.post.data.attributes.contentHtml=t.attrs.post.data.attributes.contentHtml.replace(o,(function(t){var r=e[t.toLowerCase()];return r?'<span class="definition" data-tooltip="'+r+'">'+t+"</span>":t}))}))},u=r(1),l=r.n(u);function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var p=r(4),d=r.n(p),y=r(5),v=r.n(y),x=function(t){var e,r;function o(){return t.apply(this,arguments)||this}r=t,(e=o).prototype=Object.create(r.prototype),e.prototype.constructor=e,f(e,r);var n=o.prototype;return n.oncreate=function(e){t.prototype.oncreate.call(this,e),a.a.setTitle(a.a.translator.trans("flarum-ext-keywords.forum.pagetitle")),a.a.setTitleCount(0)},n.view=function(){var t=JSON.parse(a.a.forum.attribute("AdDef"));return $(document).ready((function(){$("#filter").keyup((function(){var t=$(this).val();$("ol li").each((function(){$(this).text().search(new RegExp(t,"i"))<0?$(this).fadeOut():($(this).show())}))}))})),m(".IndexPage",[l.a.prototype.hero(),m(".container",m(".sideNavContainer",[m("nav.IndexPage-nav.sideNav",m("ul",v()(l.a.prototype.sidebarItems().toArray()))),m(".IndexPage-results.sideNavOffset",m("h1",{className:"glostitle"},a.a.translator.trans("flarum-ext-keywords.forum.pagetitle")),m("div",{className:"rowgl"},[m("div",{className:"columngl"},m("div",{className:"leftdiv"},m("h3",{className:"tagline"},a.a.translator.trans("flarum-ext-keywords.forum.tagline")))),m("div",{className:"columngl"},m("div",{className:"rightdiv"},m("form",{className:"searchform cf"},[m("input",{id:"filter",type:"text",placeholder:a.a.translator.trans("flarum-ext-keywords.forum.searchtext")})])))]),m("div",{className:"containDef"},m("ol",{id:"myUL",className:"rectangle-list"},Object.keys(t).sort().map((function(e){return m("li",{className:"lista"},e+" - "+t[e])})))))]))])},o}(d.a),b=r(6),g=r.n(b);a.a.initializers.add("justoverclock/flarum-ext-keywords",(function(){Object(n.extend)(i.a.prototype,"oninit",c)})),a.a.routes.GlossaryPage={path:"/glossary",component:x},Object(n.extend)(l.a.prototype,"navItems",(function(t){return t.add("Glossary",m(g.a,{href:a.a.route("GlossaryPage"),icon:"fas fa-atlas"},a.a.translator.trans("flarum-ext-keywords.forum.title")),100),t}))}]);
//# sourceMappingURL=forum.js.map