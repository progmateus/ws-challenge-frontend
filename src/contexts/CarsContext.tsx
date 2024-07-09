"use client";

import { ICar } from "@/components/carItem/carItem";
import { ReactNode, createContext, useContext, useState } from "react";

type CarsContextData = {
  handleSetCars: (data: ICar[]) => void;
  cars: ICar[];
};

interface ICarsProviderProps {
  children: ReactNode
}

export const CarsContext = createContext({} as CarsContextData);

export function CarsProvider({ children }: ICarsProviderProps) {
  const [cars, setCars] = useState<ICar[]>([])

  function handleSetCars(cars: ICar[]) {
    setCars(cars)
  }

  return (
    <CarsContext.Provider value={{ cars, handleSetCars }}>
      {children}
    </CarsContext.Provider>
  )

}

export const useCars = () => useContext(CarsContext)


