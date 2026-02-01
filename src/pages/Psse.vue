<template>
  <LayoutPage>
    <h1 class="text-3xl font-semibold text-sky-600 mx-6 text-center">
      Tarptautinė PSSE asociacija
    </h1>

    <div class="p-6 bg-white sm:rounded-lg shadow-sm">
      <div class="flex flex-col md:flex-row gap-6">
        <div class="flex-1">
          <h2 class="text-2xl font-semibold text-sky-900 mb-4">
            Kas yra PSSE asociacija?
          </h2>

          <p class="text-sky-900 leading-relaxed mb-4">
            PSSE asociacija – tai tarptautinė organizacija, kurios veikla
            remiasi šešių skoliozės gydymo mokyklų sukaupta patirtimi ir
            tradicijomis. Kiekviena iš šių mokyklų svariai prisidėjo prie
            skoliozei specifinių kineziterapinių pratimų plėtros bei metodinių
            principų gryninimo.
          </p>

          <p class="text-sky-900 leading-relaxed mb-4">
            Asociacijos vizija – tapti pirmaujančia pasauline organizacija,
            įgalinančia kineziterapeutus padėti skoliozę turintiems asmenims
            visais amžiaus tarpsniais, užtikrinant įrodymais grįstą ir į
            pacientą orientuotą gydymą.
          </p>

          <h3 class="text-sky-700 text-xl font-medium leading-relaxed mb-2">
            Pagrindiniai tikslai:
          </h3>

          <ul
            class="list-disc list-inside text-sky-900 leading-relaxed space-y-1 mb-4"
          >
            <li>
              Tarptautinis bendradarbiavimas ir žinių mainai tarp specialistų.
            </li>
            <li>
              Gydymo rezultatų gerinimas, teikiant apčiuopiamą naudą pacientams.
            </li>
            <li>Klinikinis meistriškumas ir teorinio pagrindimo gilinimas.</li>
            <li>Aukštų profesinio rengimo standartų puoselėjimas.</li>
          </ul>
        </div>

        <figure class="flex flex-col">
          <img
            src="/images/education/psse/logo-psse.webp"
            title="PSSE asociacija INNOVAMED"
            alt="PSSE asociacija INNOVAMED"
            class="rounded-md shadow-lg bg-sky-100 p-4"
          />
        </figure>
      </div>
    </div>

    <div class="p-6 bg-white sm:rounded-lg shadow-sm">
      <h2 class="text-2xl font-semibold text-sky-900 mb-4">
        Asociacijos vienijamos mokyklos
      </h2>

      <p class="text-sky-900 leading-relaxed mb-6">
        PSSE įsipareigoja puoselėti pamatines vertybes ir išsaugoti originalių
        metodų principus. Asociacija vienija šešias pripažintas skoliozės gydymo
        mokyklas:
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sky-900 mb-6">
        <ul class="list-disc list-inside space-y-1">
          <li><strong>Schroth metodas</strong> (Vokietija)</li>
          <li><strong>SEAS</strong> (Italija)</li>
          <li><strong>Rigo Concept BSPTS</strong> (Ispanija)</li>
        </ul>
        <ul class="list-disc list-inside space-y-1">
          <li><strong>Best Practice Schroth Academy</strong> (Vokietija)</li>
          <li><strong>FITS metodas</strong> (Lenkija)</li>
          <li><strong>Side Shift metodas</strong> (Anglija)</li>
        </ul>
      </div>

      [Image showing the global reach and different schools of the PSSE
      association]
    </div>

    <section class="p-6 bg-white sm:rounded-lg shadow-sm">
      <div class="flex flex-col md:flex-row gap-6">
        <div class="flex-1">
          <h2 class="text-2xl font-semibold text-sky-900 mb-4">
            Mokslinis pagrindas ir vertinimas
          </h2>

          <p class="text-sky-900 leading-relaxed mb-4">
            Vienas pagrindinių PSSE veiklos ramsčių – standartizuotų, patikimų
            ir į pacientą orientuotų rezultatų vertinimo priemonių kūrimas. Tai
            leidžia kineziterapeutams priimti geresnius klinikinius sprendimus
            ir prasmingai stebėti pacientų pažangą.
          </p>

          <div class="bg-sky-50 p-4 rounded-md border-l-4 border-sky-600">
            <p class="text-sky-900 font-medium italic">
              Nors PSSE vienija šešias mokyklas, tik ISST Schroth ir SEAS
              metodikos turi daugiausiai aukštos kokybės mokslinių tyrimų bei
              yra dažniausiai cituojamos tarptautinėse gairėse dėl savo
              efektyvumo ir griežtos standartizacijos.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="p-6 bg-white sm:rounded-lg shadow-sm">
      <div class="flex flex-col md:flex-row gap-6">
        <div class="flex-1">
          <h2 class="text-2xl font-semibold text-sky-900 mb-4">
            INNOVAMED pasirinkimas
          </h2>

          <p class="text-sky-900 leading-relaxed mb-4">
            Mūsų kineziterapijos klinikų skoliozės gydymo centrai dirba
            vadovaudamiesi aukščiausiais PSSE ir SOSORT standartais. Mes
            renkamės taikyti būtent <strong>ISST Schroth</strong> bei
            <strong>SEAS</strong> metodikas, nes jos turi stipriausią mokslo
            įrodymų bazę.
          </p>

          <p class="text-sky-900 leading-relaxed">
            Metodikos, neturinčios pakankamo mokslinio pagrindimo, mūsų
            specialistų nėra rekomenduojamos, nes siekiame užtikrinti tik saugų
            ir moksliškai patvirtintą gydymą savo pacientams.
          </p>
        </div>
      </div>
    </section>

    <ContactTeaser />
  </LayoutPage>
</template>

<script setup>
import LayoutPage from '../layouts/LayoutPage.vue'
import ContactTeaser from '../components/sections/ContactTeaser.vue'
</script>
