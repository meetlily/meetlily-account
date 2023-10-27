import { ChangeEvent } from "react"
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form"

export type FormData = {
  [fieldName: string]: string | number
}
export type FormField = {
  name: string
  label: string
  type: string
  value?: any
  placeholder?: string
  required?: boolean
  displayCondition?: string
  options?: string[]
  fields?: FormField[]
}

export type FormFieldGroup = {
  label: string
  group: string
  fields: FormField[]
}
export type ItemData = {
  id: string
  name: string
  value: string | number | boolean | undefined | any
  type: string
  label: string
}
export type InputProps = {
  id: string
  label: string
  name?: string
  type?: string
  helperText?: string
  placeholder?: string
  iconName?: string | "file"
  disabled?: boolean
  formatPrice?: boolean
  required?: boolean
  rounded?: boolean
  transparent?: boolean
  borderLine?: boolean
  value?: any
  register: UseFormRegister<FieldValues>
  errors: FieldErrors
  onChange?: (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
  displayCondition?: string
  checked?: boolean
  className?: string
}
export default FormField
