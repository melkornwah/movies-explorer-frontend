import React from "react";
import Portfolio from "./Portfolio";

function AboutMe(props) {
  return(
    <section className="about-me">
      <h2 className="section-heading">
        Студент
      </h2>
      <div className="about-me__info">
        <div className="about-me__info-text">
          <h3 className="about-me__info-heading">
            Владимир
          </h3>
          <p className="about-me__info-subheading">
            Веб-разработчик, 22 года
          </p>
          <p className="about-me__info-bio">
            Я вырос и живу в Санкт-Петербурге,
            после школы, отучился полтора года в СПБГУТ им. Бонч-Бруевича
            на специальности "Программная инжерения".
            Обожаю видеоигры, музыку и книги, очень нравится скалолазание.
            После знакомства с Яндекс.Практикумом, начал писать код.
            Параллельно написанию дипломной работы, ищу основную работу,
            в качестве Front-end/Web разработчика.
          </p>
          <ul className="about-me__ref-list">
            <li className="about-me__ref-item">
              <a className="about-me__ref" href="https://vk.com/melkornwah">
                VK
              </a>
            </li>
            <li className="about-me__ref-item">
              <a className="about-me__ref" href="https://github.com/melkornwah">
                Github
              </a>
            </li>
          </ul>
        </div>
        <div className="about-me__info-photo" />
      </div>
      <Portfolio />
    </section>
  );
};

export default AboutMe;
