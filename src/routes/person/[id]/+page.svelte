<script>
    import { XIcon } from "@rgossiaux/svelte-heroicons/outline";
    import people from "$lib/data/people.json";
    import { page } from '$app/stores'
  
    let person = people[$page.params.id - 1];
    let afold = true;

    
</script>

<div class="lg:my-10 my-2 mx-auto lg:w-1/2 bg-white shadow overflow-hidden sm:rounded-lg">
  <div class="relative px-4 pt-10 pb-5 lg:py-5 sm:px-6">
    <div class="absolute top-0 right-0 mr-2 mt-2">
      <a href="/people"><svelte:component this={XIcon} class="h-12 w-12 hover:text-gray-600" aria-hidden="true" /></a>
    </div>
    <div class="text-2xl leading-6 font-medium">{person.fullname}</div>
  </div>

  <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
      <dl class="sm:divide-y sm:divide-gray-200">
      {#if person.familyname}
      <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-600">Familienname</dt>
          <dd class="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">{person.familyname}</dd>
      </div>
      {/if}
      {#if person.firstname}
      <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-600">Vorname</dt>
          <dd class="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">{person.firstname}</dd>
      </div>
      {/if}
      {#if person.alternatives && person.alternatives.length > 0}
      <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-600">Name (alternativ)</dt>
        {#if person.alternatives.length === 1}
          <dd class="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">
            {person.alternatives[0]}
          </dd>
        {:else}
          {#if afold}
          <dd class="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">
            {person.alternatives[0]}
            <br />
            <button on:click="{() => afold = !afold}" class="text-primary-400">mehr anzeigen</button>
          </dd>
          {:else}
          <dd class="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">
            {#each person.alternatives as alter, i}
              {alter}
              <br />
            {/each}
            <button on:click="{() => afold = !afold}" class="text-primary-400">weniger anzeigen</button>
          </dd>
          {/if}
        {/if}
      </div>
      {/if}
      {#if person.datebirth && person.datebirth.text}
      <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-600">Geburtsdatum</dt>
          <dd class="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">{person.datebirth.text}</dd>
      </div>
      {/if}
      {#if person.datebirth && person.datebirth.places && person.datebirth.places.length > 0}
      <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-600">Geburtsort</dt>
          <dd class="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">
            {#each person.datebirth.places as place, i}
              {place}
              {#if i+1 !== person.datebirth.places.length}
                <br />
              {/if}
            {/each}
          </dd>
      </div>
      {/if}
      {#if person.datedeath && person.datedeath.text}
      <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-600">Sterbedatum</dt>
          <dd class="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">{person.datedeath.text}</dd>
      </div>
      {/if}
      {#if person.datedeath && person.datedeath.places && person.datedeath.places.length > 0}
      <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-600">Sterbeort</dt>
          <dd class="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">
            {#each person.datedeath.places as place, i}
              {place}
              {#if i+1 !== person.datedeath.places.length}
                <br />
              {/if}
            {/each}
          </dd>
      </div>
      {/if}
      {#if person.roles && person.roles.length > 0}
      <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-600">Funktion / Rolle</dt>
          <dd class="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">
            {#each person.roles as role, i}
              {role}
              {#if i+1 !== person.roles.length}
                <br />
              {/if}
            {/each}
          </dd>
      </div>
      {/if}
      {#if person.gnd && person.gnd.uri}
      <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <a href={person.gnd.uri}>
            <dt class="text-sm font-medium text-primary-600">GND</dt>
          </a>
          <a href={person.gnd.uri}>
          <dd class="mt-1 text-sm text-gray-600 hover:text-primary-400 sm:mt-0 sm:col-span-2">{person.gnd.text}</dd>
        </a>
      </div>
      {/if}

      {#if person.OeML && person.OeML.length > 0}
      <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <a href={person.OeML}>
            <dt class="text-sm font-medium text-primary-600">OeML</dt>
          </a>
      </div>
      {/if}

      {#if person.OeBL && person.OeBL.length > 0}
      <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <a href={person.OeBL}>
            <dt class="text-sm font-medium text-primary-600">OeBL</dt>
          </a>
      </div>
      {/if}

      {#if person.BMLO && person.BMLO.length > 0}
      <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <a href={person.BMLO}>
            <dt class="text-sm font-medium text-primary-600">BMLO</dt>
          </a>
      </div>
      {/if}

      {#if person.ABLO && person.ABLO.length > 0}
      <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <a href={person.ABLO}>
            <dt class="text-sm font-medium text-primary-600">ABLO</dt>
          </a>
      </div>
      {/if}

      {#if person.GMO && person.GMO.length > 0}
      <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <a href={person.GMO}>
            <dt class="text-sm font-medium text-primary-600">GMO</dt>
          </a>
      </div>
      {/if}

      {#if person.MGG && person.MGG.length > 0}
      <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <a href={person.MGG}>
            <dt class="text-sm font-medium text-primary-600">MGG</dt>
          </a>
      </div>
      {/if}

      {#if person.SDI && person.SDI.length > 0}
      <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <a href={person.SDI}>
            <dt class="text-sm font-medium text-primary-600">SDI</dt>
          </a>
      </div>
      {/if}

    </dl>
  </div>
</div>
