import { EditorState, EditorView, basicSetup } from '@codemirror/basic-setup';
import { EditorView as CMEditorView } from '@codemirror/view';
import { Button } from 'antd';
import { isEmpty } from 'lodash';
import React, { useEffect, useRef } from 'react';
import { SymbolArray } from './constants';
import './index.css';
import { CalculateEditorProps } from './type';
import { onlyAllowCalculatorInput } from './utils';

const CalculateEditor = ({
  style,
  buttonStyle,
  customSymbol,
  finishCallback,
  customRegex,
}: CalculateEditorProps) => {
  const editorRef = useRef<HTMLDivElement>(null);
  const editorViewRef = useRef<EditorView | null>(null);
  const [SymbolItems, setSymbolItems] = React.useState(SymbolArray);

  useEffect(() => {
    if (editorRef.current) {
      const startState = EditorState.create({
        doc: '',
        extensions: [
          basicSetup,
          onlyAllowCalculatorInput({
            customSymbol: customSymbol,
            customRegex: customRegex,
          }),
          CMEditorView.lineWrapping, // 启用换行
          CMEditorView.theme({
            '&.cm-editor': {
              height: '100%',
            },
            '&.cm-editor .cm-scroller': {
              overflow: 'auto',
              borderRadius: '20px',
            },
            // 隐藏行号
            '&.cm-editor .cm-gutters': { display: 'none' },
            // 确保每一行的背景颜色一致
            '&.cm-editor .cm-content': {
              backgroundColor: '#cedded',
            },
            '.cm-line': { backgroundColor: '#cedded' },
            // 自定义光标样式
            '.cm-cursor': {
              borderLeft: '8px solid #3077FA',
              borderRadius: '4px',
            },
          }),
        ],
      });
      const view = new EditorView({
        state: startState,
        parent: editorRef.current,
      });
      editorViewRef.current = view;

      // 设置自定义按钮
      if (customSymbol && !isEmpty(customSymbol)) {
        setSymbolItems(customSymbol);
      }
      // 清理函数，以防止组件卸载时出现多个编辑器实例
      return () => {
        view.destroy();
      };
    }
  }, [customSymbol, customRegex]);

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

  return (
    <div className="editorBox" style={style}>
      <div ref={editorRef} className="editorDiv" />
      <div className="symbolArea">
        {SymbolItems?.map(({ text, handleClick }) => (
          <Button
            key={text}
            className="button"
            style={buttonStyle}
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
