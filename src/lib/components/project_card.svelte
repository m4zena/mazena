<script>
  import fallbackImage from "$lib/assets/widget_thumbnail_not_found.png";
  let { thumbnail = null, title, author, description = "", tags = [] } = $props();


</script>

<div class="card">
  <div class="card-content">
    <img
      src={thumbnail ?? fallbackImage}
      alt="Avatar"
      style="border-bottom:solid 2px black"
    />
    <div class="container">
      <!-- title and desc -->
      <div class="zena-title">
        <h4>{title.slice(0, 20)}{title.length > 20 ? "..." : ""}</h4>
        <p>{author}</p>
      </div>

      <div class="zena-description">
        {#if description.length > 0}
          <p>{description.slice(0, 120)}{description.length > 120 ? "..." : ""}</p>
        {:else}
          <p style="color: gray;">No description provided.</p>
        {/if}
      </div>

      <!-- tag stuff -->
      {#if tags.length > 0}
        <div class="tags">
          {#each tags.slice(0, 3) as tag}
            <span class="tag">{tag.slice(0, 10)}{tag.length > 10 ? "..." : ""}</span>
          {/each}
          {#if tags.length > 3}
            <span class="tag">+{tags.length - 3} more</span>
          {/if}
        </div>
      {/if}

    </div>
  </div>
</div>

<style>
  img {
    width: 100%;
    max-height: 200px;
    object-fit: cover;
  }

  .card {
    max-width: 300px;
    max-height: 300px;
    min-height: 350px;
    min-width: 300px;
    border-style: solid;
    border-width: 2px;
    position: relative;
  }

  .card:hover {
    cursor: pointer;
    background-color: lightgray;
  }

  .card-content {
    display: flex;
    flex-flow: column;
    /* justify-content: space-evenly; */
    height: 100%;
  }

  .container {
    /* padding: 2px 2px; */
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 10px;
  }

  .zena-title {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    justify-content: space-between;
    margin: 10px 0;

    h4 {
      margin: 0;
    }

    p {
      font-size: 12px;
      margin: 0;
      color: gray;
    }
  }

  .zena-description {
    display: flex;
    margin: 0;
    padding: 0;

    p {
      padding: 0;
      margin: 0;
    }
  }

  .tags {
    position: absolute;
    bottom: 0;
    display: flex;
    flex-wrap: wrap;
    /* gap: 4px; */
  }

  .tag {
    background-color: black;
    border: solid 1px 0px black;
    color: white;
    padding: 2px 6px;
    font-size: 12px;

    &:hover {
      background-color: white;
      border: solid 1px 0px black;
      color: black;
    }
  }
</style>
