<script context="module">
  // @ts-ignore
  export const load = ({ params }) => {
    const id = params.id;

    return {
      props: {
        id
      }
    };
  };
</script>

<script>
import { LoginIcon } from "@rgossiaux/svelte-heroicons/outline";
import events from "$lib/data/events.json";
import people from "$lib/data/people.json";

export let id;
let event = events[id - 1];

// @ts-ignore
let formatDate = (day, month, year) => {
  let strDay = "" + day;
  let strMonth = "" + month;
  if(strDay.length < 2) { strDay = "0" + strDay }
  if(strMonth.length < 2) { strMonth = "0" + strMonth }

  return strDay + '.' + strMonth + '.' + year;
};

</script>

<div class="my-10 mx-auto lg:w-1/2 bg-white shadow overflow-hidden sm:rounded-lg">
  <div class="px-4 py-5 sm:px-6 bg-gray-100">
    <a href={`/work/${event.workId}`}><svelte:component this={LoginIcon} class="pr-2 h-8 text-gray-600 hover:text-black" aria-hidden="true" /></a>
  </div>
  <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
    <dl class="sm:divide-y sm:divide-gray-200">
      <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-600">Datum</dt>
        <dd class="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">{formatDate(event.day ,event.month, event.year)}</dd>
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
      {#if event.performers && event.performers.length > 0}
      <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-600">Ausführende</dt>
        <dd class="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">
          <ul>
          {#each event.performers as personIdx}
            <li><a href={`/person/${personIdx}`} class="text-teal-400">{people[personIdx-1].name} {people[personIdx-1].surname}</a> ({people[personIdx-1].function})</li>
          {/each}
          </ul>
        </dd>
      </div>
      {/if}
      <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-600">Werk</dt>
        <dd class="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">{event.work}</dd>
      </div>
      <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-600">Link zu ANNO (ÖNB)</dt>
        <dd class="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2"><a rel="external" href={event.annolink} class="text-teal-400">{event.annotext}</a></dd>
      </div>
      <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-600">Rubrik(en)</dt>
        <dd class="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">{event.category}</dd>
      </div>
      <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-600">Weitere Informationen</dt>
        <dd class="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">{event.info}</dd>
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
  