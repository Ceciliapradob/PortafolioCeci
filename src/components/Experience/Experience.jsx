import React from "react";

import "./Experience.css";
// import skills from "../../data/skills.json";
// import history from "../../data/history.json";
// import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className="section-tl" id="technology">
      <h2>Lenguajes y tecnologías</h2>

      <div className='technologies-section'>

        {/* <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <img
                  src={getImageUrl(historyItem.imageSrc)}
                  alt={`${historyItem.organisation} Logo`}
                />
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div> */}
        <div className="technology">
          <i className="icon fab fa-html5"></i>
          <span>HTML</span>
        </div>
        <div className="technology">
          <i className="icon fab fa-css3"></i>
          <span>CSS</span>
        </div>
        <div className="technology">
          <i className="icon fab fa-js"></i>
          <span>JavaScript</span>
        </div>
        <div className="technology">
          <i className="icon fab fa-react"></i>
          <span>React</span>
        </div>
        <div className="technology">
          <i className="icon fab fa-node"></i>
          <span>Node.js</span>
        </div>
        <div className="technology">
          <i className="icon fas fa-database"></i>
          <span>MongoDB</span>
        </div>
        <div className="technology">
          <i className="icon fas fa-database"></i>
          <span>MySQL</span>
        </div>
      </div>
    </section>
  );
};
