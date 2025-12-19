# Components Catalog

React + TypeScript + Vite で構築されたUIコンポーネントカタログです。

## 技術スタック

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Storybook 10
- lucide-react (アイコンライブラリ)

## セットアップ

```bash
npm install
```

## 開発

```bash
# 開発サーバー起動
npm run dev

# Storybook起動
npm run storybook
```

## ビルド

```bash
# アプリケーションビルド
npm run build

# Storybookビルド
npm run build-storybook
```

## コード品質

```bash
# Lint
npm run lint

# テスト
npx vitest --project=storybook
```

## コンポーネント

### ToggleButton
シンプルなオン/オフ状態を切り替えるトグルボタン

### ToggleButtonWithIcon
アイコン付きのトグルボタンコンポーネント。2つのバリエーションがあります：

- **rounded** - 丸形スライドトグルスイッチ（ピル型）
- **square** - 四角形セグメントコントロール

#### 特徴
- lucide-reactのアイコン名を文字列で指定可能
- カスタムReactNodeも指定可能
- 5色のアクセントカラー（orange, blue, purple, green, red）
- 制御・非制御両対応
