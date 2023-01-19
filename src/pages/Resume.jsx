function Resume() {
  return (
    <div className="container py-6">
      <div className="section ">
        <span className="title block">Resume</span>
      </div>
      <div className="columns">
        <div className="column is-one-third ">
            <section className="block ">
              <p className=" title">Kristy Adams</p>
              <div className="has-background-grey-lighter">
              <table className="table">
                <tbody>
                  <tr>
                    <th>icon</th>
                    <td>email address</td>
                  </tr>
                  <tr>
                    <th>icon</th>
                    <td>location</td>
                  </tr>
                  <tr>
                    <th>icon</th>
                    <td>github</td>
                  </tr>
                </tbody>
              </table>
              </div>
            </section>
           
            {/* ------Education------ */}

            <section className="block has-background-grey-lighter p-5">
              <p className="title">Education</p>
              <div className="block">
                <p className="is-size-5 has-text-weight-bold">Per Scholas</p>
                <p> Charlotte, NC</p>
                <p>Software Engineer Training Course (November 2022)</p>
              </div>
              <div>
                <p className="is-size-5 has-text-weight-bold">
                  Towson University
                </p>
                <p>Towson, MD</p>
                <p>Bachelor's of Fine Arts </p>
                <p>Digital Art and Design (May 2013)</p>
              </div>
            </section>
            <section className="block has-background-grey-lighter p-5">
            
            {/* --------Skills------- */}

              <p className="title">Skills</p>
              <div className="">
                <p>HTML & CSS</p>
                <p>JavaScript</p>
                <p>React.js</p>
                <p>MongoDB</p>
                <p>Postman</p>
                <p>GitHub</p>
                <p>Microsoft Visual Studio Code</p>
                <p>Adobe Creative Suite</p>
                <p>Graphic Design</p>
                <p>Web Design</p>
                <p>Customer Service</p>                
              </div>
            </section>

            {/* --------Certifications------- */}

            <section className=" block has-background-grey-lighter p-5">
              <p className="title">Certifications</p>
              <div className="block">
                <p>Google IT Support Professional Certificate (June 2020)</p>
              </div>
            </section>
        </div>

        {/* --------Second Column------- */}

        <div className="column">
          <section className="block">
            <p className="title">Summary</p>
            <div className="block">
              <p>
                IT Professional transitioning into Software Engineering after
                completing Per Scholas Software Engineer Training Course. Over 5
                years of experience in customer service and IT Helpdesk and
                communicating with people of all backgrounds. Emotionally
                intelligent problem solver able to learn quickly and strengthen
                team dynamics. Current active Secret Clearance.
              </p>
            </div>
          </section>

          {/* --------Projects------- */}

          <section className="block">
            <p className="title">Projects</p>
            <div className="block">
              <p>
                IT Professional transitioning into Software Engineering after
                completing Per Scholas Software Engineer Training Course. Over 5
                years of experience in customer service and IT Helpdesk and
                communicating with people of all backgrounds. Emotionally
                intelligent problem solver able to learn quickly and strengthen
                team dynamics. Current active Secret Clearance.
              </p>
            </div>
          </section>

          {/* --------Experience------- */}

          <section className="block">
            <p className="title">Experience</p>
            <div className="block">
              <p>
                IT Professional transitioning into Software Engineering after
                completing Per Scholas Software Engineer Training Course. Over 5
                years of experience in customer service and IT Helpdesk and
                communicating with people of all backgrounds. Emotionally
                intelligent problem solver able to learn quickly and strengthen
                team dynamics. Current active Secret Clearance.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Resume;
