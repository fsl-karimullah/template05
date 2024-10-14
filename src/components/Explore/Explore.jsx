import { useState } from 'react';
import food2 from "../../assets/food3.jpg";
import food3 from "../../assets/food4.jpg";
import food7 from "../../assets/food7.png"; // Update with actual paths
import food8 from "../../assets/food8.png"; // Update with actual paths

const productImages = {
  1: food2,
  2: food3,
  3: food2, // Example image, update with actual image if available
  4: food3, // Example image, update with actual image if available
  5: food2,
  6: food3, 
  7: food2,
  8: food3, 
  9: food2,
  10: food3,
  11: food2,
  12: food3,
};

const categories = ['Cake', 'Muffins', 'Croissant', 'Bread', 'Tart', 'Favorite'];

const products = [
  { id: 1, name: 'Blueberry Muffin', category: 'Muffins' },
  { id: 2, name: 'Mixed Berry Cheesecake', category: 'Cake' },
  { id: 3, name: 'Fruit Tart', category: 'Tart' },
  { id: 4, name: 'Pound Cake', category: 'Bread' },
  { id: 5, name: 'Chocolate Raspberry Cake', category: 'Cake' },
  { id: 6, name: 'Chocolate Cupcake', category: 'Muffins' },
  { id: 7, name: 'Chocolate Raspberry Cake', category: 'Croissant' },
  { id: 8, name: 'Chocolate Cupcake', category: 'Croissant' },
  { id: 9, name: 'Chocolate Raspberry Cake', category: 'Bread' },
  { id: 10, name: 'Chocolate Cupcake', category: 'Croissant' },
  { id: 11, name: 'Chocolate Raspberry Cake', category: 'Favorite' },
  { id: 12, name: 'Chocolate Cupcake', category: 'Favorite' },
];

export default function Explore() {
  const [selectedCategory, setSelectedCategory] = useState('Cake');
  const filteredProducts = products.filter(product => product.category === selectedCategory);

  return (
    <section id="explore" className="bg-white max-w-7xl mx-auto mt-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8" style={{ fontFamily: "'Sansita Swashed', cursive" }}>
          Explore More
        </h2>
        
        <nav className="mb-8">
          <ul className="flex justify-center space-x-4 border-b">
            {categories.map((category, index) => (
              <li key={index}>
                <button
                  onClick={() => setSelectedCategory(category)}
                  className={`pb-2 px-1 ${category === selectedCategory
                    ? 'border-b-2 border-amber-500 text-amber-500'
                    : 'text-gray-500 hover:text-amber-500'}`}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="relative overflow-hidden rounded-lg shadow-md">
              <img
                src={productImages[product.id] || food2}
                alt={product.name}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-semibold">{product.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
