# スキルカタログ & ポートフォリオサイト

React + Vite + Tailwind CSSで構築したレスポンシブなスキルカタログサイトです。

![スキルカタログ](https://img.shields.io/badge/React-18.3.1-blue)
![Vite](https://img.shields.io/badge/Vite-5.3.1-646CFF)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.4-38B2AC)

## 🚀 特徴

- **モダンな技術スタック**: React 18 + Vite + Tailwind CSS
- **レスポンシブデザイン**: モバイルファーストなUI設計
- **お気に入り機能**: localStorage を使った状態の永続化
- **フィルタリング**: カテゴリ別・お気に入り別表示
- **美しいUI**: Tailwind CSSによる洗練されたデザイン

## 📱 デモ

[ライブデモ](https://your-demo-url.vercel.app) <!-- デプロイ後にURLを更新 -->

## 🛠️ 技術スタック

- **フレームワーク**: React 18.3.1
- **ビルドツール**: Vite 5.3.1
- **スタイリング**: Tailwind CSS 3.4.4
- **状態管理**: React Hooks (useState, カスタムフック)
- **データ永続化**: localStorage
- **開発ツール**: ESLint

## 📦 インストール

```bash
# リポジトリをクローン
git clone https://github.com/your-username/skill-catalog.git

# ディレクトリに移動
cd skill-catalog

# 依存関係をインストール
npm install

# 開発サーバーを起動
npm run dev
```

## 🖥️ 使用方法

1. 開発サーバーを起動: `npm run dev`
2. ブラウザで http://localhost:5173 にアクセス
3. スキルカードを閲覧・フィルタリング
4. お気に入り機能で興味のあるスキルをマーク

## 🎯 主な機能

### 自己紹介セクション
- プロフィール情報の表示
- 経歴とスキル概要
- 美しいグラデーションデザイン

### スキルカタログ
- **スキルカード**: 技術名、説明、レベル表示（5段階評価）
- **カテゴリ分類**: フロントエンド、バックエンド、ツール
- **お気に入り機能**: ハートアイコンでお気に入り登録

### フィルタリング機能
- **カテゴリフィルタ**: "すべて"、"フロントエンド"、"バックエンド"、"ツール"
- **お気に入りフィルタ**: お気に入りに登録したスキルのみ表示
- **リアルタイム更新**: フィルタの即座反映

### データ永続化
- localStorage を使用したお気に入り状態の保存
- ページリロード後も設定を保持

## 📁 プロジェクト構造

```
skill-catalog/
├── public/
├── src/
│   ├── components/          # Reactコンポーネント
│   │   ├── Header.jsx      # ヘッダーコンポーネント
│   │   ├── Profile.jsx     # プロフィールセクション
│   │   ├── SkillCard.jsx   # 個別スキルカード
│   │   ├── SkillCatalog.jsx # スキル一覧表示
│   │   └── SkillFilter.jsx # フィルタリング機能
│   ├── data/
│   │   └── skills.js       # スキルデータ
│   ├── hooks/
│   │   └── useLocalStorage.js # localStorage カスタムフック
│   ├── App.jsx             # メインアプリケーション
│   ├── main.jsx           # エントリーポイント
│   └── index.css          # Tailwind CSS設定
├── requirements.md         # 要件定義書
├── CLAUDE.md              # 開発ガイドライン
└── README.md              # このファイル
```

## 🔧 利用可能なスクリプト

```bash
# 開発サーバー起動
npm run dev

# プロダクションビルド
npm run build

# プロダクションプレビュー
npm run preview

# ESLintでコード検証
npm run lint
```

## 🎨 カスタマイズ

### スキルの追加・編集
`src/data/skills.js` ファイルでスキルデータを編集できます：

```javascript
{
  id: "unique-id",
  name: "技術名",
  description: "技術の説明",
  category: "フロントエンド", // または "バックエンド", "ツール"
  level: 4, // 1-5の数値
  isFavorite: false
}
```

### スタイルのカスタマイズ
Tailwind CSSクラスを使用してスタイルを調整できます。`tailwind.config.js` でテーマの拡張も可能です。

## 🚀 デプロイ

### Vercel
```bash
# Vercel CLIを使用
npm i -g vercel
vercel

# または、GitHubリポジトリをVercelに接続
```

### Netlify
```bash
# ビルド
npm run build

# distフォルダをNetlifyにドラッグ&ドロップ
```

## 📚 学習目的

このプロジェクトは以下の技術習得を目的としています：

- ✅ React Hooksの実践的な使用
- ✅ Tailwind CSSによるモダンUI構築
- ✅ コンポーネント設計とプロップス活用
- ✅ localStorage を使った状態管理
- ✅ レスポンシブデザインの実装
- ✅ フィルタリング機能の実装

## 🤝 コントリビューション

1. このリポジトリをフォーク
2. 機能ブランチを作成 (`git checkout -b feature/AmazingFeature`)
3. 変更をコミット (`git commit -m 'Add some AmazingFeature'`)
4. ブランチにプッシュ (`git push origin feature/AmazingFeature`)
5. プルリクエストを作成

## 📄 ライセンス

このプロジェクトは MIT ライセンスの下で公開されています。詳細は [LICENSE](LICENSE) ファイルを参照してください。

## 👨‍💻 作者

**田中太郎**
- GitHub: [@your-username](https://github.com/your-username)
- Email: your-email@example.com

## 🙏 謝辞

- [React](https://reactjs.org/) - UIライブラリ
- [Vite](https://vitejs.dev/) - 高速ビルドツール
- [Tailwind CSS](https://tailwindcss.com/) - ユーティリティファーストCSSフレームワーク

---

⭐ このプロジェクトが役に立った場合は、スターを付けてください！