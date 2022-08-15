<script context="module">
    export const load = ({ params }) => {
        const id = params.id;

        return {
            props: {
                id
            }
        };
    }
</script>

<script>
    export let id;
    import people from '$lib/data/people.json';
import Link from '@rgossiaux/svelte-heroicons/outline/Link';

    let person = people[id-1];
</script>

<div class="my-10 mx-auto lg:w-1/2 bg-white shadow overflow-hidden sm:rounded-lg">
    <div class="px-4 py-5 sm:px-6">
      <a rel="external" href="https://anno.onb.ac.at/info/aze_info.htm" class="text-2xl leading-6 font-medium">{person.surname}, {person.name}</a>
      {#if person.image && person.image.length > 0}
        <img class="my-4 object-contain" src="{`/images/people/${person.image}`}" alt="" />
      {/if}
    </div>
    <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
      <dl class="sm:divide-y sm:divide-gray-200">
        <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-600">Familienname</dt>
          <dd class="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">{person.surname}</dd>
        </div>
        <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-600">Vorname</dt>
          <dd class="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">{person.name}</dd>
        </div>
        <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-600">Geburtsdatum</dt>
          <dd class="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">{person.birthdate}</dd>
        </div>
        <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-600">Geburtsort</dt>
          <dd class="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">{person.birthplace}</dd>
        </div>
        <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-600">Sterbedatum</dt>
          <dd class="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">{person.deathdate}</dd>
        </div>
        <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-600">Sterbeort</dt>
          <dd class="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">{person.deathplace}</dd>
        </div>
        <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-600">Funktion / Rolle</dt>
          {#if person.role.length > 0}
            <dd class="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">{person.function} / {person.role}</dd>
          {:else}
            <dd class="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">{person.function}</dd>
          {/if}
        </div>
        {#if person.links.length > 0}
        <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-600">Links</dt>
          <dd class="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">
            <ul>
            {#each person.links as link}
              <li class="py-1">
                <a rel="external" href="{link.lvalue}" class="text-teal-400">{link.lkey}</a>
              </li>
            {/each}
          </ul>
          </dd>
        </div>
        {/if}
      </dl>
    </div>
  </div>
  


