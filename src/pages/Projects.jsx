function Projects() {
  return (
    <div className="container py-6">
      <div className="section">
        <span className="title">Projects</span>
        <p className="p-6 is-size-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mi
          nisi, ultricies nec sagittis sed, rhoncus et purus. Praesent ut
          sollicitudin libero.{" "}
        </p>
      </div>
      <div className="">
        <div className="columns">
          <div className="column">
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img
                    src="https://bulma.io/images/placeholders/1280x960.png"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">ACNH Birthday Directory</p>
                  </div>
                </div>

                <div className="content">
                  <p className="">
                    A simple frontend based application about Animal Crossing.{" "}
                  </p>
                  <div className="">
                    <a className="mr-5" href="https://acnh-bday.netlify.app">
                      Live Demo
                    </a>
                    <a href="https://github.com/adamskristy/acnh-bday">
                      Source Files
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img
                    src="https://bulma.io/images/placeholders/1280x960.png"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">Sweet Water Bath and Spa</p>
                  </div>
                </div>

                <div className="content">
                  <p>
                    {" "}
                    A sample storefront CRUD application with Node.js, Express
                    and MongoDB.{" "}
                  </p>
                  <div>
                    <a
                      className="mr-5"
                      href="https://sweet-water-bath-store.cyclic.app/products"
                    >
                      Live Demo
                    </a>
                    <a href="https://github.com/adamskristy/the-store">
                      Source Files
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
