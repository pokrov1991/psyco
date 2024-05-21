import { ref } from 'vue'
import { TFeedbackFormModel } from './TFeedbackFormModel'

const model = ref<TFeedbackFormModel>(new TFeedbackFormModel())

export const useFeedbackFormController = () => {
  async function resetAccountModel() {
    model.value = Object.assign(TFeedbackFormModel)
  }

  async function sendForm() {
    console.log('Ура спасибо досвидания')
    await resetAccountModel()
  }

  return {
    sendForm,
    resetAccountModel,
    model,
  }
}
