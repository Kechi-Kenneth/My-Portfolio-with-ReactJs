import React from "react";
import "./Project.css";

const Project = () => {
  return (
    <section>
      <h2>PROJECTS</h2>

      <div className="project-container">
        <div className="first-project">
          <div className="image">
            <img
              className="first-project-icon"
              src="public/icons8-music-64.png"
            />
          </div>
          <div className="project-details">
            <div className="title">
              {" "}
              <h5>
                AfrOmood Music Player
                <span>
                  <img
                    className="project-symbol"
                    src="./icons8-forward-arrow-50.png"
                  />
                </span>
              </h5>
            </div>
            <p className="project-date">March 2024</p>
            <p className="project-description">
              This project was buit to satisfy the african ears both in nigeria
              and in diaspora search for afroobeT SONGS OF ALL TYPLE and you
              will have it to listen to variaus songs
            </p>
            <div className="project-technologies">
              <button className="btn">
                <img src="/icons8-html5-64.png" alt="" />
              </button>
              <button className="btn">
                <img src="public/icons8-css3-48.png" alt="" />{" "}
              </button>
              <button className="btn">
                <img src="public/icons8-javascript-48.png" alt="" />{" "}
              </button>
            </div>
          </div>
        </div>

        <div className="second-project">
          <div className="image">
            <img src="" />
          </div>
          <div className="project-details">
            <div className="title">
              {" "}
              <h5>
                MonieView Wallet Manager{" "}
                <span>
                  <img
                    className="project-symbol"
                    src="./icons8-forward-arrow-50.png"
                  />
                </span>
              </h5>
            </div>
            <p className="project-date">June 2024</p>
            <p className="project-description">
              This project was buit to satisfy the african ears both in nigeria
              and in diaspora search for afroobeT SONGS OF ALL TYPLE and you
              will have it to listen to variaus songs
            </p>
            <div className="project-technologies">
              <button className="btn">
                <img src="/icons8-html5-64.png" alt="" />
              </button>
              <button className="btn">
                <img src="public/icons8-css3-48.png" alt="" />{" "}
              </button>
              <button className="btn">
                <img src="public/icons8-react-js-40.png" alt="" />{" "}
              </button>
            </div>
          </div>
        </div>

        <div className="third-project">
          <div className="image">
            <img src="" />
          </div>
          <div className="project-details">
            <div className="title">
              {" "}
              <h5>
                Kayboxx Game Store{" "}
                <span>
                  <img
                    className="project-symbol"
                    src="./icons8-forward-arrow-50.png"
                  />
                </span>
              </h5>
            </div>
            <p className="project-date">24th March 2023</p>
            <p className="project-description">
              This project was buit to satisfy the african ears both in nigeria
              and in diaspora search for afroobeT SONGS OF ALL TYPLE and you
              will have it to listen to variaus songs
            </p>
            <div className="project-technologies">
              <button className="btn">
                <img src="/icons8-html5-64.png" alt="" />
              </button>
              <button className="btn">
                <img src="public/icons8-javascript-48.png" alt="" />{" "}
              </button>
              <button className="btn">
                <img src="public/icons8-css3-48.png" alt="" />{" "}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="project-content">
        <p>My Github repositories </p>
        <button className="repositories-button">Click Here </button>
      </div>
    </section>
  );
};

export default Project;
