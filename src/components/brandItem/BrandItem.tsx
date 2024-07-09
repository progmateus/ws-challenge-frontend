"use client";
import styles from "./styles.module.css";

export interface IBrand {
  id: string;
  nome: string;
}

interface IProps {
  brand: IBrand
}

export function BrandItem({ brand }: IProps) {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <svg xmlns="http://www.w3.org/2000/svg" width="4rem" height="4rem" viewBox="0 0 24 24"><path fill="#212121" d="M24 12c0 3.31-1.34 6.31-3.5 8.5l-1.08-1.08c1.9-1.92 3.08-4.52 3.08-7.42c0-2.89-1.18-5.5-3.08-7.42L20.5 3.5C22.66 5.69 24 8.69 24 12m-4-2.4V8h-3.2c-.88 0-1.6.72-1.6 1.6v1.6a1.6 1.6 0 0 0 1.6 1.6h1.6v1.6h-3.2V16h3.2c.88 0 1.6-.72 1.6-1.6v-1.6a1.6 1.6 0 0 0-1.6-1.6h-1.6V9.6zM8.42 6c1.05-.63 2.27-1 3.58-1s2.53.37 3.58 1h3.11C17.05 4.16 14.66 3 12 3S6.95 4.16 5.31 6zm4.78 6c.64 0 1.2.56 1.2 1.2v1.2a1.6 1.6 0 0 1-1.6 1.6H9.6V8h3.2a1.6 1.6 0 0 1 1.6 1.6v1.2c0 .64-.56 1.2-1.2 1.2m-.4.8h-1.6v1.6h1.6zm0-3.2h-1.6v1.6h1.6zM4.58 4.58L3.5 3.5C1.34 5.69 0 8.69 0 12s1.34 6.31 3.5 8.5l1.08-1.08C2.68 17.5 1.5 14.9 1.5 12c0-2.89 1.18-5.5 3.08-7.42M7.2 16v-3.2H5.6V16H4V9.6A1.6 1.6 0 0 1 5.6 8h1.6c.88 0 1.6.72 1.6 1.6V16zm0-4.8V9.6H5.6v1.6zm8.38 6.8c-1.05.63-2.27 1-3.58 1a6.93 6.93 0 0 1-3.58-1H5.31c1.64 1.84 4.03 3 6.69 3s5.05-1.16 6.69-3z" /></svg>
      </div>
      <h2> {brand.nome} </h2>
    </div>
  );
}