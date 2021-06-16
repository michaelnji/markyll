<script>
  import logo from "../assets/logo.png";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  // Dispatches an event toggleDarkMode, which is listened to and used to toggle dark mode in app component
  let toggleDarkMode = () => {
    dispatch("toggleDarkMode");
  };
  export let isDark;
</script>

<footer
  class=" flex items-center justify-between  p-2   bg-red-100 dark:bg-gray-500 fixed bottom-0 left-0 right-0 w-full border-t-2 border-dashed border-red-300 dark:border-gray-400"
>
  <figure class="w-36">
    <img src={logo} alt="" />
  </figure>
  <span />
  <nav>
    <ul class="flex items-center justify-end">
      <li>
        <button
          class="btn btn-red px-2 text-xl dark:bg-gray-700 "
          on:click={toggleDarkMode}
        >
          {#if isDark}
            🌙
          {:else}
            ☀️
          {/if}
        </button>
      </li>
      <li>
        <a
          href="https://www.github.com/michaelnji/markyll"
          class="btn btn-black py-3 mx-3  text-[0.8rem]">🦊Github</a
        >
      </li>
    </ul>
  </nav>
</footer>

<style>
</style>
