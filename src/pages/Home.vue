<template>
  <Hero />

  <LayoutPage class="px-6">
    <UspList />

    <section
      class="pb-10 border-b sm:p-6 sm:rounded-lg sm:shadow-sm w-full flex flex-col"
    >
      <h2 class="text-3xl font-semibold text-sky-900 mb-4 text-center">
        Apie skoliozę
      </h2>

      <p class="text-sky-900 leading-relaxed mb-6">
        <RouterLink
          :to="{ name: 'straipsniai-skolioze' }"
          class="text-sky-600 hover:text-sky-500 transition-colors duration-300 hover:underline font-semibold"
        >
          Skoliozė</RouterLink
        >
        - tai sudėtingas stuburo išlinkimas į šoną, apimantis tris plokštumas.
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
        class="self-center"
      >
        Skoliozės diagnostika
      </CtaLink>
    </section>

    <section
      class="pb-10 border-b sm:p-6 sm:rounded-lg sm:shadow-sm w-full flex flex-col"
    >
      <h2 class="text-3xl font-semibold text-sky-900 mb-6 text-center">
        Kas yra Schroth metodas?
      </h2>

      <div class="md:flex md:items-center md:space-x-8 mb-6">
        <div class="flex-shrink-0 mb-6 md:mb-0 md:w-1/3 flex justify-center">
          <div
            class="bg-blue-100 p-8 rounded-full flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xml:space="preserve"
              width="96"
              height="96"
              viewBox="0 0 302.805 302.805"
              fill="currentColor"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="text-blue-600"
            >
              <path
                d="m252.719 58.932-38.85-7.402h.001c-9.817-1.871-16.943-10.482-16.943-20.477V14.997c0-8.27-6.728-14.997-14.996-14.997h-61.057c-8.269 0-14.996 6.728-14.996 14.997v16.056c0 9.994-7.125 18.605-16.941 20.477l-38.852 7.402C25.829 63.555 8.95 85.607 10.823 110.229l13.596 178.718c.593 7.771 7.161 13.857 14.954 13.857h224.059c7.795 0 14.362-6.088 14.953-13.858l13.597-178.717c1.872-24.622-15.006-46.674-39.263-51.297m24.305 50.159-13.593 178.714h-32.772l-7.243-34.654 25.274-110.566a7.5 7.5 0 0 0-5.641-8.982 7.497 7.497 0 0 0-8.982 5.641l-25.64 112.165a7.5 7.5 0 0 0-.03 3.205l6.937 33.192-127.866.002 6.937-33.194a7.5 7.5 0 0 0-.03-3.205l-25.64-112.165a7.501 7.501 0 0 0-14.623 3.341l25.274 110.566-7.243 34.656H39.375L25.78 109.091C24.486 92.088 36.142 76.86 52.892 73.666l38.852-7.402c16.881-3.218 29.134-18.026 29.134-35.211L120.874 15l61.053-.003v16.056c0 17.186 12.253 31.993 29.135 35.211l38.85 7.402c16.75 3.193 28.406 18.422 27.112 35.425"
              />
              <path
                d="M151.402 89.462a6 6 0 0 0-6 6v129.945a6 6 0 0 0 12 0V95.462a6 6 0 0 0-6-6"
              />
            </svg>
          </div>
        </div>

        <div class="md:w-2/3 text-left">
          <p class="text-sky-900 leading-relaxed mb-4">
            <RouterLink
              :to="{ name: 'schroth' }"
              class="text-sky-600 hover:text-sky-500 transition-colors duration-300 hover:underline font-semibold"
            >
              Schroth metodas</RouterLink
            >
            yra efektyvus nechirurginis skoliozės gydymo būdas, kurį 1927 m.
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
        class="self-center"
      >
        Gydymas Schroth metodu
      </CtaLink>
    </section>

    <h2 class="text-3xl font-semibold text-sky-900 text-center">
      Susisiekite su mumis
    </h2>

    <ContactSection />
  </LayoutPage>
</template>

<script setup>
import Hero from '../components/sections/Hero.vue'
import LayoutPage from '../layouts/LayoutPage.vue'
import UspList from '../components/sections/UspList.vue'
import CtaLink from '../components/elements/CtaLink.vue'
import ContactSection from '../components/sections/ContactSection.vue'
</script>
