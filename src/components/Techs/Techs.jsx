import './Techs.scss';

function Techs() {
  return (
    <section className="techs" id="techs">
      <div className="techs__wrapper">
        <h2 className="techs__title">Технологии</h2>
        <h1 className="techs__header">7 технологий</h1>
        <p className="techs__text">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
        <ul className="techs__items">
          <li className="techs__item">HTML</li>
          <li className="techs__item">SCSS</li>
          <li className="techs__item">JS</li>
          <li className="techs__item">React</li>
          <li className="techs__item">Git</li>
          <li className="techs__item">Express.js</li>
          <li className="techs__item">mongoDB</li>
        </ul>
      </div>
    </section>
  );
}

export default Techs;
