import { ref, onMounted, onUnmounted } from "vue"

export default function useScreenWidth() {
  const screenWidth = ref(window?.innerWidth)

  const handleResize = () => {
    screenWidth.value = window.innerWidth
  }

  onMounted(() => {
    window.addEventListener("resize", handleResize)
  })

  onUnmounted(() => {
    window.removeEventListener("resize", handleResize)
  })

  return screenWidth
}
