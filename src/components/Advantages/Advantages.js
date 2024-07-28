import Telephone from '../../images/telephone_166815-1.svg';
import Car from '../../images/shipped_411763 1.svg';
import Deadline from '../../images/deadline_439398 1.svg';
import Tubes from '../../images/tubes_2823606-1.svg';
import Client from '../../images/client_6009897 1.svg';
import Notes from '../../images/notes_768818-2.svg';

const Advantages = () => {
    return (
        <div className="advantages">
            <h2 className="advantages__title">Наши преимущества</h2>
            <div className="advantages__block">
                <div className="advantages__card-block">
                    <img alt="Телефон" src={Telephone} className="advantages__image-block" />
                    <p className="advantages__subtitle-block">На связи 24/7</p>
                </div>
                <div className="advantages__card-block">
                    <img alt="Доставка" src={Car} id="ship" className="advantages__image-block" />
                    <p id="ship-text" className="advantages__subtitle-block">Своевременная доставка</p>
                </div>
                <div className="advantages__card-block">
                    <img alt="Сроки" src={Deadline} className="advantages__image-block" />
                    <p className="advantages__subtitle-block">Работаем без наценок в праздники</p>
                </div>
                <div className="advantages__card-block">
                    <img alt="Материал" src={Tubes} className="advantages__image-block" />
                    <p className="advantages__subtitle-block">Проверенный и качественный лес</p>
                </div>
                <div className="advantages__card-block">
                    <img alt="Клиент" src={Client} className="advantages__image-block" />
                    <p className="advantages__subtitle-block">Забота о каждом клиенте</p>
                </div>
                <div className="advantages__card-block">
                    <img alt="Документы" src={Notes} className="advantages__image-block" />
                    <p className="advantages__subtitle-block">Полноценный документооборот</p>
                </div>
            </div>
        </div>
      );
}
 
export default Advantages;