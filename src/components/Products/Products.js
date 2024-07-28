import React, { useState } from "react";
import Balk from "../../images/Image.svg";
import Board from "../../images/board.svg";
import Sawing from "../../images/bg.svg";
import Drying from "../../images/bg-1.svg";
import Strozhka from "../../images/bg-2.svg";

const Products = () => {
  const [activeCards, setActiveCards] = useState({});

  const toggleActive = (key) => {
    setActiveCards((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };
  return (
    <div className="products">
        <a name="products"></a>
      <h2 className="products__title">Товары и услуги</h2>
      <div
        className={
          activeCards["balk"] || activeCards["board"]
            ? "products__cards activated"
            : "products__cards"
        }
      >
        <div className="products__card-cards">
          <h4 className="products__title-card">Брус</h4>
          <img alt="Брус" src={Balk} className="products__image-card" />
          <button
            onClick={() => toggleActive("balk")}
            className="products__button-card"
          >
            Подробнее
          </button>
          <p className="products__price-card">от 31р/шт</p>
          <p
            className={
              activeCards["balk"]
                ? "products__subtitle-card active"
                : "products__subtitle-card"
            }
          >
            Для уточнения размера, обьема, сорта, веса и т.д. обращаться по
            номеру телефона: +79051823423 (Данилов И.Б.)
          </p>
        </div>
        <div className="products__card-cards">
          <h4 className="products__title-card">Доска</h4>
          <img alt="Доска" src={Board} className="products__image-card" />
          <button
            onClick={() => toggleActive("board")}
            className="products__button-card"
          >
            Подробнее
          </button>
          <p className="products__price-card">от 230р/шт</p>
          <p
            className={
              activeCards["board"]
                ? "products__subtitle-card active"
                : "products__subtitle-card"
            }
          >
            Для уточнения размера, обьема, сорта, веса и т.д. обращаться по
            номеру телефона: +79051823423 (Данилов И.Б.)
          </p>
        </div>
      </div>
      <div className={
          activeCards["sawing"] || activeCards["drying"] || activeCards["strozhka"]
            ? "products__block actived"
            : "products__block"
        }>
        <div className="products__card-block">
          <h4 className="products__title-block">Распиловка</h4>
          <img
            alt="Распиловка"
            src={Sawing}
            className="products__image-block"
          />
          <button
            onClick={() => toggleActive("sawing")}
            className="products__button-card"
          >
            Подробнее
          </button>
          <p
            className={
              activeCards["sawing"]
                ? "products__subtitle-block active"
                : "products__subtitle-block"
            }
          >
            Описание
          </p>
          <p
            className={
              activeCards["sawing"]
                ? "products__quote-block active"
                : "products__quote-block"
            }
          >
            Точные и аккуратные резы гарантируют минимальные отходы и
            соответствие необходимым размерам, что упрощает процесс последующей
            работы с материалами.
          </p>
        </div>
        <div className="products__card-block">
          <h4 className="products__title-block">Сушка</h4>
          <img alt="Сушка" src={Drying} className="products__image-block" />
          <button
            onClick={() => toggleActive("drying")}
            className="products__button-card"
          >
            Подробнее
          </button>
          <p
            className={
              activeCards["drying"]
                ? "products__subtitle-block active"
                : "products__subtitle-block"
            }
          >
            Описание
          </p>
          <p
            className={
              activeCards["drying"]
                ? "products__quote-block active"
                : "products__quote-block"
            }
          >
            Используя технологии, мы удаляем лишнюю влагу из дерева, что
            предотвращает его деформацию и растрескивание, обеспечивая
            надежность и качество готовых изделий.
          </p>
        </div>
        <div className="products__card-block">
          <h4 className="products__title-block">Строжка</h4>
          <img alt="Строжка" src={Strozhka} className="products__image-block" />
          <button
            onClick={() => toggleActive("strozhka")}
            className="products__button-card"
          >
            Подробнее
          </button>
          <p
            className={
              activeCards["strozhka"]
                ? "products__subtitle-block active"
                : "products__subtitle-block"
            }
          >
            Описание
          </p>
          <p
            className={
              activeCards["strozhka"]
                ? "products__quote-block active"
                : "products__quote-block"
            }
          >
            Наше оборудование и опытные мастера обеспечат высокое качество
            обработки, готовя древесину к дальнейшему использованию в
            строительных и отделочных работах.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Products;
