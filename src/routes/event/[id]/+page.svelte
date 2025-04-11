  <script>
    import { LoginIcon } from "@rgossiaux/svelte-heroicons/outline";
    import events from "$lib/data/events.json";
    import people from "$lib/data/people.json";
    import { page } from '$app/stores'
          
    let event = events[$page.params.id - 1];
  
    // @ts-ignore
    let formatDate = (day, month, year) => {
      let strDay = "" + day;
      let strMonth = "" + month;
      if (strDay.length < 2) {
        strDay = "0" + strDay;
      }
      if (strMonth.length < 2) {
        strMonth = "0" + strMonth;
      }
  
      return strDay + "." + strMonth + "." + year;
    };
  </script>

  <div class="my-10 mx-auto lg:w-1/2 bg-white shadow overflow-hidden sm:rounded-lg">
    <div class="px-4 py-5 sm:px-6 bg-gray-100">
      <a href={`/work/${event.workid}`}><svelte:component this={LoginIcon} class="pr-2 h-8 text-gray-600 hover:text-black" aria-hidden="true" /></a>
    </div>
    <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
      <dl class="sm:divide-y sm:divide-gray-200">
        <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-600">Datum</dt>
          <dd class="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">{event.date.datefull}</dd>
        </div>
        {#if event.place && event.venue.length > 0}
          <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-600">Ort</dt>
            <dd class="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">{event.place}</dd>
          </div>
        {/if}
        {#if event.venue && event.venue.length > 0}
          <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-600">Saal</dt>
            <dd class="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">{event.venue}</dd>
          </div>
        {/if}
        {#if event.persons && event.persons.length > 0}
          <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-600">Ausführende</dt>
            <dd class="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">
              <ul>
                {#each event.persons as person}
                  <li><a href={`/person/1`} class="text-teal-400">{person.name}</a> ({person.type})</li>
                {/each}
              </ul>
            </dd>
          </div>
        {/if}
        <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-600">Werk</dt>
          <dd class="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">{event.workid}</dd>
        </div>
      </dl>
    </div>
  </div>
  
  <!--div class="center-screen">work in progress</div>
  
  <style>
    .center-screen {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      min-height: 70vh;
    }
  </style-->
  