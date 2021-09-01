# Smart Alpha Web

## 特徴

Smart Alpha Web は、最新決算の一覧を表示し、個人投資家が興味を持った決算を共有できるサービスです。  
最新の Vue3、Vite2、TypeScript などの技術を用いて開発しています。

## 1. 環境構築

以下のアプリケーションをインストールします。

| アプリケーション名                                   | バージョン   | インストール条件                                                          |
| ---------------------------------------------------- | ------------ | ------------------------------------------------------------------------- |
| [Node.js](https://nodejs.org/ja/)                    | 14.17.0 以上 | 必須                                                                      |
| [Visual Studio Code](https://code.visualstudio.com/) |              | [ローカルで開発する場合](#1-1-visual-studio-code-の拡張機能)              |
| [yarn](https://classic.yarnpkg.com/ja/)              |              | [yarn で実行する場合](#2-1-yarn-を使う場合)                               |
| [Docker](https://docs.docker.com/get-docker/)        |              | [Remote Containers で開発する場合](#2-2-Remote-Containers-で開発する場合) |

### 1-1. Visual Studio Code の拡張機能

Visual Studio Code に、以下の拡張機能をインストールします。

| 拡張機能                                                                                                               | インストール条件                  |
| ---------------------------------------------------------------------------------------------------------------------- | --------------------------------- |
| [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)                                   | 必須                              |
| [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)                | 必須                              |
| [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)                                       | 必須                              |
| [Vite](https://marketplace.visualstudio.com/items?itemName=antfu.vite)                                                 | 任意                              |
| [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)                | 任意                              |
| [Remote Development](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack) | Remote Development を利用する場合 |

## 2. 実行

### 2-1. `yarn` を使う場合

コマンドの実行は、ルートディレクトリで行います。

### 2-1-1. 依存関係を構築する

```bash
$ yarn install
```

#### 2-2. プログラムを実行する

以下のコマンドを実行した後、 http://localhost:3000 にアクセスすると、開発中のプログラムを確認する事ができます。

##### 2-2-1. ローカルサーバーを起動する

```bash
$ yarn dev
```

### 2-2. Remote Containers で開発する場合

#### 2-2-1. 依存関係を構築し、プログラムを実行する

[Quick start: Open an existing folder in a container の画像 (外部サイト)](https://code.visualstudio.com/docs/remote/containers#_quick-start-open-an-existing-folder-in-a-container)のように、左下部の「Open Folder in Container」でこのリポジトリのルートを選択すれば、環境構築が始まります。

## 3. コラボレーター

以下のメンバーで開発しています

- [Takuya-Akutsu](https://github.com/Takuya-Akutsu)
- [Seiha Tsuge](https://github.com/seiha-tsuge)
- [zawa24-ask](https://github.com/zawa24-ask)
- [Reon Horigami](https://github.com/reon-horigami)
