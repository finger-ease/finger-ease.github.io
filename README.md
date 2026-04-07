# finger-ease.github.io

個人開発プロジェクトのポータルサイト。

## 技術スタック

- Vite + React + TypeScript
- CSS Modules
- GitHub Pages (GitHub Actions で自動デプロイ)

## 開発

```bash
npm install
npm run dev
```

## ビルド

```bash
npm run build
```

`dist/` ディレクトリに静的ファイルが出力される。

## プロジェクトの追加

`src/data/projects.ts` を編集してプロジェクトを追加・変更する。

```typescript
{
  id: 'my-project',
  title: 'My Project',
  description: 'プロジェクトの説明',
  tags: ['React', 'TypeScript'],
  url: 'https://example.com',
  repoUrl: 'https://github.com/fingerEase/my-project',
}
```

## デプロイ

`main` ブランチに push すると GitHub Actions が自動でビルド・デプロイを実行する。

GitHub リポジトリの Settings > Pages で Source を **GitHub Actions** に設定する必要がある。
