(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"/+yk":function(e,t,a){"use strict";var i=a("Wbzz"),n=a("9eSz"),r=a.n(n),l=a("q1tI"),c=a.n(l),s=a("mwIZ"),o=a.n(s),m=a("3WF5"),d=a.n(m),u=a("dI71"),p=function(e){function t(){return e.apply(this,arguments)||this}Object(u.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){this.props.clientId&&(window.adsbygoogle=window.adsbygoogle||[]).push({})},a.render=function(){var e=this.props,t=e.clientId,a=e.slotId,i=e.format;return t?c.a.createElement("div",{className:"ad"},c.a.createElement("ins",{className:"adsbygoogle",style:{display:"block"},"data-ad-client":t,"data-ad-slot":a,"data-ad-format":i})):""},t}(c.a.Component),g=(a("MApi"),t.a=function(e){var t=e.data,a=e.options,n=t.frontmatter,l=n.category,s=n.tags,m=n.description,d=n.title,u=n.path,p=n.date,y=n.image,E=a.isIndex,v=a.adsense,N=o()(t,"html"),b=E&&!!N.match("\x3c!--more--\x3e"),I=o()(y,"childImageSharp.fluid");return c.a.createElement("div",{className:"article col-6 pl-0 pr-5",key:u},c.a.createElement("div",{className:"info"},c.a.createElement(i.Link,{style:{boxShadow:"none"},to:u},c.a.createElement("h1",null,d),c.a.createElement("time",{dateTime:p},p)),k({items:[l],primary:!0}),k({items:s})),c.a.createElement("div",{className:"content"},c.a.createElement("p",null,m),I?c.a.createElement(r.a,{fluid:I,style:{display:"block",margin:"0 auto"}}):""),c.a.createElement("div",{className:"content",dangerouslySetInnerHTML:{__html:b?f(N):N}}),b?h({path:u,label:"MORE",primary:!0}):"",g(E,v))},function(e,t){return e?"":c.a.createElement(p,{clientId:t,slotId:"",format:"auto"})}),f=function(e){return(e=e.replace(/<blockquote>/g,'<blockquote class="blockquote">')).match("\x3c!--more--\x3e")&&void 0!==(e=e.split("\x3c!--more--\x3e"))[0]?e[0]:e},h=function(e){var t=e.path,a=e.label,n=e.primary;return c.a.createElement(i.Link,{className:"readmore",to:t},c.a.createElement("span",{className:"btn btn-outline-primary btn-block "+(n?"btn-outline-primary":"btn-outline-secondary")},a))},k=function(e){var t=e.items,a=e.primary;return d()(t,(function(e,t){return c.a.createElement("span",{className:"badge "+(a?"badge-primary":"badge-secondary"),key:t},e)}))}},MApi:function(e,t,a){},RXBc:function(e,t,a){"use strict";a.r(t);a("Wbzz");var i=a("q1tI"),n=a.n(i),r=a("mwIZ"),l=a.n(r),c=(a("/+yk"),a("GrNW")),s=a("I/Ru"),o=a("xOYN"),m=a("sojd");t.default=function(e){var t=e.data,a=e.location;return n.a.createElement(s.a,{location:a},n.a.createElement(c.a,{site:l()(t,"site.meta")}),n.a.createElement(o.a,{slides:m.slides}),n.a.createElement("div",{className:"container px-md-0 my-4"},n.a.createElement("h3",null,"제품소개"),n.a.createElement("div",{className:"row"},m.featuredProducts.map((function(e,t){return n.a.createElement("div",{className:"product my-2 col-md-3",key:t},n.a.createElement("a",{href:e.link,className:"d-block"},n.a.createElement("img",{className:"border rounded",src:e.image,alt:e.title})),n.a.createElement("h5",null,e.title))})))),n.a.createElement("div",{className:"container px-md-0 my-5"},n.a.createElement("div",{className:"row no-gutters"},m.banners.length>0&&m.banners.map((function(e,t){var a=e.image?e.image:d(t);return n.a.createElement("div",{className:"col-md-6",key:t},n.a.createElement("a",{href:e.link,target:"_blank"},n.a.createElement("img",{className:"border rounded",src:a,alt:e.title})))})))))};var d=function(e){return"https://via.placeholder.com/565x120?text=Slide"+e}},sojd:function(e,t){e.exports={slides:[{title:"광명코포레이션",decription:"연락처 | 02-895-5118\n이메일 | didkorea@didkorea.co.kr\n",image:"/img/slide.png"}],featuredProducts:[{title:"일본수입(DID) RS체인",image:"/products/01/src-01-modify.png",link:"/product/01-standard-roller-chain"},{title:"HI-PWR-S 롤러체인",image:"/products/02/upc-01.jpg",link:"/product/02-ultimate-power-chain-series"},{title:"HK타입 롤러체인",image:"/products/02/upc-02.jpg",link:"/product/02-ultimate-power-chain-series"},{title:"HI-PWR-SHK 롤러체인",image:"/products/02/upc-03.jpg",link:"/product/02-ultimate-power-chain-series"},{title:"X-RING체인, O-RING체인",image:"/products/03/ulc-01-modify.jpg",link:"/product/03-ultimate-life-chain-series"},{title:"Fit X-RING 체인",image:"/products/03/ulc-02-modify.jpg",link:"/product/03-ultimate-life-chain-series"},{title:"Sintered Bushing 롤러체인",image:"/products/03/ulc-03-modify.jpg",link:"/product/03-ultimate-life-chain-series"},{title:"Nickel Plated 체인",image:"/products/04/erc-01-modify.jpg",link:"/product/04-environmental-resistant-chain-series"},{title:"하이가드(High Guard) 체인",image:"/products/04/erc-02-modify.jpg",link:"/product/04-environmental-resistant-chain-series"},{title:"더블가드(Double Guard) 체인",image:"/products/04/erc-03-modify.jpg",link:"/product/04-environmental-resistant-chain-series"},{title:"스테인레스 스틸 체인(SS/SSK)",image:"/products/04/erc-04-modify.jpg",link:"/product/04-environmental-resistant-chain-series"},{title:"SN 트리트먼트 체인(SN)",image:"/products/04/erc-04-modify.jpg",link:"/product/04-environmental-resistant-chain-series"},{title:"스테인레스 스틸 X-RING 체인(SN)",image:"/products/04/erc-05.jpg",link:"/product/04-environmental-resistant-chain-series"},{title:"내(耐) 환경(부식, 발청, 저온) 체인",image:"/products/04/erc-06.jpg",link:"/product/04-environmental-resistant-chain-series"}],banners:[{title:"D.I.D KOGYO",image:"/slide1.png",link:"https://www.did-coltd.com/english/"},{title:"D.I.D DIGITAL CATALOG 2020",image:"/slide2.png",link:"https://www.did-daido.co.jp/documents/ebooks/catalog/english2020/"}]}},xOYN:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var i=a("q1tI"),n=a.n(i);function r(e){var t=e.slides;return n.a.createElement("div",{id:"carouselExampleIndicators",className:"carousel slide","data-ride":"carousel"},n.a.createElement("div",{className:"px-0"},n.a.createElement("ol",{className:"carousel-indicators"},t.map((function(e,t){return n.a.createElement("li",{"data-target":"#carouselExampleIndicators","data-slide-to":t,className:"active",key:t})}))),n.a.createElement("div",{className:"carousel-inner"},t.map((function(e,t){return n.a.createElement("div",{className:"carousel-item active",key:t},n.a.createElement("img",{className:"d-block w-100",src:e.image,alt:e.title}))})))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-b2cf3f0ede29b5fb793d.js.map