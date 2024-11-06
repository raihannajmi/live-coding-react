import "./Navbar.css";

function Navbar() {
  return (
    <nav class="navbar">
      <div class="container">
        <a href="https://www.malasngoding.com" class="logo">
          Malas Ngoding
        </a>

        <ul class="menu">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Tentang</a>
          </li>
          <li>
            <a href="#">Produk</a>
          </li>
          <li>
            <a href="#">Layanan</a>
          </li>
          <li>
            <a href="#">Kontak Kami</a>
          </li>
        </ul>

        <div class="tombol">&#9776;</div>
      </div>
    </nav>
  );
}

export default Navbar;
