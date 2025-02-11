"use strict";(self.webpackChunkclick_insert_editor=self.webpackChunkclick_insert_editor||[]).push([[104],{14287:function(u,t,e){e.r(t),e.d(t,{demos:function(){return d}});var m=e(17061),r=e.n(m),_=e(17156),i=e.n(_),l=e(67294),f=e(91671),E=e(77898),d={"simpleeditor-demo-0":{component:l.memo(l.lazy(i()(r()().mark(function a(){var o,c;return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,77898));case 2:return o=n.sent,c=o.default,n.abrupt("return",{default:function(){return l.createElement(c,null)}});case 5:case"end":return n.stop()}},a)})))),asset:{type:"BLOCK",id:"simpleeditor-demo-0",refAtomIds:["SimpleEditor"],dependencies:{"index.jsx":{type:"FILE",value:`import SimpleEditor from '../SimpleEditor';

export default () => <SimpleEditor />;`},"../SimpleEditor.tsx":{type:"FILE",value:e(13308).Z}},entry:"index.jsx"},context:{"../SimpleEditor.tsx":E,"/Users/eleme/Desktop/clickEditor/src/SimpleEditor/index.tsx":E},renderOpts:{compile:function(){var a=i()(r()().mark(function c(){var p,n=arguments;return r()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(335).then(e.bind(e,37335));case 2:return s.abrupt("return",(p=s.sent).default.apply(p,n));case 3:case"end":return s.stop()}},c)}));function o(){return a.apply(this,arguments)}return o}()}}}},77898:function(u,t,e){e.r(t);var m=e(2264),r=e(75533),_=e(78120),i=e(67294),l=e(85893),f=function(){var d=(0,i.useRef)(null);return(0,i.useEffect)(function(){if(d.current){var a=_.yy.create({doc:'console.log("Hello, CodeMirror 6!");',extensions:[m.Xy]}),o=new r.tk({state:a,parent:d.current});return function(){o.destroy()}}},[]),(0,l.jsx)("div",{ref:d,style:{border:"1px solid black",height:"500px"}})};t.default=f},51594:function(u,t,e){e.r(t),e.d(t,{texts:function(){return r}});var m=e(91671);const r=[{value:"This is an example component.",paraId:0,tocIndex:0}]},13308:function(u,t){t.Z=`import { EditorView, basicSetup } from '@codemirror/basic-setup';
import { EditorState } from '@codemirror/state';
import React, { useEffect, useRef } from 'react';

const SimpleEditor: React.FC = () => {
  const editorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (editorRef.current) {
      const startState = EditorState.create({
        doc: 'console.log("Hello, CodeMirror 6!");',
        extensions: [basicSetup],
      });
      const view = new EditorView({
        state: startState,
        parent: editorRef.current,
      });

      // \u6E05\u7406\u51FD\u6570\uFF0C\u4EE5\u9632\u6B62\u7EC4\u4EF6\u5378\u8F7D\u65F6\u51FA\u73B0\u591A\u4E2A\u7F16\u8F91\u5668\u5B9E\u4F8B
      return () => {
        view.destroy();
      };
    }
  }, []); // \u7A7A\u4F9D\u8D56\u6570\u7EC4\uFF0C\u786E\u4FDD\u53EA\u5728\u6302\u8F7D\u65F6\u6267\u884C\u4E00\u6B21

  return (
    <div
      ref={editorRef}
      style={{ border: '1px solid black', height: '500px' }}
    />
  );
};

export default SimpleEditor;
`}}]);
