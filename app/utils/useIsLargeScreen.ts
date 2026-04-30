import { ref, onMounted, onUnmounted } from "vue"

export default function useIsLargeScreen(breakpoint = 900) {
  const result = ref<boolean | null>(null)

  const handleResize = () => {
    result.value = window.innerWidth >= breakpoint
  }

  onMounted(() => {
    window.addEventListener("resize", handleResize)
    handleResize()
  })

  onUnmounted(() => {
    window.removeEventListener("resize", handleResize)
  })

  return result
}
