(this["webpackJsonpanalizador-sintactico"]=this["webpackJsonpanalizador-sintactico"]||[]).push([[0],{71:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(24),i=n.n(a),l=(n(71),n(12)),o=n(124),r=n(120),s=n(121),d=n(2),u=Object(s.a)((function(e){return{title:{fontWeight:"bold",fontSize:20},text:{fontSize:20,paddingLeft:5},container:{paddingTop:5,display:"flex"},inputText:{width:700,color:"red"}}})),j=function(e){var t=e.codigo,n=u();return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(o.a,{display:"flex",justifyContent:"center",alignItems:"center",children:Object(d.jsx)("div",{children:Object(d.jsx)("div",{style:{paddingTop:100},children:Object(d.jsx)(r.a,{id:"outlined-multiline-static",className:n.inputText,multiline:!0,rows:10,disabled:!0,defaultValue:t})})})})})},h=n(122),f=n(15),b=function(e){if(!e)return"";for(var t=[],n=/[a-zA-Z_]\w*/g,c=/\b\d+(\.\d*)?([eE][+-]?\d+)?\b/g,a=/([-+*/=()&|;:.,<>{}[\]])/g,i=/const ([a-zA-Z]+)( = )([0-9]+)(;)$/g,l=/(var|let) ([a-zA-Z]+)(;|(( = )([0-9]+);))$/g,o=/function ([a-zA-Z]+ )((\(\))|(\([a-zA-Z]+\))) {$/g,r=/if \(.+\) {$/g,s=/else {$/g,d=/console.log\(.\);$/g,u=/while \(.+\) {$/g,j="",h="",b=e.match(/[^\r\n]+/g),m="",g=0;g<b.length;g++){for(var x=b[g],O=[],p=0;p<x.length;p++){var v=x.charAt(p);v.match(n)?(j+=v,x.charAt(p+1).match(n)||(O=[].concat(Object(f.a)(O),[j]),j="")):v.match(a)?O=[].concat(Object(f.a)(O),[v]):v.match(c)&&(h+=v,x.charAt(p+1).match(c)||(O=[].concat(Object(f.a)(O),[h]),h=""))}t=[].concat(Object(f.a)(t),[O])}for(var E=0,z=0,A=0;A<t.length;A++){var y,T,w,N=A+1;if(t[A].includes("const"))if(!b[A].match(i))m+="Error linea ".concat(N,", solucion: const ").concat(t[A][1]?t[A][1]:"name"," = ").concat((null===(y=t[A][3])||void 0===y?void 0:y.match(c))?t[A][3]:0,";\n");if(t[A].includes("let")||t[A].includes("var"))if(!b[A].match(l))if(3===t[A].length)m+="Error linea ".concat(N,", solucion: ").concat(t[A][0]," ").concat(t[A][1]?t[A][1]:"name",";\n");else m+="Error linea ".concat(N,", solucion: ").concat(t[A][0]," ").concat(t[A][1]?t[A][1]:"name"," = ").concat((null===(T=t[A][3])||void 0===T?void 0:T.match(c))?t[A][3]:0,";\n");if(t[A].includes("function"))if(!b[A].match(o))m+="Error linea ".concat(N,", solucion: function ").concat(t[A][1]?t[A][1]:"name"," (").concat((null===(w=t[A][3])||void 0===w?void 0:w.match(n))?t[A][3]:"param",") {\n");t[A].includes("if")&&(b[A].match(r)||(m+="Error linea ".concat(N,", solucion: if (true) {\n"))),t[A].includes("else")&&(b[A].match(s)||(m+="Error linea ".concat(N,", solucion: else {\n"))),t[A].includes("console")&&(b[A].match(d)||(m+="Error linea ".concat(N,", solucion: console.log(value);\n"))),t[A].includes("while")&&(b[A].match(u)||(m+="Error linea ".concat(N,", solucion: while (true) {\n"))),t[A].includes("{")&&(z+=1),t[A].includes("}")&&(E+=1)}return z>E?m+="Error, faltan ".concat(z-E,"  '}'  de cierre.\n"):E>z&&(m+="Error, faltan ".concat(E-z,"  '{'  de cierre.\n")),m},m=Object(s.a)((function(e){return{title:{fontWeight:"bold",fontSize:20},text:{fontSize:20,paddingLeft:5},container:{paddingTop:5,display:"flex"},inputText:{width:700}}})),g=function(e){var t=e.setData,n=m(),a=Object(c.useState)(""),i=Object(l.a)(a,2),s=i[0],u=i[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(o.a,{display:"flex",justifyContent:"center",alignItems:"center",children:Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"ANALIZADOR SINT\xc1CTICO"}),Object(d.jsxs)("div",{className:n.container,children:[Object(d.jsx)("span",{className:n.title,children:"Autor:"}),Object(d.jsx)("span",{className:n.text,children:"Jose Enmanuel Estrella 2-16-0823"})]}),Object(d.jsxs)("div",{className:n.container,children:[Object(d.jsx)("span",{className:n.title,children:"Lenguaje:"}),Object(d.jsx)("span",{className:n.text,children:"JavaScript"})]})]})}),Object(d.jsx)(o.a,{display:"flex",justifyContent:"center",alignItems:"center",children:Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{style:{paddingTop:100},children:Object(d.jsx)(r.a,{id:"outlined-multiline-static",className:n.inputText,label:"Escribe o pega el c\xf3digo a analizar",multiline:!0,rows:10,defaultValue:s,onChange:function(e){var t=e.target.value;return u(t)}})}),Object(d.jsx)("div",{style:{marginTop:10},children:Object(d.jsx)(h.a,{variant:"contained",onClick:function(){return t(b(s))},children:"Analizar"})})]})})]})},x=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],a=t[1];return Object(d.jsxs)(d.Fragment,{children:[console.log(n),Object(d.jsx)(g,{setData:a}),Object(d.jsx)(j,{codigo:n})]})};i.a.render(Object(d.jsx)(x,{}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.116c0b45.chunk.js.map