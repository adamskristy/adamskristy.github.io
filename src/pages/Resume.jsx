function Resume() {
  return (
    <div className="container py-6">
      <div className="section ">
        <span className="title block"></span>
      </div>
      <div className="columns">
        <div className="column is-one-third ">
          <section className="block ">
            <p className=" title">Kristy Adams</p>
            <div className="">
              <table className="table has-background-white-ter has-text-grey-dark">
                <tbody>
                  <tr>
                    <th>
                      <span className="icon">
                        <i class="fa-brands fa-linkedin"></i>
                      </span>
                    </th>
                    <td>https://www.linkedin.com/in/adams-kristy/</td>
                    <td>
                      &emsp;&emsp;
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <span className="icon">
                        <i class="fa-solid fa-location-dot"></i>
                      </span>
                    </th>
                    <td>South Carolina</td>
                    <td></td>
                  </tr>
                  <tr>
                    <th>
                      <span className="icon">
                        <i class="fa-brands fa-github"></i>
                      </span>
                    </th>
                    <td>github.com/adamskristy</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ------Education------ */}

          <section className="block has-background-white-ter has-text-grey-dark p-5">
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
          <section className="block has-background-white-ter has-text-grey-dark p-5">
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

          <section className=" block has-background-white-ter has-text-grey-dark p-5">
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
            <hr />
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
            <hr />
            <div className="block">
              <p className="is-size-5 has-text-weight-bold">
                Sweet Water Bath and Spa
              </p>
              <p>
                <span className="is-size-6 has-text-weight-bold">
                  Technologies Used:
                </span>{" "}
                JavaScript, React, Node.js, Express.js, Mongoose.js, MongoDB,
                Postman
              </p>
              <p>
                Created a backend-focused CRUD (Create, Read, Update, Delete)
                application.
              </p>
            </div>
            <div className="block">
              <p className="is-size-5 has-text-weight-bold">
                Animal Crossing Birthday Directory
              </p>
              <p>
                <span className="is-size-6 has-text-weight-bold">
                  Technologies Used:
                </span>{" "}
                JavaScript, React, Bulma, SCSS
              </p>
              <p>
                Created a frontend-focused web application using an external API
                with react functional components and CSS framework.
              </p>
              <p>
                The user can navigate and select specific information extracted
                from the API.
              </p>
            </div>
            <div className="block">
              <p className="is-size-5 has-text-weight-bold">LinkShare</p>
              <p>
                <span className="is-size-6 has-text-weight-bold">
                  Technologies Used:
                </span>{" "}
                JavaScript, React, Node.js, Express.js, MongoDB, JWT
              </p>
              <p>
                Developed a full-stack CRUD application with authentication.
              </p>
              <p>
                The user can create a token-protected account and input
                information into the site to share with other users.
              </p>
            </div>
          </section>

          {/* --------Experience------- */}

          <section className="block">
            <p className="title">Experience</p>
            <hr />
            <div className="block content">
              <span className="is-size-5 has-text-weight-bold">
                Graphic Designer
              </span>
              <p className="is-size-6 is-italic">
                {" "}
                Together As One Properties; Fort Mill, SC (November 2021 -
                August 2022)
              </p>
              <ul>
                <li>
                  Established company brand standard and designed website layout
                  and content.
                </li>
                <li>
                  Produced marketing materials digital and print per company
                  needs including signage.
                </li>
                <li>
                  Applied knowledge from customer service and help desk
                  interactions to target customer needs and create a campaign to
                  increase the company lead generation by 20%.
                </li>
              </ul>
            </div>
            <div className="block content">
              <span className="is-size-5 has-text-weight-bold">
                Product Support Specialist
              </span>
              <p className="is-size-6 is-italic">
                {" "}
                Yoh, LPL Financial, Fort Mill, SC (July 2021 - October 2021)
              </p>
              <ul>
                <li>
                  Utilized Microsoft Dynamics to track, monitor, and document
                  end-users’ issues and create tickets describing the
                  troubleshooting steps taken and next steps required for
                  customers and the next agent to reference.
                </li>
                <li>
                  Recreated errors, bugs, and defects inside test environments
                  of proprietary software and applications.
                </li>
                <li>
                  Documented end-user issues via defect reports and test
                  scenarios explaining steps to reproduce and expected vs.
                  actual results.
                </li>
              </ul>
            </div>
            <div className="block content">
              <span className="is-size-5 has-text-weight-bold">
                (NMCI) Navy Marine Corps Intranet Customer Technical Support
                Rep/ Service Desk Technician
              </span>
              <p className="is-size-6 is-italic">
                {" "}
                Perspecta, Norfolk, VA (February 2020 - September 2020)
              </p>
              <ul>
                <li>
                  Hired on from contract to fulltime employee due to
                  consistently scoring over 80% in metrics and customer survey
                  ratings.
                </li>
                <li>
                  Collaborated with various internal teams, such as network
                  services and software engineering to restore services and
                  correct the core problem.
                </li>
                <li>
                  Identified exact problem and course of action when given
                  incomplete and/or incorrect information.
                </li>
                <li>
                  Detected bug in the ticketing system that prematurely closed
                  tickets before resolution resulting in an 70% increase in the
                  SLA (Service Level Agreement) rating.
                </li>
              </ul>
              <p className="is-size-6 is-italic">
                {" "}
                Apex Systems, Norfolk, VA (September 2019 - February 2020)
              </p>
              <ul>
                <li>
                  Applied active listening to understand customer needs,
                  receiving a positive feedback rating of 90% based on customer
                  satisfaction surveys.
                </li>
                <li>
                  Trained eight novice agents for email ticketing and after
                  their training was complete continued to provide mentorship
                  and knowledge.
                </li>
                <li>
                  Composed documentation and training materials for end users
                  which led to materials being added to training notes for
                  new-hires.
                </li>
              </ul>
              <div className="block content">
                <span className="is-size-5 has-text-weight-bold">
                  Guest Service Attendant
                </span>
                <p className="is-size-6 is-italic">
                  {" "}
                  Marine Corps Community Services, Okinawa, Japan (June 2016 -
                  June 2018)
                </p>
                <ul>
                  <li>
                    Built rapport and deep connections with customers to ensure
                    future reservations and maintained a 90% occupancy rate.
                  </li>
                  <li>
                    Trained two guest service attendants in customer service,
                    hotel policies, and Navy quality standards.
                  </li>
                  <li>
                    Provided resolutions and efficient service to all customer
                    concerns and questions ensuring the needs of the customer
                    were met.
                  </li>
                  <li>
                    Adapted to a new environment, employing cultural differences
                    to improve the quality of customer service.
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Resume;
