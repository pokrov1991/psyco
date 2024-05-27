import { computed, nextTick, onMounted, onUnmounted, ref } from 'vue'

export const breakpoints = {
  xxl: 1980,
  xl: 1400,
  lg: 1200,
  md: 992,
  sm: 768,
  xs: 567
}

type TBreakpointKey = keyof typeof breakpoints
type TBreakpointChange = { from: TBreakpointKey, to: TBreakpointKey }
interface IResizeEvent {
  sourceEvent: Event,
  screenWidth: number,
  currentBreakpoint: TBreakpointKey,
  direction: 'up' | 'down',
  breakpointChange: TBreakpointChange | false
}
type TResizeHook = (e: IResizeEvent) => void

export function useResponsive () {
  const screenWidth = ref<number>(window.innerWidth)
  const currentBreakpoint = computed<TBreakpointKey>(() => {
    for (const [key, value] of Object.entries(breakpoints)) {
      if (screenWidth.value > value) return key as TBreakpointKey
    }
    return 'xs'
  })

  const isBreakpointUp = (breakpointKey: TBreakpointKey) => screenWidth.value >= breakpoints[breakpointKey]
  const isBreakpointDown = (breakpointKey: TBreakpointKey) => screenWidth.value < breakpoints[breakpointKey]

  const resizeListeners: Array<TResizeHook> = []
  const onResize = (hook: TResizeHook) => {
    resizeListeners.push(hook)
  }

  const breakpointChangeListeners: Array<TResizeHook> = []
  const onBreakpointChange = (hook: TResizeHook) => { breakpointChangeListeners.push(hook) }

  const breakpointUpListeners: Array<[TBreakpointKey, TResizeHook]> = []
  const onBreakpointUp = (breakpointKey: TBreakpointKey, hook: TResizeHook) => { breakpointUpListeners.push([breakpointKey, hook]) }

  const breakpointDownListeners: Array<[TBreakpointKey, TResizeHook]> = []
  const onBreakpointDown = (breakpointKey: TBreakpointKey, hook: TResizeHook) => { breakpointDownListeners.push([breakpointKey, hook]) }

  const updateScreenWidthListener = (sourceEvent: Event) => {
    const direction = screenWidth.value < window.innerWidth ? 'up' : 'down'
    const startBreakpoint: TBreakpointKey = currentBreakpoint.value
    screenWidth.value = window.innerWidth

    nextTick().then(() => {
      const nextBreakpoint: TBreakpointKey = currentBreakpoint.value

      const resizeEvent: IResizeEvent = {
        sourceEvent,
        screenWidth: screenWidth.value,
        currentBreakpoint: currentBreakpoint.value,
        direction,
        breakpointChange: startBreakpoint !== nextBreakpoint && { from: startBreakpoint, to: nextBreakpoint }
      }
      resizeListeners.forEach(hook => hook(resizeEvent))

      if (resizeEvent.breakpointChange) {
        breakpointChangeListeners.forEach(hook => hook(resizeEvent))
        if (resizeEvent.direction === 'up') {
          breakpointUpListeners.forEach(([key, hook]) => { key === nextBreakpoint && hook(resizeEvent) })
        } else if (resizeEvent.direction === 'down') {
          breakpointDownListeners.forEach(([key, hook]) => { key === startBreakpoint && hook(resizeEvent) })
        }
      }
    })
  }

  onMounted(() => {
    updateScreenWidthListener(new Event('resize'))
    window.addEventListener('resize', updateScreenWidthListener)
  })
  onUnmounted(() => { window.removeEventListener('resize', updateScreenWidthListener) })

  return {
    breakpoints,
    screenWidth,
    currentBreakpoint,
    isBreakpointUp,
    isBreakpointDown,
    onResize,
    onBreakpointChange,
    onBreakpointUp,
    onBreakpointDown
  }
}
