import { Art } from "../public/Art";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Art&Gallery</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#categories">Categorías</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">Acerca de</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contacto</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-light py-5">
        <div className="container text-center">
          <h1 className="display-4">Bienvenidos a Art&Gallery</h1>
          <p className="lead">Explora las mejores obras de arte y hazlas tuyas.</p>
          <button className="btn btn-primary btn-lg">Explorar</button>
        </div>
      </header>

      {/* Art Gallery */}
      <div className="container mt-4">
        <div className="row">
          {Art.map((e, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="card h-100 shadow-sm">
                <img src={e.img} className="card-img-top" alt={e.name} />
                <div className="card-body">
                  <h5 className="card-title">{e.name}</h5>
                  <p className="card-text">Precio: ${e.price}</p>
                  <button className="btn btn-success w-100">Comprar</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="bg-light py-5">
        <div className="container text-center">
          <h2 className="mb-4">Acerca de Nosotros</h2>
          <p className="lead">
            Somos una galería de arte en línea dedicada a conectar a artistas con
            amantes del arte en todo el mundo. Nuestra colección incluye obras
            únicas y exclusivas de diversas categorías y estilos.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white pt-4 pb-2">
        <div className="container text-center">
          <p>Created By Martin Orellana | &copy; {new Date().getFullYear()}</p>
          <div>
            <a href="#" className="text-white mx-2">
              <i className="bi bi-facebook"></i> Facebook
            </a>
            <a href="#" className="text-white mx-2">
              <i className="bi bi-instagram"></i> Instagram
            </a>
            <a href="#" className="text-white mx-2">
              <i className="bi bi-twitter"></i> Twitter
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default App;
