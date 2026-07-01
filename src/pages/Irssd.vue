<template>
  <LayoutPage>
    <h1 class="text-3xl font-semibold text-sky-600 mx-6 text-center">
      Tarptautinė IRSSD organizacija
    </h1>

    <div class="p-6 bg-white sm:rounded-lg shadow-sm">
      <div class="flex flex-col md:flex-row gap-6">
        <div class="flex-1 text-sky-900 leading-relaxed">
          <h2 class="text-2xl font-semibold mb-4 text-sky-900">
            Kas yra IRSSD?
          </h2>

          <p class="mb-4">
            <b>IRSSD</b> – tai Tarptautinė stuburo deformacijų tyrimų draugija
            (angl. International Research Society of Spinal Deformities). Tai
            viena iš svarbiausių tarptautinių organizacijų, vienijančių viso
            pasaulio mokslininkus, gydytojus ir kitus specialistus,
            besidominčius stuburo deformacijų tyrimais.
          </p>

          <p class="mb-4">
            Organizacija buvo įkurta 1994 metais, siekiant skatinti mokslinius
            tyrimus stuburo deformacijų srityje, prisidėti prie geresnio šių
            ligų supratimo ir pažangesnio jų gydymo.
          </p>
        </div>

        <figure class="md:max-w-[50%]">
          <img
            src="/images/education/irssd/logo-irssd.webp"
            alt="IRSSD"
            class="rounded-md shadow-lg px-8"
          />
        </figure>
      </div>
    </div>

    <div class="p-6 bg-white sm:rounded-lg shadow-sm">
      <div class="flex flex-col md:flex-row gap-6">
        <div class="flex-1 text-sky-900 leading-relaxed">
          <h2 class="text-2xl font-semibold text-sky-900 mb-4">
            IRSSD tikslai ir veiklos kryptys:
          </h2>
          <p class="mb-4">
            Pagrindinis IRSSD tikslas – sudaryti tarptautinę platformą, kurioje
            specialistai galėtų pristatyti savo mokslinius tyrimus, dalintis
            patirtimi ir diskutuoti apie naujausius atradimus stuburo
            deformacijų srityje. Organizacija skatina tyrimus, susijusius su:
          </p>
          <ul class="list-disc list-inside space-y-2 mb-4">
            <li>Stuburo anatomija, biomechanika ir laikysenos analize;</li>
            <li>
              Skoliozės ir kitų stuburo deformacijų atsiradimo priežastimis;
            </li>
            <li>
              Klinikiniu pacientų būklės vertinimu ir ilgalaikiu stebėjimu;
            </li>
            <li>
              Konservatyvaus gydymo (korsetavimo, kineziterapijos) efektyvumu;
            </li>
            <li>Chirurginio gydymo efektyvumu;</li>
            <li>
              Naujausių mokslu grįstų metodų taikymu gydant stuburo
              deformacijas.
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="p-6 bg-white sm:rounded-lg shadow-sm">
      <h2 class="text-2xl font-semibold text-sky-900 mb-4">
        Įrodymais grįstos medicinos svarba
      </h2>
      <p class="text-sky-900 leading-relaxed mb-4">
        Šiuolaikinis skoliozės ir kitų stuburo deformacijų gydymas yra
        neatsiejamas nuo įrodymais grįstos medicinos principų. IRSSD aktyviai
        prisideda prie mokslinių tyrimų plėtros, užtikrindama jų aukštą kokybę
        ir akademinių rezultatų sklaidą tarptautinėje bendruomenėje.
      </p>
      <p class="text-sky-900 leading-relaxed mb-6">
        Organizacija rūpinasi, kad gydymo metodai būtų vertinami remiantis
        objektyviais moksliniais duomenimis, o pacientams iš viso pasaulio būtų
        suteikta saugi ir veiksminga pagalba. IRSSD laikoma viena iš svarbiausių
        mokslinių organizacijų pasaulyje, aktyviai prisidedančių prie pažangos
        stuburo deformacijų tyrimų ir gydymo srityje.
      </p>

      <h2 class="text-2xl font-semibold text-sky-900 mb-4">
        Tarptautiniai moksliniai susitikimai
      </h2>
      <p class="text-sky-900 leading-relaxed mb-4">
        Vienas iš svarbiausių IRSSD veiklos aspektų yra kas dvejus metus
        organizuojamos tarptautinės konferencijos. Šiuose renginiuose dalyvauja
        mokslininkai, ortopedai-traumatologai, kineziterapeutai, biomechanikos
        specialistai ir kiti ekspertai iš viso pasaulio.
      </p>
      <p class="text-sky-900 leading-relaxed mb-6">
        Konferencijų metu pristatomi naujausi akademiniai atradimai, aptariami
        galimi diagnostikos ir gydymo metodų pokyčiai, diskutuojama apie
        efektyviausią skoliozės, kifozės ir lordozės gydymą. Tokie renginiai
        leidžia specialistams susipažinti su naujausiomis mokslo tendencijomis
        ir prisidėti prie tarptautinės mokslinės bendruomenės augimo.
      </p>

      <div class="bg-sky-50 p-4 border-l-4 border-sky-600 mb-6">
        <p class="text-sky-900 leading-relaxed">
          „Innovamed“ klinikos kineziterapeutai taip pat aktyviai dalyvauja
          tarptautinės IRSSD organizacijos renginiuose. Specialistai 2026 m.
          birželio 18-20 dienomis savo žinias gilino mokslinėje konferencijoje,
          kuri vyko Novi Sade, Serbijoje.
        </p>
      </div>

      <p class="text-sky-900 font-bold mb-4">
        Nuolatinis bendradarbiavimas su užsienio specialistais ir moksliniais
        įrodymais pagrįstų metodikų taikymas leidžia užtikrinti aukščiausios
        kokybės pacientų priežiūrą Lietuvoje.
      </p>

      <p class="mt-4">
        <a
          href="https://www.irssd.org/"
          target="_blank"
          class="text-sky-600 underline"
          >https://www.irssd.org/</a
        >
      </p>
    </div>

    <ContactTeaser />
  </LayoutPage>
</template>

<script setup>
import LayoutPage from '../layouts/LayoutPage.vue'
import ContactTeaser from '../components/sections/ContactTeaser.vue'
</script>
