import { ClickButtonProps } from './type';
import { calculateResult, clearEditorContent } from './utils';

/**
 * 默认校验编辑器输入的正则
 */
export const defaultRegex = /^[\d+\-*./()^]*$/;

export const SymbolArray: ClickButtonProps[] = [
  { text: '1' },
  { text: '2' },
  { text: '3' },
  { text: '4' },
  { text: '5' },
  { text: '6' },
  { text: '7' },
  { text: '8' },
  { text: '9' },
  { text: '0' },
  { text: '.' },
  { text: '^' },
  { text: '+' },
  { text: '-' },
  { text: '*' },
  { text: '/' },
  { text: '(' },
  { text: ')' },
  {
    text: 'C',
    handleClick: ({ editorViewRef }) => clearEditorContent(editorViewRef),
  },
  {
    text: '=',
    handleClick: ({ editorViewRef, finishCallback }) => {
      if (editorViewRef.current) {
        calculateResult({
          editorViewRef: editorViewRef,
          finishCallback: finishCallback,
        });
      }
    },
  },
];
