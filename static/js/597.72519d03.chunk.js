"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[597],{90:function(e,n,t){t.d(n,{W:function(){return s}});var r="Container_container__e-Iy3",a=t(184),s=function(e){var n=e.children;return(0,a.jsx)("div",{className:r,children:n})}},597:function(e,n,t){t.r(n),t.d(n,{default:function(){return g}});var r=t(686),a=t.n(r),s=t(90),c="Section_section__kylri",i=t(184),l=function(e){var n=e.children;return(0,i.jsx)("div",{className:c,children:n})},u=t(434),o=t(633),m=t(745),d={form:"ContactForm_form__dhl+T",label:"ContactForm_label__-cVXI",input:"ContactForm_input__Bl93P",title:"ContactForm_title__jZguf",btnContact:"ContactForm_btnContact__wgwiZ"},h=function(){var e=(0,u.I0)(),n=(0,u.v9)(m.Af);return(0,i.jsxs)("form",{className:d.form,onSubmit:function(t){t.preventDefault();var r={};if(t.currentTarget.name&&(r.name=t.currentTarget.name.value),t.currentTarget.number&&(r.number=t.currentTarget.number.value),n.find((function(e){return e.name.toLowerCase()===r.name.toLowerCase()||e.number===r.number})))return alert("".concat(r.name,", number: ").concat(r.number," is already in contacts !")),void t.currentTarget.reset();e((0,o.el)({name:r.name,number:r.number})),t.currentTarget.reset()},children:[(0,i.jsxs)("label",{className:d.subTitle,children:["Name",(0,i.jsx)("input",{className:d.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f\\s]+$",title:"Name may contain only letters, apostrophe, dash and spaces.  For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",placeholder:"Enter name"})]}),(0,i.jsxs)("label",{className:d.subTitle,children:["Number",(0,i.jsx)("input",{className:d.input,type:"tel",name:"number",pattern:"\\+?[0-9\\s\\-\\(\\)]+",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",placeholder:"Enter your number",required:!0})]}),(0,i.jsx)("button",{type:"submit",className:d.btn,children:"Add contact"})]})},_=t(791),b=t(172),f=t(602),p="ContactList_list__item__nW5sS",x="ContactList_list__button__VgtKt",j=function(){var e=(0,u.I0)(),n=(0,u.v9)(m.NH),t=(0,u.v9)(m.hF);return(0,_.useEffect)((function(){e((0,o.yF)())}),[e]),(0,i.jsxs)("div",{children:[(0,i.jsx)("ul",{children:null===t||void 0===t?void 0:t.map((function(n){var t=n.id,r=n.name,a=n.number;return(0,i.jsxs)("li",{className:p,children:[(0,i.jsxs)("p",{children:[r," ",a]}),(0,i.jsx)("button",{className:x,onClick:function(){return e((0,o._f)(t))},children:"delete"})]},t)}))}),n&&(0,i.jsx)(b.a,{className:f.Z.loaderContact})]})},v=t(328),C="Filter_inputfilter__ceBh-",N=function(){var e=(0,u.I0)();return(0,i.jsx)("div",{children:(0,i.jsx)("input",{className:C,type:"text",onChange:function(n){e((0,v.T)(n.currentTarget.value))}})})},g=function(){var e=(0,u.v9)(m.zh);return e&&a().Notify.warning("".concat(e.message)),(0,i.jsx)(s.W,{children:(0,i.jsxs)(l,{children:[(0,i.jsx)("h1",{children:"Phonebook"}),(0,i.jsx)(h,{}),!e&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h2",{children:"Contacts"}),(0,i.jsx)(N,{}),(0,i.jsx)(j,{})]})]})})}}}]);
//# sourceMappingURL=597.72519d03.chunk.js.map