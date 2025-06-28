function Profile() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mb-6">
              <span className="text-4xl font-bold text-white">
                田中太郎
              </span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              フルスタックエンジニア
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="mr-2">👨‍💻</span>
                経歴
              </h3>
              <div className="space-y-3 text-gray-700">
                <div>
                  <p className="font-medium">2020年 - 現在</p>
                  <p>フリーランスエンジニア</p>
                </div>
                <div>
                  <p className="font-medium">2018年 - 2020年</p>
                  <p>スタートアップ企業でWebアプリ開発</p>
                </div>
                <div>
                  <p className="font-medium">2016年 - 2018年</p>
                  <p>大学でコンピュータサイエンス専攻</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="mr-2">🚀</span>
                自己PR
              </h3>
              <div className="text-gray-700 space-y-3">
                <p>
                  モダンなWeb技術を使った開発が得意です。
                  特にReactを中心としたフロントエンド開発に力を入れています。
                </p>
                <p>
                  ユーザー体験を重視し、使いやすくて美しいUIの実装を心がけています。
                  また、チーム開発での協働も大切にしています。
                </p>
                <p>
                  新しい技術の習得に積極的で、常に学び続ける姿勢を持っています。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;