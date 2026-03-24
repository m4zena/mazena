<script>
  import { onMount } from "svelte";

  onMount(() => {
    const scriptId = "libzena-external-script";
    if (document.getElementById(scriptId)) return;

    const script = document.createElement("script");
    script.id = scriptId;
    script.type = "module";
    script.src = "https://files.catbox.moe/hejnpr.js";
    document.body.appendChild(script);
  });
</script>

<svelte:head>
  <link rel="stylesheet" href="https://files.catbox.moe/hy86dr.css" />
  <!-- or external: <link rel="stylesheet" href="https://example.com/style.css" /> -->
</svelte:head>

<div id="root"></div>
