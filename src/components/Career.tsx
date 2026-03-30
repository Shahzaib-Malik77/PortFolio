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
                <h4>Flutter Developer Student</h4>
                <h5>Academic Projects</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Built UI-focused Flutter applications, practiced clean layouts,
              and learned how real-world mobile app screens are structured and
              connected.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineering Learner</h4>
                <h5>University Track</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Strengthened concepts in OOP, software testing, SQA, UML, and
              database fundamentals while improving logic building and problem
              solving.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Open to Internship Opportunities</h4>
                <h5>Remote or On-Site</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Currently focused on advanced Flutter, state management, clean
              architecture, and full stack growth through projects and
              collaborations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
