<template>
  <Modal v-model="open" @close="closeModal" class="feedback-form-component">
    <div class="feedback-form">
      <div class="feedback-form__title">Запись на консультацию</div>

      <div class="feedback-form__description">
        Пожалуйста заполните анкету и запишитесь на конмультацию в ближайщее
        время, с вами свяжуться для уточнения запроса.
      </div>

      <div class="feedback-form__container">
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

        <GridContainer :col-count="3">
          <GridCol :col-span="1">
            <SelectMenu v-model="model.day" :options="days">
              <template #label>День</template>
            </SelectMenu>
          </GridCol>

          <GridCol :col-span="1">
            <SelectMenu v-model="model.month" :options="month">
              <template #label>Месяц</template>
            </SelectMenu>
          </GridCol>

          <GridCol :col-span="1">
            <SelectMenu v-model="model.year" :options="year">
              <template #label>Год</template>
            </SelectMenu>
          </GridCol>
        </GridContainer>

        <GridContainer :col-count="2">
          <GridCol :col-span="1">
            <SelectMenu v-model="model.kindSport" :options="kindSport">
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
            <PTextarea
              v-model="model.question"
              placeholder="Коротко о проблеме которая вас беспокоит"
            >
              <template #label>Предварительный запрос/вопрос</template>
            </PTextarea>
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
import { defineModel, defineEmits } from "vue";
import {
  Modal,
  Button,
  Input,
  GridContainer,
  GridCol,
  PTextarea,
  SelectMenu,
} from "~/shared";
import { useFeedbackFormController } from "~/components/feedback-form/lib";

const { model, open, sendForm, closeModal } = useFeedbackFormController();

const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const month = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const year = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const kindSport = ["1", "2"];
const discharge = ["2", "3"];
</script>
