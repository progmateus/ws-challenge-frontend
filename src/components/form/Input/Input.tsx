import { ForwardRefRenderFunction, InputHTMLAttributes, ReactNode, forwardRef } from "react";
import style from './styles.module.css'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  errorMessage?: string | null;
  isInvalid?: boolean;
  icon?: ReactNode;
  name: string;
  label?: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ errorMessage = null, isInvalid = false, icon, name, label, ...rest }, ref) => {
  const invalid = !!errorMessage || isInvalid;
  return (
    <div className={style.main}>
      {label && (<div className={style.label}> {label} </div>)}
      <div className={style.container}>
        <input
          className={style.input}
          aria-invalid={invalid}
          name={name}
          ref={ref}
          {...rest}
        />
        {icon && (icon)}
      </div>
      {
        errorMessage && (<div className={style.error}> {errorMessage}</div>)

      }
    </div>
  )

}

export const Input = forwardRef(InputBase);