import logo from '../../images/logo.svg'

const Header = () => {
    return (  
        <div className='header'>
            <div className='header__block'>
                <img alt="Лого" src={logo} className='header__logo' />
                <h1 className='header__name'>Diors</h1>

            </div>
            <div className='header__menu'>
                <button type='button' className='header__button-menu'>Главная</button>
                <button type='button' className='header__button-menu'><a href="#products">Товары и услуги</a></button>
                <button type='button' className='header__button-menu'><a href="#information">О компании</a></button>
            </div>
        </div>
    );
}
 
export default Header;