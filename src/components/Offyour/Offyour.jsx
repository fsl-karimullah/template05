import food7 from "../../assets/food7.png";
import food8 from "../../assets/food8.png";

export default function Offyour() {
  return (
    <div className="h-auto w-full overflow-hidden bg-gradient-to-b from-gray-300 to-white flex flex-col sm:flex-row mt-12">
      <div className="sm:w-1/4 w-full h-1/2 sm:h-auto">
        <img
          src={food7}
          alt="Assorted breads on the left"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="sm:w-1/2 w-full h-1/2 sm:h-auto flex flex-col justify-center items-center relative">
        <div className="relative z-10 w-full flex flex-col justify-center items-center px-4 text-center">
          <h2 className="text-3xl font-bold text-amber-800 leading-tight" style={{ fontFamily: "'Sansita Swashed', cursive" }}>
            20% Off Your<br />First Order
          </h2>
          <p className="text-sm text-gray-700 mt-2 mb-4 max-w-md">
            Suspendisse ac morcus nisi, eu tempor urna. Curabitur vel bibendum lorem.
          </p>
          <a
            href="#"
            className="px-6 py-2 bg-amber-700 text-white text-sm font-semibold rounded hover:bg-amber-800 transition-colors duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
      <div className="sm:w-1/4 w-full h-1/2 sm:h-auto">
        <img
          src={food8}
          alt="Assorted breads on the right"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
