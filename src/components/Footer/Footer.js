import React, { useState } from "react";

const Footer = () => {
  const [activeCards, setActiveCards] = useState({});

  const toggleActive = (key) => {
    setActiveCards({});
    setActiveCards((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };
  return (
    <div className="footer">
      <div className="footer__header">
        <h2 className="footer__title-header">
          Начните реализовывать свою идею сегодня!
        </h2>
        <div className="footer__block-header">
          <button
            onClick={() => toggleActive("products")}
            type="button"
            className={
              activeCards["products"]
                ? "footer__button-block click"
                : "footer__button-block"
            }
          >
            <a
              className={
                activeCards["products"]
                  ? "footer__button-block click"
                  : "footer__button-block"
              }
              href="#products"
            >
              Товары
            </a>
          </button>
          <button
            onClick={() => toggleActive("services")}
            type="button"
            className={
              activeCards["services"]
                ? "footer__button-block click"
                : "footer__button-block"
            }
          >
            <a
              className={
                activeCards["services"]
                  ? "footer__button-block click"
                  : "footer__button-block"
              }
              href="#products"
            >
              Услуги
            </a>
          </button>
        </div>
      </div>
      <div className="footer__block">
        <div className="footer__information-block">
          <h2 className="footer__title-information">Diors</h2>
          <p className="footer__subtitle-information">
            Мы легко связываем вас с природными пиломатериалами и
            профессиональными услугами по их обработке.
          </p>
        </div>
        <div className="footer__information-block">
          <h2 className="footer__title-information">Информация:</h2>
          <p className="footer__subtitle-information">
            Адрес: Республика Марий Эл, Волжск, посёлок Мамасево
          </p>
          <p className="footer__subtitle-information">
            Телефон: +7 (905) 182-34-23
          </p>
          <p className="footer__subtitle-information">
            Электронная почта: diors@bk.ru
          </p>
          <p className="footer__subtitle-information">
            Генеральный директор: Данилов Игорь Борисович
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
