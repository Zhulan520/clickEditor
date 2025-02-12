# clickEditor

[![NPM version](https://img.shields.io/npm/v/clickEditor.svg?style=flat)](https://npmjs.org/package/clickEditor)
[![NPM downloads](http://img.shields.io/npm/dm/clickEditor.svg?style=flat)](https://npmjs.org/package/clickEditor)

可全程释放键盘的、点击插入式的编辑器

## Usage

TODO

## Options

TODO

## Development

```bash
# install dependencies
$ npm install

# develop library by docs demo
$ npm start

- **build**: 使用 `father` 构建项目，发包用的构建。
- **build:watch**: 监听文件变化并实时构建。
- **deploy**: 使用 `gh-pages` 将 `docs-dist` 目录部署到 GitHub Pages，运行该命令前确保是用docs:build构建的。
- **dev**: 启动 `dumi` 文档开发服务器。
- **docs:build**: 构建文档。
- **docs:preview**: 预览构建后的文档。
- **doctor**: 使用 `father` 检查项目配置和依赖。
- **lint**: 运行所有 lint 任务，包括 `lint:es` 和 `lint:css`。
- **lint:css**: 对 CSS 和 Less 文件运行 `stylelint`。
- **lint:es**: 对 JavaScript、JSX、TypeScript、TSX 文件运行 `eslint`。
- **prepare**: 安装 `husky` 钩子并设置 `dumi`。
- **prepublishOnly**: 在发布之前执行 doctor 检查并构建项目。
- **start**: 启动开发模式（相当于 `npm run dev`）。
```

## LICENSE

MIT

# CalculateEditor

`CalculateEditor` 是一个用于简单数学计算的编辑器组件。它允许用户输入数字和基本的算术运算符，并通过点击按钮来执行计算。该组件还支持自定义按钮和样式。

## 功能

- **数学表达式计算**：支持基本的算术运算（加、减、乘、除）以及幂运算。
- **编辑器内容清除**：提供清除按钮，清空编辑器内容。
- **自定义按钮**：支持传入自定义按钮，可以扩展编辑器的功能。
- **括号支持**：支持使用括号来处理复杂的数学表达式。

## Props

| Prop           | Type                                           | Description                                      |
| -------------- | ---------------------------------------------- | ------------------------------------------------ |
| `style`        | `React.CSSProperties`                          | 自定义编辑器容器的样式。                         |
| `buttonStyle`  | `React.CSSProperties`                          | 自定义按钮的样式。                               |
| `customSymbol` | `{ text: string; handleClick?: () => void }[]` | 自定义按钮数组，每个按钮包含文本和可选点击事件。 |

### `style`

- **类型**：`React.CSSProperties`
- **描述**：允许用户自定义编辑器容器的样式。例如，可以设置编辑器的宽度、高度、边距、边框等。

### `buttonStyle`

- **类型**：`React.CSSProperties`
- **描述**：允许用户自定义按钮的样式。例如，可以设置按钮的颜色、字体大小、边距等。

### `customSymbol`

- **类型**：`{ text: string; handleClick?: () => void }[]`
- **描述**：自定义按钮数组。每个按钮对象包含以下属性：

  - `text`：按钮显示的文本。
  - `handleClick`（可选）：按钮点击时触发的回调函数。

  ### `customRegex`

- **类型**：`RegExp`
- **描述**：自定义输入验证正则表达式。如果提供该参数，编辑器将使用此正则表达式验证用户输入；如果未提供，则不限制输入验证。

## 使用示例

```tsx
import React from 'react';
import CalculateEditor from 'your-package-name';
import 'your-package-name/dist/index.css';

const App = () => {
  const customButtons = [
    { text: '√', handleClick: () => console.log('Square root clicked') },
    { text: '^', handleClick: () => console.log('Power clicked') },
  ];

  return (
    <div>
      <h1>Calculate Editor Example</h1>
      <CalculateEditor
        style={{ width: '300px', height: '400px' }}
        buttonStyle={{ backgroundColor: '#4CAF50', color: 'white' }}
        customSymbol={customButtons}
        customRegex={/^[\d+\-*/()√^]*$/} // 自定义正则表达式
      />
    </div>
  );
};

export default App;
```
