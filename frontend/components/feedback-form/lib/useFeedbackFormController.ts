import { ref } from 'vue'
import { TFeedbackFormModel } from './TFeedbackFormModel'

const model = ref<TFeedbackFormModel>(new TFeedbackFormModel())

const open = ref(false)

export const useFeedbackFormController = () => {
  function resetAccountModel() {
    model.value = Object.assign(TFeedbackFormModel)
  }

  function sendForm() {
    console.log('Ура спасибо досвидания')
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
