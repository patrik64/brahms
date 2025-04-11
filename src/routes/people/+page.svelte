<script>
    import { LogoutIcon } from "@rgossiaux/svelte-heroicons/outline";
    import people from "$lib/data/people.json";
  </script>


<div class="max-w-3xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-3xl text-gray-600 text-center mb-10">Personen</h1>
      </div>
    </div>

    <ul role="list" class="divide-y divide-gray-100">
      {#each people as person}
      <li class="flex items-center justify-between gap-x-6 py-5">
        <div class="min-w-0">
          <div class="flex items-start gap-x-3">
            <a href={`/person/${person.id}`}>
              <p class="text-sm font-semibold leading-6 text-gray-900 hover:text-primary-400">{person.fullname}</p>
            </a>
          </div>
          <div class="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500">
            {#if person.datebirth.text && person.datedeath.text}
            <p class="whitespace-nowrap">
              ({ person.datebirth.text } - { person.datedeath.text })
            </p>
            <svg viewBox="0 0 2 2" class="h-0.5 w-0.5 fill-current">
              <circle cx="1" cy="1" r="1" />
            </svg>
            {/if}
            {#each person.roles as role, i}
              <p class="truncate">{role}</p>
              {#if i+1 !== person.roles.length}
              <p class="truncate">&nbsp;/&nbsp;</p>
              {/if}
            {/each}
          </div>
        </div>
        {#if person.gnd.text }
        <div class="flex flex-none items-center gap-x-4">
          <a href={person.gnd.uri} class="hidden rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:block">GND</a>
        </div>
        {/if}
      </li>
      {/each}
    </ul>
  </div>

  <!--div class="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-3xl text-gray-600 text-center">Personen</h1>
      </div>
    </div>
    <ul class="py-12 mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-6">
      {#each people as person}
        <li>
          <a href={`/person/${person.id}`} class="space-y-4">
            {#if person.image && person.image.length > 0}
              <img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24 object-cover hover:scale-110 transition duration-500 cursor-pointer" src={`/images/people/thumbs/${person.image}`} alt={person.surname} />
            {:else}
              <svg class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24 object-cover text-gray-300 border border-gray-100 hover:scale-110 transition duration-500 cursor-pointer" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            {/if}
            <div class="space-y-2">
              <div class="text-xs font-medium lg:text-sm text-center">
                <h3>
                  <div class="text-teal-400">{person.name} {person.surname}</div>
                </h3>
              </div>
            </div>
          </a>    <ul role="list" class="divide-y divide-gray-100">
      <li v-for="project in projects" :key="project.id" class="flex items-center justify-between gap-x-6 py-5">
        <div class="min-w-0">
          <div class="flex items-start gap-x-3">
            <p class="text-sm font-semibold leading-6 text-gray-900">{{ project.name }}</p>
            <p :class="[statuses[project.status], 'rounded-md whitespace-nowrap mt-0.5 px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset']">{{ project.status }}</p>
          </div>
          <div class="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500">
            <p class="whitespace-nowrap">
              Due on <time :datetime="project.dueDateTime">{{ project.dueDate }}</time>
            </p>
            <svg viewBox="0 0 2 2" class="h-0.5 w-0.5 fill-current">
              <circle cx="1" cy="1" r="1" />
            </svg>
            <p class="truncate">Created by {{ project.createdBy }}</p>
          </div>
        </div>
        <div class="flex flex-none items-center gap-x-4">
          <a :href="project.href" class="hidden rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:block"
            >View project<span class="sr-only">, {{ project.name }}</span></a
          >
          <Menu as="div" class="relative flex-none">
            <MenuButton class="-m-2.5 block p-2.5 text-gray-500 hover:text-gray-900">
              <span class="sr-only">Open options</span>
              <EllipsisVerticalIcon class="h-5 w-5" aria-hidden="true" />
            </MenuButton>
            <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
              <MenuItems class="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                <MenuItem v-slot="{ active }">
                  <a href="#" :class="[active ? 'bg-gray-50' : '', 'block px-3 py-1 text-sm leading-6 text-gray-900']"
                    >Edit<span class="sr-only">, {{ project.name }}</span></a
                  >
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a href="#" :class="[active ? 'bg-gray-50' : '', 'block px-3 py-1 text-sm leading-6 text-gray-900']"
                    >Move<span class="sr-only">, {{ project.name }}</span></a
                  >
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a href="#" :class="[active ? 'bg-gray-50' : '', 'block px-3 py-1 text-sm leading-6 text-gray-900']"
                    >Delete<span class="sr-only">, {{ project.name }}</span></a
                  >
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </li>
    </ul>
        </li>
      {/each}
    </ul>
  
    <div class="hidden md:block -mx-4 mt-10 ring-1 ring-gray-300 sm:-mx-6 md:mx-0 md:rounded-lg">
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
              <td class="{personIdx === 0 ? '' : 'border-t border-gray-200'} px-3 py-3.5 text-sm text-gray-500 lg:table-cell"><a href={`/person/${person.id}`} class="hover:text-black">{person.surname}, {person.name}</a></td>
              <td class="{personIdx === 0 ? '' : 'border-t border-gray-200'} px-3 py-3.5 text-sm text-gray-500 lg:table-cell">({person.birthdate} - {person.deathdate})</td>
              {#if person.role.length > 0}
                <td class="{personIdx === 0 ? '' : 'border-t border-gray-200'} px-3 py-3.5 text-sm text-gray-500 lg:table-cell">{person.function} / {person.role}</td>
              {:else}
                <td class="{personIdx === 0 ? '' : 'border-t border-gray-200'} px-3 py-3.5 text-sm text-gray-500 lg:table-cell">{person.function}</td>
              {/if}
              <td class="{personIdx === 0 ? '' : 'border-t border-gray-200'} px-3 py-3.5 text-sm text-gray-500 lg:table-cell">
                <a href={`/person/${person.id}`} class="hover:text-black"><svelte:component this={LogoutIcon} class="pr-2 mx-auto h-6" aria-hidden="true" /></a>
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  </div-->
  