"use client";

import { useSearch } from "@/contexts/SearchContext";
import { GetBrands } from "@/services/brandService";
import { useEffect, useState } from "react";
import styles from "./page.module.css"
import { BrandItem } from "@/components/brandItem/BrandItem";
import { Spinner } from "@/components/spinner/Spinner";
import { useBrands } from "@/contexts/BrandsContext";
import { useDialogs } from "@/contexts/DialogsContext";

interface IBrand {
  id: string;
  nome: string;
}

export default function Brands() {
  const { brands, handleSetBrands } = useBrands();
  const [isLoading, setIsLoading] = useState(false);
  const { handleSetDialogBrandIsOpen } = useDialogs()


  const { search } = useSearch();

  useEffect(() => {
    listBrands(search)
  }, [search])


  const listBrands = (params?: string) => {
    setIsLoading(true)
    GetBrands(params).then((res) => {
      const { data } = res
      handleSetBrands(data)
      handleSetDialogBrandIsOpen(false);
    }).finally(() => {
      setIsLoading(false)
    })
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {
          isLoading ? <Spinner /> : (
            brands && brands.length > 0 ? (
              brands.map((brand: IBrand) => {
                return (
                  <BrandItem key={brand.id} brand={brand} />
                )
              })
            ) : (
              <div> Nenhum resultado encontrado </div>
            )
          )

        }
      </div>
    </main>
  );
}