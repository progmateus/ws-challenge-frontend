"use client";
import { DialogHTMLAttributes, useEffect, useState } from "react";
import styles from "./styles.module.css";
import { ICar } from "@/components/carItem/carItem";
import { Input } from "@/components/form/Input/Input";
import { Button } from "@/components/button/Button";
import { Controller, useForm } from "react-hook-form";
import { date, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Select } from "@/components/form/Select/Select";
import { GetModels } from "@/services/modelsService";
import { CreateCar } from "@/services/carsService";
import { useCars } from "@/contexts/CarsContext";
import { useDialogs } from "@/contexts/DialogsContext";


type IProps = DialogHTMLAttributes<HTMLDialogElement> & {
  isOpen: boolean;
  handleClose: () => void;
}

const signUpSchema = z.object({
  ano: z.string().min(3, "Min 3 caracteres").max(4, "Max 4 caracteres"),
  cor: z.string().min(3, "Min 3 caracteres").max(80, "Max 80 caracteres"),
  modelo_id: z.string().uuid("ID inválido"),
  combustivel: z.string().min(3, "Min 3 caracteres").max(80, "Max 80 caracteres"),
  num_portas: z.string()
});

type CreateCarProps = z.infer<typeof signUpSchema>

export function CarDialog({ isOpen, handleClose }: IProps) {
  const [models, setModels] = useState([])
  const { cars, handleSetCars } = useCars();

  const { register, handleSubmit, formState: { errors }, reset } = useForm<CreateCarProps>({
    resolver: zodResolver(signUpSchema)
  });
  const { dialogCarIsOpen, handleSetDialogCarIsOpen } = useDialogs()

  useEffect(() => {
    if (dialogCarIsOpen) {
      reset()
    }
  }, [dialogCarIsOpen])

  useEffect(() => {
    GetModels("").then((res) => {
      const { data } = res;
      setModels(data);
    })
  }, [])

  const handleCreate = (data: CreateCarProps) => {
    CreateCar(data).then((res) => {
      const { data } = res;
      handleSetCars([...cars, data]);
      handleSetDialogCarIsOpen(false);
    })
  }

  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.background}>
      <form onSubmit={handleSubmit(handleCreate)} className={styles.container} >
        <div className={styles.header}>
          <h2> Cadastrar Carro</h2>
          <span className={styles.pointer} onClick={handleClose}>
            <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 24 24"><path fill="#212121" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z" /></svg>
          </span>
        </div>
        <div className={styles.body}>
          <div className={styles.containerInput}>
            <Input label="Ano" type="number" errorMessage={errors.ano?.message} {...register("ano")} />

            <Input label="Cor" errorMessage={errors.cor?.message} {...register("cor")} />
          </div>
          <div className={styles.containerInput}>
            <Input label="Combustível" errorMessage={errors.combustivel?.message} {...register("combustivel")} />


            <Input label="Quantidade de portas" type="number" errorMessage={errors.num_portas?.message}  {...register("num_portas")} />

          </div>
          <Select label="Modelo" errorMessage={errors.modelo_id?.message} options={models} optionLabel="nome" optionValue="id" {...register("modelo_id")} />
        </div>

        <div className={styles.dialogActions}>
          <Button title="CADASTRAR" type="submit" />
        </div>
      </form>
    </div>
  );
}
