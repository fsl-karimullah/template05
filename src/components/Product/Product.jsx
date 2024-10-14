import { FaInfoCircle, FaShoppingCart } from 'react-icons/fa';
import food from "../../assets/food.jpg";
import food2 from "../../assets/food3.jpg";
import food3 from "../../assets/food4.jpg";
import banner from "../../assets/banner.png";

export default function Product() {
  const products = [
    { id: 1, name: "Waffle Bread", price: "$40", img: food, description: "Whole Grain Bread" },
    { id: 2, name: "Fruit Danish", price: "$40", img: banner, description: "Whole Grain Bread" },
    { id: 3, name: "Baguette", price: "$40", img: food2, description: "Whole Grain Bread" },
    { id: 4, name: "Waffle Bread", price: "$40", img: food3, description: "Whole Grain Bread" }
  ];

  return (
    <section id="product" className="max-w-7xl mx-auto mt-12 px-4 sm:px-6 lg:px-8"> {/* Added padding for small and large screens */}
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center" style={{ fontFamily: "'Sansita Swashed', cursive" }}>
        Top Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
            <img src={product.img} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-medium text-white">{product.name}</h3>
                <span className="text-amber-400 font-bold">{product.price}</span>
              </div>
              <p className="text-gray-400 text-sm mb-4">{product.description}</p>
              <div className="flex justify-between items-center">
                <button className="bg-[#933C24] hover:bg-amber-700 text-white font-bold py-2 px-4 rounded-full flex items-center transition-colors duration-300">
                  <FaShoppingCart className="w-4 h-4 mr-2" />
                  Add
                </button>
                <button className="text-gray-400 hover:text-white transition-colors duration-300">
                  <FaInfoCircle className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
