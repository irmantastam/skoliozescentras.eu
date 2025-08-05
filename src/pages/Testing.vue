<template>
  <LayoutPage>
    <h2 class="text-3xl font-semibold text-sky-600 mx-6">
      Nemokamas skoliozės testavimas
    </h2>

    <div class="p-6 bg-white sm:rounded-lg shadow-sm">
      <h3 class="text-2xl font-semibold text-sky-900 mb-4">
        Kas tai ir kodėl tai svarbu?
      </h3>
      <p class="text-sky-900 leading-relaxed mb-4">
        Skoliozės testavimas leidžia laiku pastebėti pakitimus ir imtis reikiamų
        priemonių. Testas trunka vos kelias minutes ir yra visiškai
        neskausmingas. Jį rekomenduojama atlikti visiems vaikams nuo 7 metų ir
        paaugliams augimo šuolio metu.
      </p>

      <h4 class="text-xl font-medium text-sky-700 mb-2">Testavimo eiga</h4>
      <p class="text-sky-900 leading-relaxed mb-4">
        Testavimo metu specialistas įvertina laikyseną, stuburo liniją ir pečių
        simetriją. Naudojamas specialus skoliozės matuoklis – skoliometras,
        kuris padeda nustatyti stuburo pasvirimo kampą. Jei pastebimi įtarimai
        dėl skoliozės, pacientas siunčiamas išsamesniam ištyrimui. Ankstyvas
        gydymas padeda išvengti operacijos ir ilgalaikių stuburo problemų.
        Dažniausiai taikomos korekcinės mankštos, laikysenos gerinimo pratimai
        ar individualūs korsetai.
      </p>
    </div>

    <section
      class="p-6 bg-white sm:rounded-lg shadow-sm border border-gray-200"
    >
      <h3 class="text-2xl font-semibold text-sky-900 mb-4">
        Registracija nemokamam testavimui
      </h3>
      <p class="text-sky-900 leading-relaxed mb-4">
        Tėvai ir globėjai raginami nedelsti – kuo anksčiau nustatoma skoliozė,
        tuo geresni gydymo rezultatai. Nemokamas testavimas atliekamas INNOVAMED
        Kineziterapijos Klinikose Vilniuje ir Kaune iš anksto susitarus. Tai
        puiki proga rūpintis vaikų sveikata be papildomų išlaidų. Svarbiausia –
        prevencija ir nuolatinė stuburo būklės stebėsena augimo metu.
      </p>

      <h4 class="text-xl font-medium text-sky-700 mb-2">Kontaktai</h4>
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
