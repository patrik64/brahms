<script>
  import "../app.css";
  import Header from "../lib/Header.svelte";
  import Footer from "../lib/Footer.svelte";
</script>

<div class="screen">
  <header>
    <Header />
  </header>

  <main>
    <slot />
  </main>
  <footer>
    <Footer />
  </footer>
</div>

<svelte:head>
  <title>Brahms-Online</title>
  <meta name="robots" content="noindex nofollow" />
  <html lang="de" />
</svelte:head>

<style>
  .screen {
    /* body - or any parent wrapper */
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex: 1;
  }
</style>
