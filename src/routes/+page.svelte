<script>
  import { onMount } from "svelte";

  import { api } from "$lib/utils/api.svelte";
  import ProjectCard from "$lib/components/project_card.svelte";

  let widgets = $state([]);
  // TODO: remove when we actually got data
  let exampleWidgets = [
    {
      name: "examplewieugfuiwgheuifgwuiegfuiwguiegifuzena",
      description: "Tonight, they're frying my shit. They're going to slime me and my entire family, they're going to air me out in front of the Target tommorow morning.",
      domain: "example.ts",
      tags: ["tag6longasstaglongasstaglongasstag", "tag7", "tag8", "tag9", "tag10"],
    },
    {
      name: "libzena",
      domain: "example.com",
      description: "example description",
      tags: ["tag1", "tag2", "tag3", "tag4", "tag5", "tag6", "tag7", "tag8", "tag9", "tag10"],
    },
    {
      name: "blogzena",
      domain: "example.net",
      description: "example description example description example description example description ",
      tags: ["longasstaglongasstaglongasstag", "tag5"],
    },
    {
      name: "examplezena",
      domain: "example.org",
    },
  ];

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
  <!-- TODO: same thing here remove when we have data -->
  {#each exampleWidgets as widget}
    <ProjectCard title={widget.name} author={widget.domain} description={widget.description} tags={widget.tags} />
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
