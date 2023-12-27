<template>
  <footer class="skill-set">
    <span v-for="(skill, i) in skills" :key="i" v-text="skill" class="skill-set-item" />
  </footer>
</template>

<script lang="ts">
import type { Skill } from '@/content/skill'
import { defineComponent, type PropType } from 'vue'

export default defineComponent({
  name: 'SkillSet',
  props: {
    skills: {
      type: Array as PropType<Array<Skill>>,
      default: () => []
    }
  }
})
</script>

<style lang="scss">
.skill-set {
  display: flex;
  width: 100%;
  flex-flow: row wrap;
  line-height: 1;
  align-items: flex-start;
  justify-content: flex-start;
  align-content: flex-start;
  gap: 5px;
  margin-top: 10px;
  font-size: 0.8rem;

  &-item {
    margin: 0;
    display: inline-block;
    padding: 3px 6px;
    background-color: #fff1;
    border-radius: 3px;
    
    &::before {
      display: none;
    }
  }
}
</style>