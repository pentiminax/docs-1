(window.webpackJsonp=window.webpackJsonp||[]).push([[27,24],{GYK1:function(e,t,n){"use strict";t.a=[{id:1,title:"On-site edition",languages:"French and english-speaking tracks",offers:[{title:"Early bird",limitDate:"2022-05-06",price:89},{title:"Regular ticket",limitDate:"2022-08-19",price:129},{title:"Late bird",limitDate:"2022-09-14",price:169}]},{id:2,title:"Online edition",languages:"French and english-speaking tracks",offers:[{title:"Online ticket",limitDate:"2022-09-13",price:59}]}]},UYRS:function(e,t,n){"use strict";var a=n("q1tI"),i=n("3nhQ");t.a=function(e){var t=Object(a.useContext)(i.a).isEventBriteLoaded,n=Object(a.useState)(!1),l=n[0],r=n[1];Object(a.useLayoutEffect)((function(){var n;t&&!l&&(null===(n=window.EBWidgets)||void 0===n||n.createWidget({widgetType:"checkout",eventId:"304104152707",modal:!0,modalTriggerElementId:e}),r(!0))}),[t,e,l,r])}},Y3TU:function(e,t,n){"use strict";t.a=[{id:"EN",type:"English-speaking track",date:"10 sep, 2021"},{id:"FR",type:"French-speaking track",date:"10 sep, 2021"}]},c63E:function(e,t,n){"use strict";var a=n("zLVn"),i=n("q1tI"),l=n.n(i),r=n("UYRS"),c=n("0sn9");t.a=function(e){var t=e.children,n=e.id,i=Object(a.a)(e,["children","id"]);return Object(r.a)(n),l.a.createElement(c.a,Object.assign({id:n},i),t)}},fHej:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),i=n.n(a),l=n("Wbzz"),r=n("I8rh"),c=n("SXI4"),o=n("6oMm"),s=n("l3up"),m=n("psCg"),u=n("3XM5"),d=n("/Uhd"),p=n("ldzH"),f=n("glnl"),h=n("DZGb"),E=n("veM9"),g=n.n(E),v=n("GYK1"),b=n("Wgwc"),k=n.n(b),_=n("TSYQ"),y=n.n(_),w=n("0sn9"),N=n("UYRS"),I=function(e){var t=e.price,n=t.offers.sort((function(e,t){return k()(e.limitDate).isAfter(k()(t.limitDate))?1:k()(t.limitDate).isAfter(k()(e.limitDate))?-1:0})),a=n.findIndex((function(e){return k()(e.limitDate).isAfter(k()())}));return Object(N.a)("price"+t.id),i.a.createElement(d.b,{padding:5,className:"conf__pricing-item"},i.a.createElement("div",{className:"conf__pricing-card",id:"price"+t.id},i.a.createElement("div",{className:"pricing__header"},i.a.createElement("h3",{className:"h5 lined lined-white"},t.title),i.a.createElement("span",{className:"overline"},t.languages)),i.a.createElement("div",{className:"pricing__content dotted-corner corner-bottom"},n.map((function(e,t){return i.a.createElement("div",{key:e.title,className:y()("pricing__offer",{active:t===a})},i.a.createElement("span",{className:"overline offer__limit"},"until "+k()(e.limitDate).format("LL")),i.a.createElement("span",{className:"overline offer__title"},e.title),i.a.createElement("span",{className:"h4 pricing__amount"},e.price,"€*"))}))),i.a.createElement(w.a,{className:"square",size:"small"},"Buy tickets")))},O=function(){return i.a.createElement(p.b,{className:"conf__pricing",section:"pricing"},i.a.createElement("div",{className:"container"},i.a.createElement(h.a,{dark:!0},i.a.createElement("strong",null,"Pricing")),i.a.createElement(d.a,null,v.a.map((function(e){return i.a.createElement(I,{key:e.id,price:e})})),i.a.createElement(d.b,{className:"pricing__discount"},i.a.createElement("div",{className:"discount__content dotted-corner"},i.a.createElement("p",{className:"discount__title h6 lined lined-white"},"Student or unemployed developer?"),i.a.createElement("p",null,"Online edition is ",i.a.createElement("strong",null,"free*")),i.a.createElement("a",{className:"conf__button small square white",href:"mailto:events@les-tilleuls.coop"},"Contact us!"),i.a.createElement("small",null,"*certificate will be needed")))),i.a.createElement(f.a,{title:"*COVID-19 information",img:g.a,className:"pricing__warning mt-100"},i.a.createElement("p",null,"Tickets may be refunded if the event has to be cancelled due to the COVID-19 pandemic, or if you are unable to attend the event due to this sanitary context."))))},S=n("HhNJ"),x=function(){return i.a.createElement("div",{className:"conf__sponsorcard"},i.a.createElement("h3",{className:"sponsorcard__title p-30 flex flex-col items-center justify-center"},i.a.createElement("span",{className:"overline"},"We' looking for"),i.a.createElement("strong",{className:"h5 lined lined-white"},"sponsors!")),i.a.createElement("div",{className:"dotted-corner conf__bg-white flex-1 px-40 py-20"},i.a.createElement("h3",{className:"h5 text-blue mb-10"},"Why you should partner?"),i.a.createElement("ul",{className:"sponsorcard__list mb-30"},i.a.createElement("li",null,i.a.createElement("span",{className:"text-blue icon-circle-chevron-right point__arrow"}),"Market your developer products and platforms"),i.a.createElement("li",null,i.a.createElement("span",{className:"text-blue icon-circle-chevron-right point__arrow"}),"Reach many more developers with online coverage"),i.a.createElement("li",null,i.a.createElement("span",{className:"text-blue icon-circle-chevron-right point__arrow"}),"Improve your brand by supporting the API Platform community"),i.a.createElement("li",null,i.a.createElement("span",{className:"text-blue icon-circle-chevron-right point__arrow"}),"Hire multi-skilled developers")),i.a.createElement("a",{className:"conf__button square small",href:"mailto:events@les-tilleuls.coop",target:"_blank",rel:"noopener noreferrer"},"Become sponsor")))},P=function(){var e=S.a.filter((function(e){return 5!==e.rank}));return i.a.createElement(p.b,{className:"conf__sponsoring",section:"sponsorship"},i.a.createElement("div",{className:"container"},i.a.createElement(h.a,{dark:!0},i.a.createElement("strong",null,"Sponsorship")),i.a.createElement(x,null)),i.a.createElement("div",{className:"conf__bg-white py-200 text-center"},i.a.createElement("div",{className:"container"},i.a.createElement("h3",{className:"h4 lined text-blue mb-20"},"They trusted us in 2021"),i.a.createElement(d.a,null,e.map((function(e){var t=e.name,n=e.logo,a=e.link;return i.a.createElement(d.b,{key:t,autosize:!0,padding:20,className:"sponsoring__item"},i.a.createElement("a",{href:a,title:""+t,key:t,target:"_blank",rel:"nofollow noreferrer noopener"},i.a.createElement("img",{width:"200",height:"200",loading:"lazy",src:"/con/2021/partners/"+n+".png",alt:t})))}))))))},D=[],A=n("Y3TU"),L=(n("2FHB"),n("c63E"));t.default=function(){return i.a.createElement(s.a,null,i.a.createElement(r.a,{date:"September 15 - 16, 2022 | Lille & online",baseline:"The only event dedicated to API Platform and its ecosystem",button:i.a.createElement("div",{className:"conf__cover-buttons"},i.a.createElement(L.a,{className:"pink",id:"cover",size:"large"},"Buy tickets"),i.a.createElement(l.Link,{to:"/con/2022/schedule"},i.a.createElement("div",{className:"conf__button"},"Full schedule")))}),i.a.createElement(c.a,{numberVisibles:12},i.a.createElement("p",{className:"conf__section-subtitle"},"Discover our amazing international speakers!")),i.a.createElement(o.a,{breaks:D,tracks:A.a}),i.a.createElement(m.a,{subtitle:" The on-site edition will take place in Lille, meeting point of European cities and touristic capital of the Flemish region. If you can't attend the event physically, you can watch both tracks online."}),i.a.createElement(O,null),i.a.createElement(P,null),i.a.createElement(u.a,null))}},l3up:function(e,t,n){"use strict";var a=n("q1tI"),i=n.n(a),l=n("Wgwc"),r=n.n(l),c=n("TJpk"),o=n.n(c),s={logoLink:"/",links:[{to:"/con/2022/",text:"Home",mobileOnly:!0},{to:"/con/2022/speakers",text:"Speakers"},{to:"/con/2022/#venue",text:"Venue"},{to:"/con/2022/#pricing",text:"Pricing"},{to:"/con/2022/schedule",text:"Schedule"},{to:"/con/2022/#sponsorship",text:"Sponsorship"},{to:"/con/2021/review",text:"2021 review"}]},m=[{title:"Previous edition",links:[{title:"2021 review",link:"/con/2021/review"},{title:"2021 archive",link:"/con/2021/"}]},{title:"The event",links:[{title:"Speakers",link:"/con/2022/speakers"},{title:"Venue",link:"/con/2022/#venue"},{title:"Schedule",link:"/con/2022/schedule"},{title:"Pricing",link:"/con/2022/#pricing"},{title:"Sponsorship",link:"/con/2022/#sponsorship"}]},{title:"Legal",links:[{title:"Code of conduct",link:"/con/2022/code-of-conduct"},{title:"FAQ",link:"/con/2022/faq"},{title:"Transparency",link:"/con/2022/transparency"}]}],u=n("GYK1"),d=n("3nhQ"),p=n("SU53"),f=n("YwZP"),h={TITLE:"API Platform Conference 2022",DESCRIPTION:"The international conference dedicated to API Platform and its ecosystem",OG_IMAGE:"https://api-platform.com/conf-facebook.png",URL:"https://api-platform.com/con/2022/"},E=n("RHlq"),g=n("c63E");t.a=function(e){var t=e.logoAlwaysVisible,n=e.children,l=u.a.map((function(e){var t=e.offers.sort((function(e,t){return r()(e.limitDate).isAfter(r()(t.limitDate))?1:r()(t.limitDate).isAfter(r()(e.limitDate))?-1:0})),n=t.find((function(e){return r()(e.limitDate).isAfter(r()())}))||t[t.length-1];return{"@type":"Offer",availability:"https://schema.org/InStock",price:n.price+".00",name:1===e.offers.length?e.title:e.title+" - "+n.title,priceCurrency:"EUR",url:"https://www.eventbrite.fr/e/api-platform-conference-2022-tickets-304104152707",validFrom:"2022-04-07"}})),c={"@context":"https://schema.org","@type":"Event",name:"API Platform Conference 2022",description:"The international conference dedicated to API Platform and its ecosystem",url:"https://api-platform.com/con/2022/",eventStatus:"http://schema.org/EventScheduled",eventAttendanceMode:"https://schema.org/MixedEventAttendanceMode",startDate:"2022-09-15",endDate:"2022-09-15",organizer:{"@type":"Organization",name:"Les-Tilleuls.coop",url:"https://les-tilleuls.coop/en"},location:[{"@type":"Place",name:"Euratechnologies",address:{"@type":"PostalAddress",addressLocality:"Lille",addressRegion:"Hauts de France",postalCode:"59000",streetAddress:"Place de Saintignon, 165 avenue de Bretagne"}},{"@type":"VirtualLocation",url:"https://api-platform.com/con/2022/"}],image:h.OG_IMAGE,offers:l},v=Object(f.useLocation)().pathname,b=Object(a.useState)([]),k=b[0],_=b[1],y=Object(a.useMemo)((function(){var e=null==k?void 0:k[k.length-1];return e&&"home"!==e&&k.length?v+"#"+k[k.length-1]:v}),[k,v]);Object(a.useEffect)((function(){window.history.replaceState({},"",y)}),[y]);var w=Object(a.useState)(!1),N=w[0],I=w[1];return Object(a.useEffect)((function(){var e=document.createElement("script");e.src="https://www.eventbrite.com/static/widgets/eb_widgets.js",e.onload=function(){I(!0)},document.body.appendChild(e)}),[I]),i.a.createElement(d.a.Provider,{value:{nav:s,activeLink:y,edition:"2022",isEventBriteLoaded:N}},i.a.createElement(p.a.Provider,{value:{sectionsVisibles:k,setSectionsVisibles:_}},i.a.createElement(o.a,null,i.a.createElement("script",{type:"application/ld+json"},JSON.stringify(c)),i.a.createElement("script",{defer:!0,src:"https://unpkg.com/smoothscroll-polyfill/dist/smoothscroll.min.js"})),i.a.createElement(E.a,{edition:"2022",meta:h,logoAlwaysVisible:t,footer:m,navButton:i.a.createElement(g.a,{className:"pink",size:"small",id:"nav"},"Buy ticket")},n)))}},qdKg:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),i=n.n(a),l=n("fHej");t.default=function(){return i.a.createElement(l.default,null)}}}]);
//# sourceMappingURL=component---src-pages-con-index-tsx-4c1185b6debf201538d1.js.map