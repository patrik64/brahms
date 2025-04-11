<script>
  import "../app.css";
  import Header from "$lib/Header.svelte";
  import Footer from "$lib/Footer.svelte";
  import { fade } from 'svelte/transition';

  export let data;
</script>

<div class="screen">
  <header>
    <Header />
  </header>

  <main>
    {#key data.url}
    <div in:fade={{ duration: 100, delay: 100 }} 
         out:fade={{ duration: 100}}>
      <slot />
    </div>
    {/key}
  </main>

  <footer>
    <Footer />
  </footer>
</div>

<svelte:head>
  <title>Brahms-Online</title>
  <meta name="robots" content="noindex nofollow" />

  <meta property="og:site_name" content="Brahms-Online" />
  <meta property="og:locale" content="de" />
  <meta property="og:url" content="brahms-online.at" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Brahms-Online" />
  <meta property="og:description" content="Hier finden Sie Informationen zur Brahms-Rezeption in Wien 1862-1902." />

  <meta property="og:image" content="https://brahms-online.at/images/logo.png" />
  <meta property="og:image:type" content="image/png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="488" />
  <meta property="og:image:alt" content="Brahms" />

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