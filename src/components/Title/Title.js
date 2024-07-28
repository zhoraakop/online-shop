import Point from '../../images/DOTS.svg';

const Title = () => {
  return (
    <div className="title">
      <div className="title__block">
        <h2 className="title__title-block">
        Изготовим и доставим качественные изделия из дерева.
        </h2>
        <p className="title__subtitle-block">
          Мы поможем вам воплотить в жизнь элегантные и роскошные деревянные
          проекты, созданные нашими экспертами.
        </p>
        <img alt="Точки" src={Point} className="title__image-block"/>
      </div>
    </div>
  );
};

export default Title;
