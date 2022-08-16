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
import { LogoutIcon } from "@rgossiaux/svelte-heroicons/outline";
import works from "$lib/data/works.json";
import events from "$lib/data/events.json";
import people from "$lib/data/people.json";

export let id;

let work = works[id - 1];

let formatDate = (day, month, year) => {
  let strDay = "" + day;
  let strMonth = "" + month;
  if(strDay.length < 2) { strDay = "0" + strDay }
  if(strMonth.length < 2) { strMonth = "0" + strMonth }

  return strDay + '.' + strMonth + '.' + year;
};

let formatPerformer = (arr) => {
  if(arr.length === 1) {
    let ret = people[arr[0]-1].name;
    ret += " ";
    ret += people[arr[0]-1].surname;
    return ret;
  } else if (arr.length > 1) {
    let ret = people[arr[0]-1].name;
    ret += " ";
    ret += people[arr[0]-1].surname;
    ret += "(+";
    ret += arr.length-1;
    ret += ")";
    return ret;
    //return  +  + arr.length-1 + ")";
  }
  return "";
};

</script> 
  
<div class="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
  <div class="flex">
    <a href="/works"><svelte:component this={LoginIcon} class="flex-1 mt-2 pr-2 h-8 text-teal-400 hover:text-gray-600" aria-hidden="true" /></a>
    <h1 class="flex-1 text-3xl text-gray-600">{work.name}</h1>
  </div>
  <div class="-mx-4 mt-10 ring-1 ring-gray-300 sm:-mx-6 md:mx-0 md:rounded-lg">
    <table class="min-w-full divide-y divide-gray-300">
      <thead>
        <tr>
          <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-600 sm:pl-6">Datum</th>
          <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-600 lg:table-cell">Ort</th>
          <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-600 lg:table-cell">Saal</th>
          <th scope="col" class="hidden md:block px-3 py-3.5 text-left text-sm font-semibold text-gray-600 lg:table-cell">Beteiligte</th>
          <!--th scope="col" class="hidden md:block px-3 py-3.5 text-left text-sm font-semibold text-gray-600 lg:table-cell">Titel</th-->
          <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6 text-sm font-semibold text-gray-600">Details</th>
        </tr>
      </thead>
      <tbody>
        {#each work.events as eventNr, eventIdx}
          <tr>
            <td class="{eventIdx === 0 ? '' : 'border-t border-gray-200'} px-3 py-3.5 text-sm text-gray-500 lg:table-cell"><a href={`/event/${events[eventNr-1].id}`} class="hover:text-black">{formatDate(events[eventNr-1].day, events[eventNr-1].month, events[eventNr-1].year)}</a></td>
            <td class="{eventIdx === 0 ? '' : 'border-t border-gray-200'} px-3 py-3.5 text-sm text-gray-500 lg:table-cell">{events[eventNr-1].place}</td>
            <td class="{eventIdx === 0 ? '' : 'border-t border-gray-200'} px-3 py-3.5 text-sm text-gray-500 lg:table-cell">{events[eventNr-1].venue}</td>
            <td class="{eventIdx === 0 ? '' : 'border-t border-gray-200'} hidden md:block px-3 py-3.5 text-sm text-gray-500 lg:table-cell">{formatPerformer(events[eventNr-1].performers)}</td>
            <!--td class="{eventIdx === 0 ? '' : 'border-t border-gray-200'} hidden md:block px-3 py-3.5 text-sm text-gray-500 lg:table-cell">{events[eventNr-1].work}</td-->
            <td class="{eventIdx === 0 ? '' : 'border-t border-gray-200'} px-3 py-3.5 text-sm text-gray-500 lg:table-cell">
              <a href={`/event/${events[eventNr-1].id}`} class="hover:text-black"><svelte:component this={LogoutIcon} class="pr-2 mx-auto h-6" aria-hidden="true" /></a>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>