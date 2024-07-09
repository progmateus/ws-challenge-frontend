"use client";

import { IModel } from "@/components/modelItem/ModelItem";
import { ReactNode, createContext, useContext, useState } from "react";

type ModelsContextData = {
  handleSetModels: (data: IModel[]) => void;
  models: IModel[];
};

interface IModelsProviderProps {
  children: ReactNode
}

export const ModelsContext = createContext({} as ModelsContextData);

export function ModelsProvider({ children }: IModelsProviderProps) {
  const [models, setModels] = useState<IModel[]>([])

  async function handleSetModels(models: IModel[]) {
    setModels(models)
  }

  return (
    <ModelsContext.Provider value={{ models, handleSetModels }}>
      {children}
    </ModelsContext.Provider>
  )

}

export const useModels = () => useContext(ModelsContext)


