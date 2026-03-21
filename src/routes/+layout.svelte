<script lang="ts">
  import "../app.css";
  let { children } = $props();
</script>

<svelte:head>
  <title>Mazena</title>
</svelte:head>

{@render children()}
