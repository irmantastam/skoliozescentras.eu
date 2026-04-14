<template>
  <LayoutPage>
    <h1 class="text-3xl font-semibold text-sky-600 mx-6 text-center">
      Idiopatinė skoliozė: pagrindiniai simptomai ir gydymas
    </h1>

    <section class="p-6 bg-white sm:rounded-lg shadow-sm">
      <p class="text-sky-900 leading-relaxed mb-6">
        Dažniausiai žmonės, pastebėję kūno asimetriją ar pajutę neaiškų nugaros
        diskomfortą, nesupranta, kad tai galėtų būti idiopatinė skoliozė. Ši
        būklė vystosi lėtai, todėl ankstyvieji požymiai gali būti nepastebėti.
        Šiame straipsnyje sužinosite, kokie požymiai gali indikuoti idiopatinę
        skoliozę, kokios jos atsiradimo priežastys ir kokie gydymo metodai yra
        taikomi.
      </p>

      <div class="md:w-full">
        <h2 class="text-2xl font-semibold text-sky-900 mb-4">
          Kas yra idiopatinė skoliozė?
        </h2>

        <p class="text-sky-900 leading-relaxed mb-4">
          Idiopatinė skoliozė – tai stuburo išlinkimas į šoną trijose
          plokštumose, kai tiksli priežastis nėra nustatyta. Dažniausiai
          pasireiškia paauglystėje ir įgauna <b>S arba C formą</b>. Idiopatinė
          skoliozė skiriasi nuo kitų skoliozės rūšių, nes neatsiranda dėl
          aiškiai nustatomos priežasties, pavyzdžiui, įgimto stuburo defekto,
          todėl dažnai vystosi nepastebimai.
        </p>
        <p class="text-sky-900 leading-relaxed mb-4">
          Šios skoliozės pirmuosius požymius galime pastebėti vizualiai: vienas
          petys atrodo aukščiau, drabužiai krenta netolygiai, o lenkiantis į
          priekį pastebimas šonkaulių iškilimas, sukeltas stuburo rotacijos.
          Idiopatinė skoliozė – pati dažniausia skoliozės forma.
        </p>
      </div>
    </section>

    <section class="p-6 bg-white sm:rounded-lg shadow-sm">
      <h2 class="text-2xl font-semibold text-sky-900 mb-4">
        Idiopatinės skoliozės simptomai
      </h2>

      <p class="text-sky-900 leading-relaxed mb-4">
        Idiopatinės skoliozės simptomai gali pasireikšti skirtingai - nuo vos
        pastebimų iki aiškiai matomų kūno pokyčių. Skoliozės požymiai vystosi
        lėtai, todėl ne visada galime pastebėti, kad stuburas ima krypti. Laiku
        atpažinti simptomai leidžia greičiau pritaikyti tinkamą gydymo būdą ir
        sumažinti ligos progresavimą.
      </p>

      <div class="space-y-4 mb-6">
        <h3 class="text-xl font-semibold text-sky-800 mb-2">Nelygūs pečiai</h3>
        <p class="text-sky-900 leading-relaxed">
          Dažniausiai idiopatinė skoliozė pradžioje pasireiškia vieno peties
          pakilimu, kuris tampa pastebimas stebint kūno simetriją.
        </p>

        <h3 class="text-xl font-semibold text-sky-800 mb-2">
          Šonkaulinės kuprelės išryškėjimas
        </h3>
        <p class="text-sky-900 leading-relaxed">
          Stovint arba lenkiantis į priekį gali matytis didesnis šonkaulių
          iškilimas vienoje nugaros pusėje. Tai atsiranda dėl stuburo rotacijos,
          kai stuburas ne tik krypsta į šoną, bet ir rotuoja.
        </p>

        <h3 class="text-xl font-semibold text-sky-800 mb-2">
          Nugaros skausmas
        </h3>
        <p class="text-sky-900 leading-relaxed">
          Nugaros skausmas dažniausiai atsiranda dėl to, kad raumenys
          kompensuoja stuburo iškrypimą ir dirba nevienodai.
        </p>

        <h3 class="text-xl font-semibold text-sky-800 mb-2">
          Nelygus liemens trikampis
        </h3>
        <p class="text-sky-900 leading-relaxed">
          Vienoje pusėje liemens linija gali atrodyti lyg būtų tiesesnė, o
          kitoje – įgaubtesnė.
        </p>

        <h3 class="text-xl font-semibold text-sky-800 mb-2">
          Vienas klubas aukščiau už kitą
        </h3>
        <p class="text-sky-900 leading-relaxed">
          Gali būti matoma, kad vienas klubas pakilęs aukščiau. Nevienodą klubų
          aukštį gali lemti tam tikras skoliozės tipas arba kojų ilgio
          skirtumas.
        </p>
      </div>

      <p class="text-sky-900 leading-relaxed">
        Jeigu pastebite šiuos požymius, rekomenduojama kreiptis į
        <RouterLink
          :to="{ name: 'home' }"
          class="text-sky-600 hover:text-sky-500 transition-colors duration-300 hover:underline"
        >
          Skoliozės gydymo centrą</RouterLink
        >. Čia siūlomas
        <RouterLink
          :to="{ name: 'testing' }"
          class="text-sky-600 hover:text-sky-500 transition-colors duration-300 hover:underline"
        >
          nemokamas laikysenos testavimas</RouterLink
        >.
      </p>
    </section>

    <section class="p-6 bg-white sm:rounded-lg shadow-sm">
      <h2 class="text-2xl font-semibold text-sky-900 mb-4">
        Idiopatinės skoliozės atsiradimo priežastys
      </h2>

      <div class="md:w-full">
        <p class="text-sky-900 leading-relaxed mb-4">
          Tikslios idiopatinės skoliozės priežastys nėra nustatytos, tačiau yra
          keletas galimų veiksnių, kodėl ji galėtų atsirasti:
        </p>

        <ul class="list-disc list-inside text-gray-700 space-y-2 mb-4">
          <li>
            <b>Genetiniai veiksniai</b> - tikimybė susirgti yra didesnė šeimose,
            kuriose jau yra buvę šios ligos atvejų.
          </li>
          <li>
            <b>Augimo tempas</b> - dauguma atvejų diagnozuojami greito augimo
            laikotarpiu, ypač paauglystėje.
          </li>
          <li>
            <b>Hormonų disbalansas</b> - gali turėti įtakos, nes veikia kaulų
            augimą bei organizmo vystymąsi.
          </li>
          <li>
            <b>Biomechaniniai veiksniai</b> - netolygus raumenų tonusas,
            vienpusis fizinis krūvis ar netinkama laikysena gali paveikti
            stuburą.
          </li>
        </ul>
      </div>
    </section>

    <section class="p-6 bg-white sm:rounded-lg shadow-sm">
      <h2 class="text-2xl font-semibold text-sky-900 mb-4">
        Idiopatinės skoliozės gydymo būdai
      </h2>

      <p class="text-sky-900 leading-relaxed mb-6">
        Idiopatinės skoliozės palikti be priežiūros nereikėtų - tai rimta
        stuburo būklė, kuri negydoma gali progresuoti. Anksti parinktas
        individualus gydymo planas gali užkirsti kelią stuburo iškrypimo
        progresavimui.
      </p>

      <div class="space-y-6">
        <div
          class="p-5 border-t-4 border-sky-600 bg-gray-50 rounded-lg shadow-md"
        >
          <h3 class="text-xl font-semibold text-sky-800 mb-2">Stebėjimas</h3>
          <p class="text-sky-900 text-sm">
            Jeigu stuburo iškrypimas nesiekia 10° pagal Kobo kampą, dažniausiai
            pakanka tik stebėti būklę ir reguliariai lankytis pas
            kineziterapeutą.
          </p>
        </div>

        <div
          class="p-5 border-t-4 border-sky-600 bg-gray-50 rounded-lg shadow-md"
        >
          <h3 class="text-xl font-semibold text-sky-800 mb-2">
            Kineziterapija
          </h3>
          <p class="text-sky-900 text-sm">
            Kai iškrypimas siekia 10°–25°, taikoma specializuota
            <RouterLink
              :to="{ name: 'treatment' }"
              class="text-sky-600 hover:text-sky-500 underline"
              >Schroth metodika</RouterLink
            >. Tai moksliškai pagrįstas būdas, apimantis asimetrinius pratimus
            ir korekcinį kvėpavimą.
          </p>
        </div>

        <div
          class="p-5 border-t-4 border-sky-600 bg-gray-50 rounded-lg shadow-md"
        >
          <h3 class="text-xl font-semibold text-sky-800 mb-2">
            Korekcinis įtvaras
          </h3>
          <p class="text-sky-900 text-sm">
            Esant didesniam nei 25° iškrypimui, skiriamas specialus stuburą
            koreguojantis įtvaras, kuris stabdo progresavimą ir palaiko
            terapijos efektyvumą.
          </p>
        </div>

        <div
          class="p-5 border-t-4 border-sky-600 bg-gray-50 rounded-lg shadow-md"
        >
          <h3 class="text-xl font-semibold text-sky-800 mb-2">Operacija</h3>
          <p class="text-sky-900 text-sm">
            Kai iškrypimas viršija 45°, svarstoma operacija, siekiant užkirsti
            kelią tolimesniam stuburo krypimui.
          </p>
        </div>
      </div>
    </section>

    <section class="p-6 bg-white sm:rounded-lg shadow-sm">
      <h2 class="text-2xl font-semibold text-sky-900 mb-4">
        Patarimai turint idiopatinę skoliozę
      </h2>
      <ul class="list-disc list-inside text-gray-700 space-y-2">
        <li>Reguliariai lankykitės pas kineziterapeutą.</li>
        <li>
          Stenkitės taisyklingai sėdėti ir stovėti, neperkelkite svorio tik ant
          vienos pusės.
        </li>
        <li>Pasirūpinkite ergonomiška darbo ir mokymosi aplinka.</li>
        <li>Stiprinkite nugaros ir pilvo raumenis.</li>
      </ul>
    </section>

    <section class="p-6 bg-white sm:rounded-lg shadow-sm mb-6 mt-8">
      <h2 class="text-2xl font-semibold text-sky-900 mb-6 text-center">
        Dažniausiai užduodami klausimai
      </h2>

      <div class="space-y-4">
        <FAQItem
          question="Ar įmanoma išgydyti idiopatinę skoliozę?"
          answer="Visiškai išgydyti idiopatinės skoliozės neįmanoma, tačiau ją galima kontroliuoti kineziterapijos pagalba, sustabdant stuburo iškrypimo didėjimą."
        />
        <FAQItem
          question="Kokios gali būti negydomos idiopatinės skoliozės pasekmės?"
          answer="Negydoma skoliozė gali sukelti lėtinius nugaros skausmus, sumažėjusį fizinį pajėgumą bei kvėpavimo sunkumus."
        />
        <FAQItem
          question="Ar galima sportuoti turint idiopatinę skoliozę?"
          answer="Taip, sportuoti galima. Rekomenduojamos šakos: rankinis, futbolas, kovos menai. Reikėtų vengti stiprių vienpusių judesių ir profesionalaus sporto."
        />
        <FAQItem
          question="Kaip sustabdyti idiopatinės skoliozės progresavimą?"
          answer="Progresavimą galima sustabdyti reguliariai atliekant Schroth metodo pratimus, laikantis taisyklingos laikysenos ir, jei reikia, naudojant korekcinį įtvarą."
        />
      </div>
    </section>

    <ContactTeaser
      heading="Pasitarkite su specialistu"
      sub-heading="Pastebėjote laikysenos asimetriją? Užsiregistruokite konsultacijai jau šiandien."
    />
  </LayoutPage>
</template>

<script setup>
import LayoutPage from '../../layouts/LayoutPage.vue'
import ContactTeaser from '../../components/sections/ContactTeaser.vue'
import FAQItem from '../../components/elements/FAQItem.vue'
</script>
