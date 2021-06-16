<script>
  import { createEventDispatcher, onMount } from "svelte";
  const dispatch = createEventDispatcher();
  export let wordLength;
  export let charLength;
  export let isDark;
  // Dispatches an event toggleDarkMode, which is listened to and used to toggle dark mode in app component
  let toggleDarkMode = () => {
    dispatch("toggleDarkMode");
  };
  let insertMarkdownChar = (val, nextLine = false, shiftCursor = 0) => {
    if (nextLine) {
      document.querySelector("textarea").value = `${
        document.querySelector("textarea").value + "\n" + val + " "
      }`;
    } else {
      document.querySelector("textarea").value =
        document.querySelector("textarea").value + val + " ";
      //   if(shiftCursor){

      //  FEATURE : simulate left arrow key press based on number passed as shiftCursor
      //  }
    }
    document.querySelector("textarea").focus();
  };
  let insertHandler = (val) => {
    switch (val.classList[0]) {
      case "h1":
        insertMarkdownChar("#", true);
        break;
      case "h2":
        insertMarkdownChar("##", true);
        break;
      case "h3":
        insertMarkdownChar("###", true);
        break;
      case "h4":
        insertMarkdownChar("####", true);
        break;
      case "h5":
        insertMarkdownChar("#####", true);
        break;
      case "h6":
        insertMarkdownChar("######", true);
        break;
      case "tool-bold":
        insertMarkdownChar("** **");
        break;
      case "tool-images":
        insertMarkdownChar("![]()", true);
        break;
      case "tool-list-ul":
        insertMarkdownChar(`-`, true);
        break;
      case "tool-list-ol":
        insertMarkdownChar(`1.`, true);
        break;
      case "tool-links":
        insertMarkdownChar("[]()");
        break;
      case "tool-del":
        insertMarkdownChar("~~");
        break;
      case "tool-italics":
        insertMarkdownChar("**");
        break;
      case "tool-quotes":
        insertMarkdownChar(">", true);
        break;
      default:
        break;
    }
  };
  onMount(() => {
    document.querySelectorAll(".nav-list li").forEach((el) => {
      el.addEventListener("click", (e) => {
        insertHandler(e.target);
      });
    });
  });
</script>

<header
  class="pr-3 bg-red-50 dark:bg-gray-500 !max-w-full flex  justify-between sm:h-[10vh]"
>
  <ul
    class=" lg:flex w-[80%] hidden !max-w-full items-center justify-around nav-list"
  >
    <li
      class="h1 text-red-400 font-bold text-xl  h-full flex items-center hover:bg-red-100 border-r-2 border-red-200 dark:border-gray-400 dark:hover:bg-gray-400 dark:text-gray-900 border-dashed text-center px-4 transition-all duration-150 ease-linear "
    >
      h1
    </li>
    <li
      class="h2 text-red-400 font-bold text-xl  h-full flex items-center cursor-pointer hover:bg-red-100 border-r-2 border-red-200 dark:border-gray-400 dark:hover:bg-gray-400 dark:text-gray-900 border-dashed text-center px-4 transition-all duration-150 ease-linear"
    >
      h2
    </li>
    <li
      class="h3 text-red-400 font-bold text-xl  h-full flex items-center hover:bg-red-100 border-r-2 border-red-200 dark:border-gray-400 dark:hover:bg-gray-400 dark:text-gray-900 border-dashed text-center px-4 transition-all duration-150 ease-linear "
    >
      h3
    </li>
    <li
      class="h4 text-red-400 font-bold text-xl  h-full flex items-center hover:bg-red-100 border-r-2 border-red-200 dark:border-gray-400 dark:hover:bg-gray-400 dark:text-gray-900 border-dashed text-center px-4 transition-all duration-150 ease-linear "
    >
      h4
    </li>
    <li
      class="h5 text-red-400 font-bold text-xl  h-full flex items-center hover:bg-red-100 border-r-2 border-red-200 dark:border-gray-400 dark:hover:bg-gray-400 dark:text-gray-900 border-dashed text-center px-4 transition-all duration-150 ease-linear "
    >
      h5
    </li>
    <li
      class="h6 text-red-400 font-bold text-xl  h-full flex items-center hover:bg-red-100 border-r-2 border-red-200 dark:border-gray-400 dark:hover:bg-gray-400 dark:text-gray-900 border-dashed text-center px-4 transition-all duration-150 ease-linear "
    >
      h6
    </li>
    <li
      class="tool-bold text-red-400 font-bold text-xl  h-full flex items-center hover:bg-red-100 border-r-2 border-red-200 dark:border-gray-400 dark:hover:bg-gray-400 dark:text-gray-900 border-dashed text-center px-4 transition-all duration-150 ease-linear "
    >
      <b class="tool-bold">b</b>
    </li>
    <li
      class="tool-italics text-red-400 font-bold text-xl  h-full flex items-center hover:bg-red-100 border-r-2 border-red-200 dark:border-gray-400 dark:hover:bg-gray-400 dark:text-gray-900 border-dashed text-center px-4 transition-all duration-150 ease-linear "
    >
      <i class="tool-italics">i</i>
    </li>
    <li
      class="tool-del text-red-400 font-bold text-xl  h-full flex items-center hover:bg-red-100 border-r-2 border-red-200 dark:border-gray-400 dark:hover:bg-gray-400 dark:text-gray-900 border-dashed text-center px-4 transition-all duration-150 ease-linear "
    >
      <del class="tool-del">del</del>
    </li>
    <li
      class="tool-quotes text-red-400 font-bold text-xl  h-full flex items-center hover:bg-red-100 border-r-2 border-red-200 dark:border-gray-400 dark:hover:bg-gray-400 dark:text-gray-900 border-dashed text-center px-4 transition-all duration-150 ease-linear "
    >
      “
    </li>
    <li
      class="tool-list-ul text-red-400 font-bold text-xl  h-full flex items-center hover:bg-red-100 border-r-2 border-red-200 dark:border-gray-400 dark:hover:bg-gray-400 dark:text-gray-900 border-dashed text-center px-4 transition-all duration-150 ease-linear "
    >
      •
    </li>
    <li
      class="tool-list-ol text-red-400 font-bold text-xl  h-full flex items-center hover:bg-red-100 border-r-2 border-red-200 dark:border-gray-400 dark:hover:bg-gray-400 dark:text-gray-900 border-dashed text-center px-4 transition-all duration-150 ease-linear "
    >
      1.
    </li>
    <li
      class="tool-links text-red-400 font-bold text-xl  h-full flex items-center hover:bg-red-100 border-r-2 border-red-200 dark:border-gray-400 dark:hover:bg-gray-400 dark:text-gray-900 border-dashed text-center px-4 transition-all duration-150 ease-linear "
    >
      🔗
    </li>
    <li
      class="tool-images text-red-400 font-bold text-xl  h-full flex items-center hover:bg-red-100 border-r-2 border-red-200 dark:border-gray-400 dark:hover:bg-gray-400 dark:text-gray-900 border-dashed text-center px-4 transition-all duration-150 ease-linear "
    >
      🖼️
    </li>
    <li
      class="tool-save h-full flex items-center hover:bg-red-100 border-r-2 border-red-200 dark:border-gray-400 dark:hover:bg-gray-400 dark:text-gray-900 border-dashed text-center px-4 transition-all duration-150 ease-linear "
    >
      <button class="tool-save btn btn-green">export</button>
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
      class="font-semibold text-xl text-center text-red-400 font-mono dark:text-gray-900 mr-8 sm:text-sm"
    >
      {#if charLength <= 1}
        {charLength} character
      {:else}
        {charLength} characters
      {/if}
    </div>
    <div
      class="font-semibold text-red-400 font-mono dark:text-gray-900 text-xl sm:text-sm"
    >
      {#if wordLength <= 1}
        {wordLength} word
      {:else}
        {wordLength} words
      {/if}
    </div>
  </div>
</header>
