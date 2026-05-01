export const useAssetPath = () => {
  const {
    app: { baseURL },
  } = useRuntimeConfig()

  return (path: string) => {
    if (/^(?:[a-z]+:)?\/\//i.test(path) || path.startsWith("data:")) {
      return path
    }

    return `${baseURL.replace(/\/$/, "")}/${path.replace(/^\//, "")}`
  }
}
