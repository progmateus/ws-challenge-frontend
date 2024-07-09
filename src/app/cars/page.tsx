"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { CarItem, ICar } from "@/components/carItem/carItem";
import { GetCars } from "@/services/carsService";
import { useSearch } from "@/contexts/SearchContext";
import { Spinner } from "@/components/spinner/Spinner";
import { useCars } from "@/contexts/CarsContext";
import { useDialogs } from "@/contexts/DialogsContext";


export default function Cars() {
  const { cars, handleSetCars } = useCars();

  const [isLoading, setIsLoading] = useState(false);
  const { search } = useSearch();
  const { handleSetDialogCarIsOpen } = useDialogs()


  useEffect(() => {
    listCars(search)
  }, [search])


  const listCars = (params?: string) => {
    setIsLoading(true)
    GetCars(params).then((res) => {
      const { data } = res
      handleSetCars(data)
      handleSetDialogCarIsOpen(false);
    }).finally(() => {
      setIsLoading(false)
    })
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {
          isLoading ? <Spinner /> :
            (
              cars && cars.length > 0 ? (
                cars.map((car: ICar) => {
                  return (
                    <CarItem key={car.id} car={car} />
                  )
                })
              )
                :
                <div> Nenhum resultado encontrado</div>
            )
        }
      </div>
    </main>
  );
}
