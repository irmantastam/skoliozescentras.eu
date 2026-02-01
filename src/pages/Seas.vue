<template>
  <LayoutPage>
    <h1 class="text-3xl font-semibold text-sky-600 mx-6 text-center">
      SEAS metodas ir ISICO organizacija
    </h1>

    <div class="p-6 bg-white sm:rounded-lg shadow-sm">
      <div class="flex flex-col md:flex-row gap-6">
        <div class="flex-1">
          <h2 class="text-2xl font-semibold text-sky-900 mb-4">
            Kas yra SEAS?
          </h2>

          <p class="text-sky-900 leading-relaxed mb-4">
            SEAS (Scientific Exercises Approach to Scoliosis) – tai mokslinis
            pratimų metodas skoliozei gydyti. Terapija remiasi specifine
            auto-korekcijos forma (aktyvia savikorekcija), kurios kiekvienas
            pacientas mokomas individualiai.
          </p>

          <ul
            class="list-disc list-inside text-sky-900 leading-relaxed space-y-2 mb-4"
          >
            <li>
              Pratimai derinami su stuburo stabilizavimu, neuromotorinės
              kontrolės bei propriorecepcijos lavinimu.
            </li>

            <li>
              Metodui būdingas kognityvinis – elgesio požiūris į pacientą bei jo
              šeimą, siekiant geresnio gydymo plano laikymosi.
            </li>

            <li>
              SEAS metodika taikoma vaikams, paaugliams ir suaugusiesiems,
              siekiant kontroliuoti progresavimą bei gerinti laikyseną.
            </li>
          </ul>

          <h3 class="text-sky-700 text-xl font-medium leading-relaxed mb-2">
            Pagrindiniai tikslai ir nauda:
          </h3>

          <ul
            class="list-disc list-inside text-sky-900 leading-relaxed space-y-1 mb-4"
          >
            <li>išvengti arba atitolinti korseto paskyrimą,</li>

            <li>išlaikyti stuburo stabilumą augimo metu,</li>

            <li>
              padidinti korseto gydymo efektyvumą (jei jis jau paskirtas),
            </li>

            <li>sumažinti skoliozės šalutinius poveikius suaugusiesiems.</li>
          </ul>
        </div>

        <figure class="flex flex-col">
          <img
            src="/images/education/seas/logo-seas.webp"
            title="SEAS metodas ir ISICO organizacija INNOVAMED"
            alt="SEAS metodas ir ISICO organizacija INNOVAMED"
            class="rounded-md shadow-lg"
          />
        </figure>
      </div>
    </div>

    <div class="p-6 bg-white sm:rounded-lg shadow-sm">
      <div class="flex flex-col md:flex-row gap-6">
        <div>
          <h2 class="text-2xl font-semibold text-sky-900 mb-4">
            Kaip vyksta skoliozės gydymas?
          </h2>

          <p class="text-sky-900 leading-relaxed mb-4">
            Gydymas pradedamas išsamiu paciento įvertinimu, kurį atlieka
            specialistas
          </p>
        </div>
      </div>
    </div>

    <ContactTeaser />
  </LayoutPage>
</template>

<script setup>
import LayoutPage from '../layouts/LayoutPage.vue'
import ContactTeaser from '../components/sections/ContactTeaser.vue'
</script>
