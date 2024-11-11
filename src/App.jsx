import { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";

function SearchFilters({
  name,
  setName,
  stock,
  setStock,
  price,
  setPrice,
  fetchProducts,
}) {
  return (
    <section className="p-4 bg-gray-100">
      <div className="flex space-x-4">
        <input
          type="text"
          placeholder="Search by Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Search by Stock"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Search by Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="border p-2 rounded"
        />
        <button
          onClick={fetchProducts}
          className="px-4 py-2 text-white bg-blue-500 rounded-md"
        >
          Search
        </button>
      </div>
    </section>
  );
}

function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  const [name, setName] = useState("");
  const [stock, setStock] = useState("");
  const [price, setPrice] = useState("");
  const [page, setPage] = useState(1);
  const [perPage] = useState(10);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const queryParams = new URLSearchParams({
        name,
        stock,
        price,
        page,
        perPage,
      }).toString();

      const response = await axios.get(
        `http://localhost:8001/api/v1/products?${queryParams}`
      );

      const data = response.data.data;
      if (data) {
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
  }, [name, stock, price, page]);

  const handlePreviousPage = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

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

      <SearchFilters
        name={name}
        setName={setName}
        stock={stock}
        setStock={setStock}
        price={price}
        setPrice={setPrice}
        fetchProducts={fetchProducts}
      />

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!error && !loading && (
        <>
          <section className="max-w-6xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <div
                key={index}
                className="p-4 border rounded-md bg-white shadow-md"
              >
                <img
                  src={product.images[0]}
                  alt="Car"
                  className="w-full h-40 object-cover mb-4"
                />
                <h3 className="font-semibold">{product.name}</h3>
                <p className="text-green-500 font-bold">{product.price}</p>
                <p className="text-gray-600 mt-2 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <div className="flex items-center justify-between text-gray-500 text-sm mt-4">
                  <span>4 orang</span> <span>Manual</span>{" "}
                  <span>Tahun 2020</span>
                </div>
                <button className="w-full px-4 py-2 mt-4 text-white bg-green-500 rounded-md">
                  Pilih Mobil
                </button>
              </div>
            ))}
          </section>

          <div className="flex justify-center space-x-4 mt-6">
            <button
              onClick={handlePreviousPage}
              disabled={page === 1}
              className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md"
            >
              Previous
            </button>
            <span className="px-4 py-2">Page {page}</span>
            <button
              onClick={handleNextPage}
              className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md"
            >
              Next
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default App;
