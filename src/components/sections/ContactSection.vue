<template>
  <section class="w-full">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-6">
      <!-- Contacts -->
      <div class="flex flex-col gap-2 sm:p-6 sm:rounded-lg sm:shadow-md">
        <h3 class="text-2xl font-semibold mb-2 text-gray-700">
          Mūsų kontaktai
        </h3>

        <p class="text-sky-900">
          <IconPhone class="inline-block align-middle mr-1 -mt-1" />

          <strong class="font-semibold">Telefonas:</strong>

          <a
            href="tel:+370 630 38885"
            class="hover:text-blue-800 transition-colors duration-200"
          >
            <span>+370 630 38885</span>
          </a>
        </p>

        <div class="text-sky-900">
          <IconEmail class="inline-block align-middle mr-1 -mt-1" />

          <strong class="font-semibold">El. paštas:</strong>

          <a
            href="mailto:info@innovamed.lt"
            class="hover:text-blue-800 transition-colors duration-200"
          >
            info@innovamed.lt
          </a>
        </div>

        <p class="text-sky-900">
          <IconMapPin class="inline-block align-middle mr-1 -mt-1" />

          <strong class="font-semibold">Kaune:</strong>

          <a
            href="https://maps.app.goo.gl/Q4osjx4RerfZewbe9"
            target="_blank"
            rel="nofollow"
            class="hover:text-blue-800 transition-colors duration-200"
            title="INNOVAMED klinikų adresas Kaune"
          >
            Aušros g. 42, LT-44158 Kaunas
          </a>
        </p>

        <p class="text-sky-900">
          <IconMapPin class="inline-block align-middle mr-1 -mt-1" />

          <strong class="font-semibold">Vilniuje:</strong>

          <a
            href="https://maps.app.goo.gl/t46MKX63vi8N84vL6"
            target="_blank"
            rel="nofollow"
            class="hover:text-blue-800 transition-colors duration-200"
            title="INNOVAMED klinikų adresas Vilniuje"
          >
            Konstitucijos pr. 23, LT-08105 Vilnius
          </a>
        </p>

        <p class="text-sky-900">
          <strong class="font-semibold">Darbo laikas:</strong>
          Pirmadienis-Penktadienis: 9:00 - 18:00
        </p>

        <!-- Social -->
        <h3 class="text-2xl font-semibold text-gray-700 mt-4">Sekite mus</h3>

        <div class="flex gap-4 justify-center">
          <!-- Facebook -->
          <a
            href="https://www.facebook.com/innovamed.lt"
            target="_blank"
            rel="noopener noreferrer"
            title="Facebook"
            class="text-gray-400 hover:text-blue-400 transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.588-1.333h2.412v-3h-2.412c-3.15 0-4.588 1.457-4.588 4.667v1.333z"
              />
            </svg>
          </a>

          <!-- Instagram -->
          <a
            href="https://www.instagram.com/innovamed.lt/"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
            class="text-gray-400 hover:text-blue-400 transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.204-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.069-4.849.069-3.204 0-3.584-.012-4.849-.069-3.251-.148-4.77-1.691-4.919-4.919-.058-1.265-.068-1.644-.068-4.849 0-3.204.012-3.584.069-4.849.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
              />
            </svg>
          </a>

          <!-- TikTok  -->
          <a
            href="https://www.tiktok.com/@innovamedas"
            target="_blank"
            rel="noopener noreferrer"
            title="TikTok"
            class="text-gray-400 hover:text-blue-400 transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                d="M14,2 C15.1046,2 16,2.89543 16,4 C16,5.44733 17.03,6.6618 18.3984,6.93991 C19.4808,7.15992 20.1799,8.21575 19.9599,9.29819 C19.7399,10.3806 18.6841,11.0798 17.6016,10.8598 C17.0406,10.7457 16.5037,10.5646 16,10.3252 L16,16 C16,19.3137 13.3137,22 10,22 C6.68629,22 4,19.3137 4,16 C4,13.2015 5.91407,10.8551 8.50148,10.1891 C9.57119,9.91382 10.6616,10.5578 10.9369,11.6275 C11.2122,12.6972 10.5682,13.7876 9.49852,14.0629 C8.63547,14.285 8,15.0708 8,16 C8,17.1046 8.89543,18 10,18 C11.1046,18 12,17.1046 12,16 L12,4 C12,2.89543 12.8954,2 14,2 Z"
              />
            </svg>
          </a>
        </div>

        <!-- Company details -->
        <h3 class="text-2xl font-semibold text-gray-700 mt-4">Rekvizitai</h3>

        <p class="text-sky-900"><strong>MB</strong> "Innovamedas"</p>

        <p class="text-sky-900"><strong>Įmonės kodas</strong>: 305961778</p>
      </div>

      <ContactForm />

      <!-- Maps -->
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2304.595648831626!2d23.90566331587661!3d54.90159497914848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e72251a3d3c8c7%3A0xc07474747b0a7c41!2sAu%C5%A1ros%20g.%2042%2C%20Kaunas%2044158!5e0!3m2!1sen!2slt!4v1628178144577!5m2!1sen!2slt"
        width="100%"
        height="300"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        class="rounded-lg shadow-md"
      ></iframe>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2305.811818274719!2d25.267323315875955!3d54.6896263791244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd941d63615457%3A0x6b1109b8b323c2a6!2sKonstitucijos%20pr.%2023%2C%20Vilnius%2008105!5e0!3m2!1sen!2slt!4v1628178229986!5m2!1sen!2slt"
        width="100%"
        height="300"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        class="rounded-lg shadow-md"
      ></iframe>
    </div>
  </section>
</template>

<script setup>
import IconPhone from '../icons/IconPhone.vue'
import IconEmail from '../icons/IconEmail.vue'
import IconMapPin from '../icons/IconMapPin.vue'
import ContactForm from '../forms/ContactForm.vue'
</script>

<style scoped></style>
