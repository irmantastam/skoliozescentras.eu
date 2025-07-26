<template>
  <div class="bg-sky-700 text-white py-2 px-5 text-sm">
    <div
      class="max-w-6xl mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center gap-3 md:gap-6 px-5"
    >
      <!-- Phone -->
      <a
        href="tel:+370 630 38885"
        class="flex items-center gap-1 hover:text-blue-200 transition-colors duration-200"
      >
        <!-- Phone Icon SVG -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-phone"
        >
          <path
            d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
          />
        </svg>
        <span>+370 630 38885</span>
      </a>

      <!-- Email -->
      <a
        href="mailto:info@innovamed.lt"
        class="flex items-center gap-1 hover:text-blue-200 transition-colors duration-200"
      >
        <!-- Mail Icon SVG -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-mail"
        >
          <rect
            width="20"
            height="16"
            x="2"
            y="4"
            rx="2"
          />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
        <span>info@innovamed.lt</span>
      </a>

      <!-- Address -->
      <span class="flex items-center gap-1">
        <!-- Map Pin Icon SVG -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-map-pin"
        >
          <path d="M12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
          <path d="M12 22s8-4 8-10V7l-8-7-8 7v5c0 6 8 10 8 10z" />
        </svg>
        <span>Aušros g. 42, LT-44158 Kaunas</span>
      </span>

      <!-- Address -->
      <span class="flex items-center gap-1">
        <!-- Map Pin Icon SVG -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-map-pin"
        >
          <path d="M12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
          <path d="M12 22s8-4 8-10V7l-8-7-8 7v5c0 6 8 10 8 10z" />
        </svg>
        <span>Konstitucijos pr. 23, LT-08105 Vilnius</span>
      </span>
    </div>
  </div>
</template>
