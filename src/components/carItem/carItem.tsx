"use client";
import styles from "./styles.module.css";

export interface ICar {
  id: string;
  modeloEntity: {
    nome: string;
  }
  modelo_id: string;
  ano: string;
  combustivel: string;
  num_portas: string;
  cor: string;
}

interface IProps {
  car: ICar
}

export function CarItem({ car }: IProps) {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <svg xmlns="http://www.w3.org/2000/svg" width="4rem" height="4rem" viewBox="0 0 56 56"><path fill="currentColor" d="M3.379 49.738h2.766c1.734 0 3.093-1.336 3.093-3.07v-3.937c5.204.328 12.727.562 18.75.562c6.047 0 13.57-.234 18.774-.562v3.937c0 1.734 1.336 3.07 3.093 3.07h2.766c1.758 0 3.117-1.336 3.117-3.07V33.145c0-3.938-.797-6.165-2.976-8.977l-1.969-2.555c-.867-4.218-2.414-8.648-3.234-10.382c-1.243-2.649-3.68-4.22-6.797-4.641c-1.57-.188-6.703-.328-12.774-.328c-6.046 0-11.18.164-12.75.328c-3.117.375-5.554 1.992-6.796 4.64c-.82 1.735-2.368 6.165-3.235 10.383l-1.969 2.555C1.058 26.981.262 29.207.262 33.145v13.523c0 1.734 1.36 3.07 3.117 3.07m6.563-30.07c.562-2.578 1.687-5.93 2.46-7.29c.633-1.1 1.313-1.57 2.579-1.733c1.78-.258 5.765-.399 13.007-.399c7.266 0 11.25.094 13.032.399c1.242.187 1.921.632 2.578 1.734c.797 1.336 1.851 4.71 2.46 7.289c.212.867-.14 1.195-1.054 1.125c-3.89-.234-8.531-.492-17.016-.492c-8.46 0-13.101.258-16.992.492c-.914.07-1.242-.258-1.055-1.125m.96 17.555c-2.226 0-3.89-1.688-3.89-3.891c0-2.227 1.664-3.89 3.89-3.89c2.227 0 3.891 1.663 3.891 3.89c0 2.203-1.664 3.89-3.89 3.89m34.196 0c-2.227 0-3.89-1.688-3.89-3.891c0-2.227 1.663-3.89 3.89-3.89c2.203 0 3.89 1.663 3.89 3.89c0 2.203-1.687 3.89-3.89 3.89m-23.32-1.078c-1.641 0-2.79-1.172-2.79-2.813c0-1.664 1.149-2.812 2.79-2.812h12.445c1.64 0 2.789 1.148 2.789 2.812c0 1.64-1.149 2.813-2.79 2.813Z" /></svg>
      </div>
      <div>
        <div className={styles.descriptions}>
          <span > Modelo: </span>
          <span className={styles.attribute}> {car.modeloEntity?.nome} </span>
        </div>
        <div className={styles.descriptions}>
          <span> Ano: </span>
          <span className={styles.attribute}> {car.ano} </span>
        </div>
        <div className={styles.descriptions}>
          <span> Combustível: </span>
          <span className={styles.attribute}> {car.combustivel} </span>
        </div>
        <div className={styles.descriptions}>
          <span> Qtd Portas: </span>
          <span className={styles.attribute}> {car.num_portas} </span>
        </div>
        <div className={styles.descriptions}>
          <span> Cor: </span>
          <span className={styles.attribute}> {car.cor} </span>
        </div>
      </div>
    </div>
  );
}
