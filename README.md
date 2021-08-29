# Smart Alpha Web

## 初めに

## 特徴

## 1. 環境構築

以下のアプリケーションをインストールします。

| アプリケーション名                                   | バージョン   | インストール条件                                          |
| ---------------------------------------------------- | ------------ | --------------------------------------------------------- |
| [Node.js](https://nodejs.org/ja/)                    | 14.17.0 以上 | 必須                                                      |
| [Visual Studio Code](https://code.visualstudio.com/) |              | [yarn で実行する場合](#1-1-visual-studio-code-の拡張機能) |
| [yarn](https://classic.yarnpkg.com/ja/)              |              | [yarn で実行する場合](#2-1-yarn-を使う場合)               |
| [Docker](https://docs.docker.com/get-docker/)        |              | [yarn で実行する場合](#2-1-yarn-を使う場合)               |

### 1-1. Visual Studio Code の拡張機能

Visual Studio Code に、以下の拡張機能をインストールします。

| 拡張機能                                                                                                               | インストール条件 |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------- |
| [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)                                   | 必須             |
| [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)                | 必須             |
| [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)                                       | 必須             |
| [Vite](https://marketplace.visualstudio.com/items?itemName=antfu.vite)                                                 | 任意             |
| [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)                | 任意             |
| [Remote Development](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack) | 任意             |

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

### 2-2. Visual Studio Code + Remote Containers で開発する場合

#### 2-2-1. 依存関係を構築し、プログラムを実行する

[Quick start: Try a dev container の画像 (外部サイト)](https://code.visualstudio.com/docs/remote/containers#_quick-start-try-a-dev-container)のように、左下部の「Open Folder in Container」でこのリポジトリのルートを選択すれば、環境構築が始まります。

環境を構築した後に http://localhost:3000 にアクセスすると、開発中のプログラムを確認する事ができます。

#### 2-2-2. Topic

- 設定を変更したい場合は、[devcontainer.json reference (外部サイト)](https://code.visualstudio.com/docs/remote/containers#_devcontainerjson-reference)を参照し、`.devcontainer/devcontainer.json`を変更してください。
- Remote Container 実行時のみ有効な拡張機能「ESLint」を導入していますが、必要に応じて`.devcontainer/devcontainer.json`の`extensions`に追加してください。
  詳細な手順は、[Managing extensions (外部サイト)](https://code.visualstudio.com/docs/remote/containers#_managing-extensions)を参照してください。
- 開発環境を再構築する場合は、左下部の「Rebuild Container」を実行してください。

## 3. コラボレーター

以下のメンバーでモブプログラミングにより作成されています

- [Takuya-Akutsu](https://github.com/Takuya-Akutsu)
- [Seiha Tsuge](https://github.com/seiha-tsuge)
- [zawa24-ask](https://github.com/zawa24-ask)
- [Reon Horigami](https://github.com/reon-horigami)
