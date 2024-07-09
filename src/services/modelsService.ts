import { ICar } from "@/components/carItem/carItem";
import { service } from "./request";
import { IModel } from "@/components/modelItem/ModelItem";

export function GetModels(params?: string) {
  return service({
    url: '/models/',
    method: 'get',
    params: {
      params
    }
  })
}

export function CreateModel(data: Omit<IModel, "marcaEntity" | "id">) {
  return service({
    url: '/models/',
    method: 'post',
    data
  })
}