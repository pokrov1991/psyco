import { ref } from 'vue'
import { TFeedbackFormModel } from './TFeedbackFormModel'

const model = ref<TFeedbackFormModel>(new TFeedbackFormModel())
const open = ref(false)

export const useFeedbackFormController = () => {
  const toast = useToast()

  function resetAccountModel() {
    model.value = Object.assign(TFeedbackFormModel)
  }

  function sendForm() {
    console.log(model.value)
    toast.add({ title: 'Спасибо! Ваш запрос получен. Я обязательно с вами свяжусь.' })

    resetAccountModel()
    closeModal()
  }

  function openModal () {
    open.value = true
  }

  function closeModal () {
    open.value = false
  }

  return {
    sendForm,
    resetAccountModel,
    openModal,
    closeModal,
    open,
    model,
  }
}
