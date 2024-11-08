import { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:8001/api/v1/products");

      const data = response.data.data;
      if (data) {
        console.log(data);
        setProducts(data);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <header className="flex justify-between p-4 bg-white shadow-md">
        <div className="flex items-center space-x-4">
          <h1 className="text-lg font-bold text-blue-800">Binar Car Rental</h1>
          <nav className="hidden md:flex space-x-4">
            <a href="#" className="text-gray-700">
              Our Services
            </a>
            <a href="#" className="text-gray-700">
              Why Us
            </a>
            <a href="#" className="text-gray-700">
              Testimonial
            </a>
            <a href="#" className="text-gray-700">
              FAQ
            </a>
          </nav>
        </div>
        <button className="px-4 py-2 text-white bg-green-500 rounded-md">
          Register
        </button>
      </header>

      {loading && <p>loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!error && !loading && (
        <section className="max-w-6xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {" "}
          {products.map((product, index) => (
            <div
              key={index}
              className="p-4 border rounded-md bg-white shadow-md"
            >
              {" "}
              <img
                src={product.images[0]}
                alt="Car"
                className="w-full h-40 object-cover mb-4"
              />{" "}
              <h3 className="font-semibold">{product.name}</h3>{" "}
              <p className="text-green-500 font-bold">{product.price}</p>{" "}
              <p className="text-gray-600 mt-2 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>{" "}
              <div className="flex items-center justify-between text-gray-500 text-sm mt-4">
                {" "}
                <span>4 orang</span> <span>Manual</span> <span>Tahun 2020</span>{" "}
              </div>{" "}
              <button className="w-full px-4 py-2 mt-4 text-white bg-green-500 rounded-md">
                Pilih Mobil
              </button>{" "}
            </div>
          ))}{" "}
        </section>
      )}
    </>
  );
}

export default App;
