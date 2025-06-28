# Docker コマンド集

## 開発環境での起動

### 1. 開発サーバーのみ起動
```bash
# 開発環境用のサービスを起動
docker-compose --profile dev up app-dev

# バックグラウンドで起動
docker-compose --profile dev up -d app-dev
```

### 2. 開発サーバー + nginxで起動
```bash
# 開発環境用の全サービスを起動
docker-compose --profile dev up

# バックグラウンドで起動
docker-compose --profile dev up -d
```

### 3. アクセス方法
- **Vite開発サーバー**: http://localhost:5173
- **nginx経由**: http://localhost:8080

## 本番環境での起動

### 1. 本番ビルドで起動
```bash
# 本番環境用のサービスを起動
docker-compose --profile prod up app-prod

# バックグラウンドで起動
docker-compose --profile prod up -d app-prod
```

### 2. アクセス方法
- **本番アプリ**: http://localhost:80 (または http://localhost)

## 便利なコマンド

### コンテナの管理
```bash
# 実行中のコンテナを確認
docker-compose ps

# ログを確認
docker-compose logs app-dev
docker-compose logs app-prod

# コンテナを停止
docker-compose down

# コンテナとイメージを削除
docker-compose down --rmi all
```

### ビルド関連
```bash
# イメージを再ビルド
docker-compose build

# キャッシュを使わずにビルド
docker-compose build --no-cache

# 特定のサービスのみビルド
docker-compose build app-dev
```

### 開発用コマンド
```bash
# コンテナ内でコマンド実行
docker-compose exec app-dev npm install
docker-compose exec app-dev npm run build

# コンテナ内でシェル起動
docker-compose exec app-dev sh
```

## トラブルシューティング

### ポートが既に使用されている場合
```bash
# 使用中のポートを確認
lsof -i :5173
lsof -i :80
lsof -i :8080

# プロセスを終了
kill -9 <PID>
```

### イメージのクリーンアップ
```bash
# 未使用のイメージを削除
docker image prune

# 未使用のコンテナを削除
docker container prune

# 全体的なクリーンアップ
docker system prune
```

## 環境変数の設定

### .envファイルを作成（オプション）
```bash
# .envファイルを作成
touch .env

# 内容例
NODE_ENV=development
VITE_API_URL=http://localhost:3000
```

## 注意事項

1. **初回起動時**: イメージのダウンロードとビルドに時間がかかります
2. **ホットリロード**: 開発環境ではファイル変更が自動で反映されます
3. **ボリュームマウント**: 開発環境ではソースコードがコンテナにマウントされます
4. **セキュリティ**: 本番環境では適切なセキュリティ設定を行ってください 