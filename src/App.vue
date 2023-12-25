<template>
  <basic-layout :class="wrapperClassList">
    <template #aside>
      <sl-aside :socials="pageConfig.socials" :resume-link="pageConfig.resumeLink">
        <div v-html="pageConfig.shortDesc" />
      </sl-aside>
    </template>
    <sl-main>
      <div v-html="pageConfig.mainText" />
    </sl-main>

    <resume-section>
      <resume-item v-for="(experience, i) in pageConfig.resume" :key="i">
        <template #dates> {{ experience.from }} &mdash; {{ experience.to }} </template>
        <template #position> {{ experience.occupation }} </template>
        <template #company> {{ experience.company }} </template>
        <template #description>
          <div v-html="experience.description" />
        </template>
        <template #tags></template>
      </resume-item>
    </resume-section>
  </basic-layout>
  <div ref="blob" class="blob" />
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { wrapperClassList } from '@/composables/useLayoutSettings'
import SlAside from './components/SlAside.vue'
import SlMain from './components/SlMain.vue'
import BasicLayout from './components/BasicLayout.vue'
import ResumeSection from './components/ResumeSection.vue'
import ResumeItem from './components/ResumeItem.vue'
import { pageConfig } from '@/content'

export default defineComponent({
  name: 'App',
  components: {
    SlAside,
    SlMain,
    BasicLayout,
    ResumeSection,
    ResumeItem
  },
  setup() {
    const blob = ref<HTMLDivElement>()
    let currentBg = 0
    const bgsAmount = 12

    onMounted(() => {
      setTimeout(() => {
        document.body.style.transition = 'background-color 4s'
      }, 10)
      setInterval(() => {
        currentBg++
        document.body.style.backgroundColor = `var(--color-bg-${currentBg % bgsAmount})`
      }, 16000)

      document.addEventListener('mousemove', (e) => {
        if (!blob.value) return
        blob.value.style.top = `${e.y}px`
        blob.value.style.left = `${e.x}px`
      })
    })

    return {
      wrapperClassList,
      blob,
      pageConfig
    }
  }
})
</script>

<style scoped></style>
@/config @/content
