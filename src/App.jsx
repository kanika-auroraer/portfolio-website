import "./index.css";

function App() {
  return (
    <div className="app">

      <section className="hero">
        <h1>Your Name</h1>

        <h2>
          Data Engineer | Analytics Engineer | GenAI Enthusiast
        </h2>

        <p>
          Building automated data pipelines, dashboards,
          and scalable analytics solutions.
        </p>
      </section>

      <section className="card">
        <h3>Experience</h3>

        <p>
          Aurora Energy Research
        </p>

        <ul>
          <li>
            Built end-to-end automation pipelines from ERP and HR systems
          </li>

          <li>
            Transitioned reporting workflows from manual to automated processes
          </li>

          <li>
            Developed dashboards using Microsoft Fabric and Power BI
          </li>
        </ul>
      </section>

      <section className="card">
        <h3>Education</h3>

        <ul>
          <li>
            MSc Mathematics & Statistics — University of Leeds
          </li>

          <li>
            Oxford ML + GenAI Summer School
          </li>

          <li>
            Bachelors — University of Delhi North Campus
          </li>
        </ul>
      </section>

      <section className="card">
        <h3>Skills</h3>

        <div className="skills">

          <span>Python</span>
          <span>PySpark</span>
          <span>SQL</span>
          <span>Power BI</span>
          <span>Microsoft Fabric</span>
          <span>CI/CD</span>
          <span>Git</span>
          <span>GitHub</span>
          <span>VS Code</span>

        </div>
      </section>

      <section className="card">
        <h3>Certifications</h3>

        <p>
          Preparing for Microsoft Azure Data Engineer Associate (DP-203)
        </p>
      </section>

      <section className="card">
        <h3>Contact</h3>

        <p>Email: your-email@email.com</p>

        <p>LinkedIn: your-linkedin-link</p>
      </section>

    </div>
  );
}

export default App;