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
                <h4>AI Intern</h4>
                <h5>Plus 91 Labs</h5>
              </div>
              <h3>2025–26</h3>
            </div>
            <p>
              JULY 2025 – JAN 2026. Working on AI Agents and intelligent automation 
              technologies to deliver scalable, high-impact client products.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>ML Intern</h4>
                <h5>ABV-IIITM Gwalior</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              APR 2025 – OCT 2025. Developed behavior-conditioned synthetic Indian 
              traffic scenarios using AI/ML. Tools: CVAT, Python, OpenCV, DeepSort.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Hackathon Achievements</h4>
                <h5>National Level</h5>
              </div>
              <h3>2023–24</h3>
            </div>
            <p>
              • 2nd Position in National Level Hackathon at IIITM Gwalior<br />
              • 4th Position in National Level Hackathon at NIT Bhopal<br />
              • Finalist in Hackathon at IIT Bombay
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
