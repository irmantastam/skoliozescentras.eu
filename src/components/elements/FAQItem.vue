<template>
  <div class="border border-sky-200 rounded-lg shadow-md overflow-hidden">
    <button
      @click="isOpen = !isOpen"
      class="w-full text-left p-4 flex justify-between items-center bg-sky-50 hover:bg-sky-100 transition duration-150"
    >
      <h3 class="text-base font-semibold text-sky-900">{{ question }}</h3>

      <svg
        :class="{ 'rotate-180': isOpen }"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-chevron-down text-sky-600 transition-transform duration-300"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
    </button>

    <transition
      name="expand"
      @enter="enter"
      @leave="leave"
    >
      <div
        v-if="isOpen"
        class="bg-white border-t border-sky-200"
      >
        <p class="p-4 text-sky-800 leading-relaxed">{{ answer }}</p>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
})

const isOpen = ref(false)

const enter = (el) => {
  el.style.height = 'auto'
  const height = getComputedStyle(el).height
  el.style.height = '0'
  requestAnimationFrame(() => {
    el.style.height = height
  })
}

const leave = (el) => {
  requestAnimationFrame(() => {
    el.style.height = '0'
  })
}
</script>

<style scoped>
.expand-enter-active,
.expand-leave-active {
  transition: height 0.3s ease;
  overflow: hidden;
}
</style>
