import { ICar } from "@/components/carItem/carItem";
import { service } from "./request";

export function GetCars(params?: string) {
  return service({
    url: '/cars/',
    method: 'get',
    params: {
      params
    }
  })
}

export function CreateCar(data: Omit<ICar, "modeloEntity" | "id">) {
  return service({
    url: '/cars/',
    method: 'post',
    data
  })
}