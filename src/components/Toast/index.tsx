import { toast } from 'materialize-css'

const Toast = (text: string, classes?: string) =>
  toast({
    html: text,
    classes: classes ?? '',
  })

export default Toast
