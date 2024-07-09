import { IBrand } from "@/components/brandItem/BrandItem";
import { service } from "./request";

export function GetBrands(params?: string) {
  return service({
    url: '/brands/',
    method: 'get',
    params: {
      params
    }
  })
}

export function CreateBrand(data: Omit<IBrand, "id">) {
  return service({
    url: '/brands/',
    method: 'post',
    data
  })
}