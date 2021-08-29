# smart-alpha-web

## 初めに

## 特徴

## 1. 環境構築

以下のアプリケーションをインストールします。

| アプリケーション名                                   | バージョン   |
| ---------------------------------------------------- | ------------ |
| [Node.js](https://nodejs.org/ja/)                    | 14.17.0 以上 |
| [Visual Studio Code](https://code.visualstudio.com/) |              |
| [yarn](https://classic.yarnpkg.com/ja/)              |              |

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

### 2-4. Visual Studio Code + Remote Containers で開発する場合

#### 2-4-1. 依存関係を構築し、プログラムを実行する

[Quick start: Try a dev container の画像 (外部サイト)](https://code.visualstudio.com/docs/remote/containers#_quick-start-try-a-dev-container)のように、左下部の「Open Folder in Container」でこのリポジトリのルートを選択すれば、環境構築が始まります。

環境を構築した後に http://localhost:3000 にアクセスすると、開発中のプログラムを確認する事ができます。

#### 2-4-2. Topic

- 設定を変更したい場合は、[devcontainer.json reference (外部サイト)](https://code.visualstudio.com/docs/remote/containers#_devcontainerjson-reference)を参照し、`.devcontainer/devcontainer.json`を変更してください。
- Remote Container 実行時のみ有効な拡張機能「ESLint」を導入していますが、必要に応じて`.devcontainer/devcontainer.json`の`extensions`に追加してください。
  詳細な手順は、[Managing extensions (外部サイト)](https://code.visualstudio.com/docs/remote/containers#_managing-extensions)を参照してください。
- 開発環境を再構築する場合は、左下部の「Rebuild Container」を実行してください。

## 3. 本番環境/その他の判定

`process.env.GENERATE_ENV` の値が、本番の場合は`'production'`に、それ以外の場合は `'development'` になっています。
テスト環境のみで実行したい処理がある場合は、こちらの値をご利用ください。

## 4. ステージング・本番環境への反映

下表の左列に記載されたブランチが更新されると、ブランチと Web サイトの更新が自動的におこなわれます。

| ブランチ      | HTML 類が build され、更新されるブランチ | 更新される Web サイト                                     |
| ------------- | ---------------------------------------- | --------------------------------------------------------- |
| `master`      | `production`                             | 本番サイト https://stopcovid19.metro.tokyo.lg.jp/         |
| `staging`     | `gh-pages`                               | ステージングサイト https://stg-covid19-tokyo.netlify.app/ |
| `development` | `dev-pages`                              | 開発用サイト https://dev-covid19-tokyo.netlify.app/       |

## 5. ブランチルール

development 以外は、Pull Request は禁止です。
Pull Request を送る際のブランチは、以下のネーミングルールに従ったブランチにしてください。

| 種類               | ブランチのネーミングルール                 |
| ------------------ | ------------------------------------------ |
| 機能追加系         | `feature/#{ISSUE_ID}-#{branch_title_name}` |
| ホットフィックス系 | `hotfix/#{ISSUE_ID}-#{branch_title_name}`  |

### 5-1. 基本的なブランチ

| 目的         | ブランチ    | 確認 URL                               | Pull requests を出せる人 | 備考                                                                             |
| ------------ | ----------- | -------------------------------------- | ------------------------ | -------------------------------------------------------------------------------- |
| 開発         | development | https://dev-covid19-tokyo.netlify.app/ | 全開発者                 | base branch。基本は、この`development`ブランチに Pull Request を送ってください。 |
| ステージング | staging     | https://stg-covid19-tokyo.netlify.app/ | 管理者のみ               | 本番前の最終確認用。管理者以外の Pull Request は禁止です。                       |
| 本番         | master      | https://stopcovid19.metro.tokyo.lg.jp/ | 管理者のみ               | 管理者以外の Pull Request は禁止です。                                           |

## 7. 依存性の管理

このプロジェクトでは、[Renovate](https://github.com/renovatebot/renovate)によって依存性の更新を管理しています。  
適用されるルールについては、[renovate.json](./.github/renovate.json)を参照してください。

### 7-1. Node.js のバージョンアップ

このプロジェクトでは、Node.js を Renovate の管理対象から除外しています。  
Node.js のバージョンを更新したい場合、次の手順に従ってください。

1. このプロジェクトの現在の Node.js バージョンを確認
2. 現在の Node.js バージョンを示す文字列（例：14.16.x）をすべて新しいバージョン（例：14.16.y）に置換
3. 指定した Node のバージョンを手元の環境にもセットアップしてから yarn.lock を再生成しコミットする

Visual Studio Code などのエディタの検索機能で一括置換するのが簡単でしょう。
