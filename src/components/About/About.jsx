import food7 from "../../assets/food7.png";
import food8 from "../../assets/food8.png";

export default function About() {
  return (
    <section className="bg-gradient-to-r from-gray-800 to-black text-white py-12 px-12 mt-8">
      <div className="w-full flex flex-col sm:flex-row">
        <div className="sm:w-1/4 w-full">
          <img
            src={food7}
            alt="Assorted breads on the left"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="sm:w-1/2 w-full flex flex-col justify-center items-center px-6 text-center">
          <h2 className="text-3xl font-bold text-amber-800 leading-tight" style={{ fontFamily: "'Sansita Swashed', cursive" }}>
            About Us
          </h2>
          <p className="text-sm text-gray-200 mt-4 mb-6 max-w-md">
            Suspendisse ac morcus nisi, eu tempor urna. Curabitur vel bibendum lorem. Aliquam erat volutpat.
          </p>
          <a
            href="#"
            className="px-6 py-2 bg-amber-700 text-white text-sm font-semibold rounded hover:bg-amber-800 transition-colors duration-300"
          >
            Learn More
          </a>
        </div>
        <div className="sm:w-1/4 w-full">
          <img
            src={food8}
            alt="Assorted breads on the right"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
