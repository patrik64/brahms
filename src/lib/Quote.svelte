<script>
import quotes from "$lib/data/quotes.json";

function getWeekNumber(d) {
    // Copy date so don't modify original
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    // Set to nearest Thursday: current date + 4 - current day number
    // Make Sunday's day number 7
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay()||7));
    // Get first day of year
    var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
    // Calculate full weeks to nearest Thursday
    var weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7);
    // Return array of year and week number
    return weekNo;
}

let weekNr = getWeekNumber(new Date());
let quote = "Brahms ist ein geistvoller, gedankenreicher Gesellschafter, der wohl noch nie in seinem Leben ein leeres, nichtssagendes Wort gesprochen hat.";
let author = "Hans Paumgartner, Wiener Zeitung, 7. Mai 1893, S. 3";

//if (weekNr) {
//  if(weekNr > quotes.length) {
//    weekNr = weekNr % quotes.length;
//  }

//  quote = quotes[weekNr-1].quote;
//  author = quotes[weekNr-1].author;
//}
    
</script>

<div class="my-10 mx-auto w-full shadow-lg sm:rounded-lg">
  <div class="px-4 py-5 sm:p-6 ">
    <h3 class="text-md leading-6 font-medium text-gray-900">Brahms-Zitat der Woche</h3>
    <div class="mt-4">
      <div class="text-sm text-gray-500">
        <p>{quote}</p>
      </div>
      <div class="flex justify-end">
      <div class="mt-5">
        <p class="px-4 py-2 text-gray-700 text-sm"><i>{author}</i></p>
      </div>
      </div>
    </div>
  </div>
</div>