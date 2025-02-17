(self.webpackChunkclick_insert_editor=self.webpackChunkclick_insert_editor||[]).push([[634],{49294:function(A,l,t){"use strict";t.r(l),t.d(l,{demos:function(){return D}});var R=t(17061),a=t.n(R),b=t(17156),w=t.n(b),d=t(67294),P=t(11074),u=t(87969),D={"calculateeditor-demo-0":{component:d.memo(d.lazy(w()(a()().mark(function C(){var m,f,h;return a()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(t.bind(t,87969));case 2:return m=i.sent,f=m.default,h=[{text:"1"},{text:"2"},{text:"3"},{text:"4"},{text:"6"},{text:"7"},{text:"8"},{text:"9"},{text:"0"},{text:"="}],i.abrupt("return",{default:function(){return d.createElement(f,null)}});case 6:case"end":return i.stop()}},C)})))),asset:{type:"BLOCK",id:"calculateeditor-demo-0",refAtomIds:["CalculateEditor"],dependencies:{"index.jsx":{type:"FILE",value:`import CalculateEditor from '../CalculateEditor';

const customButtons = [
  { text: '1' },
  { text: '2' },
  { text: '3' },
  { text: '4' },
  { text: '6' },
  { text: '7' },
  { text: '8' },
  { text: '9' },
  { text: '0' },
  { text: '=' },
];
export default () => (
  <CalculateEditor
  // buttonStyle={{
  //   backgroundColor: '#7AB426',
  //   border: '5px solid black',
  //   color: 'white',
  //   height: 40,
  //   width: 40,
  // }}
  // style={{
  //   width: 200,
  //   height: 260,
  //   backgroundColor: '#7AB426',
  //   border: '10px solid black',
  //   paddingBottom: 30,
  // }}
  // scale={0.5}
  // inputBgColor="#F9D931"
  // finishCallback={(content) => {
  //   console.log(content);
  // }}
  />
);`},"../CalculateEditor.tsx":{type:"FILE",value:t(53512).Z}},entry:"index.jsx"},context:{"../CalculateEditor.tsx":u,"/home/runner/work/clickEditor/clickEditor/src/CalculateEditor/index.tsx":u},renderOpts:{compile:function(){var C=w()(a()().mark(function f(){var h,B=arguments;return a()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,t.e(335).then(t.bind(t,37335));case 2:return o.abrupt("return",(h=o.sent).default.apply(h,B));case 3:case"end":return o.stop()}},f)}));function m(){return C.apply(this,arguments)}return m}()}}}},87969:function(A,l,t){"use strict";t.r(l),t.d(l,{default:function(){return O}});var R=t(42122),a=t.n(R),b=t(78120),w=t(2264),d=t(75533),P=t(81174),u=t(67294),D=t(57170),C=t(38216),m=function(){return b.yy.transactionFilter.of(function(n){if(!n.docChanged)return n;var r=n.newDoc.toString();return B.test(r)?n:[]})},f=function(n){var r=n.editorViewRef,x=n.finishCallback;if(r.current){var y=r.current.state.doc.toString();y=y.replace(/(\D)\1+/g,"$1");try{var s=(0,D.U)(C.$),v=s.evaluate(y),e=Number.isInteger(v)?v.toFixed(0):v.toFixed(6);x&&x(e),console.log(e),r.current.dispatch({changes:{from:0,to:r.current.state.doc.length,insert:e}})}catch(g){console.error("\u8BA1\u7B97\u9519\u8BEF:",g)}}},h=function(n){n.current&&n.current.dispatch({changes:{from:0,to:n.current.state.doc.length,insert:""}})},B=/^[\d+\-*./()^]*$/,i=[{text:"1"},{text:"2"},{text:"3"},{text:"4"},{text:"5"},{text:"6"},{text:"7"},{text:"8"},{text:"9"},{text:"0"},{text:"."},{text:"^"},{text:"+"},{text:"-"},{text:"*"},{text:"/"},{text:"("},{text:")"},{text:"C",handleClick:function(n){var r=n.editorViewRef;return h(r)}},{text:"=",handleClick:function(n){var r=n.editorViewRef,x=n.finishCallback;r.current&&f({editorViewRef:r,finishCallback:x})}}],o=t(85893),V=function(n){var r=n.style,x=n.buttonStyle,y=n.finishCallback,s=n.inputBgColor,v=n.scale,e=v===void 0?1:v,g=(0,u.useRef)(null),S=(0,u.useRef)(null);(0,u.useEffect)(function(){if(g.current){var k=b.yy.create({doc:"",extensions:[w.Xy,m(),d.tk.lineWrapping,d.tk.theme({"&.cm-editor":{height:"100%",color:"black"},"&.cm-editor .cm-scroller":{overflow:"auto",borderRadius:"".concat(20*e,"px")},"&.cm-editor .cm-gutters":{display:"none"},"&.cm-editor .cm-content":{backgroundColor:"".concat(s??"#cedded"),fontSize:"".concat(40*e,"px")},".cm-line":{backgroundColor:"".concat(s??"#cedded")},".cm-cursor":{borderLeft:"".concat(8*e,"px solid #3077FA"),borderRadius:"".concat(4*e,"px"),margin:0}})]}),c=new d.tk({state:k,parent:g.current});return S.current=c,function(){c.destroy()}}},[e]);var I=function(c){if(S.current){var E=S.current,M=E.state.selection.main.from;E.dispatch({changes:{from:M,insert:c},selection:{anchor:M+c.length}}),E.focus()}},T=a()({width:400*e,height:410*e,padding:20*e,borderRadius:20*e},r),L=a()({width:80*e,height:50*e,fontSize:30*e},x);return(0,o.jsxs)("div",{className:"editorBox",style:T,children:[(0,o.jsx)("div",{ref:g,className:"editorDiv",style:{height:70*e,marginBottom:25*e,fontSize:40*e,borderRadius:20*e,textAlign:"start"}}),(0,o.jsx)("div",{className:"symbolArea",style:{gap:15*e},children:i?.map(function(k){var c=k.text,E=k.handleClick;return(0,o.jsx)(P.ZP,{className:"button",style:L,onClick:function(){if(E){E({editorViewRef:S,finishCallback:y});return}I(c)},children:c},c)})})]})},O=V},19900:function(A,l,t){"use strict";t.r(l),t.d(l,{texts:function(){return a}});var R=t(11074);const a=[]},53512:function(A,l){"use strict";l.Z=`import { EditorState, EditorView, basicSetup } from '@codemirror/basic-setup';
import { EditorView as CMEditorView } from '@codemirror/view';
import { Button } from 'antd';
import React, { useEffect, useRef } from 'react';
import { SymbolArray } from './constants';
import './index.css';
import { CalculateEditorProps } from './type';
import { onlyAllowCalculatorInput } from './utils';

const CalculateEditor = ({
  style,
  buttonStyle,

  finishCallback,

  inputBgColor,
  scale = 1, // \u65B0\u589E\u6BD4\u4F8B\u53C2\u6570\uFF0C\u9ED8\u8BA4\u503C\u4E3A1
}: CalculateEditorProps) => {
  const editorRef = useRef<HTMLDivElement>(null);
  const editorViewRef = useRef<EditorView | null>(null);

  useEffect(() => {
    if (editorRef.current) {
      const startState = EditorState.create({
        doc: '',
        extensions: [
          basicSetup,
          onlyAllowCalculatorInput(),
          CMEditorView.lineWrapping, // \u542F\u7528\u6362\u884C
          CMEditorView.theme({
            '&.cm-editor': {
              height: '100%',
              color: 'black',
            },
            '&.cm-editor .cm-scroller': {
              overflow: 'auto',
              borderRadius: \`\${20 * scale}px\`,
            },
            // \u9690\u85CF\u884C\u53F7
            '&.cm-editor .cm-gutters': { display: 'none' },
            // \u786E\u4FDD\u6BCF\u4E00\u884C\u7684\u80CC\u666F\u989C\u8272\u4E00\u81F4
            '&.cm-editor .cm-content': {
              backgroundColor: \`\${inputBgColor ?? '#cedded'}\`,
              fontSize: \`\${40 * scale}px\`, // \u8C03\u6574\u5B57\u4F53\u5927\u5C0F
            },
            '.cm-line': { backgroundColor: \`\${inputBgColor ?? '#cedded'}\` },
            // \u81EA\u5B9A\u4E49\u5149\u6807\u6837\u5F0F
            '.cm-cursor': {
              borderLeft: \`\${8 * scale}px solid #3077FA\`,
              borderRadius: \`\${4 * scale}px\`,
              // \u786E\u4FDD\u5149\u6807\u4E0D\u5C45\u4E2D
              margin: 0,
            },
          }),
        ],
      });

      const view = new EditorView({
        state: startState,
        parent: editorRef.current,
      });
      editorViewRef.current = view;

      // \u6E05\u7406\u51FD\u6570\uFF0C\u4EE5\u9632\u6B62\u7EC4\u4EF6\u5378\u8F7D\u65F6\u51FA\u73B0\u591A\u4E2A\u7F16\u8F91\u5668\u5B9E\u4F8B
      return () => {
        view.destroy();
      };
    }
  }, [scale]);

  const insertText = (text: string) => {
    if (editorViewRef.current) {
      const view = editorViewRef.current;
      const { from } = view.state.selection.main;
      view.dispatch({
        changes: { from, insert: text },
        selection: { anchor: from + text.length },
      });
      view.focus();
    }
  };

  // \u5C06scale\u5E94\u7528\u5230\u6837\u5F0F\u4E2D
  const scaledStyle = {
    width: 400 * scale,
    height: 410 * scale,
    padding: 20 * scale,
    borderRadius: 20 * scale,
    ...style,
  };

  const scaledButtonStyle = {
    width: 80 * scale,
    height: 50 * scale,
    fontSize: 30 * scale,
    ...buttonStyle,
  };

  return (
    <div className="editorBox" style={scaledStyle}>
      <div
        ref={editorRef}
        className="editorDiv"
        style={{
          height: 70 * scale,
          marginBottom: 25 * scale,
          fontSize: 40 * scale,
          borderRadius: 20 * scale,
          textAlign: 'start',
        }}
      />
      <div className="symbolArea" style={{ gap: 15 * scale }}>
        {SymbolArray?.map(({ text, handleClick }) => (
          <Button
            key={text}
            className="button"
            style={scaledButtonStyle}
            onClick={() => {
              if (handleClick) {
                handleClick({ editorViewRef, finishCallback });
                return;
              }
              insertText(text);
            }}
          >
            {text}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default CalculateEditor;
`},75042:function(){}}]);
