import BeatLoader from 'react-spinners/BeatLoader';
import style from './Backdrop.module.css';

export const Backdrop = () => {
  return (
    <div className={style.backdrop}>
      <BeatLoader />
      <></>
    </div>
  );
};
