import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container py-6">
      <section className="section">
        <div className="">
          <p className="title is-1 p-3 mt-6 has-text-centered  ">
            Hi, I'm Kristy.
          </p>
          <p className="has-text-centered is-size-4 ">
            I'm a front-end developer and IT Specialist.
          </p>
        </div>
        <div className="is-flex is-justify-content-space-evenly mt-6">
          <span class="icon" title="javascript logo">
            <i class="fa-brands fa-js fa-4x"></i>
          </span>
          <span class="icon" title="html5 logo">
            <i class="fa-brands fa-html5 fa-4x"></i>
          </span>
          <span class="icon" title="css3 logo">
            <i class="fa-brands fa-css3 fa-4x"></i>
          </span>
          <span class="icon" title="react logo">
            <i class="fa-brands fa-react fa-4x"></i>
          </span>
          <span class="icon" title="node js logo">
            <i class="fa-brands fa-node-js fa-4x"></i>
          </span>
        </div>
        <div className="section mt-6">
          <div className="has-text-centered">
            <Link to="/projects">
              <button className="button is-primary is-large is-outlined">
                Projects
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
