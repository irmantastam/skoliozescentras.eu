<template>
  <LayoutPage>
    <h1 class="text-3xl font-semibold text-sky-600 mx-6">
      Skoliozės gydymo sėkmės istorijos ir klientų asmeninės patirtys
    </h1>

    <!-- Photos slider -->
    <div class="relative w-full max-w-4xl">
      <div
        class="text-center flex flex-col items-center gap-4 text-gray-700 mx-6"
      >
        <p class="text-lg">
          Kairėje nuotrauka – atvykus pirmai konsultacijai, dešinėje nuotrauka –
          gydymo procese:
        </p>
      </div>

      <swiper
        :modules="[Navigation, Pagination, A11y]"
        :slides-per-view="1"
        :navigation="{
          nextEl: '.swiper-button-next-photo',
          prevEl: '.swiper-button-prev-photo',
        }"
        :pagination="{ el: '.swiper-pagination-photo', clickable: true }"
        class="pb-12"
      >
        <swiper-slide
          v-for="(story, index) in skoliozePhotos"
          :key="index"
        >
          <div class="flex flex-col items-center p-2">
            <img
              :src="story.url"
              :alt="story.alt"
              class="w-full h-auto rounded-lg shadow-md mb-2"
            />
            <p class="text-sm text-gray-500">{{ story.label }}</p>
          </div>
        </swiper-slide>
      </swiper>

      <!-- Custom navigation buttons for photos -->
      <div
        class="swiper-button-prev swiper-button-prev-photo after:text-sky-800"
      />

      <div
        class="swiper-button-next swiper-button-next-photo after:text-sky-800"
      />

      <!-- Custom pagination for photos -->
      <div class="swiper-pagination-photo text-center" />
    </div>

    <!-- Testimonials slider
    <div class="relative w-full max-w-4xl">
      <h2 class="text-2xl font-semibold mb-4">
        Klientų atsiliepimai apie sėkmingą skoliozės gydymą
      </h2>

      <swiper
        :modules="[Navigation, Pagination, A11y]"
        :slides-per-view="1"
        :space-between="30"
        :breakpoints="{
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }"
        :navigation="{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }"
        :pagination="{ el: '.swiper-pagination-testimonials', clickable: true }"
        class="pb-12"
      >
        <swiper-slide
          v-for="(testimonial, index) in testimonials"
          :key="index"
        >
          <div class="p-6 bg-white rounded-lg shadow-md flex flex-col my-2">
            <blockquote class="text-gray-700 italic mb-4 flex-grow">
              "{{ testimonial.text }}"
            </blockquote>
            <footer class="text-right mt-4">
              <cite class="font-semibold text-sky-900"
                >- {{ testimonial.author }}</cite
              >
            </footer>
          </div>
        </swiper-slide>
      </swiper>

      <div class="swiper-button-prev after:text-sky-800 after:text-2xl"></div>
      <div class="swiper-button-next after:text-sky-800 after:text-2xl"></div>

      <div class="swiper-pagination-testimonials text-center"></div>
    </div>
    -->

    <ContactTeaser />
  </LayoutPage>
</template>

<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, A11y } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import LayoutPage from '../layouts/LayoutPage.vue'
import ContactTeaser from '../components/sections/ContactTeaser.vue'

// Testimonial data.
const testimonials = ref([
  {
    text: 'Jog turiu skoliozę sužinojau 12-13 metų, kuomet šeimos gydytoja pastebėjo požymius ir ortopedas tai patvirtino. Jaučiausi kitokia, nei kiti mano bendraamžiai, norėjau tai slėpti, galvojau “kodėl būtent man taip nutiko?”. Būdama jaunesnė laikiau tai kompleksu, nešiojau laisvus drabužius, niekad nesidėdavau maudymuko. Tačiau dabar, būdama 17-os, priimu tai, kaip dalį savęs, “susidraugavau” su skolioze ir atradusi Schroth metodą supratau, jog įmanoma viską pakeisti. Išbandžiau daug būdų, kaip galėčiau sau padėti, lankydavau įvairias fizines mankštas, dirbau su skirtingais kineziterapeutais, tačiau niekas nepadėjo taip, kaip Schroth metodas! Manau disciplina yra kiekvieno asmeninis užsibrėžimas. Asmeniškai būna įvairių dienų, tačiau galų gale supranti, jog turi tai daryti dėl savęs. Labiausiai mane motyvuoja tėvai ir žinoma INNOVAMED klinikos specialistai. Tai be galo supratingi ir šilti žmonės, užtikrinantys ne tik paslaugų kokybę, bet ir puikų ryšį su pacientais.',
    author: 'I. G',
  },
  {
    text: 'Apie savo skoliozę sužinojau maždaug prieš trejus metus, kai ėjau pasitikrinti sveikatos pas šeimos gydytoją. Tiksliai neprisimenu, kaip jaučiausi apie tai sužinojus, bet tiesiog supratau, kad reikės kažką daryti, sportuoti, stengtis. Labai stipriai gyvenimo nepakeitė, bet būna, kad pagalvoju, ką kiti galvoja apie mane? Ar labai matosi, kad skoliozė? Aš daugiau nei pusę paros nešioju skoliozei skirtą korsetą, kelias dienas per savaitę darau skoliozės gydymui pritaikytus pratimus su Schroth metodu. Asmeniškai man nėra labai lengva laikytis disciplinos, nes mėgstu veikti daug skirtingų dalykų, bet bandau pritaikyti tą ką būtina padaryti. Man motyvaciją teikia šalia esantys artimi žmonės, mane visada džiugina geras oras, nuostabūs gydytojai.',
    author: 'L. L',
  },
  {
    text: 'Kad turiu skoliozę, sužinojau būdama maždaug 9-10 metų, vizito pas šeimos gydytoją metu. Žinoma, gydytoja dar tik įtarė, tačiau įtarimus greitai patvirtino ortopedas. Kadangi nelabai žinojau kas tai per liga, nelabai domėjausi - kažkokio streso ar panikos nebuvo. Priėmiau kaip eilinį medicininį faktą, kurį privalau toleruoti. Bėgant laikui teko suvokti skoliozės rimtumą ir, deja, išmokti gyventi su ja. Prasidėjusios reguliarios mankštos tiek negąsdino kiek korsetas, kurį nešiojau apie 4 metus. Praėjus 7 metams po gydymo pradžios, jau korseto nebenešioju, tačiau vis dar sportuoju pagal Schroth metodą ir, be abejo, planuoju tai daryti visą gyvenimą. Aišku, laikytis disciplinos ir atlikti tai, kas būtina nėra lengva, reikia nuolat planuoti laiką, dienotvarkę, kad viską suspėčiau. Tačiau motyvacija greitai atsiranda, pagalvojus apie gydymo režimo nesilaikymo pasekmes:))',
    author: 'R. N',
  },
  {
    text: 'Kai man buvo 12 nuėjau į masažą. Masažistė parekomendavo nueiti išsitirti ar neturiu skoliozės. Pasirodo turėjau. Gydytoja, nustačius skoliozę parekomendavo naudoti Schroth metodą ir dirbti su INNOVAMED. Iš pradžių buvo sunku susirinkt visas emocijas, man nepatiko kaip atrodė mano šonai, kad vienas labiau įdubęs negu kitas, tėvai išsigando, ką reikės daryti ir mus labai šokiravo, kokia iš tiesų kreiva mano nugara. Sužinojus, kad turiu skoliozę tikrai reikėjo pakeist savo gyvenimo įpročius: reikėjo miegoti kitaip, nei aš buvau įpratus, sėdėti ant maišiukų, namuose tai buvo lengva padaryti, bet mokykloj sunkiau - reikėjo ieškot išeičių: pasidėt sąsiuvinius ar kažką kito. Visas šitas problemas man padėjo išspręsti Giedrė, kineziterapeutė, pas kurią pradėjau lankytis. Bet buvo sunku: pratimus reikia daryti kiekvieną dieną, kartais nėra laiko ar noro, bet žinant, kad situacija gali pagerėti (aišku pilnai mano nugara neišsities), bet vis tiek dirbu toliau.',
    author: 'J. S',
  },
  {
    text: 'Apie savo skoliozę sužinojau prieš 2 metus. Ėjau darytis pažymos mokyklai ir tuomet mano šeimos gydytoja pasakė, jog mano stuburas krypsta ir, kad kuo greičiau reiktų susiimti. Emocijos ir jausmai buvo labai skirtingi ir keisti galvojau, jog esu tokia vienintelė pradėjau žiūrėti kitaip į savo kūną. Mano gyvenimą skoliozė pakeitė tai, kad visada nepamirščiau koreguoti savęs sėdint, gulint. Pakeitė šiek tiek ir emocinę būseną. Kadangi man buvo paskirtas nešioti įtvaras ir jį turiu nešioti beveik visada net ir miegant, kad stuburas nekryptų į kitą pusę, aš labai sunkiai taikiausi ir taikausi su šia mintimi galvodavau, kaip nepatogu, kaip atrodysiu ir panašiai. Savo skoliozės problema pradėjau spręsti pratimais INNOVAMED kineziterapijos studijoje ir rezultatai tikrai matėsi geresni. Tai manau, kad būtina atlikti ir daryti tai kas rekomenduojama, kad situacija neblogėtų. Motyvacijos galbūt padeda jog darai pratimus matai, kad situacija gerėja ir žinai, kad tu ją gali padaryti dar geresnę. Dar padeda šeima, pastūmėja į priekį su palaikymu.',
    author: 'K. P',
  },
])

// Photo slides.
const skoliozePhotos = ref([
  {
    url: 'https://innovamed.lt/wp-content/uploads/2025/07/Giedrius-su-datom-768x717.jpg.webp',
    alt: 'Skoliozės nuotrauka prieš ir gydymo procese 1',
    label: 'Nuotrauka prieš ir gydymo procese 1',
  },
  {
    url: 'https://innovamed.lt/wp-content/uploads/2025/07/Izabele-su-datom-768x768.jpg.webp',
    alt: 'Skoliozės nuotrauka prieš ir gydymo procese 2',
    label: 'Nuotrauka prieš ir gydymo procese 2',
  },
  {
    url: 'https://innovamed.lt/wp-content/uploads/2025/06/IMG_2023-768x768.jpeg.webp',
    alt: 'Skoliozės nuotrauka prieš ir gydymo procese 3',
    label: 'Nuotrauka prieš ir gydymo procese 3',
  },
  {
    url: 'https://innovamed.lt/wp-content/uploads/2025/06/IMG_2018.jpeg.webp',
    alt: 'Skoliozės nuotrauka prieš ir gydymo procese 4',
    label: 'Nuotrauka prieš ir gydymo procese 4',
  },
  {
    url: 'https://innovamed.lt/wp-content/uploads/2025/07/Naomi-su-datom-768x768.jpg.webp',
    alt: 'Skoliozės nuotrauka prieš ir gydymo procese 5',
    label: 'Nuotrauka prieš ir gydymo procese 5',
  },
  {
    url: 'https://innovamed.lt/wp-content/uploads/2025/07/Saule-su-datom-768x768.jpg.webp',
    alt: 'Skoliozės nuotrauka prieš ir gydymo procese 6',
    label: 'Nuotrauka prieš ir gydymo procese 6',
  },
  {
    url: 'https://innovamed.lt/wp-content/uploads/2025/07/Justina-su-datom.jpg',
    alt: 'Skoliozės nuotrauka prieš ir gydymo procese 7',
    label: 'Nuotrauka prieš ir gydymo procese 7',
  },
])
</script>
