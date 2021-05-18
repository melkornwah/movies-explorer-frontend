import React from "react";

function AboutProject(props) {
  return(
    <section className="about-project">
      <h2 className="section-heading">
        О проекте
      </h2>
      <div className="about-project__info">
        <div className="info">
          <h3 className="info__heading">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="info__text">
            Составление плана,
            работу над бэкендом, вёрстку,
            добавление функциональности и финальные доработки.
          </p>
        </div>
        <div className="info">
          <h3 className="info__heading">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="info__text">
            У каждого этапа был мягкий и жёсткий дедлайн,
            которые нужно было соблюдать,
            чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="about-project__timeline">
        <div className="timeline-back">
          <p className="timeline-back__time">
            1 неделя
          </p>
          <p className="timeline-back__text">
            Back-end
          </p>
        </div>
        <div className="timeline-front">
          <p className="timeline-front__time">
            4 недели
          </p>
          <p className="timeline-front__text">
            Front-end
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;
