<template>
  <Modal v-model="open" @close="closeModal" class="feedback-form-component">
    <div class="feedback-form">
      <div class="feedback-form__title">Запись на консультацию</div>

      <div class="feedback-form__description">
        Пожалуйста заполните анкету и запишитесь на конмультацию в ближайщее
        время, с вами свяжуться для уточнения запроса.
      </div>

      <div class="feedback-form__container">
        <GridContainer :col-count="1">
          <GridCol :col-span="1">
            <UPopover :popper="{ placement: 'bottom-start' }">
              <UButton 
                class="feedback-form__date-button" 
                icon="i-heroicons-calendar-days-20-solid" 
                :label="format(model.date, 'd MMMM, yyy', { locale: ru })"
              />
              <template #panel="{ close }">
                <DatePicker v-model="model.date" is-required @close="close" />
              </template>
            </UPopover>
          </GridCol>
        </GridContainer>
        
        <GridContainer :col-count="2">
          <GridCol :col-span="1">
            <Input v-model="model.firstName" placeholder="Ваше имя">
              <template #label>Имя</template>

              <template #icon>
                <Icon name="prime:angle-right" color="#d1232a" size="46" />
              </template>
            </Input>
          </GridCol>

          <GridCol :col-span="1">
            <Input v-model="model.lastName" placeholder="Ваша Фамилия">
              <template #label>Фамилия</template>

              <template #icon>
                <Icon name="prime:angle-right" color="#d1232a" size="46" />
              </template>
            </Input>
          </GridCol>
        </GridContainer>

        <GridContainer :col-count="2">
          <GridCol :col-span="1">
            <SelectMenu v-model="model.sport" :options="sport">
              <template #label>Вид спорта</template>
            </SelectMenu>
          </GridCol>

          <GridCol :col-span="1">
            <SelectMenu v-model="model.discharge" :options="discharge">
              <template #label>Разряд</template>
            </SelectMenu>
          </GridCol>

          <GridCol :col-span="1">
            <Input v-model="model.phone" placeholder="Телефон">
              <template #label>Телефон</template>

              <template #icon>
                <Icon name="prime:angle-right" color="#d1232a" size="46" />
              </template>
            </Input>
          </GridCol>

          <GridCol :col-span="1">
            <Input v-model="model.telegram" placeholder="@user">
              <template #label>Telegram</template>

              <template #icon>
                <Icon name="prime:angle-right" color="#d1232a" size="46" />
              </template>
            </Input>
          </GridCol>

          <GridCol :col-span="2">
            <Textarea
              v-model="model.question"
              placeholder="Коротко о проблеме которая вас беспокоит"
            >
              <template #label>Предварительный запрос/вопрос</template>
            </Textarea>
          </GridCol>
        </GridContainer>
      </div>
      <div class="feedback-form__action">
        <Button @click="sendForm"> Записаться » </Button>
      </div>
    </div>
  </Modal>
</template>

<script setup lang="ts">
import { format } from 'date-fns-tz';
import ru from 'date-fns/locale/ru'
import {
  Modal,
  Button,
  Input,
  GridContainer,
  GridCol,
  Textarea,
  SelectMenu,
  DatePicker
} from "~/shared";
import { useFeedbackFormController } from "~/components/feedback-form/lib";

const { model, open, sendForm, closeModal } = useFeedbackFormController();
const emit = defineEmits(['more']);
model.value.date = ref(new Date());

const sport = ["Волейбол", "Футбол"];
const discharge = ["1", "2", "3"];
</script>
