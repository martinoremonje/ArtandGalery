import { Art } from "../public/Art";

const App = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Art&Gallery</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            
          </div>
        </div>
      </nav>

      <div className="container mt-4">
        <div className="row">
          {Art.map((e, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="card h-100">
                <img src={e.img} className="card-img-top" alt={e.name} />
                <div className="card-body">
                  <h5 className="card-title">{e.name}</h5>
                  <p className="card-text">Precio: ${e.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <footer className="navbar navbar-expand-lg navbar-dark bg-dark text-white">
        <p className="container">Created By Martin Orellana</p>
      </footer>
    </>
  );
};

export default App;
