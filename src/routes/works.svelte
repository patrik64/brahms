<script>
  import { LogoutIcon } from "@rgossiaux/svelte-heroicons/outline";
  import works from "$lib/data/works.json";
</script>

<div class="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
  <div class="sm:flex sm:items-center">
    <div class="sm:flex-auto">
      <h1 class="text-3xl text-gray-600 text-center">Werke</h1>
    </div>
  </div>

  <div class="-mx-4 mt-10 ring-1 ring-gray-300 sm:-mx-6 md:mx-0 md:rounded-lg">
    <table class="min-w-full divide-y divide-gray-300">
      <thead>
        <tr>
          <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-600 sm:pl-6">Titel</th>
          <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-600 lg:table-cell">Präfix</th>
          <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-600 lg:table-cell">Opusnummer</th>
          <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6 text-sm font-semibold text-gray-600">Details</th>
        </tr>
      </thead>
      <tbody>
        {#each works as work, workIdx}
          <tr>
            <td class="{workIdx === 0 ? '' : 'border-t border-gray-200'} px-3 py-3.5 text-sm text-gray-500 lg:table-cell"><a href={`/work/${work.id}`} class="hover:text-black">{work.name}</a></td>
            <td class="{workIdx === 0 ? '' : 'border-t border-gray-200'} px-3 py-3.5 text-sm text-gray-500 lg:table-cell">{work.prefix}</td>
            <td class="{workIdx === 0 ? '' : 'border-t border-gray-200'} px-3 py-3.5 text-sm text-gray-500 lg:table-cell">{work.opusnumber}</td>
            <td class="{workIdx === 0 ? '' : 'border-t border-gray-200'} px-3 py-3.5 text-sm text-gray-500 lg:table-cell">
              <a href={`/work/${work.id}`} class="hover:text-black"><svelte:component this={LogoutIcon} class="pr-2 mx-auto h-6" aria-hidden="true" /></a>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>