function Footer() {
  return (
    <footer className="footer">
      <div className="has-text-centered mt-6">
        <p>
          Created by <span className="has-text-weight-bold">Kristy Adams</span>.
        </p>
      </div>
      <div className="is-flex is-justify-content-center">
        <figure class="image is-128x128 mt-5">
          <a href="https://bulma.io" target="_blank" rel="noreferrer">
            {" "}
            <img
              src="https://bulma.io/images/made-with-bulma.png"
              alt="Made with bulma"
            />
          </a>
        </figure>
      </div>
    </footer>
  );
}

export default Footer;
