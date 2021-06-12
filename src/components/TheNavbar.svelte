<script>
  export let wordLength;
  export let charLength;
</script>

<header class="pr-3 bg-red-50 !max-w-full flex items-center justify-between">
  <ul
    class=" lg:flex w-[80%] hidden !max-w-full h-full items-center justify-around"
  >
    <li
      class="? h1 text-red-400 font-bold text-xl  py-3 cursor-pointer hover:bg-red-100 border-r-2 border-red-200 border-dashed text-center px-4 transition-all duration-150 ease-linear "
    >
      h1
    </li>
    <li
      class="h2 text-red-400 font-bold text-xl  py-3 cursor-pointer hover:bg-red-100 border-r-2 border-red-200 border-dashed text-center px-4 transition-all duration-150 ease-linear"
    >
      h2
    </li>
    <li
      class="h3 text-red-400 font-bold text-xl  py-3 cursor-pointer hover:bg-red-100 border-r-2 border-red-200 border-dashed text-center px-4 transition-all duration-150 ease-linear "
    >
      h3
    </li>
    <li
      class="h4 text-red-400 font-bold text-xl  py-3 cursor-pointer hover:bg-red-100 border-r-2 border-red-200 border-dashed text-center px-4 transition-all duration-150 ease-linear "
    >
      h4
    </li>
    <li
      class="h5 text-red-400 font-bold text-xl  py-3 cursor-pointer hover:bg-red-100 border-r-2 border-red-200 border-dashed text-center px-4 transition-all duration-150 ease-linear "
    >
      h5
    </li>
    <li
      class="h6 text-red-400 font-bold text-xl  py-3 cursor-pointer hover:bg-red-100 border-r-2 border-red-200 border-dashed text-center px-4 transition-all duration-150 ease-linear "
    >
      h6
    </li>
    <li
      class="tool-bold text-red-400 font-bold text-xl  py-3 cursor-pointer hover:bg-red-100 border-r-2 border-red-200 border-dashed text-center px-4 transition-all duration-150 ease-linear "
    >
      <b>b</b>
    </li>
    <li
      class="tool-italics text-red-400 font-bold text-xl  py-3 cursor-pointer hover:bg-red-100 border-r-2 border-red-200 border-dashed text-center px-4 transition-all duration-150 ease-linear "
    >
      <i>i</i>
    </li>
    <li
      class="tool-italics text-red-400 font-bold text-xl  py-3 cursor-pointer hover:bg-red-100 border-r-2 border-red-200 border-dashed text-center px-4 transition-all duration-150 ease-linear "
    >
      <del>del</del>
    </li>
    <li
      class="tool-quotes text-red-400 font-bold text-xl  py-3 cursor-pointer hover:bg-red-100 border-r-2 border-red-200 border-dashed text-center px-4 transition-all duration-150 ease-linear "
    >
      “
    </li>
    <li
      class="tool-quotes text-red-400 font-bold text-xl  py-3 cursor-pointer hover:bg-red-100 border-r-2 border-red-200 border-dashed text-center px-4 transition-all duration-150 ease-linear "
    >
      •
    </li>
    <li
      class="tool-quotes text-red-400 font-bold text-xl  py-3 cursor-pointer hover:bg-red-100 border-r-2 border-red-200 border-dashed text-center px-4 transition-all duration-150 ease-linear "
    >
      1.
    </li>
    <li
      class="tool-links text-red-400 font-bold text-xl  py-3 cursor-pointer hover:bg-red-100 border-r-2 border-red-200 border-dashed text-center px-4 transition-all duration-150 ease-linear "
    >
      🔗
    </li>
    <li
      class="tool-images text-red-400 font-bold text-xl  py-3 cursor-pointer hover:bg-red-100 border-r-2 border-red-200 border-dashed text-center px-4 transition-all duration-150 ease-linear "
    >
      🖼️
    </li>
    <li
      class="tool-save  py-3 cursor-pointer hover:bg-red-100 border-r-2 border-red-200 border-dashed text-center px-4 transition-all duration-150 ease-linear "
    >
      <button class="btn btn-green">export</button>
    </li>
  </ul>
  <div
    class="flex lg:!max-w-[30%] w-full py-2   h-full items-center justify-end"
  >
    <button class="btn btn-red mr-4 bg-red-300 inline-block md:hidden"
      >☀️</button
    >
    <div class="font-semibold text-center text-red-400 font-mono mr-8">
      {#if charLength <= 1}
        {charLength} character
      {:else}
        {charLength} characters
      {/if}
    </div>
    <div class="font-semibold text-red-400 font-mono">
      {#if wordLength <= 1}
        {wordLength} word
      {:else}
        {wordLength} words
      {/if}
    </div>
  </div>
</header>
