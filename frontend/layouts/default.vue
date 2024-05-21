<template>
  <div class="app-layout">
    <Delimiter>
      Покровская Мария - Спортивный психолог
    </Delimiter>

    <Logo />

    <Header />

    <div class="app-container">
      <slot/>
    </div>

    <Delimiter>
      Sports Psychology Agency Pokrovskaya M.G.
    </Delimiter>

    <Footer />

    <FeedbackForm v-model="openFeedbackForm"/>
  </div>
</template>

<script setup lang="ts">
import { Header, Delimiter, Footer, Logo } from '~/layouts'
import { FeedbackForm } from "~/components";

const openFeedbackForm = ref(false)
</script>
