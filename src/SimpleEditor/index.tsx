import { EditorView, basicSetup } from '@codemirror/basic-setup';
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

      // 清理函数，以防止组件卸载时出现多个编辑器实例
      return () => {
        view.destroy();
      };
    }
  }, []); // 空依赖数组，确保只在挂载时执行一次

  return (
    <div
      ref={editorRef}
      style={{ border: '1px solid black', height: '500px' }}
    />
  );
};

export default SimpleEditor;
