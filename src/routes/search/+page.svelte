<script>
  import { LogoutIcon } from "@rgossiaux/svelte-heroicons/outline";
  import events from "$lib/data/events.json";
  import works from "$lib/data/works.json";
  
  let search = '';

  //mark each event as not-processed
  for(let i = 0; i < events.length; i++) {
    events[i]["processed"] = false;
  }

  let groupedEvents = [];

  for(let i = 0; i < events.length; i++) {

    const gEvent = {};
    let created = false;
    const currentEvent = events[i];
    
    const currentDate = currentEvent.date.datefull;
    const currentYear = currentEvent.date.year;
    const currentMonth = currentEvent.date.month;
    const currentDay = currentEvent.date.day;
    const currentPlace = currentEvent.place;
    const currentVenue = currentEvent.venue;
    const currentTitle = currentDate + ", " + currentVenue + ", " + currentPlace;

    if(currentYear.length > 0 && currentMonth > 0 && currentDay > 0 && currentEvent["processed"] === false) {
      gEvent["title"] = currentTitle;
      gEvent["year"] = currentYear;
      gEvent["month"] = currentMonth;
      gEvent["day"] = currentDay;
      gEvent["events"] = [];
      gEvent["events"].push(currentEvent.id);
      created = true;

      currentEvent["processed"] = true;
    
      for(let j = i+1; j < events.length; j++) {
        const event = events[j];

        const date = event.date.datefull;
        const place = event.place;
        const venue = event.venue;

        if(date.length > 0) {
          const title = date + ", " + venue + ", " + place;
          if(title === currentTitle) {
            gEvent["events"].push(event.id);
            event["processed"] = true;
          }
        }
      }
    }
    
    if(created) {
      groupedEvents.push(gEvent);
    }
  }

  let presentEvents = groupedEvents.sort(function(a,b){ return new Date(a.year, a.month, a.day) - new Date(b.year, b.month, b.day); });

  function displayWorkName(id) {
    const event = events[id-1];
    const work = works[event.workid-1];
    if(work) {
      return work.title + ', ' + work.identifier;
    }
    return "";
  }

  function handleOnInput(event) {
    //fiter the grouped events regarding the search term

    let filteredEvents = [];

    for(let i = 0; i < groupedEvents.length; i++) {
      const gevent = groupedEvents[i];

      if(gevent["title"].indexOf(search) >= 0 ) {
        filteredEvents.push(gevent);
        continue;
      }

      for(let e = 0; e < gevent["events"].length; e++) {
        let eId = gevent["events"][e];
        const ev = events[eId - 1];
        const work = works[ev.workid - 1];

        if(work.title.indexOf(search) >= 0) {
          filteredEvents.push(gevent);
          break;
        }

        if(work.identifier.indexOf(search) >= 0) {
          filteredEvents.push(gevent);
          break;
        }
      }
    }

    presentEvents = filteredEvents;
  }
		
</script>

<!--pre>
  {JSON.stringify(groupedEvents, null, 2)}
</pre-->

<div class="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
  <div class="max-w-7xl mx-auto text-gray-600 text-lg">
    <div class="text-center text-4xl text-gray-600 my-2">Datenbanksuche</div>
    <div class="flex justify-center">
      <input bind:value={search} on:input={handleOnInput} placeholder="Volltextsuche" type="text" class="rounded-lg"/>
    </div>
  </div>

  <div class="-mx-4 mt-10 ring-1 ring-gray-300 sm:-mx-6 md:mx-0 md:rounded-lg">
    <table class="min-w-full divide-y divide-gray-300">
      <thead>
        <tr>
          <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-600 sm:pl-6">Veranstaltungen</th>
        </tr>
      </thead>
      <tbody>
        {#each presentEvents as gevent, eventIdx}
          <tr>
            <td class="{eventIdx === 0 ? '' : 'border-t border-gray-200'} px-3 py-3.5 text-sm text-teal-400 lg:table-cell">{gevent.title}
            {#if gevent.events.length > 0}
              <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dd class="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">
                <ul>
                {#each gevent.events as eventid}
                  <li class="py-1">
                    <p class="text-sm text-gray-600">{displayWorkName(eventid)}</p>
                  </li>
                {/each}
                </ul>
                </dd>
              </div>
            {/if}
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>