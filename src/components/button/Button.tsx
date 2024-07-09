import { ButtonHTMLAttributes } from 'react';
import style from './styles.module.css'

type Iprops = ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string;
}

export function Button({ title, ...rest }: Iprops) {
  return (
    <button className={style.container} {...rest}>
      {title}
    </button>
  )

}