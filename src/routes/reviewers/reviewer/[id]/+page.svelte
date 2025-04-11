<script>
  import { XIcon } from "@rgossiaux/svelte-heroicons/outline";
  import reviewers from "$lib/data/reviewers.json";
  import { page } from '$app/stores'
             
  let reviewer = reviewers[$page.params.id - 1];
</script>

<div class="lg:my-10 my-2 mx-auto lg:w-1/2 bg-white shadow overflow-hidden sm:rounded-lg">
  <div class="relative px-4 pt-10 pb-5 lg:py-5 sm:px-6">
    <div class="absolute top-0 right-0 mr-2 -mt-2">
      <a href="/reviewers"><svelte:component this={XIcon} class="h-12 w-12 hover:text-gray-600" aria-hidden="true" /></a>
    </div>
    <p class="text-2xl leading-6 font-medium ">{reviewer.name}</p>
      {#if reviewer.image && reviewer.image.length > 0}
        <img class="my-4 object-contain" src={`/images/reviewers/${reviewer.image}`} alt="{reviewer.name}" />
        <div class="text-xs text-gray-500">{reviewer.copyright}</div>
      {/if}
    </div>


  <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
    <dl class="sm:divide-y sm:divide-gray-200">
      <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-600">Name</dt>
        <dd class="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">{reviewer.name} ({reviewer.dates})</dd>
      </div>
  </div>

  {#if reviewer.employers.length > 0}
    <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
      <dt class="text-sm font-medium text-gray-600">Tätig für</dt>
      <dd class="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">
        <ul>
            {#each reviewer.employers as employer}
                <li class="py-1">
                  <p class="text-sm text-gray-600">{@html employer}</p>
                </li>
            {/each}
        </ul>
      </dd>
    </div>
  {/if}

  {#if reviewer.abbreviation.length > 0}
    <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
      <dt class="text-sm font-medium text-gray-600">Kürzel</dt>
      <dd class="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">
        <ul>
            {#each reviewer.abbreviation as abr}
                <li class="py-1">
                  <p class="text-sm text-gray-600">{abr}</p>
                </li>
            {/each}
        </ul>
      </dd>
    </div>
  {/if}

  {#if reviewer.pseudonym.length > 0}
    <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
      <dt class="text-sm font-medium text-gray-600">Pseudonym</dt>
      <dd class="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">{reviewer.pseudonym}</dd>
    </div>
  {/if}

  {#if reviewer.alignment.length > 0}
    <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
      <dt class="text-sm font-medium text-gray-600">Ausrichtung</dt>
      <dd class="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">{reviewer.alignment}</dd>
    </div>
  {/if}

  {#if reviewer.brelationship.length > 0}
    <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
      <dt class="text-sm font-medium text-gray-600">Bezug zu Brahms</dt>
      <dd class="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">{@html reviewer.brelationship}</dd>
    </div>
  {/if}

  {#if reviewer.writings.length > 0}
    <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
      <dt class="text-sm font-medium text-gray-600">Bedeutende Schriften</dt>
      <dd class="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">
        <ul>
            {#each reviewer.writings as writing}
                <li class="py-1">
                  <p class="text-sm text-gray-600">{@html writing}</p>
                </li>
            {/each}
        </ul>
      </dd>
    </div>
  {/if}

  

  {#if reviewer.sources.length > 0}
    <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
      <dt class="text-sm font-medium text-gray-600">Quellen</dt>
      <dd class="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">
        {#each reviewer.sources as source}
          {#if source.islink === "yes"}
                  <a rel="external" href="{source.link}" class="text-teal-400 space-y-4">{@html source.text}</a>
                {:else}
                  <span class="text-sm text-gray-600">{@html source.text}</span>
                {/if}
            {/each}
        </dd>
    </div>
  {/if}

  {#if reviewer.general.length > 0}
    <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
      <dt class="text-sm font-medium text-gray-600">Mehr</dt>
      <dd class="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">
        <ul>
            {#each reviewer.general as paragraph}
                <li class="py-1">
                  <p class="text-sm text-gray-600">{@html paragraph}</p>
                </li>
            {/each}
        </ul>
      </dd>
    </div>
  {/if}
</div>

