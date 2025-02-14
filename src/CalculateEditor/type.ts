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
   * 计算完成的回调。即点击"="，可将编辑器内容输出
   */
  finishCallback?: (content: string) => void;
  /**
   * 比例
   */
  scale?: number;
  /**
   *  输入框背景色
   */
  inputBgColor?: string;
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
