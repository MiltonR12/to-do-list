import * as Yup from 'yup'

export const schameForm = Yup.object().shape({
  title: Yup.string().required("Se requiere este espacio").trim(),
  description: Yup.string().required("Se requiere la descripcion").trim()
})