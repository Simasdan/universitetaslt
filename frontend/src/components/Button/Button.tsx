import { CSSProperties } from 'react';
import styles from './button.module.scss';
import IconButtonIcon from '../../assets/icons/icon_chevron-right.svg?react';

export enum ButtonType {
  REGULAR = 'regular',
  POPULAR = 'popular',
  ICONREGULAR = 'iconregular',
  ICONPOPULAR = 'iconpopular',
  TITLE = 'title'
}

export interface ButtonProps {
  text?: string;
  icon?: boolean;
  type: ButtonType;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  style?: CSSProperties;
}

const Button = ({ text, icon = false, type, onClick, style }: ButtonProps) => {
  const buttonContent = text && !icon ? text : icon ? <IconButtonIcon/> : null;

  return (
    <button className={`${styles.buttonWrapper} ${styles[type]}`} onClick={onClick} style={style}>
      {buttonContent}
    </button>
  )
}

export default Button

// Use case:
// import Button, {ButtonType} from '../../components/Button/Button';
// <Button text='Paprastas mygtukas' type={ButtonType.REGULAR}/>
// <Button text='Populiaraus mygtukas' type={ButtonType.POPULAR}/>
// <Button type={ButtonType.ICONPOPULAR} icon={true}/>
