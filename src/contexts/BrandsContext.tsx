"use client";

import { IBrand } from "@/components/brandItem/BrandItem";
import { ReactNode, createContext, useContext, useState } from "react";

type BrandsContextData = {
  handleSetBrands: (data: IBrand[]) => void;
  brands: IBrand[];
};

interface IBrandsProviderProps {
  children: ReactNode
}

export const BrandsContext = createContext({} as BrandsContextData);

export function BrandsProvider({ children }: IBrandsProviderProps) {
  const [brands, setBrands] = useState<IBrand[]>([])

  async function handleSetBrands(brands: IBrand[]) {
    setBrands(brands)
  }

  return (
    <BrandsContext.Provider value={{ brands, handleSetBrands }}>
      {children}
    </BrandsContext.Provider>
  )

}

export const useBrands = () => useContext(BrandsContext)


