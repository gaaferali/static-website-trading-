export type ContactFormData = {
  name: string
  email: string
  request: string
  service: string
}

export type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>
