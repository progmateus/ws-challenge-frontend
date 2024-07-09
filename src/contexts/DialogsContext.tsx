"use client";

import { ReactNode, createContext, useContext, useState } from "react";

type DialogscontextData = {
  handleSetDialogBrandIsOpen: (value: boolean) => void;
  handleSetDialogModelIsOpen: (value: boolean) => void;
  handleSetDialogCarIsOpen: (value: boolean) => void;
  dialogCarIsOpen: boolean;
  dialogBrandIsOpen: boolean;
  dialogModelIsOpen: boolean;
};

interface ICarsProviderProps {
  children: ReactNode
}

export const Dialogscontext = createContext({} as DialogscontextData);

export function DialogsProvider({ children }: ICarsProviderProps) {
  const [dialogCarIsOpen, setDialogCarIsOpen] = useState(false)
  const [dialogBrandIsOpen, setDialogBrandIsOpen] = useState(false)
  const [dialogModelIsOpen, setDialogModelIsOpen] = useState(false)

  function handleSetDialogBrandIsOpen(value = false) {
    setDialogBrandIsOpen(value)
  }

  function handleSetDialogModelIsOpen(value = false) {
    setDialogModelIsOpen(value)
  }

  function handleSetDialogCarIsOpen(value = false) {
    setDialogCarIsOpen(value)
  }

  return (
    <Dialogscontext.Provider value={{ dialogCarIsOpen, dialogBrandIsOpen, dialogModelIsOpen, handleSetDialogBrandIsOpen, handleSetDialogModelIsOpen, handleSetDialogCarIsOpen }}>
      {children}
    </Dialogscontext.Provider>
  )

}

export const useDialogs = () => useContext(Dialogscontext)


