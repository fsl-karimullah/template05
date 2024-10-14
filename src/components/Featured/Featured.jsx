import food3 from "../../assets/food4.jpg";
import food7 from "../../assets/food7.png";
import food8 from "../../assets/food8.png";

const productImages = {
  1: food3,
  2: food7,
  3: food8,
};

const products = [
  { id: 1, name: 'Mixed Berry Cheesecake', category: 'Cake' },
  { id: 2, name: 'Fruit Tart', category: 'Tart' },
  { id: 3, name: 'Pound Cake', category: 'Bread' },
];

export default function Explore() {
  return (
    <section id="featured" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8" style={{ fontFamily: "'Sansita Swashed', cursive" }}>
        Featured Treats
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="relative overflow-hidden rounded-lg shadow-md">
            <img
              src={productImages[product.id]} 
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
