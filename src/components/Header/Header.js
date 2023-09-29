import './Header.css';
import logo from '../../images/logo-clean.png';
export default function () {
  return (
    <header className="header">
      <div className='header__content'>
        <img src={logo} alt='logo' className="header__logo" />
        <div className='header__contacts'>
          <div>
            <p>ежедневно с 9:00 до 21:00</p>
            <a className='header__tel' href='tel:+79261148266'>+7&nbsp;(926)&nbsp;114-82-66 </a>
          </div>
          <button className='header__button'>ЗАКАЗАТЬ ЧИСТКУ</button>
        </div>
      </div>
    </header>
  )
}