<script>
  import Nav from "./lib/Nav.svelte";
  import Hero from "./lib/Hero.svelte";
  import Projects from "./lib/Projects.svelte";
  import Contact from "./lib/Contact.svelte";
  import Footer from "./lib/Footer.svelte";
</script>

<main>
  <Nav />
  <Hero />
  <Projects />
  <Contact />
  <Footer />
</main>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap");

  :global(*) {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {
    --padding: 2rem;
    --text-color: black;
    --background-color: white;
    --limegreen: #3fcf8e;
    --green: #34b27b;
    --box-shadow: 200px 0px 53px 26px rgba(255, 255, 255, 0.76);
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --background-color: #1c1c1c;
      --text-color: #fff;
      --box-shadow: 200px 0px 53px 26px rgba(28, 28, 28, 0.76);
    }
  }

  @media (prefers-color-scheme: light) {
    :root {
      --background-color: rgb(255, 255, 255);
      --text-color: black;
      --box-shadow: 200px 0px 53px 26px rgba(255, 255, 255, 0.76);
    }
  }

  :global(body) {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    color: var(--text-color);
    background-color: var(--background-color);
  }

  :global(button) {
    color: var(--text-color);
  }

  :global(.divider) {
    width: 30vw;
    padding: 0.2rem;
    border-radius: 10px;
    background-color: var(--limegreen);
    margin: auto;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  :global(button:hover) {
    scale: 1.1;
    cursor: pointer;
    border: none;
  }

  :global(.title) {
    font-size: 2rem;
    font-weight: 500;
    text-align: center;
  }

  @media (max-width: 400px) {
    :root {
      --padding: 1rem;
    }
  }

  @media (max-width: 270px) {
    :root {
      --padding: 0.5rem;
    }
  }
</style>
