export const genPassword = (len?: number): string => {
  var password = ''

  var symbols =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!№;%:?*()_+='

  for (var i = 0; i < (len ?? 10); i++) {
    password += symbols.charAt(Math.floor(Math.random() * symbols.length))
  }
  return password
}
