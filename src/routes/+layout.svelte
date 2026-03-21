<script lang="ts">
  import "../app.css";
  import Navbar from "$lib/components/navbar.svelte";

  let { children } = $props();
</script>

<svelte:head>
  <title>Mazena</title>
</svelte:head>

<Navbar />
{@render children()}
