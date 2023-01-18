function Projects() {
  return (
    <div className="container">
      <div className="section">
        <span className="title">Projects</span>
        <p className="p-6 is-size-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mi
          nisi, ultricies nec sagittis sed, rhoncus et purus. Praesent ut
          sollicitudin libero.{" "}
        </p>
      </div>
      <div className="section">
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
                  <div className="media-left">
                   
                  </div>
                  <div className="media-content">
                    <p className="title is-4">Project title</p>
                    
                  </div>
                </div>

                <div className="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec iaculis mauris. <a href="#">project link</a>
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
                  <div className="media-left">
                    
                  </div>
                  <div className="media-content">
                    <p className="title is-4">Project title</p>
                  </div>
                </div>

                <div className="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec iaculis mauris. <a href="#">project link</a>
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
