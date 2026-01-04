<template>
  <LayoutPage>
    <h1 class="text-3xl font-semibold text-sky-600 mx-6 text-center">
      Kas yra skoliozė ir kaip ji gydoma?
    </h1>

    <section class="p-6 bg-white sm:rounded-lg shadow-sm">
      <p class="text-sky-900 leading-relaxed mb-6">
        Skoliozė yra rimta stuburo deformacija, kuri dažniausiai išsivysto
        vaikams augimo šuolio etape. Skoliozė gali išsivystyti tiek vaikams,
        tiek ir suaugusiems. Per vėlai pastebėta skoliozė gali sukelti
        laikysenos, kūno pokyčius, lėtinius nugaros skausmus, vidaus organų
        veiklos sutrikimus. Šiame tekste sužinosite, kokios yra skoliozės rūšys,
        aptarsime jos simptomus, bei kokia gydymo metodika yra taikoma
        skirtingais skoliozės atvejais.
      </p>

      <div class="flex flex-col md:flex-row gap-6">
        <div class="md:w-full">
          <h2 class="text-2xl font-semibold text-sky-900 mb-4">
            Kas yra skoliozė?
          </h2>

          <p class="text-sky-900 leading-relaxed mb-4">
            <b>Skoliozė</b> - stuburo krypimas trijose plokštumose. Tai trimatė
            stuburo deformacija, jos metu stubure vyksta krypimas, sukimasis ir
            pasvirimas atgal, dėl to stuburas praranda tiesią liniją ir įgauna
            <b>S arba C formą</b>. Skoliozė gali būti įgimta ir pasireikšti nuo
            pat gimimo, tačiau ji gali išsivystyti ir vėlesniame amžiuje.
            Stuburo iškrypimas gali pasireikšti įvairiose vietose - tiek
            krūtininėje, tiek juosmeninėje dalyje.
          </p>

          <p class="text-sky-900 leading-relaxed mb-4">
            Skoliozė gali atsirasti dėl įvairių priežasčių, tokių kaip
            slankstelių raidos sutrikimas, genetika, raumenų ar hormonų
            disbalansas. Laiku diagnozuota skoliozė padeda išvengti rimtesnių
            komplikacijų, pavyzdžiui vidaus organų (širdies, plaučių) veiklos
            sutrikimų ir tuo pačiu mažesnė skoliozės progresavimo rizika.
          </p>

          <p class="text-sky-900 leading-relaxed">
            Yra išskiriamos kelios skoliozės rūšys: <b>įgyta</b> ir
            <b>įgimta</b> skoliozė. Įgyta skoliozė dažniausiai vadinama -
            <b>idiopatine</b>, kadangi 90 proc. atvejų yra nežinomos kilmės,
            tačiau likę 10 proc. sudaro aiškios priežastys, tokios kaip trauma
            avarijos metu arba neuroraumeninė, degeneracinė (suaugusiųjų)
            skoliozė. Taip pat skoliozė dar klasifikuojama į įgimtą skoliozę -
            skoliozę, kuri veikiausiai susiformavo dėl stuburo slankstelių
            anomalijų dar besilaukiančios mamos įsčiose.
          </p>
        </div>
      </div>
    </section>

    <section class="p-6 bg-white sm:rounded-lg shadow-sm">
      <h2 class="text-2xl font-semibold text-sky-900 mb-4">
        Kaip atpažinti skoliozę?
      </h2>

      <div class="flex flex-col md:flex-row gap-6">
        <div class="md:w-full">
          <p class="text-sky-900 leading-relaxed mb-4">
            Ankstyvas
            <RouterLink
              :to="{ name: 'diagnostics' }"
              class="text-sky-600 hover:text-sky-500 transition-colors duration-300 hover:underline"
            >
              skoliozės diagnozavimas</RouterLink
            >
            yra ypač svarbus norint sustabdyti ligos progresavimą bei leidžia
            parinkti geriausius gydymo metodus ir planą. Skoliozei diagnozuoti
            yra paprastas testas, kuri galima atlikti ir namuose, tai
            <b>Adams - į priekį pasilenkimo testas</b>.
          </p>

          <p class="text-sky-900 leading-relaxed mb-4 font-bold">
            Adams testo eiga:
          </p>
          <ol class="list-decimal list-inside text-gray-700 space-y-2 mb-6">
            <li>Asmuo turi stovėti klubų plotyje, delnus sunerti kartu.</li>
            <li>Pasilenkti į priekį, rankas ir galvą nuleisdamas žemyn.</li>
            <li>
              Jei pasilenkus matoma krūtinės dalyje šonkaulinė kuprelė ar
              juosmens srityje raumeninis volelis, galime įtarti skoliozę.
              Testas atliekamas be drabužių.
            </li>
          </ol>

          <p class="text-sky-900 leading-relaxed mb-4 font-bold">
            Skoliozei būdingi šie požymiai:
          </p>
          <ul class="list-disc list-inside text-gray-700 space-y-2">
            <li>Vienas petys labiau rotuotas į priekį nei kitas.</li>
            <li>Viena mentė labiau atsikišusi nei kita.</li>
            <li>Žiūrint iš nugaros, matoma kreiva stuburo linija.</li>
            <li>Juosmens srityje matosi raukšlė.</li>
            <li>Vienas klubas aukščiau nei kitas.</li>
            <li>Iš priekio ryškiau matosi vienos pusės šonkauliai.</li>
            <li>
              Pasilenkus išryškėja raumenų volelis juosmens srityje ir/ar
              šonkaulinė kuprelė krūtinės srityje.
            </li>
          </ul>

          <p class="text-sky-900 leading-relaxed mt-6">
            Jeigu pastebite šiuos požymius ir įtariate, kad jums arba jūsų
            vaikui gali būti skoliozė, rekomenduojama kreiptis į
            <RouterLink
              :to="{ name: 'home' }"
              class="text-sky-600 hover:text-sky-500 transition-colors duration-300 hover:underline"
            >
              skoliozės gydymo centrą</RouterLink
            >. Čia teikiama profesionali pagalba, o taip pat siūlomas
            <RouterLink
              :to="{ name: 'testing' }"
              class="text-sky-600 hover:text-sky-500 transition-colors duration-300 hover:underline"
            >
              nemokamas laikysenos testavimas</RouterLink
            >.
          </p>
        </div>
      </div>
    </section>

    <section class="p-6 bg-white sm:rounded-lg shadow-sm">
      <h2 class="text-2xl font-semibold text-sky-900 mb-4">
        Skoliozės laipsniai ir gydymo planas
      </h2>

      <p class="text-sky-900 leading-relaxed mb-4">
        Taisyklingas gydymas yra labai svarbus aspektas skoliozės valdyme, todėl
        yra svarbu nustatyti, koks yra skoliozės laipsnis. Atlikus rentgeno
        tyrimą nuotraukoje matuojamas <b>Kobo kampas</b> ir nustatomas iškrypimo
        laipsnis. Remiantis Kobo kampu išskiriamos 4 pagrindinės skoliozės
        stadijos:
      </p>

      <div
        class="overflow-x-auto mb-8 shadow-md rounded-lg border border-sky-100"
      >
        <table class="min-w-full divide-y divide-sky-200">
          <thead class="bg-sky-50">
            <tr>
              <th
                scope="col"
                class="px-6 py-3 text-left text-xs font-medium text-sky-600 uppercase tracking-wider"
              >
                Kobo kampas
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-left text-xs font-medium text-sky-600 uppercase tracking-wider"
              >
                Skoliozės laipsnis
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-left text-xs font-medium text-sky-600 uppercase tracking-wider"
              >
                Rekomenduojamas gydymas
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr>
              <td
                class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
              >
                &lt; 10°
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Nėra skoliozės, bet yra stuburo krypties požymiai.
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Stebėjimas. Galima taikyti simetrinius juosmens stabilumo
                pratimus.
              </td>
            </tr>
            <tr>
              <td
                class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
              >
                10° - 25°
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Maža skoliozė.
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Pradedama taikyti <b>Schroth terapija</b>.
              </td>
            </tr>
            <tr>
              <td
                class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
              >
                25° - 40°
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Vidutinė skoliozė.
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Intensyvi <b>Schroth terapija</b> ir specialus
                <b>korekcinis korsetas</b>.
              </td>
            </tr>
            <tr>
              <td
                class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
              >
                &gt; 40°
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Didelė skoliozė.
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Konsultacijos dėl <b>operacijos</b> (priklausomai nuo amžiaus).
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 class="text-2xl font-semibold text-sky-900 mb-4 mt-6">
        Pagrindinės skoliozės priežastys
      </h2>

      <div class="flex flex-col md:flex-row gap-6">
        <div class="md:w-full">
          <p class="text-sky-900 leading-relaxed mb-4">
            Yra įvairių priežasčių, kodėl gali išsivystyti skoliozė. Dažniausios
            skoliozės priežastys:
          </p>

          <ul class="list-disc list-inside text-gray-700 space-y-2 mb-4">
            <li>
              <b>Genetika:</b> Yra pastebima, kad idiopatinė skoliozė išsivysto
              dėl tam tikrų genų.
            </li>
            <li>
              <b>Centrinės nervų sistemos sutrikimas:</b> Manoma, kad randami
              įvairūs funkciniai ir morfologiniai centrinės nervų sistemos
              pakitimai.
            </li>
            <li>
              <b>Hormonų disbalansas:</b> Sutrikusi estrogeno, melatonino,
              augimo hormono ir kitų hormonų veikla.
            </li>
            <li>
              <b>Raumenų disbalansas:</b> Silpnesni nugaros raumenys gali
              paskatinti stuburo krypimą.
            </li>
          </ul>

          <p class="text-sky-900 leading-relaxed">
            Šiuos reiškinius galima plačiai suskirstyti į keturias kategorijas:
            asimetriškas kaulų augimo reguliacijos sutrikimas, kaulų polinkis
            deformuotis, nenormalus pasyvus stuburo sistemos palaikymas ir
            sutrikęs aktyvus stuburo sistemos palaikymas.
          </p>
        </div>
      </div>
    </section>

    <section class="p-6 bg-white sm:rounded-lg shadow-sm">
      <h2 class="text-2xl font-semibold text-sky-900 mb-4">
        Skoliozės gydymas: Detalizavimas
      </h2>

      <p class="text-sky-900 leading-relaxed mb-6">
        Skoliozė yra rimta būklė, kurios ignoruoti negalima. Anksti pastebėti
        simptomai ir pradėtas taisyklingas gydymas gali sumažinti jos
        progresavimą. Gydymo planas kiekvienam asmeniui yra sudaromas
        individualiai, atsižvelgiant į skoliozės laipsnį.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          class="p-5 border-t-4 border-sky-400 bg-gray-50 rounded-lg shadow-md"
        >
          <h3 class="text-xl font-semibold text-sky-800 mb-2">
            Stebėjimas (&lt;10° Kobo)
          </h3>
          <p class="text-sky-900 text-sm">
            Jeigu skoliozės laipsnis nustatomas mažesnis negu 10° pagal Kobo
            kampą, dažniausiai pakanka stebėjimo. Galima taikyti simetrinius
            juosmens stabilumo pratimus. Pacientas turėtų reguliariai lankytis
            pas kineziterapeutą.
          </p>
        </div>

        <div
          class="p-5 border-t-4 border-sky-600 bg-gray-50 rounded-lg shadow-md"
        >
          <h3 class="text-xl font-semibold text-sky-800 mb-2">
            Kineziterapija (10°-25° Kobo)
          </h3>
          <p class="text-sky-900 text-sm">
            Šiuo etapu pradedama taikyti <b>Schroth terapija</b>. Tai didžiausią
            mokslinį pagrindimą turintis metodas. Terapijos metu taikomi
            asimetriniai pratimai, pritaikyti įdubusioms ir išgaubtoms stuburo
            pusėms kartu su korekciniu kvėpavimu.
          </p>
        </div>

        <div
          class="p-5 border-t-4 border-sky-700 bg-gray-50 rounded-lg shadow-md"
        >
          <h3 class="text-xl font-semibold text-sky-800 mb-2">
            Korekcinis įtvaras (&gt;25° Kobo)
          </h3>
          <p class="text-sky-900 text-sm">
            Kai skoliozės laipsnis siekia daugiau nei 25°, skiriamas specialus
            korekcinis įtvaras kartu su Schroth terapija. Korsetas padeda
            stabilizuoti stuburą ir sumažinti progresavimą.
          </p>
        </div>

        <div
          class="p-5 border-t-4 border-red-500 bg-gray-50 rounded-lg shadow-md"
        >
          <h3 class="text-xl font-semibold text-sky-800 mb-2">
            Operacija (&gt;45° Kobo)
          </h3>
          <p class="text-sky-900 text-sm">
            Kai stuburo iškrypimas yra daugiau nei 45°, dažniausiai yra
            rekomenduojama <b>chirurginė intervencija</b>. Tai leidžia išspręsti
            sunkios skoliozės problemas ir ženkliai pagerinti gyvenimo kokybę.
          </p>
        </div>
      </div>
    </section>

    <section class="p-6 bg-white sm:rounded-lg shadow-sm">
      <h2 class="text-2xl font-semibold text-sky-900 mb-4">
        Pratimai skoliozei gydyti
      </h2>

      <div class="flex flex-col md:flex-row gap-6">
        <div class="md:w-full">
          <p class="text-sky-900 leading-relaxed mb-4">
            Skoliozė gydoma pasitelkiant specialiai pritaikytus pratimus, kurie
            koreguoja laikyseną ir stiprina raumenis. Viena efektyviausių
            metodikų yra <b>Schroth metodas</b>. Šios metodikos metu yra
            derinami asimetriniai pratimai, kvėpavimas ir kūno laikysenos
            kontrolė.
          </p>

          <p class="text-sky-900 leading-relaxed mb-4 font-semibold">
            Pratimų programa visuomet pritaikoma individualiai, atsižvelgiant į
            žmogaus amžių, skoliozės laipsnį ir bendrą fizinę būklę.
          </p>

          <p class="text-sky-900 leading-relaxed mb-2">
            <b>Kineziterapijoje taikomi pratimai gali būti kelių rūšių:</b>
          </p>

          <ul class="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <b>Mobilizaciniai pratimai:</b> skirti pagerinti stuburo ir
              sąnarių paslankumą.
            </li>
            <li>
              <b>Kvėpavimo pratimai:</b> padeda atkurti taisyklingą kvėpavimą,
              svarbų laikysenai ir vidaus organų veiklai.
            </li>
            <li>
              <b>Aktyvavimo pratimai:</b> orientuoti į silpnesnių raumenų grupių
              stiprinimą, atkurti pusiausvyrą.
            </li>
            <li>
              <b>Tempimo pratimai:</b> atliekami siekiant sumažinti įsitempusių
              ar sutrumpėjusių raumenų poveikį stuburui.
            </li>
            <li>
              <b>Atpalaidavimo pratimai:</b> padeda sumažinti įtampą ir atkurti
              tinkamą kūno padėtį.
            </li>
          </ul>

          <p class="text-sky-900 leading-relaxed mt-4 italic text-sm">
            Nuosekliai atliekami pratimai padeda palaipsniui stiprinti raumenis
            ir sustabdyti ligos progresą. Pratimus reikėtų atlikti bent penkis
            kartus per savaitę po pusvalandį.
          </p>
        </div>
      </div>
    </section>

    <section class="p-6 bg-white sm:rounded-lg shadow-sm mb-6 mt-8">
      <h2 class="text-2xl font-semibold text-sky-900 mb-6 text-center">
        Dažniausiai užduodami klausimai
      </h2>

      <div class="space-y-4">
        <FAQItem
          question="Kas sutrinka organizme sergant skolioze?"
          answer="Sergant skolioze sutrinka stuburo ašis, dėl to kinta laikysena, atsiranda nugaros skausmai. Vėlesnėse stadijose gali būti paveikiami vidaus organai, atsiranda kvėpavimo sutrikimai."
        />
        <FAQItem
          question="Kaip diagnozuojama skoliozė?"
          answer="Skoliozė diagnozuojama atlikus fizinę apžiūrą, atliekant Adams testą ir stuburo rentgeno tyrimą, kuris leidžia tiksliai nustatyti skoliozės laipsnį pagal Kobo kampą."
        />
        <FAQItem
          question="Ar skoliozė yra išgydoma?"
          answer="Skoliozė nėra visiškai išgydoma, tačiau anksti pastebėti simptomai ir laiku pradėtas gydymas padeda sustabdyti ar sumažinti progresavimą, pagerinti laikyseną ir sumažinti skausmus."
        />
        <FAQItem
          question="Kokios yra skoliozės rūšys?"
          answer="Pagrindinės skoliozės rūšys yra įgimta ir įgyta skoliozė. Labiausiai žinoma įgyta skoliozė - idiopatinė skoliozė (nežinomos kilmės)."
        />
        <FAQItem
          question="Kodėl skoliozė dažniausiai pasireiškia paauglystėje?"
          answer="Paauglystėje skoliozė pasireiškia dažniau, nes stuburas sparčiai auga. Manoma, kad stuburo smegenys linkusios augti greičiau, todėl neturėdamos vietos pradeda sukti stuburą. Taip pat skoliozė gali išsivystyti paauglystėje dėl hormoninių pokyčių."
        />
        <FAQItem
          question="Kuo skiriasi skoliozės gydymas suaugusiems ir vaikams?"
          answer="Gydant skoliozę vaikams ir paaugliams pagrindinis tikslas yra stabdoma stuburo krypimo progresija. Gydant suaugusiųjų skoliozę pagrindiniai tikslai - palaikyti esamą stuburo linkį, skausmo prevencija."
        />
        <FAQItem
          question="Ar galima sportuoti sergant skolioze?"
          answer="Sportuoti sergant skolioze galima, tačiau svarbu pasirinkti tinkamas veiklas, kurios neapkrautų stuburo. Geriausios sporto šakos, pagal mokslinius tyrimus, yra rankinis, futbolas, kovos menai. Netinkamas plaukimas, šokiai ir tinklinis."
        />
        <FAQItem
          question="Kokios gali būti negydomos skoliozės pasekmės?"
          answer="Negydoma skoliozė gali sukelti stiprias pasekmes, tokias kaip, stipri kūno deformacija vidaus organų veiklos sutrikimai, kvėpavimo funkcijos sutrikimai, skausmas, depresija."
        />
      </div>
    </section>

    <ContactTeaser
      heading="Pasitarkite su specialistu"
      sub-heading="Įtariate skoliozę? Užsiregistruokite konsultacijai ir sužinokite geriausią gydymo planą."
    />
  </LayoutPage>
</template>

<script setup>
import LayoutPage from '../../layouts/LayoutPage.vue'
import ContactTeaser from '../../components/sections/ContactTeaser.vue'
import FAQItem from '../../components/elements/FAQItem.vue'
</script>
