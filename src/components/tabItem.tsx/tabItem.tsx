"use client";
import styles from "./styles.module.css";
import { useTab } from "@/contexts/TabContext";
import Link from "next/link";

export interface ITab {
  name: string;
  label: string
}

interface IProps {
  tab: ITab
}

export function TabItem({ tab }: IProps) {
  const { selectedTab, handleChangeTab } = useTab()
  return (
    <Link href={`/${tab.name}`}>
      <div
        className={selectedTab?.name !== tab.name ? styles.tab : styles.selectedTab}
        onClick={() => handleChangeTab(tab)}
      >
        {tab.label}
      </div>
    </Link>
  );
}
