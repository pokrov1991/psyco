import { ref, type Ref, computed, onMounted, onUnmounted } from 'vue'

interface SliderOptions {
  containerRef: Ref<HTMLElement | null>
}

export const useSliderSize = ({ containerRef }: SliderOptions) => {
  const sliderWidth = ref<number | null>(null)

  const styles = computed(() => {
    if (containerRef.value) {
      return containerRef.value.clientWidth + (window.innerWidth - containerRef.value.clientWidth) / 2
    }
    return null
  })

  const updateSliderWidth = () => {
    if (containerRef.value) {
      sliderWidth.value = styles.value
      containerRef.value.style.width = `${styles.value}px`
    }
  }

  onMounted(() => {
    updateSliderWidth()
    window.addEventListener('resize', updateSliderWidth)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', updateSliderWidth)
  })

  return {
    sliderWidth
  }
}