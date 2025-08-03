<template>
  <LayoutPage>
    <h2 class="text-3xl font-semibold text-sky-600">ScoliTeam</h2>

    <!-- Introduction -->
    <div class="text-lg flex flex-col gap-4 max-w-4xl">
      <p>
        Vienam bendram tikslui suburti skirtingų sričių Lietuvos skoliozės
        gydymo ekspertai, glaudžiai bendradarbiaujantys tarpusavyje.
      </p>

      <p>
        Mūsų misija – užtikrinti geriausią skoliozės gydymą Lietuvoje, taikant
        pažangiausias medicinos technologijas, mokslu pagrįstas metodikas ir
        nuolat tobulėjant profesinėje srityje.
      </p>
    </div>

    <!-- Specialists List -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        v-for="specialist in specialists"
        :key="specialist.id"
        class="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
      >
        <img
          :src="specialist.image"
          :alt="specialist.name"
          class="w-32 h-32 rounded-full object-cover mb-4 border-2 borderlue-400"
        />
        <h3 class="text-xl font-semibold text-gray-900 mb-2">
          {{ specialist.name }}
        </h3>
        <p class="text-gray-700">
          <strong class="font-medium">Specializacija:</strong>
          {{ specialist.specialization }}
        </p>
        <button
          @click="openModal(specialist)"
          class="mt-4 px-6 py-2 bg-blue-600 text-white font-medium rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105"
        >
          Apie specialistą
        </button>
      </div>
    </div>

    <!-- New Section with Icons and Blocks -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- Comprehensive Plan Block -->
      <div
        class="bg-blue-50 p-6 rounded-lg shadow-md flex flex-col items-center text-center"
      >
        <!-- SVG Icon for Comprehensive Plan -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-16 w-16 text-sky-800 mb-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
        <p class="text-sky-900 leading-relaxed">
          Mūsų komandą sudaro patyrę vaikų ortopedai-traumatologai, technikai,
          kineziterapeutai, kurie, derindami savo žinias ir patirtį, kuria
          visapusišką ir individualizuotą gydymo planą kiekvienam pacientui.
        </p>
      </div>

      <!-- Patient Education Block -->
      <div
        class="bg-blue-50 p-6 rounded-lg shadow-md flex flex-col items-center text-center"
      >
        <!-- SVG Icon for Education -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-16 w-16 text-sky-800 mb-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path
            d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
          />
        </svg>
        <p class="text-sky-900 leading-relaxed">
          Mes siekiame ne tik efektyvaus gydymo, bet ir pacientų bei jų šeimų
          švietimo, kad kiekvienas galėtų suprasti savo sveikatos būklę, priimti
          informuotus sprendimus ir gyventi visavertį gyvenimą.
        </p>
      </div>

      <!-- Values Block -->
      <div
        class="bg-blue-50 p-6 rounded-lg shadow-md flex flex-col items-center text-center"
      >
        <!-- SVG Icons for Values -->
        <div class="flex space-x-4 mb-4">
          <!-- Professionalism -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-12 w-12 text-sky-800"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="M16 20V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2z"
            />
            <path d="M9 22V8" />
            <path d="M13 18V8" />
            <path d="M17 18V8" />
          </svg>
          <!-- Innovation -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-12 w-12 text-sky-800"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M4 17l4-4 4 4" />
            <path d="M12 7h8" />
            <path d="M12 12h8" />
            <path d="M12 17h8" />
          </svg>
          <!-- Empathy -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-12 w-12 text-sky-800"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
            />
          </svg>
        </div>
        <p class="text-sky-900 leading-relaxed">
          Mūsų pagrindinės vertybės – profesionalumas, inovacijos ir empatija.
          Tikime, kad kiekvienas pacientas yra unikalus, todėl jo gydymas turi
          būti pritaikytas individualiai, atsižvelgiant į specifinius poreikius
          ir lūkesčius.
        </p>
      </div>
    </div>

    <ContactTeaser />

    <!-- Modal for Specialist Details -->
    <teleport to="body">
      <div
        v-if="isModalOpen"
        class="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-75"
        @click.self="closeModal"
      >
        <div
          class="bg-white rounded-lg shadow-xl p-8 max-w-lg w-full mx-4 relative"
        >
          <button
            @click="closeModal"
            class="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            <svg
              class="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          <div v-if="selectedSpecialist">
            <img
              :src="selectedSpecialist.image"
              :alt="selectedSpecialist.name"
              class="w-24 h-24 rounded-full object-cover mb-4 mx-auto border-2 borderlue-400"
            />
            <h3 class="text-2xl font-semibold text-gray-900 mb-2 text-center">
              {{ selectedSpecialist.name }}
            </h3>
            <div class="mt-4 text-gray-700 leading-relaxed text-center">
              <div v-html="selectedSpecialist.bioHtml"></div>
            </div>
          </div>
        </div>
      </div>
    </teleport>
  </LayoutPage>
</template>

<script setup>
import { ref } from 'vue'
import LayoutPage from '../layouts/LayoutPage.vue'
import ContactTeaser from '../components/sections/ContactTeaser.vue'

// Define the detailed specialist data
const specialists = ref([
  {
    id: 1,
    name: 'Giedrius Bernotavičius',
    specialization:
      'Vaikų ortopedas - traumatologas, specializuojantis stuburo chirurgijoje',
    image:
      'https://innovamed.lt/wp-content/uploads/2025/02/Giedrius-Bernotavicius3-300x300.jpeg.webp',
    bio: `Giedrius Bernotavičius yra patyręs vaikų ortopedas-traumatologas, kurio pagrindinė specializacija - stuburo chirurgija. Jis yra ScoliTeam narys, dirbantis su sudėtingais skoliozės atvejais, reikalaujančiais chirurginės intervencijos. Jo darbas apjungia ilgametę patirtį ir naujausias chirurgines technologijas, siekiant geriausių gydymo rezultatų. Jo profesionalumas ir atsidavimas pacientams yra pagrindinės vertybės, kuriomis jis vadovaujasi kasdienėje praktikoje.`,
    bioHtml: `
      <h4 class="font-semibold text-lg text-gray-900 mb-2">Išsilavinimas ir patirtis:</h4>
      <ul class="list-disc list-inside mb-4">
        <li>2009 m. baigė ortopedijos-traumatologijos rezidentūros studijas Vilniaus universitete;</li>
        <li>2017 m. apgynė biomedicinos mokslų daktaro disertaciją;</li>
        <li>Turi gydytojo ortopedo-traumatologo licenciją, išduotą 2009 m. birželio 29 d.</li>
      </ul>
      <h4 class="font-semibold text-lg text-gray-900 mb-2">Specializacija:</h4>
      <ul class="list-disc list-inside mb-4">
        <li>Stuburo deformacijų operacinis gydymas;</li>
        <li>Klubo sąnario patologijų diagnostika ir gydymas;</li>
        <li>Naujagimių klubų sąnarių echoskopijos;</li>
        <li>Galūnių deformacijų chirurginis gydymas;</li>
        <li>Skoliozės gydymas.</li>
      </ul>
      <h4 class="font-semibold text-lg text-gray-900 mb-2">Savanorystė ir tarptautinė patirtis:</h4>
      <ul class="list-disc list-inside mb-4">
        <li>G. Bernotavičius aktyviai dalyvauja savanoriškose misijose Etiopijoje, kur atlieka sudėtingas stuburo operacijas vaikams;</li>
        <li>Dalyvavo dviejose misijose Adis Abebos ligoninėje;</li>
        <li>Per savaitę atlieka apie 14 sudėtingų stuburo operacijų;</li>
        <li>Dirba su tarptautine gydytojų komanda iš viso pasaulio.</li>
      </ul>
      <h4 class="font-semibold text-lg text-gray-900 mb-2">Kontaktai:</h4>
      <p><strong>Affidea Lietuva, UAB.</strong> Affidea klinika.</p>
      <p>Vilnius, Kaunas, Šiauliai.</p>
      <p><a href="mailto:G.bernotavicius@gmail.com" class="text-sky-800 hover:underline">G.bernotavicius@gmail.com</a></p>
    `,
  },
  {
    id: 2,
    name: 'Ignas Rutulys',
    specialization:
      'Specializuojasi Ortopedijos srityje su įtvarinių sistemų gamyba',
    image:
      'https://innovamed.lt/wp-content/uploads/2025/01/Ignas-Rutulys2-300x300.jpg.webp',
    bio: `Ignas Rutulys yra ortopedas, specializuojasi įtvarinių sistemų gamyboje. Jis glaudžiai bendradarbiauja su kineziterapeutais ir chirurgais, kurdamas individualizuotus įtvarus pacientams, sergantiems skolioze. Jo inovacijos ir dėmesys detalėms padeda užtikrinti, kad kiekvienas įtvaras būtų pritaikytas pagal individualius paciento poreikius, suteikiant maksimalų komfortą ir efektyvumą gydant.`,
    bioHtml: `
      <h4 class="font-semibold text-lg text-gray-900 mb-2">Išsilavinimas ir patirtis:</h4>
      <ul class="list-disc list-inside mb-4">
        <li>Biomechanikos magistras.</li>
        <li>3D įtvarų modeliavimo kvalifikacija.</li>
        <li>2009 m. Baigtos bakalauro studijos Vilniaus Gedimino technikos universitete. Įgyta biomechaniko specialybė.</li>
        <li>2011 m. Įgytas Magistro laipsnis Vilniaus Gedimino Technikos universitete Biomechanikos srityje.</li>
        <li>2017 m. Stažavosi Ukrainos Charkivo universitetinėje ligoninėje Cheneau tipo įtvarų gamyboje.</li>
        <li>2018 m. Dalyvavo stuburo įtvarinių technologijų tobulinimo suvažiavime.</li>
        <li>2019 m. Baigė mokymus apie Chenaeu korsetų gamybą.</li>
      </ul>
      <h4 class="font-semibold text-lg text-gray-900 mb-2">Kontaktai:</h4>
      <p><strong>Idemus</strong>, UAB</p>
      <p>Viršuliškių g. 34 Vilnius</p>
      <p><a href="tel:+37060452036" class="text-sky-800 hover:underline">+370 604 52036</a></p>
    `,
  },
  {
    id: 3,
    name: 'Giedrė Mikelionienė',
    specialization: 'Schroth terapijos specialistė. ISST atstovė Lietuvoje',
    image:
      'https://innovamed.lt/wp-content/uploads/2025/07/IMG_3249-300x300.jpg.webp',
    bio: `Giedrė Mikelionienė yra viena iš pagrindinių Schroth terapijos specialisčių Lietuvoje, ISST (International Schroth Three-Dimensional Scoliosis Therapy) atstovė. Ji turi didelę patirtį dirbant su skoliozės pacientais ir nuolat tobulina savo žinias, dalyvaudama tarptautiniuose mokymuose ir konferencijose. Jos nuoširdumas ir empatija padeda pacientams jaustis saugiai ir motyvuotai gydymo metu.`,
    bioHtml: `
      <h4 class="font-semibold text-lg text-gray-900 mb-2">Išsilavinimas ir patirtis:</h4>
      <ul class="list-disc list-inside mb-4">
        <li>Reabilitacijos bakalauras, kineziterapeuto kvalifikacija.</li>
        <li>Reabilitacijos magistras, dailės terapeuto kvalifikacija.</li>
        <li>Sertifikuota Schroth metodikos skoliozės gydymui specialistė.</li>
        <li>Sertifikuota INDIBA ACTIV, TMG kineziterapijos priemonių praktikė.</li>
        <li>Sertifikuota DNS Pediatric, DNS Scoliosis, Functional Movement Systems: FMS, SFMA, Y-BALANCE, FCS metodikų praktikė.</li>
        <li>Sertifikuota klasikinio, nugaros gydomojo, sportinio masažo praktikė.</li>
        <li>Privati dailės terapeutės praktika.</li>
      </ul>
      <h4 class="font-semibold text-lg text-gray-900 mb-2">Kontaktai:</h4>
      <p><strong>INNOVAMED</strong></p>
      <p><a href="https://www.facebook.com/giedre.mikelioniene.dailes.terapija" target="_blank" rel="nofollow" class="text-sky-800 hover:underline">Facebook</a></p>
      <p><a href="https://www.instagram.com/giedre_mikelioniene" target="_blank" rel="nofollow" class="text-sky-800 hover:underline">Instagram</a></p>
      <p><a href="mailto:info@innovamed.lt" class="text-sky-800 hover:underline">info@innovamed.lt</a></p>
      <p><a href="tel:+37060644921" class="text-sky-800 hover:underline">+370 606 44921</a></p>
    `,
  },
  {
    id: 4,
    name: 'Tadas Mikelionis',
    specialization: 'Schroth terapijos specialistas. ISST atstovas Lietuvoje',
    image:
      'https://innovamed.lt/wp-content/uploads/2023/12/DSC08158-300x300.jpg.webp',
    bio: `Tadas Mikelionis, taip pat sertifikuotas ISST Schroth terapijos specialistas, yra žinomas dėl savo inovatyvių metodų ir klinikinio mąstymo. Jis aktyviai prisideda prie ScoliTeam veiklos, dalindamasis savo patirtimi ir padėdamas kitiems komandos nariams. Jo tikslas – suteikti pacientams ne tik geriausią gydymą, bet ir žinias, leidžiančias jiems aktyviai dalyvauti savo sveikatos gerinimo procese.`,
    bioHtml: `
      <h4 class="font-semibold text-lg text-gray-900 mb-2">Išsilavinimas ir patirtis:</h4>
      <ul class="list-disc list-inside mb-4">
        <li>Reabilitacijos magistro laipsnis, kineziterapeuto kvalifikacija.</li>
        <li>Sertifikuotas Schroth metodikos skoliozės gydymui specialistas.</li>
        <li>Sertifikuotas DNS, Functional Movement Systems, Neurac metodikų praktikas.</li>
        <li>Sertifikuotas Maitland, Mulligan, DNS ir STECCO manualinės terapijos praktikas.</li>
        <li>Lektorius universitetuose, kolegijose ir seminaruose.</li>
      </ul>
      <h4 class="font-semibold text-lg text-gray-900 mb-2">Kontaktai:</h4>
      <p><strong>INNOVAMED</strong></p>
      <p><a href="https://www.facebook.com/innovamed" target="_blank" class="text-sky-800 hover:underline">Facebook</a></p>
      <p><a href="mailto:mikelionis.tadas@gmail.com" class="text-sky-800 hover:underline">mikelionis.tadas@gmail.com</a></p>
      <p><a href="tel:+37069993921" class="text-sky-800 hover:underline">+370 699 93921</a></p>
      <p><a href="https://www.innovamed.lt" target="_blank" class="text-sky-800 hover:underline">www.innovamed.lt</a></p>
    `,
  },
])

// Modal State Management
const isModalOpen = ref(false)
const selectedSpecialist = ref(null)

const openModal = (specialist) => {
  selectedSpecialist.value = specialist
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
  selectedSpecialist.value = null
}
</script>

<style scoped></style>
