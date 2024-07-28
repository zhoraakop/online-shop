import image1 from '../../images/Rectangle_4075.svg';
import image2 from '../../images/Rectangle_4076.svg';
import image3 from '../../images/Rectangle_4077.svg';
import image4 from '../../images/Rectangle_4078.svg';

const Information = () => {
  return (
    <div className="information">
        <a name="information"></a>
      <div className="information__header">
        <div className="information__block-header">
          <h2 className="information__title-block">О компании</h2>
          <p className="information__subtitle-block">
            В Diors мы гордимся нашими ценностями – качеством, надежностью и
            быстрой доставкой.
          </p>
        </div>
        <p className="information__quote-header">Делай больше</p>
      </div>
      <div className="information__about">
        <div className="information__cards-about">
          <div className="information__card-about">
            <h3 className="information__title-card">1.</h3>
            <p className="information__subtitle-card">Кто мы?</p>
            <p className="information__quote-card">
              Мы - компания, специализирующаяся на изготовлении и продажи
              пиломатериалов.
            </p>
          </div>
          <div className="information__card-about">
            <h3 className="information__title-card">2.</h3>
            <p className="information__subtitle-card">Почему мы?</p>
            <p className="information__quote-card">
              Мы предлагаем качество, индивидуальный подход и быструю доставку.
            </p>
          </div>
          <div className="information__card-about">
            <h3 className="information__title-card">3.</h3>
            <p className="information__subtitle-card">Чем поможем?</p>
            <p className="information__quote-card">
              Мы поможем выбрать и заказать пиломатериалы, а также предложим
              услуги по обработке.
            </p>
          </div>
          <div className="information__card-about">
            <h3 className="information__title-card">4.</h3>
            <p className="information__subtitle-card">Как работаем?</p>
            <p className="information__quote-card">
              Удобный онлайн-каталог, консультации, поддержка и быстрая
              доставка.
            </p>
          </div>
        </div>
        <div className="information__images-about">
            <img alt='Древесина' src={image1} className="information__image-about" id='image1'/>
            <img alt='Древесина' src={image2} className="information__image-about" id='image2'/>
            <img alt='Древесина' src={image3} className="information__image-about" id='image3'/>
            <img alt='Древесина' src={image4} className="information__image-about" id='image4'/>
        </div>
      </div>
    </div>
  );
};

export default Information;
