<template>
  <Teleport to="body">
    <div class="p-modal" :class="`p-modal-${props.class}`">
      <div class="p-modal__container" :class="`p-modal-${props.class}__container`">
          <div class="p-modal__wrapper" :class="`p-modal-${props.class}__wrapper`">
            <div @click="closeModal" class="p-modal__close"></div>
            <div class="p-modal__content">
              <div class="p-modal__content-head"  v-if="$slots.title">
                <div class="title">
                  <slot name="title" />
                </div>
              </div>
              <div class="p-modal__content-body">
                <slot name="body"/>
              </div>
            </div>
          </div>
        </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import {def} from "@vue/shared";

const emit = defineEmits(["close"]);
interface Props {
  class?: string,
}
const props = defineProps<Props>()

function closeModal() {
  emit("close");
}
</script>

<style lang="scss">
@import "pModal";
</style>