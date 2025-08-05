<template>
  <LayoutPage>
    <h2 class="text-3xl font-semibold text-sky-600 mx-6">
      Schroth skoliozės stovykla
    </h2>

    <div class="p-6 bg-white sm:rounded-lg shadow-sm">
      <h3 class="text-2xl font-semibold text-sky-900 mb-4">Apie stovyklą</h3>
      <p class="text-sky-900 leading-relaxed mb-4">
        Skoliozės stovykla – tai intensyvus grupinis skoliozės gydymas, taikant
        Katharinos Schroth metodikos principus. Ši stovykla skirta pacientams,
        ne tik su idiopatine skolioze, bet ir su padidėjusia kifoze
        (hiperkifoze) ar esant Scheuermanno ligai.
      </p>

      <h4 class="text-xl font-medium text-sky-700 mb-2">
        Skoliozės stovyklos uždaviniai
      </h4>
      <ul class="list-disc list-inside text-gray-700 space-y-2 mb-4">
        <li>Supažindinti pacientus su jų konkretaus skoliozės tipo.</li>
        <li>
          Išmokyti kasdienių padėčių, pritaikytų paciento skoliozės tipą,
          siekiant aktyvios korekcijos visą dieną.
        </li>
        <li>Išmokyti namų pratimų programos.</li>
        <li>
          Stabilizuoti koreguotą laikyseną, pabrėžiant nuolatinį sąmoningos
          laikysenos ir kasdienių padėčių laikymąsi.
        </li>
      </ul>
    </div>

    <section
      class="p-6 bg-white sm:rounded-lg shadow-sm border border-gray-200"
    >
      <h3 class="text-2xl font-semibold text-sky-900 mb-4">
        Stovyklos struktūra
      </h3>
      <ul class="list-disc list-inside text-gray-700 space-y-2 mb-4">
        <li>Stovykla trunka 5 dienas.</li>
        <li>Stovykla dieninė. Nuo 9:00 iki 17:00.</li>
        <li>
          Kiekvieną dieną vyksta 3 valandas trunkantis gydymas, padalintas į dvi
          1,5 val. sesijas.
        </li>
        <li>Tarp sesijų numatytas 1–1,5 val. pertraukos.</li>
        <li>
          Pirmą dieną yra įvertinama paciento laikysena ir yra individualiai
          apmokinami pratimų, remiantis jų skoliozės tipu ir gebėjimais.
        </li>
        <li>
          Stovyklos metu vyks įvairios edukacijos: dailės terapija, zoologijos
          sodas, muziejus ir pan. Bus patikslinta artėjant stovyklos datai.
        </li>
        <li>Stovyklos metu vyks sveikatingumo, fizinio rengimo treniruotės.</li>
        <li>Maitinimas į kainą įskaičiuotas (pietūs ir užkandžiai).</li>
        <li>
          Stovyklos pabaigoje pacientai gauna savo individualią pratimų knygelę
          bei pažymėjimą apie sėkmingą dalyvavimą.
        </li>
        <li>Stovyklos vyks Vilniuje ir Kaune.</li>
      </ul>
    </section>

    <section
      class="p-6 bg-white sm:rounded-lg shadow-sm border border-gray-200"
    >
      <h3 class="text-2xl font-semibold text-sky-900 mb-4">
        Informacija dalyviams
      </h3>
      <ul class="list-disc list-inside text-gray-700 space-y-2 mb-4">
        <li>Stovykloje gali dalyvauti nuo 10 metų ir vyresni.</li>
        <li>Būtina turėti iki 6 mėnesių senumo stuburo rentgeno nuotrauką.</li>
        <li>Dalyvavimas būtinas visos stovyklos laikotarpiu.</li>
        <li>
          Apranga: mergaitėms/moterims rekomenduojama sportinė liemenėlė su
          įprastomis petnešomis, kad gerai matytųsi nugara, berniukams/vyrams –
          be marškinėlių. Plaukai turi būti surišti, kad matytųsi pečiai ir
          nugara.
        </li>
        <li>Korsetuoti pacientai turi korsetą dėvėti kiekvieną treniruotę.</li>
      </ul>
    </section>

    <section class="p-6 bg-white sm:rounded-lg shadow-sm">
      <h3 class="text-2xl font-semibold text-sky-900 mb-4">Registracija</h3>
      <p class="text-sky-900 leading-relaxed mb-2">
        <span class="font-semibold">El. paštas:</span>
        <a
          href="mailto:info@innovamed.lt"
          class="text-sky-800 hover:underline ml-2"
          >info@innovamed.lt</a
        >
      </p>
      <p class="text-sky-900 leading-relaxed">
        <span class="font-semibold">Telefonas:</span>
        <a
          href="tel:+37063038885"
          class="text-sky-800 hover:underline ml-2"
          >+370 630 38885</a
        >
      </p>
    </section>

    <ContactTeaser />
  </LayoutPage>
</template>

<script setup>
import LayoutPage from '../layouts/LayoutPage.vue'
import ContactTeaser from '../components/sections/ContactTeaser.vue'
</script>

<style scoped>
/* No specific custom styles needed, Tailwind handles it well. */
</style>
