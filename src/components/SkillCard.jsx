function SkillCard({ skill, onToggleFavorite }) {
  const renderStars = (level) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`text-lg ${
          index < level ? 'text-yellow-400' : 'text-gray-300'
        }`}
      >
        ★
      </span>
    ));
  };

  const getCategoryColor = (category) => {
    const colors = {
      'フロントエンド': 'bg-blue-100 text-blue-800',
      'バックエンド': 'bg-green-100 text-green-800',
      'ツール': 'bg-purple-100 text-purple-800',
      'その他': 'bg-gray-100 text-gray-800'
    };
    return colors[category] || colors['その他'];
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200">
      <div className="flex justify-between items-start mb-3">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {skill.name}
          </h3>
          <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(skill.category)}`}>
            {skill.category}
          </span>
        </div>
        <button
          onClick={() => onToggleFavorite(skill.id)}
          className={`ml-4 p-2 rounded-full transition-colors duration-200 ${
            skill.isFavorite
              ? 'text-red-500 bg-red-50 hover:bg-red-100'
              : 'text-gray-400 hover:text-red-500 hover:bg-red-50'
          }`}
          aria-label={skill.isFavorite ? 'お気に入りから削除' : 'お気に入りに追加'}
        >
          <svg
            className="w-6 h-6"
            fill={skill.isFavorite ? 'currentColor' : 'none'}
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
      </div>
      
      <p className="text-gray-600 mb-4 leading-relaxed">
        {skill.description}
      </p>
      
      <div className="flex items-center">
        <span className="text-sm text-gray-500 mr-2">レベル:</span>
        <div className="flex items-center">
          {renderStars(skill.level)}
          <span className="ml-2 text-sm text-gray-600">
            ({skill.level}/5)
          </span>
        </div>
      </div>
    </div>
  );
}

export default SkillCard;