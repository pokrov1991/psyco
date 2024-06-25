import { ref } from 'vue'
import { TFeedbackFormModel } from './TFeedbackFormModel'
import emailjs from '@emailjs/browser'

const model = ref<TFeedbackFormModel>(new TFeedbackFormModel())
const open = ref(false)

export const useFeedbackFormController = () => {
  const toast = useToast()

  function resetAccountModel() {
    model.value = Object.assign(TFeedbackFormModel)
  }

  function sendForm() {
    const templateParams = {
      date: model.value.date,
      discharge: model.value.discharge,
      firstName: model.value.firstName,
      lastName: model.value.lastName,
      phone: model.value.phone,
      question: model.value.question,
      sport: model.value.sport,
      telegram: model.value.telegram
    }
    
    emailjs
      .send('service_9ae9m6k', 'template_1u8zw9e', templateParams, {
        publicKey: 'Xls3LnOad9lOo_VLJ',
      })
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          toast.add({ title: 'Спасибо! Ваш запрос получен. Я обязательно с вами свяжусь.' })
        },
        (err) => {
          console.log('FAILED...', err);
          toast.add({ title: 'Ошибка! Попробуйте снова или позвоните мне.' })
        },
      )

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
