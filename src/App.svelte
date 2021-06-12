<script>
  // import { onMount } from "svelte";
  import TheFooter from "./components/TheFooter.svelte";
  import TheMarkdownEditor from "./components/TheMarkdownEditor.svelte";
  import TheMarkdownPreview from "./components/TheMarkdownPreview.svelte";
  import TheNavbar from "./components/TheNavbar.svelte";
  import marked from "marked";
  import DOMPurify from "dompurify";
  import imgUrl from "./assets/cover.png";
  let source;
  let defaultText = `
   ![Markyll Logo](${imgUrl})

 This is a minimalist Markdown editor built using [Svelte](https://www.svelte.dev) and [windicss](https://www.windicss.org) by [Michael Nji](https://www.github.com/michaelnji). <br>
 You can learn more about markdown [here](https://www.markdown.com)

 PS: markdown also supports some html tags too!😉
  `;

  // $: markdown = marked(source);
</script>

<div class="w-screen h-screen bg-red-100 fixed">
  <TheNavbar />
  <main
    class="flex h-[80vh] w-full justify-around border-t-2 border-dashed border-red-300"
  >
    <TheMarkdownEditor>
      <textarea
        bind:value={source}
        placeholder="Enter your Markdown 👍🏾👍🏾👍🏾"
        class="bg-red-100 text-red-400 min-w-full scrollbar scrollbar-w-2 scrollbar-thumb-red-300  scrollbar-thumb-rounded-[9999px] scrollbar-track-red-100  !min-h-full !max-h-full !border-none prose overflow-auto !outline-none p-8 placeholder-opacity-40 placeholder-red-400 font-mono text-2xl"
      />
    </TheMarkdownEditor>
    <TheMarkdownPreview>
      {#if source}
        {@html DOMPurify.sanitize(marked(source))}
      {:else}
        {@html DOMPurify.sanitize(marked(defaultText))}
      {/if}
    </TheMarkdownPreview>
  </main>
  <div class="h-full  border-t-2 border-dashed border-red-300">
    <TheFooter />
  </div>
</div>
