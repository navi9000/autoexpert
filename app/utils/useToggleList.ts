export const useToggleList = (arr: unknown[]) => {
  const values = ref(Array.from({ length: arr.length }, () => false))

  const toggle = (index: number) => {
    values.value[index] = !values.value[index]
  }

  const isOpen = (index: number) => {
    return values.value[index]
  }

  return {
    isOpen,
    toggle,
  }
}
