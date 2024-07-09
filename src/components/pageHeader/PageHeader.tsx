"use client";
import styles from "./styles.module.css";
import { TabItem } from "../tabItem.tsx/tabItem";
import { Input } from "../form/Input/Input";
import { useSearch } from "@/contexts/SearchContext";
import { CarDialog } from "../dialogs/CarDialog/CarDialog";
import { Button } from "../button/Button";
import { useTab } from "@/contexts/TabContext";
import { ModelDialog } from "../dialogs/ModelDialog/ModelDialog";
import { BrandDialog } from "../dialogs/BrandDialog/BrandDialog";
import { useDialogs } from "@/contexts/DialogsContext";


export default function PageHeader() {
  const { selectedTab } = useTab();
  const { search, handleChangeSearch } = useSearch();
  const { dialogBrandIsOpen, dialogCarIsOpen, dialogModelIsOpen, handleSetDialogBrandIsOpen, handleSetDialogCarIsOpen, handleSetDialogModelIsOpen } = useDialogs()

  const handleClickCreate = () => {
    if (selectedTab.name === "cars") {
      handleSetDialogCarIsOpen(true)
    } else if (selectedTab.name === "models") {
      handleSetDialogModelIsOpen(true)
    } else {
      handleSetDialogBrandIsOpen(true)
    }
  }

  return (
    <main className={styles.main}>
      <div>
        <div className={styles.tabs}>
          <TabItem tab={{ name: "cars", label: "Carros" }} />
          <TabItem tab={{ name: "models", label: "Modelos" }} />
          <TabItem tab={{ name: "brands", label: "Marcas" }} />
        </div>
        <div className={styles['search-container']}>
          <div>
            <h1> Buscar </h1>
            <div className={styles.input}>
              <Input
                name="search"
                placeholder="Buscar..."
                value={search}
                onChange={(e) => handleChangeSearch(e.target.value)}
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 24 24"><path fill="#212121" d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14" /></svg>
                }
              />
              <div className={styles['continer-button']}>
                <Button title="Criar" onClick={handleClickCreate} />
              </div>
            </div>
          </div>
        </div>

        <CarDialog isOpen={dialogCarIsOpen} handleClose={() => handleSetDialogCarIsOpen(false)} />
        <ModelDialog isOpen={dialogModelIsOpen} handleClose={() => handleSetDialogModelIsOpen(false)} />
        <BrandDialog isOpen={dialogBrandIsOpen} handleClose={() => handleSetDialogBrandIsOpen(false)} />
      </div>
    </main>
  );
}
