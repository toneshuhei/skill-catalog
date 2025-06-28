import { useState } from 'react';
import SkillCard from './SkillCard';
import SkillFilter from './SkillFilter';
import { skillsData, categories } from '../data/skills';
import { useLocalStorage } from '../hooks/useLocalStorage';

function SkillCatalog() {
  const [skills, setSkills] = useState(skillsData);
  const [selectedCategory, setSelectedCategory] = useState('すべて');
  const [favorites, setFavorites] = useLocalStorage('favorites', []);
  const [showFavoritesOnly, setShowFavoritesOnly] = useLocalStorage('showFavoritesOnly', false);

  const handleToggleFavorite = (skillId) => {
    const updatedFavorites = favorites.includes(skillId)
      ? favorites.filter(id => id !== skillId)
      : [...favorites, skillId];
    
    setFavorites(updatedFavorites);
    
    setSkills(prevSkills =>
      prevSkills.map(skill =>
        skill.id === skillId
          ? { ...skill, isFavorite: !skill.isFavorite }
          : skill
      )
    );
  };

  const filteredSkills = skills.filter(skill => {
    const matchesCategory = selectedCategory === 'すべて' || skill.category === selectedCategory;
    const matchesFavorite = !showFavoritesOnly || favorites.includes(skill.id);
    return matchesCategory && matchesFavorite;
  });

  const favoriteCount = favorites.length;

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            スキルカタログ
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            これまでに習得した技術スキルを紹介します。
            各スキルにはレベルとお気に入り機能が付いています。
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <SkillFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              showFavoritesOnly={showFavoritesOnly}
              onToggleFavorites={setShowFavoritesOnly}
              favoriteCount={favoriteCount}
            />
          </div>
          
          <div className="lg:col-span-3">
            {filteredSkills.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-gray-400 text-6xl mb-4">📝</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  スキルが見つかりません
                </h3>
                <p className="text-gray-600">
                  フィルター条件を変更してみてください。
                </p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-6">
                {filteredSkills.map(skill => (
                  <SkillCard
                    key={skill.id}
                    skill={{
                      ...skill,
                      isFavorite: favorites.includes(skill.id)
                    }}
                    onToggleFavorite={handleToggleFavorite}
                  />
                ))}
              </div>
            )}
            
            {filteredSkills.length > 0 && (
              <div className="text-center mt-8 text-gray-600">
                {filteredSkills.length}件のスキルを表示中
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillCatalog;