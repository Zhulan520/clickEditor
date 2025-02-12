import { EditorState, EditorView } from '@codemirror/basic-setup';
import { all, create } from 'mathjs';
import { defaultRegex } from './constants';
import { CalculateResultProps } from './type';

// 自定义限制输入内容的扩展,目前计算器限制了只能输入数字和符号加减乘除
export const onlyAllowCalculatorInput = ({
  customRegex,
  customSymbol,
}: {
  customRegex?: RegExp;
  customSymbol?: {
    text: string;
    handleClick?: ({
      editorViewRef,
      finishCallback,
    }: CalculateResultProps) => void;
  }[];
}) =>
  EditorState.transactionFilter.of((event) => {
    if (!event.docChanged) return event;
    const newDoc = event.newDoc.toString();
    // 如果自定义了符号,没定义正则，则不限制输入
    if (customSymbol && !customRegex) {
      return event;
    }
    // 如果自定义了符号,定义了正则，则限制输入
    const regex = customSymbol && customRegex ? customRegex : defaultRegex;
    if (regex.test(newDoc)) {
      return event;
    } else {
      return [];
    }
  });

export const calculateResult = ({
  editorViewRef,
  finishCallback,
}: {
  editorViewRef: React.MutableRefObject<EditorView | null>;
  finishCallback?: (content: string) => void;
}) => {
  if (editorViewRef.current) {
    let content = editorViewRef.current.state.doc.toString();
    // 处理重复符号的情况
    content = content.replace(/(\D)\1+/g, '$1'); // 将连续的非数字字符替换为单个字符
    try {
      const math = create(all);
      const result = math.evaluate(content); // 计算表达式结果
      const formattedResult = Number.isInteger(result)
        ? result.toFixed(0)
        : result.toFixed(6);
      if (finishCallback) {
        finishCallback(formattedResult);
      }
      console.log(formattedResult); // 打印结果
      // 更新编辑器内容为结果
      editorViewRef.current.dispatch({
        changes: {
          from: 0,
          to: editorViewRef.current.state.doc.length,
          insert: formattedResult,
        },
      });
    } catch (error) {
      console.error('计算错误:', error);
    }
  }
};

export const clearEditorContent = (
  editorViewRef: React.MutableRefObject<EditorView | null>,
) => {
  if (editorViewRef.current) {
    editorViewRef.current.dispatch({
      changes: {
        from: 0,
        to: editorViewRef.current.state.doc.length,
        insert: '',
      },
    });
  }
};
