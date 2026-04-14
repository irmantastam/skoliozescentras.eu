<template>
  <LayoutPage>
    <h1 class="text-3xl font-semibold text-sky-600 mx-6 text-center">
      Reabilitacija po skoliozės operacijos: viskas, ką reikia žinoti
    </h1>

    <section class="p-6 bg-white sm:rounded-lg shadow-sm">
      <p class="text-sky-900 leading-relaxed mb-6">
        Skoliozė - tai trimatė stuburo deformacija, kurios metu stubure vyksta
        krypimas, sukimasis ir pasvirimas atgal, ko pasekoje stuburas praranda
        tiesią liniją. Dažniausiai
        <RouterLink
          :to="{ name: 'straipsniai-skolioze' }"
          class="text-sky-600 hover:text-sky-500 transition-colors duration-300 hover:underline"
          >skoliozė</RouterLink
        >
        vystosi vaikystėje ir paauglystėje, tačiau gali pasireikšti ir
        suaugusiesiems. Ši liga gali sukelti fizinį diskomfortą, skausmą ir
        judėjimo apribojimus, todėl gydymas yra būtinas. Sunkiais atvejais, kai
        konservatyvūs gydymo metodai, tokie kaip Schroth terapija, nepadeda,
        turi būti atliekama operacija.
      </p>
      <p class="text-sky-900 leading-relaxed">
        Tai yra rimta ir sudėtinga procedūra, todėl po operacijos būtina
        reabilitacija. Reabilitacija padeda užtikrinti sklandų gijimą, atstatyti
        liemens funkciją bei sumažinti skausmą. Šiame tekste sužinosite, kaip
        vyksta reabilitacija po skoliozės operacijos, kokie jos etapai, ko
        negalima daryti po operacijos ir kokios galimos komplikacijos gali
        pasireikšti reabilitacijos metu.
      </p>
    </section>

    <section class="p-6 bg-white sm:rounded-lg shadow-sm">
      <h2 class="text-2xl font-semibold text-sky-900 mb-4">
        Reabilitacijos svarba po skoliozės operacijos
      </h2>
      <p class="text-sky-900 leading-relaxed mb-4">
        Reabilitacija po skoliozės operacijos yra pagrindinė gijimo proceso
        dalis. Tinkamas reabilitacijos planas padeda atkurti juosmens stabilumą
        ir raumenų stiprumą, sumažinti komplikacijų riziką bei užtikrinti, kad
        pacientas galėtų saugiai grįžti prie kasdieninės veiklos.
      </p>
      <p class="text-sky-900 leading-relaxed">
        Taip pat reabilitacijos ankstyvuoju laikotarpiu yra labai svarbu
        taisyklingi judesiai, kūno mechanika bei neutralios stuburo padėties
        išlaikymas atliekant kasdienes veiklas.
      </p>
    </section>

    <section class="p-6 bg-white sm:rounded-lg shadow-sm">
      <h2 class="text-2xl font-semibold text-sky-900 mb-4">
        Reabilitacijos etapai po skoliozės operacijos
      </h2>
      <p class="text-sky-900 leading-relaxed mb-6">
        Reabilitacija po skoliozės operacijos yra svarbus procesas, kuris
        skirstomas į etapus. Kiekvienas etapas pasižymi skirtingais
        reikalavimais ir tiksliais, priklausomai nuo paciento sveikatos būklės
        ir operacijos sudėtingumo.
      </p>

      <div
        class="overflow-x-auto border border-sky-100 rounded-lg shadow-inner"
      >
        <table class="w-full text-left border-collapse">
          <thead class="bg-sky-50 text-sky-900 uppercase text-xs">
            <tr>
              <th class="p-4 border-b">Etapas</th>
              <th class="p-4 border-b">Kas vyksta kūne / Pojūčiai</th>
              <th class="p-4 border-b">Galima daryti</th>
              <th class="p-4 border-b">Negalima daryti</th>
            </tr>
          </thead>
          <tbody class="text-sm text-sky-900 divide-y divide-sky-50">
            <tr class="hover:bg-sky-50/30 transition-colors">
              <td class="p-4 font-semibold align-top">
                Pooperacinis laikotarpis
                <p class="font-light mt-1">(0-2 sav.)</p>
              </td>
              <td class="p-4 align-top">
                Gijimo pradžia, kūnas silpnas. Jaučiamas skausmas, nuovargis,
                sunku judėti ir miegoti.
              </td>
              <td class="p-4 align-top italic">
                Lengvi pratimai pėdoms, keturgalvio aktyvacija, diafragminis
                kvėpavimas, izometriniai pilvo pratimai.
              </td>
              <td class="p-4 align-top text-red-700">
                Kelti sunkių daiktų, daryti staigių judesių, sukti ar lenkti
                stuburą.
              </td>
            </tr>
            <tr class="hover:bg-sky-50/30 transition-colors">
              <td class="p-4 font-semibold align-top">
                Judėjimo atkūrimas
                <p class="font-light mt-1">(2-6 sav.)</p>
              </td>
              <td class="p-4 align-top">
                Kūnas atsistatinėja, bet raumenys dar labai silpni. Skausmas
                mažėja, jaučiamas sustingimas.
              </td>
              <td class="p-4 align-top italic">
                Vaikščiojimas (iki 15-30 min.), galūnių stiprinimas, kvėpavimas
                išlaikant neutralią stuburo padėtį.
              </td>
              <td class="p-4 align-top text-red-700">
                Atlikti staigius judesius, per daug apkrauti kūną, tęsti
                pratimus, jei skauda.
              </td>
            </tr>
            <tr class="hover:bg-sky-50/30 transition-colors">
              <td class="p-4 font-semibold align-top">
                Stiprinimas
                <p class="font-light mt-1">(6-12 sav.)</p>
              </td>
              <td class="p-4 align-top">
                Kūnas stiprėja, raiščiai atsigauna. Judrumas gerėja, jaučiamas
                nuovargis po fizinio krūvio.
              </td>
              <td class="p-4 align-top italic">
                Stabilizaciniai liemens pratimai, neuromuskulinė kontrolė,
                lengvas pasipriešinimas, laikysenos mokymas.
              </td>
              <td class="p-4 align-top text-red-700">
                Intensyvūs krūviai, bėgimas, šokinėjimas, didelė ašinė apkrova
                stuburui.
              </td>
            </tr>
            <tr class="hover:bg-sky-50/30 transition-colors">
              <td class="p-4 font-semibold align-top">
                Atsigavimas
                <p class="font-light mt-1">(3-6 mėn.)</p>
              </td>
              <td class="p-4 align-top">
                Funkciniai judesiai beveik atstatyti. Gali jaustis lengvas
                diskomfortas didelio krūvio metu.
              </td>
              <td class="p-4 align-top italic">
                Koordinacijos, pusiausvyros pratimai, pritūpimai, ėjimas
                laiptais, tempimo pratimai.
              </td>
              <td class="p-4 align-top text-red-700">
                Pernešama per didelė apkrova be specialisto priežiūros,
                nekontroliuojami judesiai.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="p-6 bg-white sm:rounded-lg shadow-sm">
      <h2 class="text-2xl font-semibold text-sky-900 mb-4">
        Pooperacinis skoliozės gydymas
      </h2>
      <p class="text-sky-900 leading-relaxed mb-4">
        Pooperacinis skoliozės gydymas yra ilgalaikis procesas, apimantis
        įvairius metodus, kurie padeda pacientui greičiau atsigauti ir
        užtikrinti, kad stuburas būtų stabilus. Po operacijos pirmiausia dėmesys
        skiriamas skausmo malšinimui.
      </p>
      <p class="text-sky-900 leading-relaxed">
        Rekomenduojama pradėti fizioterapiją, kuri padeda stiprinti raumenis,
        gerinti galūnių funkciją ir bendrą kūno stabilumą. Svarbi gydymo dalis
        yra individualiai parinkti specialūs pratimai. Jų pagalba greičiau
        sugrįžta raumenų jėga, pagerėja laikysena, sumažėja stuburo apkrova.
        Taip pat jie padeda gerinti kvėpavimo funkciją, raumenų koordinaciją ir
        bendrą savijautą. Svarbu žinoti, kad kiekvieno paciento atsistatymo
        procesas gali skirtis. Dėl to gydymo planas sudaromas individualiai,
        atsižvelgiant į operacijos sudėtingumą, paciento amžių ir bendrą
        sveikatos būklę.
      </p>
    </section>

    <section class="p-6 bg-white sm:rounded-lg shadow-sm">
      <h2 class="text-2xl font-semibold text-sky-900 mb-4">
        Reabilitacijos po skoliozės operacijos trukmė
      </h2>
      <p class="text-sky-900 leading-relaxed mb-4">
        Reabilitacijos po skoliozės operacijos trukmė priklauso nuo daugybės
        veiksnių. Eiga dažniausiai skirstoma į kelias fazes, kurių metu
        palaipsniui didinamas fizinis krūvis ir pereinama nuo bazinių pratimų
        prie sudėtingesnių funkcinių judesių. Dažniausiai atstatymas trunka nuo
        6 iki 12 mėnesių, tačiau kai kuriems pacientams pilnas atsistatymas gali
        užtrukti ir ilgiau. Šiuo laikotarpiu labai svarbu laikytis
        reabilitacijos plano, atlikti paskirtus pratimus, palaipsniui didinti
        fizinį aktyvumą bei vengti per didelės stuburo apkrovos.
      </p>
      <p class="text-sky-900 leading-relaxed mb-4">
        Kiek laiko truks reabilitacija, priklauso nuo kelių pagrindinių
        veiksnių:
      </p>
      <ul class="list-disc list-inside text-gray-700 space-y-2">
        <li>Paciento amžiaus</li>
        <li>Atliktos operacijos sunkumo</li>
        <li>Skoliozės dydžio</li>
        <li>Bendros fizinės būklės prieš operaciją</li>
        <li>Kaip tiksliai laikomasi specialisto rekomendacijų</li>
      </ul>
    </section>

    <section class="p-6 bg-white sm:rounded-lg shadow-sm">
      <h2 class="text-2xl font-semibold text-sky-900 mb-4">
        Ko negalima daryti po skoliozės operacijos
      </h2>
      <p class="text-sky-900 leading-relaxed mb-4">
        Po operacijos labai svarbu saugoti savo kūną ir laikytis atsargumo
        priemonių, nes netinkami judesiai gali sulėtinti gijimą ir sukelti
        komplikacijų. Būtent pirmosiomis savaitėmis organizmas prisitaiko prie
        stuburo pokyčių, todėl būtina saugoti operuotą vietą ir vengti veiklų,
        kurios gali sukelti per didelę apkrovą stuburui.
      </p>
      <p class="text-sky-900 leading-relaxed mb-4">
        Dažniausiai rekomenduojama vengti šių veiklų:
      </p>
      <div class="space-y-4">
        <div class="p-4 bg-red-50/50 border-l-4 border-red-400 rounded-r-lg">
          <ul class="list-disc list-inside text-gray-700 space-y-3">
            <li>
              <b class="text-red-900">Nekelkite sunkių svorių</b> - didelis
              svoris sukelia papildomą spaudimą stuburui ir gali trukdyti
              gijimui.
            </li>
            <li>
              <b class="text-red-900">Venkite staigių judesių</b> - ypač
              pasisukimų ir pasilenkimų, kurie gali apkrauti operuotą vietą.
            </li>
            <li>
              <b class="text-red-900">Nesportuokite per intensyviai</b> - krūvis
              gali būti per sunkus dar silpniems audiniams.
            </li>
            <li>
              <b class="text-red-900">Nesėdėkite ilgai vienoje padėtyje</b> -
              tai didina spaudimą stuburui ir gali sukelti skausmą.
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="p-6 bg-white sm:rounded-lg shadow-sm">
      <h2 class="text-2xl font-semibold text-sky-900 mb-4">
        Galimos komplikacijos reabilitacijos metu
      </h2>
      <p class="text-sky-900 leading-relaxed mb-4">
        Dauguma pacientų po skoliozės operacijos atsigauna sėkmingai, bet būna
        atvejų kai gali pasireikšti tam tikros komplikacijos. Todėl yra labai
        svarbu stebėti savo savijautą ir laiku kreiptis į gydytoją. Prireikus
        konsultacijos rekomenduojame kreiptis į
        <RouterLink
          :to="{ name: 'home' }"
          class="text-sky-600 hover:underline"
          >skoliozės gydymo centrą</RouterLink
        >.
      </p>
      <p class="text-sky-900 leading-relaxed mb-4">
        Reabilitacijos metu gali pasireikšti šios komplikacijos:
      </p>
      <ul class="list-disc list-inside text-gray-700 space-y-2 mb-4">
        <li>Judesių apribojimas</li>
        <li>Žaizdos infekcija</li>
        <li>Nervų dirginimas</li>
        <li>Laikysenos pokyčiai</li>
        <li>Užsitęsęs skausmas</li>
      </ul>
      <p class="text-sky-900 leading-relaxed">
        Jeigu jaučiate stiprų skausmą, patinimą, paraudimą ar net pakyla
        temperatūra, reikėtų kuo greičiau pasikonsultuoti su gydytoju. Tinkamai
        atliekama reabilitacija po skoliozės operacijos padeda sumažinti
        komplikacijų tikimybę ir užtikrinti gerą gijimo procesą.
      </p>
    </section>

    <section
      class="p-6 bg-white sm:rounded-lg shadow-sm border-l-4 border-sky-600"
    >
      <h2 class="text-2xl font-semibold text-sky-900 mb-6 text-center italic">
        Pacientės patirtis: gyvenimas po stuburo operacijos
      </h2>

      <div class="relative max-w-4xl mx-auto">
        <span
          class="absolute -top-4 -left-2 text-8xl text-sky-100 font-serif leading-none select-none"
          >“</span
        >

        <div class="relative z-10">
          <p
            class="text-gray-700 italic leading-relaxed mb-4 text-justify text-sm sm:text-base"
          >
            „Nuo pat diagnozės pradžios buvau supažindinta su chirurginiu
            skoliozės gydymo būdu. Ne vienerius metus mintis apie stuburo
            operaciją kėlė siaubą, su gydytoju apie tai net nesileisdavau į
            diskusijas, nes bijojau likti neįgali, galvojau, kad operacija - vos
            ne mirties nuosprendis. Tačiau bėgant metams, nugarą ėmė vis labiau
            skaudėti, vizualiai pradėjau stipriai krypti. Žinoma, visą laiką
            mane lydėjo kineziterapija, tačiau iš pradžių ji buvo neefektyvi
            (nelabai domėjausi pačia gydymo metodika, pasitikėjau vietiniais
            kineziterapeutais ir galiausiai supratau, kad 6 metus trukusios
            mankštos nebuvo veiksmingos) o per tą laiką stuburo būklė ypač
            suprastėjo, kaulai sustabarėjo ir situacija tapo sunkiai valdoma.
          </p>

          <p
            class="text-gray-700 italic leading-relaxed mb-4 text-justify text-sm sm:text-base"
          >
            Buvo paskirtas korsetas, tačiau dvylikametei man buvo sunku
            išaiškinti, kad tai reikalinga ir išties veiksminga gydymo priemonė,
            tad sąžiningai jo nenešiojau, be to, kompleksavau. Tačiau mintis
            apie operaciją vis dar vijau šalin ir kai stuburo linkis pasiekė 48
            laipsnius, vis dar nepasidaviau, laikiausi savo. Tada sužinojau apie
            nuostabią kineziterapeutę Giedrę, dirbančią INNOVAMED. Atliekant
            ,,Schroth” pratimus pavyko sustabdyti krypimą, vienu kitu laipsniu
            netgi sumažėjo stuburo linkis, nugara vizualiai geriau atrodė, bet
            kadangi iškrypimo laipsnis buvo labai didelis ir toks laikėsi ne
            vienerius metus, nugarą vis tiek skaudėjo, kartais net tirpdavo
            dešinė ranka (didžioji bėda buvo viršutinėj daly, dešinėj pusėj),
            nors ir vizualiai nugara atrodė geriau, situacija nebuvo gera.
          </p>

          <p
            class="text-gray-700 italic leading-relaxed mb-4 text-justify text-sm sm:text-base"
          >
            Labai kompleksuodavau dėl išvaizdos, bijodavau pažiūrėti į veidrodį,
            vengdavau fotografuotis. Supratau, kad taip nebenoriu gyventi,
            pradėjau galvoti apie operaciją.. Labai daug apie ją skaičiau
            internete, apie gyvenimą po jos, apie savo operacijos patirtis ypač
            jaunimas dalinasi ,,Tik Tok” platformoje ir supratau, kad tai toli
            gražu ne mirties nuosprendis, o tikrų tikriausias GYDYMO būdas.
            Pergyvenau dėl savo lankstumo, galvojau, kad niekada nebegyvensiu
            taip, kaip gyvenau, bet noras operuotis buvo toks didelis, kad manęs
            tai nebestabdė. Aišku, viliojo ir mintis, kad nebereikės tiek daug
            sportuoti.
          </p>

          <p
            class="text-gray-700 italic leading-relaxed mb-4 text-justify text-sm sm:text-base"
          >
            Žodžiu, be jokios baimės ir vedama tik teigiamų emocijų vykau į
            ligoninę, neilgai trukus - pozityvas išgaravo. Pirmas dienas po
            operacijos skausmas buvo didžiulis, netgi pradėjau gailėtis savo
            tokio sprendimo. Pirmas savaites buvo sunku atlikti bet kokį judesį,
            užtruko, kol įpratau prie naujos gyvensenos, būsenos. Buvo sunku
            psichologiškai, bijojau, kad nebegalėsiu atlikti net elementariausių
            veiksmų, bet kaip ir daugelyje gyvenimo situacijų, reikėjo laiko.
            Praėjus 2 mėnesiams supratau, kad lankstumas sumažėjo tik
            minimaliai, galiu atlikti visus judesius, išskyrus, susikūprinti, o
            juk to išvengti ir buvo pagrindinis tikslas.
          </p>

          <p
            class="text-gray-700 italic leading-relaxed mb-4 text-justify text-sm sm:text-base"
          >
            Šioks toks (labai menkas) tempimas nugaroje jaučiasi dar ir dabar,
            praėjus 8 mėnesiams po operacijos, tačiau tai visiškai netrukdo
            gyvent. Ir nors mankštintis vis dar reikia (aišku, žymiai rečiau nei
            anksčiau), nugarą retkarčiais šiek tiek paskauda, esu labai
            laiminga, kad visgi nusprendžiau operuotis. Nes dabar ir tas
            skausmas yra visai kitoks, nei buvo anksčiau. O ir į veidrodį žiūrėt
            nebebaisu (šiek tiek mentė liko atsikišus, bet palyginus su tuo kas
            buvo - kaip diena ir naktis). Net ir praleidus visą dieną ant kojų
            visai neskauda nugaros, o prieš operaciją valandos užtekdavo, kad ką
            nors veikiant imtų skaudėti. Akivaizdu, mano gyvenimas, mano
            kasdienybė, tiek psichologinė, tiek fizinė būsena ženkliai pagerėjo.
          </p>

          <p
            class="text-gray-700 italic leading-relaxed mb-4 text-justify text-sm sm:text-base"
          >
            Aišku, jeigu tik yra galimybė išvengti operacijos, nepulkite jos
            rinktis, visgi tai negrįžtami pokyčiai kūne, ilgas ir sudėtingas
            gijimas, tačiau svarbu suvokti, kad tai ne pasaulio pabaiga, o kaip
            tik, galbūt, paskutinė viltis pakeisti, palengvinti bei pagražinti
            savo kasdienybę. Prieš operaciją, kad būtų ramiau (nors čia tikrai
            nėra ko stresuoti, visi sunkumai laikini ir tikrai įveikiami)
            siūlyčiau ne tik rūpimus aspektus aptarti su gydytoju, bet ir
            pasidomėti socialiniuose tinkluose kitų patirtimi, pabendrauti jau
            su operaciją turėjusiais asmenimis.
          </p>

          <p
            class="text-gray-700 italic leading-relaxed mb-4 text-justify text-sm sm:text-base font-medium text-sky-900"
          >
            Taigi, chirurginio gydymo baimintis tikrai nereikia, aš, asmeniškai,
            esu labai dėkinga, kad toks išvis egzistuoja. Na, o net ir laukiant
            operacijos nepamirškite Schroth metodo, būtinai ir toliau
            mankštinkitės, kad procedūra būtų sklandesnė. Kuo labiau išjudintas
            stuburas, tuo paprasčiau jį ištiesinti ir chirurgui. Be to,
            sėkmingai operacijai reikalingas tvirtas raumenynas, jau nekalbant
            apie tai, kad atlikdami pratimus prisidėtumėte prie geresnio nugaros
            vaizdo jau po chirurginio gydymo.“
          </p>
        </div>

        <footer class="text-right mt-6">
          <cite class="font-bold text-sky-900 not-italic"
            >— Pacientė R. N.</cite
          >
        </footer>
      </div>
    </section>

    <section class="p-6 bg-white sm:rounded-lg shadow-sm mb-6 mt-8">
      <h2 class="text-2xl font-semibold text-sky-900 mb-6 text-center">
        Dažniausiai užduodami klausimai
      </h2>
      <div class="space-y-4">
        <FAQItem
          question="Ar reabilitacija po skoliozės operacijos yra būtina?"
          answer="Reabilitacija po skoliozės operacijos yra būtina. Be jos stuburo raumenys gali išlikti silpni, o tai sukelia laikysenos problemas ar skausmą ateityje."
        />
        <FAQItem
          question="Ar reabilitacija po skoliozės operacijos yra sudėtinga?"
          answer="Reabilitacija po skoliozės operacijos nėra vienodai sudėtinga visiems. Ji yra individuali ir priklauso nuo paciento amžiaus, sveikatos būklės bei operacijos sudėtingumo. "
        />
        <FAQItem
          question="Ko tikėtis po skoliozės operacijos?"
          answer="Po skoliozės operacijos galima tikėtis skausmo, nuovargio bei judėjimo ribotumo. Eigoje šie simptomai mažėja ir galima palaipsniui grįžti prie įprasto gyvenimo ritmo."
        />
        <FAQItem
          question="Kaip sumažinti skausmą po skoliozės operacijos?"
          answer="Sumažinti skausmą po skoliozės operacijos galima atliekant fizioterapiją, bei skiriant laiko kokybiškam poilsiui. Taip pat svarbu laikytis taisyklingos laikysenos bei vengti staigių judesių."
        />
        <FAQItem
          question="Kada galima pradėti vaikščioti po skoliozės operacijos?"
          answer="Vaikščioti po skoliozės operacijos rekomenduojama jau pirmosiomis dienomis. Tai daroma labai atsargiai ir su priežiūra."
        />
        <FAQItem
          question="Kada galima pradėti vairuoti po skoliozės operacijos?"
          answer="Vairuoti po skoliozės operacijos galima tada, kai galite laisvai judėti ir nejaučiate stipraus skausmo. Dažniausiai tai rekomenduojama ne anksčiau kaip po 6 -12 savaičių, priklausomai nuo gijimo eigos ir gydytojo leidimo."
        />
        <FAQItem
          question="Kada galima pradėti sportuoti po skoliozės operacijos?"
          answer="Sportuoti po skoliozės operacijos galima reabilitacijos pradžioje, bet pratimai turi būti lengvi. Ankstyvuoju reabilitacijos laikotarpiu taikomi specialūs metodai, tokie kaip SEAS metodika, taip pat pratimai galūnių jėgai lavinti bei DNS."
        />
      </div>
    </section>

    <ContactTeaser
      heading="Reikia pagalbos po operacijos?"
      sub-heading="Mūsų specialistai padės parinkti tinkamiausią reabilitacijos eigą sklandžiam jūsų gijimui."
    />
  </LayoutPage>
</template>

<script setup>
import LayoutPage from '../../layouts/LayoutPage.vue'
import ContactTeaser from '../../components/sections/ContactTeaser.vue'
import FAQItem from '../../components/elements/FAQItem.vue'
</script>
