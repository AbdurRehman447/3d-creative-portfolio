import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Developer & Engineer</h4>
                <h5>Fiverr (Freelance)</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Delivering high-end web applications, e-commerce stores, custom WordPress plugins, and full-stack solutions for clients worldwide with 100% satisfaction.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Developer</h4>
                <h5>Brand Hazir</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Developed dynamic digital platforms, optimized front-end performance, and delivered responsive web solutions tailored for brand growth.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack & Plugin Developer</h4>
                <h5>Self Employed</h5>
              </div>
              <h3>2019</h3>
            </div>
            <p>
              Building open-source tools, AI strategy WordPress plugins, employee management portals, and enterprise web applications.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor's Degree</h4>
                <h5>Virtual University</h5>
              </div>
              <h3>2020</h3>
            </div>
            <p>
              Pursuing Higher Education in Computer Science & Information Technology, focusing on software engineering principles and web architecture.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
