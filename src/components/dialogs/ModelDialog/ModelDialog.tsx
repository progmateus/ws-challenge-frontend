"use client";
import { DialogHTMLAttributes, ForwardRefRenderFunction, MutableRefObject, useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
import { Input } from "@/components/form/Input/Input";
import { Button } from "@/components/button/Button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { IModel } from "@/components/modelItem/ModelItem";
import { GetBrands } from "@/services/brandService";
import { Select } from "@/components/form/Select/Select";
import { CreateModel } from "@/services/modelsService";
import Router from "next/router";
import { useModels } from "@/contexts/ModelsContext";
import { useDialogs } from "@/contexts/DialogsContext";

type IProps = DialogHTMLAttributes<HTMLDialogElement> & {
  isOpen: boolean;
  handleClose: () => void;
}

const signUpSchema = z.object({
  nome: z.string().min(3, "Min 3 caracteres").max(80, "Max 80 caracteres"),
  marca_id: z.string().uuid("ID inválido"),
  valor_flipe: z.string()
});

type CreateModelProps = z.infer<typeof signUpSchema>

export const ModelDialog = ({ isOpen, handleClose }: IProps) => {
  const [brands, setBrands] = useState([]);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<CreateModelProps>({
    resolver: zodResolver(signUpSchema)
  });
  const { models, handleSetModels } = useModels();
  const { dialogModelIsOpen, handleSetDialogModelIsOpen } = useDialogs()

  useEffect(() => {
    if (dialogModelIsOpen) {
      reset()
    }
  }, [dialogModelIsOpen])


  useEffect(() => {
    console.log('useEffect')
    reset();
    GetBrands("").then((res) => {
      const { data } = res;
      setBrands(data);
      handleSetDialogModelIsOpen(false)
    })
  }, [])

  const handleCreate = (data: CreateModelProps) => {
    CreateModel(data).then((res) => {
      const { data } = res;
      handleSetModels([...models, data]);
    })
  }

  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.background}>
      <form onSubmit={handleSubmit(handleCreate)} className={styles.container} >
        <div className={styles.header}>
          <h2> Cadastrar Modelo</h2>
          <span className={styles.pointer} onClick={handleClose}>
            <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 24 24"><path fill="#212121" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z" /></svg>
          </span>
        </div>
        <div className={styles.body}>
          <div className={styles.containerInput}>
            <Input label="Nome" errorMessage={errors.nome?.message} {...register("nome")} />

            <Input label="Valor" errorMessage={errors.valor_flipe?.message} {...register("valor_flipe")} />
          </div>
          <Select label="Marca" errorMessage={errors.marca_id?.message} options={brands} optionLabel="nome" optionValue="id" {...register("marca_id")} />
        </div>


        <div className={styles.dialogActions}>
          <Button title="CADASTRAR" type="submit" />
        </div>
      </form>
    </div>
  );
}
