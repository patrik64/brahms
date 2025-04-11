<script>
  import { Splide, SplideSlide } from '@splidejs/svelte-splide';
</script>

<div class="max-w-xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
  <!--div class="max-w-2xl mx-auto text-gray-600 text-lg"-->
  
    <Splide aria-label="Venues" options={ { rewind: true } } >
      <SplideSlide>
        <div class="pt-8 text-center"><strong>Der Große Musikvereinssaal</strong> (Goldener Saal)</div>
        <img src="/images/venues/venue1.jpg" class="p-4" alt="venue 1"/>
        <div class="text-center text-xs mb-4">Großer Musikvereinssaal &copy; ÖNB</div>
      </SplideSlide>
      <SplideSlide>
        <div class="pt-8 text-center"><strong>Der Kleine Musikvereinssaal</strong> (seit 1937 „Brahms-Saal“)</div>
        <img src="/images/venues/venue2.jpg" class="p-4" alt="venue 2"/>
        <div class="text-center text-xs">Kleiner Musikvereinssaal &copy; ÖNB</div>
      </SplideSlide>
      <SplideSlide>
        <div class="pt-8 text-center"><strong>Salon Bösendorfer</strong></div>
        <img src="/images/venues/venue3.jpg" class="p-4" alt="venue 3"/>
        <div class="text-center text-xs">Palais Liechtenstein, Herrengasse 6, 1. Bezirk - Durchgang zum Salon Bösendorfer, 1913 &copy; ÖNB / Lichtbildstelle</div>
      </SplideSlide>
      <SplideSlide>
        <div class="pt-8 text-center"><strong>Salon Streicher</strong></div>
        <img src="/images/venues/venue4.jpg" class="p-4" alt="venue 4"/>
        <div class="text-center text-xs">Salon Streicher &copy; https://wien-landstrasse.nak.at/portrait</div>
      </SplideSlide>
      <SplideSlide>
        <div class="pt-8 text-center"><strong>Festsaal des Österreichischen Ingenieur- und Architektenvereins</strong></div>
        <img src="/images/venues/venue5.jpg" class="p-4" alt="venue 5"/>
        <div class="text-center text-xs">Gebäude des Ingenieur- und Architekten-Vereins (1902) &copy; http://www.karl-kraus.net/Bilder/Ingenieur_Architektenverein.jpg</div>
      </SplideSlide>
      <SplideSlide>
        <div class="pt-8 text-center"><strong>Festsaal des Österreichischen Ingenieur- und Architektenvereins</strong></div>
        <img src="/images/venues/venue6.jpg" class="p-4" alt="venue 6"/>
        <div class="text-center text-xs">Festsaal der ÖIAV &copy; https://www.oiav.at/haus-der-ingenieure/</div>
      </SplideSlide>
      <SplideSlide>
        <div class="pt-8 text-center"><strong>Weigl's Dreherpark</strong></div>
        <img src="/images/venues/venue7.jpg" class="p-4" alt="venue 7"/>
        <div class="text-center text-xs">Gustav Zafaurek: Katharinenhalle im Dreher-Park, um 1885 &copy; Sammlung Wien Museum, CC0, Inventarnummer HMW 16714</div>
      </SplideSlide>
    </Splide>

  <!--/div-->
</div>