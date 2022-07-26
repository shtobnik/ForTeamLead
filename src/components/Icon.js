import { memo } from 'react';
import Sprite from '../images/icons/sprite.svg';

const Icon = ({ image }) => (
  <svg width='1em' height='1em' >
    <use href={Sprite + `#${image}`} />
  </svg>
);

export default memo(Icon);