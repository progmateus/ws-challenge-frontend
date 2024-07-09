import { ForwardRefRenderFunction, ReactNode, SelectHTMLAttributes, forwardRef } from "react";
import style from './styles.module.css'

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  errorMessage?: string | null;
  icon?: ReactNode;
  name: string;
  label?: string;
  options: Array<any>;
  optionLabel: string;
  optionValue: string;
}

export const SelectBase: ForwardRefRenderFunction<HTMLSelectElement, SelectProps> = ({ errorMessage = null, icon, name, options, label, optionLabel = "nome", optionValue = "id", ...rest }: SelectProps, ref) => {
  return (
    <div className={style.main}>
      <div className={style.label}> {label} </div>
      <select
        className={style.container}
        name={name}
        ref={ref}
        defaultValue=""
        {...rest}
      >
        <option value=""> Selecione... </option>
        {options && options.length && (
          options.map((option) => {
            return (
              <option key={option[optionValue]} value={option[optionValue]}> {option[optionLabel]} </option>
            )
          })
        )}
      </select>
      {
        errorMessage && (<div className={style.error}> {errorMessage}</div>)
      }
    </div>
  )
}

export const Select = forwardRef(SelectBase);