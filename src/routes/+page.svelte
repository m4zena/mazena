<script>
  import { api } from "$lib/utils/api.svelte";
  import ProjectCard from "$lib/components/project_card.svelte";

  const makeRequest = () => {
    api.post("/items", { description: "AGHAHGHAGHHGHHH" });
  };
</script>

<div class="project-card-section">
  <ProjectCard
    thumbnail={"https://picsum.photos/500/300"}
    title={"Project 1"}
    author={"https://taheralfayad.com"}
  />

  <ProjectCard
    thumbnail={"https://picsum.photos/500/300"}
    title={"Project 1"}
    author={"https://taheralfayad.com"}
  />

  <ProjectCard
    thumbnail={"https://picsum.photos/500/300"}
    title={"Project 1"}
    author={"https://taheralfayad.com"}
  />
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
