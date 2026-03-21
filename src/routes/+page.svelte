<script>
  import { onMount } from "svelte";

  import { api } from "$lib/utils/api.svelte";
  import ProjectCard from "$lib/components/project_card.svelte";

  let widgets = $state([]);

  const retrieveWidgetsCatalog = async () => {
    try {
      const response = await api.get("/items");
      widgets = response;
    } catch (error) {
      console.error(error);
    }
  };

  onMount(() => {
    retrieveWidgetsCatalog();
  });
</script>

<div class="project-card-section">
  {#each widgets as widget}
    <ProjectCard title={widget.name} author={widget.domain} />
  {/each}
</div>

<style>
  .project-card-section {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-top: 30px;
    gap: 16px;
  }
</style>
