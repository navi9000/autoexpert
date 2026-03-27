import { ref, onMounted, onUnmounted } from "vue"

export default function useIsLargeScreen(breakpoint = 900) {
  const result = ref(
    window?.innerWidth ? window.innerWidth >= breakpoint : null,
  )

  const handleResize = () => {
    result.value = window.innerWidth >= breakpoint
  }

  onMounted(() => {
    window.addEventListener("resize", handleResize)
  })

  onUnmounted(() => {
    window.removeEventListener("resize", handleResize)
  })

  return result
}
