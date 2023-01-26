function Projects() {
  return (
    <div className="container py-6">
      <div className="section">
        <span className="title">Projects</span>
      </div>
      <div className="">
        <div className="columns">
          <div className="column">
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by2">
                  <img src="https://i.ibb.co/0yLKJGX/acnh.png" alt="acnh" />
                </figure>
              </div>
              <div className="card-content has-background-white-bis">
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
                    <a
                      className="mr-5"
                      href="https://acnh-bday.netlify.app"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo
                    </a>
                    <a
                      href="https://github.com/adamskristy/acnh-bday"
                      target="_blank"
                      rel="noreferrer"
                    >
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
                <figure className="image is-4by2">
                  <img
                    src="https://i.ibb.co/NyStzY7/linkshare.png"
                    alt="linkshare"
                  />
                </figure>
              </div>
              <div className="card-content has-background-white-bis">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">Sweet Water Bath and Spa</p>
                  </div>
                </div>

                <div className="content">
                  <p>
                    A storefront CRUD application with Node.js, Express, and
                    MongoDB.
                  </p>
                  <div>
                    <a
                      className="mr-5"
                      href="https://sweet-water-bath-store.cyclic.app/products"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo
                    </a>
                    <a
                      href="https://github.com/adamskristy/the-store"
                      target="_blank"
                      rel="noreferrer"
                    >
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
