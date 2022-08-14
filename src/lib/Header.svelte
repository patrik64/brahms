<!-- This example requires Tailwind CSS v2.0+ -->
<script>
  import { Popover, PopoverButton, PopoverGroup, PopoverPanel, Transition } from "@rgossiaux/svelte-headlessui";

  import { BookOpenIcon, ArchiveIcon, HomeIcon, NewspaperIcon, SearchIcon, TranslateIcon, UsersIcon, CloudIcon, BriefcaseIcon, LibraryIcon, MenuIcon, XIcon } from "@rgossiaux/svelte-heroicons/outline";

  import { ChevronDownIcon } from "@rgossiaux/svelte-heroicons/solid";

  const projects = [
    {
      name: "Über das Projekt",
      href: "/project",
      description: "About the Project",
      icon: BookOpenIcon
    },
    {
      name: "Wiener Presse",
      href: "/press",
      description: "Viennese Press",
      icon: NewspaperIcon
    },
    {
      name: "Zeitungen",
      href: "/newspapers",
      description: "Newspapers",
      icon: NewspaperIcon
    },
    {
      name: "Rezensenten",
      href: "/reviewers",
      description: "Reviewers",
      icon: ArchiveIcon
    }
  ];

  const brahmswien = [
    {
      name: "Brahms in Wien",
      href: "/vienna",
      description: "Brahms in Vienna",
      icon: HomeIcon
    },
    {
      name: "Aufführungsorte",
      href: "/venues",
      description: "Venues",
      icon: LibraryIcon
    },
    {
      name: "Brahms-Interpret*innen",
      href: "/interpreters",
      description: "Brahms-Perfor*mers",
      icon: TranslateIcon
    }
  ];

  const database = [
    {
      name: "Benutzerhinweise",
      href: "/usernotes",
      description: "User Notes",
      icon: CloudIcon
    },
    {
      name: "Suche",
      href: "/search",
      description: "Search",
      icon: SearchIcon
    },
    {
      name: "Personen",
      href: "/people",
      description: "Persons",
      icon: UsersIcon
    },
    {
      name: "Werke",
      href: "/works",
      description: "Works",
      icon: BriefcaseIcon
    }
  ];

  const research = [
    {
      name: "Literatur",
      href: "/literature",
      description: "Literature",
      icon: BookOpenIcon
    }
  ];
</script>

<Popover class="relative bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6">
    <div class="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
      <div class="flex justify-start lg:w-0 lg:flex-1">
        <a href="/">
          <span class="sr-only">Brahms</span>
          <img class="h-8 w-auto sm:h-10" src="/images/logo.png" alt="Brahms" />
        </a>
      </div>
      <div class="-mr-2 -my-2 md:hidden">
        <PopoverButton class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none">
          <span class="sr-only">Open menu</span>
          <MenuIcon class="h-6 w-6" aria-hidden="true" />
        </PopoverButton>
      </div>
      <PopoverGroup as="nav" class="hidden md:flex space-x-10">
        <Popover class="relative" let:open>
          <PopoverButton class="{open ? 'text-gray-900' : 'text-gray-500'} group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none">
            <span>Projekte</span>
            <ChevronDownIcon class="{open ? 'text-gray-600' : 'text-gray-400'} ml-2 h-5 w-5 group-hover:text-gray-500" aria-hidden="true" />
          </PopoverButton>

          <Transition enter="transition ease-out duration-200" enterFrom="opacity-0 translate-y-1" enterTo="opacity-100 translate-y-0" leave="transition ease-in duration-150" leaveFrom="opacity-100 translate-y-0" leaveTo="opacity-0 translate-y-1">
            <PopoverPanel as="a" class="absolute -ml-4 mt-3 transform z-10 px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
              <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                  {#each projects as item}
                    <PopoverButton as="a" href={item.href} class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                      <svelte:component this={item.icon} class="flex-shrink-0 h-6 w-6 text-teal-600" aria-hidden="true" />
                      <div class="ml-4">
                        <p class="text-base font-medium text-gray-900">
                          {item.name}
                        </p>
                        <p class="mt-1 text-sm text-gray-500">
                          {item.description}
                        </p>
                      </div>
                    </PopoverButton>
                  {/each}
                </div>
              </div>
            </PopoverPanel>
          </Transition>
        </Popover>

        <Popover class="relative" let:open>
          <PopoverButton class="{open ? 'text-gray-900' : 'text-gray-500'} group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none">
            <span>Brahms' Wien</span>
            <ChevronDownIcon class="{open ? 'text-gray-600' : 'text-gray-400'} ml-2 h-5 w-5 group-hover:text-gray-500" aria-hidden="true" />
          </PopoverButton>

          <Transition enter="transition ease-out duration-200" enterFrom="opacity-0 translate-y-1" enterTo="opacity-100 translate-y-0" leave="transition ease-in duration-150" leaveFrom="opacity-100 translate-y-0" leaveTo="opacity-0 translate-y-1">
            <PopoverPanel as="a" class="absolute -ml-4 mt-3 transform z-10 px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
              <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                  {#each brahmswien as item}
                    <PopoverButton as="a" href={item.href} class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                      <svelte:component this={item.icon} class="flex-shrink-0 h-6 w-6 text-teal-600" aria-hidden="true" />
                      <div class="ml-4">
                        <p class="text-base font-medium text-gray-900">
                          {item.name}
                        </p>
                        <p class="mt-1 text-sm text-gray-500">
                          {item.description}
                        </p>
                      </div>
                    </PopoverButton>
                  {/each}
                </div>
              </div>
            </PopoverPanel>
          </Transition>
        </Popover>

        <Popover class="relative" let:open>
          <PopoverButton class="{open ? 'text-gray-900' : 'text-gray-500'} group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none">
            <span>Datenbank</span>
            <ChevronDownIcon class="{open ? 'text-gray-600' : 'text-gray-400'} ml-2 h-5 w-5 group-hover:text-gray-500" aria-hidden="true" />
          </PopoverButton>

          <Transition enter="transition ease-out duration-200" enterFrom="opacity-0 translate-y-1" enterTo="opacity-100 translate-y-0" leave="transition ease-in duration-150" leaveFrom="opacity-100 translate-y-0" leaveTo="opacity-0 translate-y-1">
            <PopoverPanel class="absolute -ml-4 mt-3 transform z-10 px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
              <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                  {#each database as item}
                    <PopoverButton as="a" href={item.href} class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                      <svelte:component this={item.icon} class="flex-shrink-0 h-6 w-6 text-teal-600" aria-hidden="true" />
                      <div class="ml-4">
                        <p class="text-base font-medium text-gray-900">
                          {item.name}
                        </p>
                        <p class="mt-1 text-sm text-gray-500">
                          {item.description}
                        </p>
                      </div>
                    </PopoverButton>
                  {/each}
                </div>
              </div>
            </PopoverPanel>
          </Transition>
        </Popover>

        <Popover class="relative" let:open>
          <PopoverButton class="{open ? 'text-gray-900' : 'text-gray-500'} group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none">
            <span>Forschung</span>
            <ChevronDownIcon class="{open ? 'text-gray-600' : 'text-gray-400'} ml-2 h-5 w-5 group-hover:text-gray-500" aria-hidden="true" />
          </PopoverButton>

          <Transition enter="transition ease-out duration-200" enterFrom="opacity-0 translate-y-1" enterTo="opacity-100 translate-y-0" leave="transition ease-in duration-150" leaveFrom="opacity-100 translate-y-0" leaveTo="opacity-0 translate-y-1">
            <PopoverPanel class="absolute -ml-4 mt-3 transform z-10 px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
              <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                  {#each research as item}
                    <PopoverButton as="a" href={item.href} class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                      <svelte:component this={item.icon} class="flex-shrink-0 h-6 w-6 text-teal-600" aria-hidden="true" />
                      <div class="ml-4">
                        <p class="text-base font-medium text-gray-900">
                          {item.name}
                        </p>
                        <p class="mt-1 text-sm text-gray-500">
                          {item.description}
                        </p>
                      </div>
                    </PopoverButton>
                  {/each}
                </div>
              </div>
            </PopoverPanel>
          </Transition>
        </Popover>

        <a href="/contact" class="text-base font-medium text-gray-500 hover:text-gray-900"> Kontakt </a>
      </PopoverGroup>
      <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
        <!--a href="/" class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"> Sign in </a>
          <a href="/" class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-teal-600 hover:bg-teal-700"> Sign up </a-->
      </div>
    </div>
  </div>

  <!--mobile menu -->
  <Transition enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
    <PopoverPanel focus class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
      <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
        <div class="pt-5 pb-6 px-5">
          <div class="flex items-center justify-between">
            <div>
              <img class="h-8 w-auto" src="/images/logo.png" alt="Brahms" />
            </div>
            <div class="-mr-2">
              <PopoverButton class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none">
                <span class="sr-only">Close menu</span>
                <XIcon class="h-6 w-6" aria-hidden="true" />
              </PopoverButton>
            </div>
          </div>
          <div class="mt-6">
            <nav class="grid gap-y-8">
              {#each projects as item}
                <PopoverButton as="a" href={item.href} class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                  <svelte:component this={item.icon} class="flex-shrink-0 h-6 w-6 text-teal-600" aria-hidden="true" />
                  <span class="ml-3 text-base font-medium text-gray-900">
                    {item.name}
                  </span>
                </PopoverButton>
              {/each}
            </nav>
          </div>
          <div class="mt-6">
            <nav class="grid gap-y-8">
              {#each brahmswien as item}
                <PopoverButton as="a" href={item.href} class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                  <svelte:component this={item.icon} class="flex-shrink-0 h-6 w-6 text-teal-600" aria-hidden="true" />
                  <span class="ml-3 text-base font-medium text-gray-900">
                    {item.name}
                  </span>
                </PopoverButton>
              {/each}
            </nav>
          </div>
          <div class="mt-6">
            <nav class="grid gap-y-8">
              {#each database as item}
                <PopoverButton as="a" href={item.href} class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                  <svelte:component this={item.icon} class="flex-shrink-0 h-6 w-6 text-teal-600" aria-hidden="true" />
                  <span class="ml-3 text-base font-medium text-gray-900">
                    {item.name}
                  </span>
                </PopoverButton>
              {/each}
              
              <PopoverButton as="a" href="/literature" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                <svelte:component this={BookOpenIcon} class="flex-shrink-0 h-6 w-6 text-teal-600" aria-hidden="true" />
                  <span class="ml-3 text-base font-medium text-gray-900">
                    Literatur
                  </span>
              </PopoverButton>
            </nav>
          </div>
        </div>
        <div class="py-6 px-5 space-y-6">
          <div class="grid grid-cols-1 gap-y-4 gap-x-8">
            <PopoverButton as="a" href="/contact" class="text-base font-medium text-gray-900 hover:text-gray-700">Kontakt</PopoverButton>
          </div>
        </div>
      </div>
    </PopoverPanel>
  </Transition>
  <!--mobile menu -->
</Popover>
