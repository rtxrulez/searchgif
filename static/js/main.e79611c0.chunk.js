(this.webpackJsonpsearchgif=this.webpackJsonpsearchgif||[]).push([[0],{101:function(e,t,a){e.exports={card:"styles_card__B183x",img:"styles_img__1O9dg",btn:"styles_btn__2LeLg"}},225:function(e,t,a){},226:function(e,t,a){"use strict";a.r(t);var s,c=a(0),r=a.n(c),n=a(34),i=a.n(n),l=a(31),o=a(94),d=a(24),j=a(230),h=a(59),u=a(229),b=a(109),x=a(32),m=25,O=0,g="g",f="en",p="UFsb5tfUUEt9dcAmEQ1xYQbkL2SkQR9g",_=Object(b.a)({reducerPath:"giphy",tagTypes:["Gifs"],baseQuery:Object(x.d)({baseUrl:"https://api.giphy.com/v1/gifs"}),endpoints:function(e){return{search:e.query({query:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return console.log(),"search?api_key=".concat(p,"&q=").concat(e,"&limit=").concat(m,"&offset=").concat(O,"&rating=").concat(g,"&lang=").concat(f)}})}}}),y=Object(b.a)({reducerPath:"translate",tagTypes:["Translate"],baseQuery:Object(x.d)({baseUrl:"https://translate.astian.org/translate"}),endpoints:function(e){return{ru2en:e.mutation({query:function(e){return{method:"POST",body:{q:e,source:"ru",target:"en",headers:{"Content-Type":"application/json"}}}}})}}}),v=_.useSearchQuery,N=y.useRu2enMutation,T=a(110),w=a(8),S=Object(w.a)({reducer:(s={},Object(T.a)(s,_.reducerPath,_.reducer),Object(T.a)(s,y.reducerPath,y.reducer),s),middleware:function(e){return e().concat(_.middleware,y.middleware)}}),F=a(232),k=a(233),L=a(133),Q=a(101),q=a.n(Q),E=a(10),I=function(e){var t=e.gifData;return console.log("g",t),Object(E.jsxs)(F.a,{hoverable:!0,className:q.a.card,children:[Object(E.jsx)(k.a,{className:q.a.img,title:t.title,src:t.images.preview_gif.url,width:"100%",preview:{src:t.images.original.url}}),Object(E.jsx)(L.a,{type:"default",onClick:function(){return e=t.images.downsized_large.url,void navigator.clipboard.writeText(e);var e},className:q.a.btn,children:"\u041a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c"})]})},P=a(112),U=a.n(P),z=a(128),C=a(231),A=a(234),G=a(68),J=a.n(G),B=function(e){var t=e.changeSearch,a=C.a.useForm(),s=Object(h.a)(a,1)[0],r=N(),n=Object(h.a)(r,2),i=n[0],l=n[1].isLoading,o=Object(c.useState)(""),d=Object(h.a)(o,2),j=d[0],b=d[1],x=function(){var e=Object(z.a)(U.a.mark((function e(t){var a;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i(t).unwrap();case 2:a=e.sent,b(a.translatedText);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){t(j)}),[j]),Object(E.jsxs)(C.a,{form:s,name:"searchForm",layout:"vertical",onFinish:function(e){var t=e.searchText;/^[a-zA-Z]+$/.test(t)?(console.log("en"),b(t)):(console.log("ru"),x(t)),s.resetFields()},initialValues:{remember:!1},className:J.a.searchForm,children:[Object(E.jsx)(C.a.Item,{name:"searchText",children:Object(E.jsx)(A.a,{placeholder:"Search input"})}),Object(E.jsxs)("div",{className:J.a.englishText,children:[Object(E.jsx)("div",{className:J.a.head,children:"English text:"}),Object(E.jsx)("div",{className:J.a.transText,children:l?Object(E.jsx)(u.a,{}):j})]}),Object(E.jsx)(C.a.Item,{children:Object(E.jsx)(L.a,{type:"primary",htmlType:"submit",children:"Search"})})]})},D=a(69),H=a.n(D),M=function(){var e=Object(c.useState)(""),t=Object(h.a)(e,2),a=t[0],s=t[1],r=v(a),n=r.data,i=r.isLoading,l=null===n||void 0===n?void 0:n.data,o=Object(c.useCallback)((function(e){s(e)}));return Object(E.jsxs)("div",{className:H.a.container,children:[Object(E.jsx)("div",{className:H.a.form,children:Object(E.jsx)(B,{changeSearch:o})}),Object(E.jsxs)("div",{className:H.a.list,children:[l&&l.map((function(e,t){return Object(E.jsx)(I,{gifData:e},t)})),i&&Object(E.jsx)("div",{className:H.a.loader,children:Object(E.jsx)(u.a,{size:"large"})})]})]})},R=a(235),K=a(236),V=a(60),W=a.n(V),Y=j.a.Header,Z=function(){return Object(E.jsxs)(Y,{className:W.a.header,children:[Object(E.jsxs)("div",{className:W.a.left,children:[Object(E.jsx)(K.a,{className:W.a.logo,twoToneColor:"#eb2f96",style:{fontSize:"20px"}}),Object(E.jsx)(R.a,{theme:"dark",mode:"horizontal",children:Object(E.jsx)(R.a.Item,{children:Object(E.jsx)(o.b,{to:"/searchgif",children:"Home"})})})]}),Object(E.jsx)("div",{className:W.a.right,children:Object(E.jsxs)("span",{className:W.a.copyright,children:["Power by ",Object(E.jsx)("a",{href:"https://giphy.com/",children:"Giphy"})]})})]})},$=j.a.Content,X=function(){return Object(E.jsx)(o.a,{children:Object(E.jsxs)(j.a,{children:[Object(E.jsx)(Z,{}),Object(E.jsx)($,{className:"container",children:Object(E.jsx)(d.c,{children:Object(E.jsx)(d.a,{path:"/searchgif",exact:!0,children:Object(E.jsx)(M,{})})})})]})})};a(225);i.a.render(Object(E.jsx)(r.a.StrictMode,{children:Object(E.jsx)(l.a,{store:S,children:Object(E.jsx)(X,{})})}),document.getElementById("root"))},60:function(e,t,a){e.exports={header:"styles_header__3yExn",logo:"styles_logo__1Q2bG",left:"styles_left__1ir1n",copyright:"styles_copyright__3mqcn"}},68:function(e,t,a){e.exports={englishText:"styles_englishText__2xIS4",head:"styles_head__3pOeK",transText:"styles_transText__1y7mW",searchForm:"styles_searchForm__3xJAL"}},69:function(e,t,a){e.exports={container:"styles_container__ttgLw",form:"styles_form__UF1pO",list:"styles_list__2LF3t",loader:"styles_loader__1mAIp"}}},[[226,1,2]]]);
//# sourceMappingURL=main.e79611c0.chunk.js.map