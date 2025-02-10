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

      new EditorView({
        state: startState,
        parent: editorRef.current,
      });
    }
  }, []);

  return (
    <div
      ref={editorRef}
      style={{ border: '1px solid black', height: '500px' }}
    />
  );
};

export default SimpleEditor;
