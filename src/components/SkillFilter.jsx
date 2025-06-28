function SkillFilter({ 
  categories, 
  selectedCategory, 
  onCategoryChange, 
  showFavoritesOnly, 
  onToggleFavorites,
  favoriteCount 
}) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">フィルター</h3>
      
      <div className="space-y-6">
        <div>
          <label className="text-sm font-medium text-gray-700 mb-3 block">
            カテゴリ
          </label>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => onCategoryChange(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  selectedCategory === category
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div>
          <label className="flex items-center space-x-3 cursor-pointer">
            <input
              type="checkbox"
              checked={showFavoritesOnly}
              onChange={(e) => onToggleFavorites(e.target.checked)}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
            />
            <span className="text-sm font-medium text-gray-700">
              お気に入りのみ表示
              {favoriteCount > 0 && (
                <span className="ml-2 inline-block px-2 py-1 text-xs bg-red-100 text-red-800 rounded-full">
                  {favoriteCount}
                </span>
              )}
            </span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default SkillFilter;