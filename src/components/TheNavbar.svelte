<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  // Dispatches an event toggleDarkMode, which is listened to and used to toggle dark mode in app component
  let toggleDarkMode = () => {
    dispatch("toggleDarkMode");
  };
  export let wordLength;
  export let charLength;
  export let isDark;
</script>

<header
  class="pr-3 bg-red-50 dark:bg-gray-500 !max-w-full flex items-center justify-between"
>
  <ul
    class=" lg:flex w-[80%] hidden !max-w-full h-full items-center justify-around"
  >
    <li
      class="? h1 text-red-400 font-bold text-xl  py-3 cursor-pointer hover:bg-red-100 border-r-2 border-red-200 dark:border-gray-400 dark:hover:bg-gray-400 dark:text-gray-900 border-dashed text-center px-4 transition-all duration-150 ease-linear "
    >
      h1
    </li>
    <li
      class="h2 text-red-400 font-bold text-xl  py-3 cursor-pointer hover:bg-red-100 border-r-2 border-red-200 dark:border-gray-400 dark:hover:bg-gray-400 dark:text-gray-900 border-dashed text-center px-4 transition-all duration-150 ease-linear"
    >
      h2
    </li>
    <li
      class="h3 text-red-400 font-bold text-xl  py-3 cursor-pointer hover:bg-red-100 border-r-2 border-red-200 dark:border-gray-400 dark:hover:bg-gray-400 dark:text-gray-900 border-dashed text-center px-4 transition-all duration-150 ease-linear "
    >
      h3
    </li>
    <li
      class="h4 text-red-400 font-bold text-xl  py-3 cursor-pointer hover:bg-red-100 border-r-2 border-red-200 dark:border-gray-400 dark:hover:bg-gray-400 dark:text-gray-900 border-dashed text-center px-4 transition-all duration-150 ease-linear "
    >
      h4
    </li>
    <li
      class="h5 text-red-400 font-bold text-xl  py-3 cursor-pointer hover:bg-red-100 border-r-2 border-red-200 dark:border-gray-400 dark:hover:bg-gray-400 dark:text-gray-900 border-dashed text-center px-4 transition-all duration-150 ease-linear "
    >
      h5
    </li>
    <li
      class="h6 text-red-400 font-bold text-xl  py-3 cursor-pointer hover:bg-red-100 border-r-2 border-red-200 dark:border-gray-400 dark:hover:bg-gray-400 dark:text-gray-900 border-dashed text-center px-4 transition-all duration-150 ease-linear "
    >
      h6
    </li>
    <li
      class="tool-bold text-red-400 font-bold text-xl  py-3 cursor-pointer hover:bg-red-100 border-r-2 border-red-200 dark:border-gray-400 dark:hover:bg-gray-400 dark:text-gray-900 border-dashed text-center px-4 transition-all duration-150 ease-linear "
    >
      <b>b</b>
    </li>
    <li
      class="tool-italics text-red-400 font-bold text-xl  py-3 cursor-pointer hover:bg-red-100 border-r-2 border-red-200 dark:border-gray-400 dark:hover:bg-gray-400 dark:text-gray-900 border-dashed text-center px-4 transition-all duration-150 ease-linear "
    >
      <i>i</i>
    </li>
    <li
      class="tool-italics text-red-400 font-bold text-xl  py-3 cursor-pointer hover:bg-red-100 border-r-2 border-red-200 dark:border-gray-400 dark:hover:bg-gray-400 dark:text-gray-900 border-dashed text-center px-4 transition-all duration-150 ease-linear "
    >
      <del>del</del>
    </li>
    <li
      class="tool-quotes text-red-400 font-bold text-xl  py-3 cursor-pointer hover:bg-red-100 border-r-2 border-red-200 dark:border-gray-400 dark:hover:bg-gray-400 dark:text-gray-900 border-dashed text-center px-4 transition-all duration-150 ease-linear "
    >
      “
    </li>
    <li
      class="tool-quotes text-red-400 font-bold text-xl  py-3 cursor-pointer hover:bg-red-100 border-r-2 border-red-200 dark:border-gray-400 dark:hover:bg-gray-400 dark:text-gray-900 border-dashed text-center px-4 transition-all duration-150 ease-linear "
    >
      •
    </li>
    <li
      class="tool-quotes text-red-400 font-bold text-xl  py-3 cursor-pointer hover:bg-red-100 border-r-2 border-red-200 dark:border-gray-400 dark:hover:bg-gray-400 dark:text-gray-900 border-dashed text-center px-4 transition-all duration-150 ease-linear "
    >
      1.
    </li>
    <li
      class="tool-links text-red-400 font-bold text-xl  py-3 cursor-pointer hover:bg-red-100 border-r-2 border-red-200 dark:border-gray-400 dark:hover:bg-gray-400 dark:text-gray-900 border-dashed text-center px-4 transition-all duration-150 ease-linear "
    >
      🔗
    </li>
    <li
      class="tool-images text-red-400 font-bold text-xl  py-3 cursor-pointer hover:bg-red-100 border-r-2 border-red-200 dark:border-gray-400 dark:hover:bg-gray-400 dark:text-gray-900 border-dashed text-center px-4 transition-all duration-150 ease-linear "
    >
      🖼️
    </li>
    <li
      class="tool-save  py-3 cursor-pointer hover:bg-red-100 border-r-2 border-red-200 dark:border-gray-400 dark:hover:bg-gray-400 dark:text-gray-900 border-dashed text-center px-4 transition-all duration-150 ease-linear "
    >
      <button class="btn btn-green">export</button>
    </li>
  </ul>
  <div
    class="flex lg:!max-w-[30%] w-full py-2   h-full items-center justify-end"
  >
    <button
      class="btn  mr-4 bg-red-300 inline-block dark:bg-gray-700 md:hidden"
      on:click={toggleDarkMode}
    >
      {#if isDark}
        🌙
      {:else}
        ☀️
      {/if}
    </button>
    <div
      class="font-semibold text-xl text-center text-red-400 font-mono dark:text-gray-900 mr-8"
    >
      {#if charLength <= 1}
        {charLength} character
      {:else}
        {charLength} characters
      {/if}
    </div>
    <div
      class="font-semibold text-red-400 font-mono dark:text-gray-900 text-xl"
    >
      {#if wordLength <= 1}
        {wordLength} word
      {:else}
        {wordLength} words
      {/if}
    </div>
  </div>
</header>
