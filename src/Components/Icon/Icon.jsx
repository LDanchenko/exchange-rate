import icons from './sprite.svg';

const Icon = ({ name, color, size, style }) => (
  <svg fill={color} width={size} height={size} style={style}>
    <use href={`${icons}#icon-${name}`} />
  </svg>
);

Icon.defaultProps = {
  size: 30,
  color: 'black',
};

export { Icon };
