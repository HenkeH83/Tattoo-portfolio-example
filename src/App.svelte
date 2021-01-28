<script>
  import { onMount } from "svelte";
  import Navbar from "./components/Navbar.svelte";
  import Work from "./components/Work.svelte";
  import About from "./components/About.svelte";
  import Contact from "./components/contact.svelte";
  import LandingPage from "./components/LandingPage.svelte";
  import { home, currentWidth, currentPage } from "./store";

  const options = {
    root: document.querySelector(".base"),
    rootMargin: "0px",
    threshold: 0.25,
  };

  function callback(entries, observer) {
    const pages = ["home", "work", "about", "contact"];
    entries.forEach((entry) => {
      if (entry.isIntersecting === true) {
        entry.target.classList.forEach((pageClass) => {
          if (pages.includes(pageClass)) {
            $currentPage = pageClass;
          }
        });
      }
    });
  }

  let observer = new IntersectionObserver(callback, options);
  onMount(() => {
    observer.observe(document.querySelector(".home"));
    observer.observe(document.querySelector(".work"));
    observer.observe(document.querySelector(".about"));
    observer.observe(document.querySelector(".contact"));
  });
</script>

<svelte:window bind:innerWidth={$currentWidth} />

<main class="base" bind:this={$home}>
  <Navbar />
  <LandingPage />
  <Work />
  <About />
  <Contact />
</main>

<style>
</style>
