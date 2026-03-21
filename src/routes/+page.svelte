<script>
  import { api } from "$lib/utils/api.svelte";

  const makeRequest = () => {
    api.post("/items", { description: "AGHAHGHAGHHGHHH" });
  };
</script>

<h1>Hello!</h1>
<button onclick={makeRequest}>make dat request</button>
