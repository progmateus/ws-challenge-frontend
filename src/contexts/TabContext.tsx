"use client";

import { usePathname } from "next/navigation";
import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { useSearch } from "./SearchContext";

interface ITab {
  name: string;
  label: string;
}

type TabContextData = {
  handleChangeTab: (tab: ITab) => void;
  selectedTab: ITab;
};

interface ITabProviderProps {
  children: ReactNode
}

const labelConvert: any = {
  cars: "Carros",
  models: "Modelos",
  brands: "Marcas"
}

export const TabContext = createContext({} as TabContextData);

export function TabProvider({ children }: ITabProviderProps) {
  const [selectedTab, setSelectedTab] = useState({ name: 'cars', label: 'Carros' })
  const pathname = usePathname()

  useEffect(() => {
    setSelectedTab({ name: pathname.replace('/', ''), label: labelConvert[pathname.replace('/', '')] });
  }, [])

  async function handleChangeTab(tab: ITab) {
    setSelectedTab(tab)
  }

  return (
    <TabContext.Provider value={{ selectedTab, handleChangeTab }}>
      {children}
    </TabContext.Provider>
  )

}

export const useTab = () => useContext(TabContext)


