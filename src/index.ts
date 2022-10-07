const isWebview = (userAgent: string) => {
  return /webview|wv|ip((?!.*Safari)|(?=.*like Safari))/i.test(userAgent)
}

export { isWebview }
