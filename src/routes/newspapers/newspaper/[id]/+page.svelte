<script>
    import { XIcon } from "@rgossiaux/svelte-heroicons/outline";
    import newspapers from "$lib/data/newspapers.json";
    import { page } from '$app/stores'
             
    let newspaper = newspapers[$page.params.id - 1];
</script>

<div class="lg:my-10 my-2 mx-auto lg:w-1/2 bg-white shadow overflow-hidden sm:rounded-lg">
  <div class="relative px-4 pt-10 pb-5 lg:py-5 sm:px-6">
    <div class="absolute top-0 right-0 mr-2 -mt-2">
      <a href="/newspapers"><svelte:component this={XIcon} class="h-12 w-12 hover:text-gray-600" aria-hidden="true" /></a>
    </div>
    <a rel="external" href="{newspaper.link}" class="text-2xl leading-6 font-medium text-teal-400">{newspaper.name}</a>
      {#if newspaper.image && newspaper.image.length > 0}
        <img class="my-4 object-contain" src={`/images/newspapers/${newspaper.image}`} alt="{newspaper.name}" />
        <div class="text-xss text-gray-500">&copy; Wikipedia</div>
      {/if}
  </div>

  <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
    <dl class="sm:divide-y sm:divide-gray-200">
      <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-600">Titel</dt>
        <dd class="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">{newspaper.name}</dd>
      </div>
      {#if newspaper.subtext.length > 0}
        <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-600">Subtitel</dt>
          <dd class="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">{newspaper.subtext}</dd>
        </div>
      {/if}
      {#if newspaper.alternatives.length > 0}
        <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-600">Wechselnde Titel</dt>
          <dd class="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">
              <ul>
              {#each newspaper.alternatives as alts}
                  <li class="py-1">
                    <p class="text-sm text-gray-600">{@html alts}</p>
                  </li>
              {/each}
              </ul>
          </dd>
        </div>
      {/if}
      <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-600">Laufzeit</dt>
        <dd class="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">{newspaper.period}</dd>
      </div>
      {#if newspaper.publisher.length > 0}
      <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-600">Herausgeber</dt>
        <dd class="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">{newspaper.publisher}</dd>
      </div>
      {/if}
      {#if newspaper.founders.length > 0}
        <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-600">Gründer</dt>
          <dd class="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">
              <ul>
              {#each newspaper.founders as founder}
                  <li class="py-1">
                    <p class="text-sm text-gray-600">{founder}</p>
                  </li>
              {/each}
              </ul>
          </dd>
        </div>
      {/if}
      {#if newspaper.alignment.length > 0}
        <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-600">Ausrichtung</dt>
          <dd class="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">{newspaper.alignment}</dd>
        </div>
      {/if}
      {#if newspaper.reviewers.length > 0}
        <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-600">Rezensenten</dt>
          <dd class="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">
              <ul>
              {#each newspaper.reviewers as reviewer}
                  <li class="py-1">
                    <p class="text-sm text-gray-600">{reviewer}</p>
                  </li>
              {/each}
              </ul>
          </dd>
        </div>
      {/if}
      <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-600">Brahms-Treffer</dt>
        <dd class="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">{newspaper.bhits}</dd>
      </div>
      <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-600">Verfügbare/Generierte Datensätze</dt>
        <dd class="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">{newspaper.records}</dd>
      </div>
      {#if newspaper.source.length > 0}
        <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-600">Quelle</dt>
          <dd class="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">{newspaper.source}</dd>
        </div>
      {/if}
      {#if newspaper.general.length > 0}
        <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-600">Allgemeines</dt>
          <dd class="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">
            <ul>
                {#each newspaper.general as paragraph}
                    <li class="py-1">
                      <p class="text-sm text-gray-600">{@html paragraph}</p>
                    </li>
                {/each}
            </ul>
          </dd>
        </div>
      {/if}
    </dl>
  </div>
</div>
