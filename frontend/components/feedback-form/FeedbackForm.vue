<template>
  <Modal v-model="isClose">
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
                <div class="footer-content__subscribe-action">
                  <Icon name="prime:angle-right" color="#d1232a" size="46" />
                </div>
              </template>
            </Input>
          </GridCol>

          <GridCol :col-span="1">
            <Input v-model="model.lastName" placeholder="Ваша Фамилия">
              <template #label>Фамилия</template>

              <template #icon>
                <div class="footer-content__subscribe-action">
                  <Icon name="prime:angle-right" color="#d1232a" size="46" />
                </div>
              </template>
            </Input>
          </GridCol>
        </GridContainer>

        <GridContainer :col-count="3">
          <GridCol :col-span="1">
            <Input v-model="model.day" placeholder="День">
              <template #label>День</template>

              <template #icon>
                <div class="footer-content__subscribe-action">
                  <Icon name="prime:angle-right" color="#d1232a" size="46" />
                </div>
              </template>
            </Input>
          </GridCol>

          <GridCol :col-span="1">
            <Input v-model="model.month" placeholder="Месяц">
              <template #label>Месяц</template>

              <template #icon>
                <div class="footer-content__subscribe-action">
                  <Icon name="prime:angle-right" color="#d1232a" size="46" />
                </div>
              </template>
            </Input>
          </GridCol>

          <GridCol :col-span="1">
            <Input v-model="model.year" placeholder="Год">
              <template #label>Год</template>

              <template #icon>
                <div class="footer-content__subscribe-action">
                  <Icon name="prime:angle-right" color="#d1232a" size="46" />
                </div>
              </template>
            </Input>
          </GridCol>
        </GridContainer>

        <GridContainer :col-count="2">
          <GridCol :col-span="1">
            <Input
              v-model="model.kindSport"
              placeholder="Которым вы занимаетесь"
            >
              <template #label>Вид спорта</template>

              <template #icon>
                <div class="footer-content__subscribe-action">
                  <Icon name="prime:angle-right" color="#d1232a" size="46" />
                </div>
              </template>
            </Input>
          </GridCol>

          <GridCol :col-span="1">
            <Input v-model="model.discharge" placeholder="По этому виду спорта">
              <template #label>Разряд</template>

              <template #icon>
                <div class="footer-content__subscribe-action">
                  <Icon name="prime:angle-right" color="#d1232a" size="46" />
                </div>
              </template>
            </Input>
          </GridCol>

          <GridCol :col-span="1">
            <Input v-model="model.phone" placeholder="Телефон">
              <template #label>Телефон</template>

              <template #icon>
                <div class="footer-content__subscribe-action">
                  <Icon name="prime:angle-right" color="#d1232a" size="46" />
                </div>
              </template>
            </Input>
          </GridCol>

          <GridCol :col-span="1">
            <Input v-model="model.telegram" placeholder="@user">
              <template #label>Telegram</template>

              <template #icon>
                <div class="footer-content__subscribe-action">
                  <Icon name="prime:angle-right" color="#d1232a" size="46" />
                </div>
              </template>
            </Input>
          </GridCol>

          <GridCol :col-span="2">
            <Input v-model="model.question" placeholder="Коротко о проблеме которая вас беспокоит">
              <template #label>Предварительный запрос/вопрос</template>

              <template #icon>
                <div class="footer-content__subscribe-action">
                  <Icon name="prime:angle-right" color="#d1232a" size="46" />
                </div>
              </template>
            </Input>
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
import { Modal, Button, Input, GridContainer, GridCol } from "~/shared";
import { useFeedbackFormController } from "~/components/feedback-form/lib";

const { model, sendForm } = useFeedbackFormController();
const isClose = defineModel();
const emit = defineEmits(["confirm"]);

function onClickClose() {
  isClose.value = false;
}

async function onClickSendForm() {
  await sendForm();
  emit("confirm");
}
</script>
