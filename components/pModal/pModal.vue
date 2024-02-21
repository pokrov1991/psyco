<template>
  <Teleport to="body">
    <div class="p-modal">
      <div class="p-modal__container">
          <div class="p-modal__wrapper">
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
const emit = defineEmits(["close"]);

function closeModal() {
  emit("close");
}
</script>

<style lang="scss">
@import "pModal";
</style>