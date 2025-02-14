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

## Props

| Prop             | Type                         | Description                                                           |
| ---------------- | ---------------------------- | --------------------------------------------------------------------- |
| `style`          | `React.CSSProperties`        | 自定义编辑器容器的样式。                                              |
| `buttonStyle`    | `React.CSSProperties`        | 自定义按钮的样式。                                                    |
| `finishCallback` | ` (content: string) => void` | 计算完成的回调函数。当点击“=”按钮时，编辑器内容会通过该回调函数输出。 |
| `scale`          | `number`                     | 组件的缩放比例。                                                      |
| `inputBgColor`   | `string`                     | 输入框背景色。                                                        |

### `style`

- **类型**：`React.CSSProperties`
- **描述**：允许用户自定义编辑器容器的样式。例如，可以设置编辑器的宽度、高度、边距、边框等。

### `buttonStyle`

- **类型**：`React.CSSProperties`
- **描述**：允许用户自定义按钮的样式。例如，可以设置按钮的颜色、字体大小、边距等。

### `finishCallback`

- **类型**：`(content: string) => void`
- **描述**：计算完成的回调函数。当点击“=”按钮时，编辑器内容会通过该回调函数输出。

### `scale`

- **类型**：`number`
- **描述**：允许用户自定义组件的缩放比例。

### `inputBgColor`

- **类型**：`string`
- **描述**：允许用户自定义输入框背景色。

## 使用示例

```tsx
import React from 'react';
import { CalculateEditor } from 'click-insert-editor';

const App = () => {
  return (
    <div>
      <h1>Calculate Editor Example</h1>
      <CalculateEditor
        style={{
          width: 200,
          height: 260,
          backgroundColor: '#7AB426',
          border: '10px solid black',
          paddingBottom: 30,
        }}
        buttonStyle={{
          backgroundColor: '#7AB426',
          border: '5px solid black',
          color: 'white',
          height: 40,
          width: 40,
        }}
        scale={0.5}
        inputBgColor="#F9D931"
        finishCallback={(content) => {
          console.log(content);
        }}
      />
    </div>
  );
};

export default App;
```
