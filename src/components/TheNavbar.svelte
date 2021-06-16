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
      case "tool-images":
        insertMarkdownChar("![]()", true);
        break;
      case "tool-links":
        insertMarkdownChar("[]()");
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
  class="px-3  bg-red-50 dark:bg-gray-500 !w-full lg:flex py-0  lg:justify-between absolute top-0 z-3 overflow-auto border-b-2 border-dashed border-red-300 dark:border-gray-400"
>
  <ul class=" flex lg:w-[80%] h-full !w-full justify-around nav-list">
    <li
      class="tool-images text-xl cursor-pointer  !min-h-full flex items-center w-full justify-center  hover:bg-red-100 border-r-2 border-red-200 dark:border-gray-400  dark:hover:bg-gray-400  border-dashed text-center px-2 transition-all duration-150 ease-linear "
    >
      🖼️
    </li>
    <li
      class="tool-links  text-xl cursor-pointer  !min-h-full flex items-center w-full justify-center  hover:bg-red-100 border-r-2 border-red-200 dark:border-gray-400  dark:hover:bg-gray-400  border-dashed text-center px-2 transition-all duration-150 ease-linear"
    >
      🔗
    </li>
    <li
      class="tool-save h-full flex items-center w-full  py-2 justify-center border-r-2 border-red-200 dark:border-gray-400 dark:hover:bg-gray-400 border-dashed text-center  transition-all duration-150 ease-linear "
    >
      <button class="tool-save btn btn-green">export</button>
    </li>
  </ul>
  <div
    class="flex lg:!max-w-[30%] w-full py-2   h-full items-center justify-end"
  >
    <div
      class="font-semibold  text-center text-red-400 font-mono dark:text-gray-900 mr-8 hidden lg:inline-block"
    >
      {#if charLength <= 1}
        {charLength} char
      {:else}
        {charLength} chars
      {/if}
    </div>
    <div
      class="font-semibold text-red-400 hidden lg:inline-block font-mono dark:text-gray-900"
    >
      {#if wordLength <= 1}
        {wordLength} word
      {:else}
        {wordLength} words
      {/if}
    </div>
  </div>
</header>
