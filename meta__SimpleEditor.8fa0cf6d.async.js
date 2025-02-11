"use strict";(self.webpackChunkclick_insert_editor=self.webpackChunkclick_insert_editor||[]).push([[104],{14287:function(E,r,e){e.r(r),e.d(r,{demos:function(){return s}});var a=e(17061),t=e.n(a),_=e(17156),d=e.n(_),l=e(67294),p=e(91671),m=e(77898),s={"simpleeditor-demo-0":{component:l.memo(l.lazy(d()(t()().mark(function c(){var o,u;return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,77898));case 2:return o=n.sent,u=o.default,n.abrupt("return",{default:function(){return l.createElement(u,null)}});case 5:case"end":return n.stop()}},c)})))),asset:{type:"BLOCK",id:"simpleeditor-demo-0",refAtomIds:["SimpleEditor"],dependencies:{"index.jsx":{type:"FILE",value:`import SimpleEditor from '../SimpleEditor';

export default () => <SimpleEditor />;`},"../SimpleEditor.tsx":{type:"FILE",value:e(13308).Z}},entry:"index.jsx"},context:{"../SimpleEditor.tsx":m,"/home/runner/work/clickEditor/clickEditor/src/SimpleEditor/index.tsx":m},renderOpts:{compile:function(){var c=d()(t()().mark(function u(){var f,n=arguments;return t()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(335).then(e.bind(e,37335));case 2:return i.abrupt("return",(f=i.sent).default.apply(f,n));case 3:case"end":return i.stop()}},u)}));function o(){return c.apply(this,arguments)}return o}()}}}},77898:function(E,r,e){e.r(r);var a=e(2264),t=e(75533),_=e(78120),d=e(67294),l=e(85893),p=function(){var s=(0,d.useRef)(null);return(0,d.useEffect)(function(){if(s.current){var c=_.yy.create({doc:'console.log("Hello, CodeMirror 6!");',extensions:[a.Xy]}),o=new t.tk({state:c,parent:s.current});return function(){o.destroy()}}},[]),(0,l.jsx)("div",{ref:s,style:{border:"1px solid black",height:"500px"}})};r.default=p},51594:function(E,r,e){e.r(r),e.d(r,{texts:function(){return t}});var a=e(91671);const t=[{value:"This is an example component.",paraId:0,tocIndex:0}]},13308:function(E,r){r.Z=`import { EditorView, basicSetup } from '@codemirror/basic-setup';
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
