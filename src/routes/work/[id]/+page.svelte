<script>
  import { XIcon } from "@rgossiaux/svelte-heroicons/outline";
  import { LoginIcon } from "@rgossiaux/svelte-heroicons/outline";
  import { LogoutIcon } from "@rgossiaux/svelte-heroicons/outline";
  import works from "$lib/data/works.json";
  import events from "$lib/data/events.json";
  import people from "$lib/data/people.json";
  import { page } from '$app/stores'
    
    let work = works[$page.params.id - 1];
    
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
  
    let formatPerformer = (arr) => {
      if (arr.length === 1) {
        let ret = people[arr[0] - 1].name;
        ret += " ";
        ret += people[arr[0] - 1].surname;
        return ret;
      } else if (arr.length > 1) {
        let ret = people[arr[0] - 1].name;
        ret += " ";
        ret += people[arr[0] - 1].surname;
        ret += "(+";
        ret += arr.length - 1;
        ret += ")";
        return ret;
        //return  +  + arr.length-1 + ")";
      }
      return "";
    };
</script>


  
  <div class="max-w-7xl mx-auto md:py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
    <div class="relative flex pt-10">
      <div class="absolute top-0 right-0 -mt-2">
        <a href="/works"><svelte:component this={XIcon} class="h-12 w-12 hover:text-gray-600" aria-hidden="true" /></a>
      </div>
      <a href="/works"><svelte:component this={LoginIcon} class="flex-1 mt-2 pr-2 h-8 text-teal-400 hover:text-gray-600" aria-hidden="true" /></a>
      <h1 class="flex-1 text-3xl text-gray-600 mb-5">{work.title} {work.prefix} {work.opus}</h1>
    </div>

    {#if work.versions && work.versions.length > 0}
      <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-600">
          <ul>
          {#each work.versions as version}
            <li class="py-1">
              <p class="text-sm text-gray-600">{version}</p>
            </li>
          {/each}
          <ul></ul>
        </dt>
      </div>
    {/if}

    <hr />

    {#if work.positions && work.positions.length > 0}
    <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
      <dt class="text-sm font-medium text-gray-600">Besetzung</dt>
      <dd class="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">
        <ul>
            {#each work.positions as position}
                <li class="py-1">
                  <p class="text-sm text-gray-600">{position}</p>
                </li>
            {/each}
        </ul>
      </dd>
    </div>
    {/if}

    <hr />

    {#if work.components && work.components.length > 0}
    <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
      <dt class="text-sm font-medium text-gray-600">Nummern</dt>
      <dd class="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">
        <ul>
            {#each work.components as component}
                <li class="py-1">
                  <p class="text-sm text-gray-600">{component}</p>
                </li>
            {/each}
        </ul>
      </dd>
    </div>
    {/if}

    {#if work.events && work.events.length > 0}
    <div class="-mx-4 mt-10 ring-1 ring-gray-300 sm:-mx-6 md:mx-0 md:rounded-lg">
      <table class="min-w-full divide-y divide-gray-300">
        <thead>
          <tr>
            <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-600 sm:pl-6">Datum</th>
            <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-600 lg:table-cell">Ort</th>
            <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-600 lg:table-cell">Saal</th>
            <th scope="col" class="hidden md:block px-3 py-3.5 text-left text-sm font-semibold text-gray-600 lg:table-cell">Beteiligte</th>
            
            <!--th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6 text-sm font-semibold text-gray-600">Details</th-->
          </tr>
        </thead>
        <tbody>
          {#each work.events as eventNr, eventIdx}
            {#if events[eventNr].date.datefull}
            <tr>
              <td class="{eventIdx === 0 ? '' : 'border-t border-gray-200'} px-3 py-3.5 text-sm text-gray-500 lg:table-cell"><a href={`/event/${events[eventNr].id}`} class="hover:text-black">{events[eventNr].date.datefull}</a></td>
              <td class="{eventIdx === 0 ? '' : 'border-t border-gray-200'} px-3 py-3.5 text-sm text-gray-500 lg:table-cell">{events[eventNr].place}</td>
              <td class="{eventIdx === 0 ? '' : 'border-t border-gray-200'} px-3 py-3.5 text-sm text-gray-500 lg:table-cell">{events[eventNr].venue}</td>
              {#if events[eventNr].persons && events[eventNr].persons[0]}
                <td class="{eventIdx === 0 ? '' : 'border-t border-gray-200'} hidden md:block px-3 py-3.5 text-sm text-gray-500 lg:table-cell">{events[eventNr].persons[0].name}</td>
              {:else}
                <td class="{eventIdx === 0 ? '' : 'border-t border-gray-200'} hidden md:block px-3 py-3.5 text-sm text-gray-500 lg:table-cell"></td>
              {/if}
              <td class="{eventIdx === 0 ? '' : 'border-t border-gray-200'} px-3 py-3.5 text-sm text-gray-500 lg:table-cell">
                <a href={`/event/${events[eventNr].id}`} class="hover:text-black"><svelte:component this={LogoutIcon} class="pr-2 mx-auto h-6" aria-hidden="true" /></a>
              </td>
            </tr>
            {/if}
          {/each}
        </tbody>
      </table>
    </div>
    {/if}
  </div>
  