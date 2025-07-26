# Skoliozės Centras Website

This is a static Vue 3 website built with Vite and Tailwind CSS (installed as an npm package), designed for easy deployment to platforms like Vercel.

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

## Running the Project Locally

Once you have completed the **Setup Instructions**:

1.  **Start Development Server:**
    Run the following command from the root of your `skoliozes-centras` project directory:
    ```bash
    npm run dev
    ```
    This command starts the Vite development server.

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
