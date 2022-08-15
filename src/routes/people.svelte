<script>

import { ClipboardListIcon } from "@rgossiaux/svelte-heroicons/outline";
import people from '$lib/data/people.json';

</script>
  
<div class="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
  <div class="sm:flex sm:items-center">
    <div class="sm:flex-auto">
      <h1 class="text-3xl text-gray-600 text-center">Personen</h1>
    </div>
  </div>
  <div class="-mx-4 mt-10 ring-1 ring-gray-300 sm:-mx-6 md:mx-0 md:rounded-lg">
    <table class="min-w-full divide-y divide-gray-300">
      <thead>
        <tr>
          <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-600 sm:pl-6">Name</th>
          <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-600 lg:table-cell">Lebensdaten</th>
          <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-600 lg:table-cell">Funtion / Rolle</th>
          <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6 text-sm font-semibold text-gray-600">Details</th>
        </tr>
      </thead>
      <tbody>
        {#each people as person, personIdx}
          <tr>
            <td class="{personIdx === 0 ? '' : 'border-t border-gray-200'} px-3 py-3.5 text-sm text-gray-500 lg:table-cell">{person.surname}, {person.name}</td>
            <td class="{personIdx === 0 ? '' : 'border-t border-gray-200'} px-3 py-3.5 text-sm text-gray-500 lg:table-cell">({person.birthday} - {person.deathday})</td>
            {#if person.role.length > 0}
              <td class="{personIdx === 0 ? '' : 'border-t border-gray-200'} px-3 py-3.5 text-sm text-gray-500 lg:table-cell">{person.function} / {person.role}</td>
            {:else}
              <td class="{personIdx === 0 ? '' : 'border-t border-gray-200'} px-3 py-3.5 text-sm text-gray-500 lg:table-cell">{person.function}</td>
            {/if}
            <td class="{personIdx === 0 ? '' : 'border-t border-gray-200'} px-3 py-3.5 text-sm text-gray-500 lg:table-cell">
              <a href="/"><svelte:component this={ClipboardListIcon} class="pr-2 mx-auto h-6" aria-hidden="true" /></a>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>
