import { EditorState, EditorView, basicSetup } from '@codemirror/basic-setup';
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
  scale = 1, // 新增比例参数，默认值为1
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
          CMEditorView.lineWrapping, // 启用换行
          CMEditorView.theme({
            '&.cm-editor': {
              height: '100%',
              color: 'black',
            },
            '&.cm-editor .cm-scroller': {
              overflow: 'auto',
              borderRadius: `${20 * scale}px`,
            },
            // 隐藏行号
            '&.cm-editor .cm-gutters': { display: 'none' },
            // 确保每一行的背景颜色一致
            '&.cm-editor .cm-content': {
              backgroundColor: `${inputBgColor ?? '#cedded'}`,
              fontSize: `${40 * scale}px`, // 调整字体大小
            },
            '.cm-line': { backgroundColor: `${inputBgColor ?? '#cedded'}` },
            // 自定义光标样式
            '.cm-cursor': {
              borderLeft: `${8 * scale}px solid #3077FA`,
              borderRadius: `${4 * scale}px`,
              // 确保光标不居中
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

      // 清理函数，以防止组件卸载时出现多个编辑器实例
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

  // 将scale应用到样式中
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
