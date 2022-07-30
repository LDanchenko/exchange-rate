import { Icon } from '../Icon';

import style from './Header.module.css';

const Header = ({ data }) => {
  console.log(data);
  return (
    <header className={style.header}>
      <div className={style.container}>
        <a href="./" className={style.link}>
          <div className={style.circle}>
            <Icon name="coins" color="white" />
          </div>
          Currency Converter
        </a>
        <ul className={style.list}>
          <li className={style.item}>
            <Icon
              name="usa"
              color="white"
              size="20"
              style={{
                marginRight: '4px',
              }}
            />
            <p>USD&#8226;UAH</p>
            <p>39.40</p>
            <p> /</p>
            <p>39.95</p>
          </li>
          <li className={style.item}>
            <Icon
              name="eu"
              color="white"
              size="20"
              style={{
                marginRight: '4px',
              }}
            />
            <p>EUR&#8226;UAH</p>
            <p>39.40</p>
            <p> /</p>
            <p>40.95</p>
          </li>
        </ul>
      </div>
    </header>
  );
};

export { Header };
