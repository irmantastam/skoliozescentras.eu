# Skoliozės Centras Website

This is a static Vue 3 website built with Vite and Tailwind CSS (installed as an npm package), designed for easy deployment to platforms like Vercel.

## Project Structure (with English file names)

```
skoliozes-centras/
├── public/
│   ├── favicon.ico
│   └── logo.png (or placeholder-logo.png)
├── src/
│   ├── assets/
│   │   └── main.css
│   ├── components/
│   │   ├── AppHeader.vue
│   │   └── AppFooter.vue
│   ├── router/
│   │   └── index.js
│   ├── pages/
│   │   ├── ClientStories.vue
│   │   ├── ContactUs.vue
│   │   ├── Diagnostics.vue
│   │   ├── Education.vue
│   │   ├── FreeScoliosisTesting.vue
│   │   ├── ISSTSchrothMethodAndOrganization.vue
│   │   ├── SchrothScoliosisCamp.vue
│   │   ├── Scoliteam.vue
│   │   ├── SuccessStories.vue
│   │   └── TrainingForPhysiotherapists.vue
│   ├── App.vue
│   └── main.js
├── .gitignore
├── index.html (in public folder, but handled by Vite)
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md (this file)
```

## Setup Instructions (Crucial for running the project!)

To get this project running on your local machine, **you must follow these steps precisely in your terminal or command prompt**:

1.  **Create Project Directory (if you haven't already):**
    Open your terminal and run:

    ```bash
    npm create vite@latest skoliozes-centras -- --template vue
    ```

    This command uses Vite to scaffold a new Vue 3 project in a directory named `skoliozes-centras`.

2.  **Navigate into the Project Directory:**

    ```bash
    cd skoliozes-centras
    ```

3.  **Install Node.js Dependencies (including Tailwind CSS):**
    Install all the necessary packages listed in `package.json`, including Vue, Vue Router, Vite, and the Tailwind CSS related packages:

    ```bash
    npm install
    ```

    This single command will install everything.

4.  **Initialize Tailwind CSS Configuration Files:**
    Run these commands to generate `tailwind.config.js` and `postcss.config.js`:

    ```bash
    npx tailwindcss init -p
    ```

    This will create `tailwind.config.js` and `postcss.config.js` in your project root.

5.  **Configure Tailwind CSS `tailwind.config.js`:**
    Open `tailwind.config.js` and ensure its `content` array is configured to scan your Vue files for Tailwind classes:

    ```javascript
    // tailwind.config.js
    /** @type {import('tailwindcss').Config} */
    export default {
      content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
      theme: {
        extend: {
          fontFamily: {
            inter: ['Inter', 'sans-serif'], // Custom font family
          },
          colors: {
            // Custom color palette inspired by innovamed.lt and skoliozescentras.lt
            blue: {
              600: '#2563eb',
              700: '#1d4ed8',
              400: '#60a5fa',
            },
            gray: {
              50: '#f9fafb',
              200: '#e5e7eb',
              300: '#d1d5db',
              600: '#4b5563',
              700: '#374151',
              800: '#1f2937',
            },
          },
        },
      },
      plugins: [],
    }
    ```

6.  **Update `src/assets/main.css`:**
    Open `src/assets/main.css` and replace its content with the Tailwind directives:

    ```css
    /* src/assets/main.css */
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    /* You can define custom CSS variables here if needed */
    :root {
      --primary-blue-custom: #007bff;
      --dark-text-custom: #343a40;
      --light-bg-custom: #f8f9fa;
    }

    /* Base styles that might not be fully covered by Tailwind or require specific overrides */
    body {
      @apply bg-gray-50 text-gray-800; /* Apply Tailwind classes directly */
    }

    /* Ensure basic resets are minimal as Tailwind handles many */
    html,
    body {
      margin: 0;
      padding: 0;
    }
    ```

7.  **Remove Tailwind CDN from `public/index.html`:**
    Open `public/index.html` and **remove** the line:

    ```html
    <script src="[https://cdn.tailwindcss.com](https://cdn.tailwindcss.com)"></script>
    ```

    Tailwind will now be built into your CSS bundle.

8.  **Copy Remaining Code Content:**
    Copy the code provided in the immersive document for the remaining files (`.vue`, `.js`, `package.json`, `vite.config.js`, `README.md`) into your corresponding local files. **Do not include the file path comments (like `<!-- src/main.js -->`) when copying into the actual files.**

9.  **Add Placeholder Logo:**
    Place your actual logo image (e.g., `logo.png`) in the `public/` directory. The `AppHeader.vue` component currently uses a placeholder SVG. You can replace it with an `<img>` tag:
    ```html
    <img
      src="/logo.png"
      alt="Skoliozės Centras Logo"
      class="h-12 rounded-full shadow-sm"
    />
    ```

## Running the Project Locally

Once you have completed the **Setup Instructions**:

1.  **Start Development Server:**
    Run the following command from the root of your `skoliozes-centras` project directory:
    ```bash
    npm run dev
    ```
    This command starts the Vite development server. It compiles your Vue components, handles `import` statements, and serves your application. You will see a URL in your terminal (typically `http://localhost:5173/`). Open this URL in your web browser to view the website. **Do not open `index.html` directly.**

## Deployment

### Deploying to Vercel

1.  **Push to Git:** Initialize a Git repository in your project folder and push your code to a new repository on GitHub, GitLab, or Bitbucket.
    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    git branch -M main
    git remote add origin <your_repository_url>
    git push -u origin main
    ```
2.  **Import to Vercel:** Go to [Vercel](https://vercel.com/), sign up/log in, and click "New Project." Import your Git repository.
3.  **Configure & Deploy:** Vercel will usually auto-detect it as a Vue (Vite) project. The build command should be `npm run build` and the output directory `dist`. Click "Deploy."
4.  **Custom Domain:** To use `skoliozescentras.eu`, go to your Vercel project settings, then "Domains," and add your custom domain. Follow Vercel's instructions to configure DNS records with your domain registrar.
