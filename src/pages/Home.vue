<template>
  <Hero />

  <LayoutPage>
    <!-- Mūsų paslaugos Section with UspList -->
    <UspList />

    <!-- Apie Skoliozę Section -->
    <section class="p-6 bg-white rounded-lg shadow-sm w-full max-w-4xl">
      <h2 class="text-3xl font-semibold text-sky-900 mb-4 text-center">
        Apie skoliozę
      </h2>

      <p class="text-sky-900 leading-relaxed mb-6">
        <span class="font-semibold text-blue-800">Skoliozė</span> – tai
        sudėtingas stuburo išlinkimas į šoną, apimantis tris plokštumas.
        Diagnozė nustatoma, kai stuburo iškrypimas viršija 10˚ pagal Kobbo
        kampą. Dėl šio iškrypimo stuburas gali įgauti C arba S formą, o
        slanksteliai ne tik krypsta į šoną, bet ir sukasi, deformuodami krūtinės
        ląstą. Tai sukuria ne tik fizinių problemų, tokių kaip plaučių ar
        širdies veiklos sutrikimai, bet ir rimtų estetinių bei psichologinių
        iššūkių.
      </p>

      <CtaLink
        route="diagnostics"
        variant="big"
      >
        Skoliozės diagnostika
      </CtaLink>
    </section>

    <!-- Kas yra Schroth metodas? Section - Patobulintas vizualinis elementas -->
    <section class="p-6 bg-white rounded-lg shadow-sm w-full max-w-4xl">
      <h2 class="text-3xl font-semibold text-sky-900 mb-6 text-center">
        Kas yra Schroth metodas?
      </h2>

      <div class="md:flex md:items-center md:space-x-8 mb-6">
        <!-- Vizualinė dalis -->
        <div class="flex-shrink-0 mb-6 md:mb-0 md:w-1/3 flex justify-center">
          <div
            class="bg-blue-100 p-8 rounded-full flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="96"
              height="96"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-user-2 text-blue-600"
            >
              <circle
                cx="12"
                cy="7"
                r="5"
              />
              <path
                d="M19.264 17.513C17.01 18.945 14.505 20 12 20s-5.01-1.055-7.264-2.487A2 2 0 0 1 3 16v-2a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2a2 2 0 0 1-1.736 1.513z"
              />
              <path d="M12 20v2" />
              <path d="M7 15h10" />
              <path d="M10 12h4" />
            </svg>
          </div>
        </div>

        <!-- Tekstinė dalis -->
        <div class="md:w-2/3 text-left">
          <p class="text-sky-900 leading-relaxed mb-4">
            <span class="font-semibold text-blue-800">Schroth metodas</span> yra
            efektyvus nechirurginis skoliozės gydymo būdas, kurį 1927 m.
            Vokietijoje sukūrė kineziterapeutė Katherina Schroth. Metodo esmė –
            asimetriniai pratimai, derinami su korekciniu kvėpavimu, kurie yra
            pritaikomi specifinėms stuburo išgaubtoms ir įdubusioms sritims.
          </p>
          <p class="text-sky-900 leading-relaxed">
            Šios metodikos tikslas – išmokyti pacientą teisingų korekcinių
            pratimų ir padėčių. Gydymas remiasi blokų principu, apimančiu pečių
            juostos, krūtininės, juosmeninės dalies ir dubens-klubų sritis.
          </p>
        </div>
      </div>

      <CtaLink
        route="treatment"
        variant="big"
      >
        Gydymas Schroth metodu
      </CtaLink>
    </section>

    <ContactTeaser />
  </LayoutPage>
</template>

<script setup>
import Hero from '../components/sections/Hero.vue'
import LayoutPage from '../layouts/LayoutPage.vue'
import UspList from '../components/sections/UspList.vue'
import CtaLink from '../components/elements/CtaLink.vue'
import ContactTeaser from '../components/sections/ContactTeaser.vue'
</script>

<style scoped></style>
