<template>
  <div
    class="relative w-full md:min-h-[calc(100vh-144px)] flex items-center justify-center overflow-hidden"
  >
    <img
      src="/hero/hero.jpg"
      title="Skoliozės centras INNOVAMED"
      class="absolute w-[100vw] min-w-[calc(100vh*16/9)] h-[calc(100vw*9/16)] min-h-[100vh] max-w-none pointer-events-none object-cover brightness-75"
    />

    <div
      class="relative flex flex-col gap-2 z-10 text-center items-center p-4 w-full max-w-3xl bg-white bg-opacity-70 rounded-2xl shadow-2xl md:p-10 m-4 md:m-16"
    >
      <h1 class="text-2xl md:text-4xl uppercase font-semibold text-sky-800">
        Skoliozės gydymo centras
      </h1>

      <hr class="w-4/5 border-gray-200" />

      <h2 class="text-2xl md:text-4xl font-semibold text-sky-600">INNOVAMED</h2>

      <div class="mt-2 mb-4 flex flex-col gap-2">
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

      <ContactsLink variant="big">
        Registruotis nemokamam testavimui
      </ContactsLink>
    </div>
  </div>
</template>

<script setup>
import ContactsLink from '../elements/ContactsLink.vue'
</script>
