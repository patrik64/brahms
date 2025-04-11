<script>
    import { XIcon } from "@rgossiaux/svelte-heroicons/outline";
    import interpreters from "$lib/data/interpreters.json";
    import { page } from '$app/stores'
             
    let interpreter = interpreters[$page.params.id - 1];
</script>

<div class="lg:my-10 my-2 mx-auto lg:w-1/2 bg-white shadow overflow-hidden sm:rounded-lg">
  <div class="relative px-4 pt-10 pb-5 lg:py-5 sm:px-6">
    <div class="absolute top-0 right-0 mr-2 -mt-2">
      <a href="/interpreters"><svelte:component this={XIcon} class="h-12 w-12 hover:text-gray-600" aria-hidden="true" /></a>
    </div>
    <p class="text-2xl leading-6 font-medium ">{interpreter.name}</p>
      {#if interpreter.image && interpreter.image.length > 0}
        <img class="my-4 object-contain" src={`/images/iterpreters/${interpreter.image}`} alt="{interpreter.name}" />
        <div class="text-xs text-gray-500">{interpreter.copyright}</div>
      {/if}
  </div>

  <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
    <dl class="sm:divide-y sm:divide-gray-200">
      <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-600">Name</dt>
        <dd class="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">{interpreter.name}</dd>
      </div>
      {#if interpreter.function.length > 0}
        <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-600">Funktion</dt>
          <dd class="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">{interpreter.function}</dd>
        </div>
      {/if}
      {#if interpreter.uaea.length > 0}
        <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-600">Rezensenten</dt>
          <dd class="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">
              <ul>
              {#each interpreter.uaea as uaea}
                  <li class="py-1">
                    <p class="text-sm text-gray-600">{@html uaea}</p>
                  </li>
              {/each}
              </ul>
          </dd>
        </div>
      {/if}
      {#if interpreter.brelationship.length > 0}
        <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-600">Bezug zu Brahms</dt>
          <dd class="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">{@html interpreter.brelationship}</dd>
        </div>
      {/if}
      {#if interpreter.general.length > 0}
        <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-600">Allgemeines</dt>
          <dd class="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">
            <ul>
                {#each interpreter.general as paragraph}
                    <li class="py-1">
                      <p class="text-sm text-gray-600">{@html paragraph}</p>
                    </li>
                {/each}
            </ul>
          </dd>
        </div>
      {/if}
      {#if interpreter.sources.length > 0}
        <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-600">Quellen</dt>
          <dd class="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">
            <ul>
                {#each interpreter.sources as source}
                    <li class="py-1">
                    {#if source.islink === "yes"}
                      <a rel="external" href="{source.link}" class="text-teal-400 space-y-4">{source.link}</a>
                    {:else}
                      <p class="text-sm text-gray-600">{source.link}</p>
                    {/if}
                    </li>
                {/each}
            </ul>
          </dd>
        </div>
      {/if}
    </dl>
  </div>
</div>
