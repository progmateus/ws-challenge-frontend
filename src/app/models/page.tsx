"use client";

import { useSearch } from "@/contexts/SearchContext";
import { GetBrands } from "@/services/brandService";
import { useEffect, useState } from "react";
import styles from "./page.module.css"
import { BrandItem } from "@/components/brandItem/BrandItem";
import { GetModels } from "@/services/modelsService";
import { IModel } from "@/components/modelItem/ModelItem";
import { Spinner } from "@/components/spinner/Spinner";
import { useModels } from "@/contexts/ModelsContext";
import { useDialogs } from "@/contexts/DialogsContext";

interface IBrand {
  id: string;
  nome: string;
}

export default function Models() {
  const { models, handleSetModels } = useModels();

  const [isLoading, setIsLoading] = useState(false);
  const { search } = useSearch();
  const { handleSetDialogModelIsOpen } = useDialogs()

  useEffect(() => {
    listModels(search)
  }, [search])


  const listModels = (params?: string) => {
    setIsLoading(true)
    GetModels(params).then((res) => {
      const { data } = res
      handleSetModels(data)
      handleSetDialogModelIsOpen(false);
    }).finally(() => {
      setIsLoading(false)
    })
  }

  return (
    <main className={styles.main}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.th}>Nome</th>
            <th className={styles.th}>Modelo</th>
            <th className={styles.th}>Valor Flipe (R$)</th>
          </tr>
        </thead>
        <tbody>
          {
            isLoading ? (<td> <Spinner />  </td>) : (
              models && models.length > 0 ? (
                models.map((model: IModel) => {
                  return (
                    <tr key={model.id} className={styles.tr}>
                      <td className={styles.td}>{model.nome}</td>
                      <td className={styles.td}>{model.marcaEntity?.nome}</td>
                      <td className={styles.td}>{model.valor_flipe}</td>
                    </tr>
                  )
                })
              ) : (
                <tr>
                  <td>
                    Nenhum resultado encontrado
                  </td>
                </tr>
              )
            )
          }
        </tbody>
      </table>

    </main>
  );
}
