<template>
  <div
    class="relative w-full min-h-[calc(100vh-72px)] md:min-h-[calc(100vh-128px)] flex flex-col items-center justify-center overflow-hidden p-4 md:p-8 2xl:p-16"
  >
    <img
      v-for="(img, index) in imgSources"
      :key="img"
      :src="img"
      title="Skoliozės centras INNOVAMED"
      class="absolute w-[100vw] h-full md:min-w-[calc(100vh*16/9)] md:h-[calc(100vw*9/16)] md:min-h-[100vh] max-w-none pointer-events-none object-cover transition-opacity duration-1000"
      :class="{
        'opacity-100': index === currentImageIndex,
        'opacity-0': index !== currentImageIndex,
      }"
    />

    <div class="absolute inset-0 bg-sky-800 opacity-30"></div>

    <div
      class="relative flex flex-col gap-2 z-10 text-center items-center p-4 w-full max-w-3xl bg-slate-100 bg-opacity-55 rounded-2xl shadow-xl md:p-10 mt-auto"
    >
      <h1 class="text-2xl md:text-4xl uppercase font-extrabold text-sky-900">
        Skoliozės gydymo centras
      </h1>

      <hr class="w-4/5 border-gray-200" />

      <p class="text-2xl md:text-4xl font-extrabold text-sky-600">INNOVAMED</p>

      <div class="mt-2 mb-4 flex flex-col gap-2 font-medium">
        <p>
          Kviečiame pasinaudoti unikalia galimybe atlikti nemokamą skoliozės
          testavimą mūsų centre. Ankstyva diagnostika yra itin svarbi sėkmingam
          gydymui.
        </p>

        <p>
          Mūsų specialistai atidžiai įvertins jūsų laikyseną ir stuburo būklę,
          suteiks pirminę konsultaciją ir atsakys į visus rūpimus klausimus.
        </p>
      </div>

      <CtaLink variant="big">Registruokis 5 min. nemokamai apžiūrai</CtaLink>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import CtaLink from '../elements/CtaLink.vue'

const imgSources = ref([
  '/images/hero/hero.webp',
  '/images/hero/hero2.webp',
  '/images/hero/hero3.webp',
  '/images/hero/hero4.webp',
  '/images/hero/hero5.webp',
  '/images/hero/hero6.webp',
  '/images/hero/hero7.webp',
  '/images/hero/hero8.webp',
  '/images/hero/hero9.webp',
  '/images/hero/hero10.webp',
  '/images/hero/hero11.webp',
  '/images/hero/hero12.webp',
])

const currentImageIndex = ref(0)

let intervalId = null

const startSlider = () => {
  intervalId = setInterval(() => {
    currentImageIndex.value =
      (currentImageIndex.value + 1) % imgSources.value.length
  }, 4000) // Change image every 4 seconds.
}

onMounted(() => {
  startSlider()
})

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId)
  }
})
</script>
