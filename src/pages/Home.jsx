import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container py-6">
      <section className="section">
        <p className="block title is-1 p-6 mt-6 has-text-centered ">
          Hi, I'm Kristy.
        </p>

        <p className="block has-text-centered is-size-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac
          facilisis nibh. Cras iaculis rhoncus risus ac pharetra. Mauris magna
          tortor, maximus eget felis nec, molestie mollis felis. Fusce venenatis
          porta libero, eu pulvinar libero tincidunt vel.
        </p>
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
