import { EditorView } from '@codemirror/view';

export interface CalculateEditorProps {
  /**
   * 自定义样式
   */
  style?: React.CSSProperties;
  /**
   * 自定义按钮样式
   */
  buttonStyle?: React.CSSProperties;
  /**
   * 自定义符号
   */
  customSymbol?: {
    text: string;
    handleClick?: ({
      editorViewRef,
      finishCallback,
    }: CalculateResultProps) => void;
  }[];
  /**
   * 自定义编辑器出入框的正则
   */
  customRegex?: RegExp;
  /**
   * 计算完成回调，可将编辑器内容输出
   */
  finishCallback?: (content: string) => void;
}

/**
 * 计算结果属性
 */
export interface CalculateResultProps {
  editorViewRef: React.MutableRefObject<EditorView | null>;
  finishCallback?: (content: string) => void;
}

/**
 * 点击按钮属性
 */
export interface ClickButtonProps {
  text: string;
  handleClick?: ({
    editorViewRef,
    finishCallback,
  }: CalculateResultProps) => void;
}
