<script>
  let { thumbnail, title, author } = $props();
</script>

<div class="card">
  <div class="card-content">
    <img src={thumbnail} alt="Avatar" style="border-bottom:solid" />
    <div class="container">
      <h4><b>{title}</b></h4>
      <p>{author}</p>
    </div>
  </div>
</div>

<style>
  img {
    width: 100%;
    max-height: 200px;
    object-fit: cover;
    border-radius: 15% 15% 0 0;
  }

  .card {
    max-width: 500px;
    max-height: 500px;
    min-height: 300px;
    min-width: 300px;
    border-style: solid;
    border-radius: 15%;
    background-color: aliceblue;
  }

  .card-content {
    display: flex;
    flex-flow: column;
    justify-content: space-evenly;
    height: 100%;
  }

  .container {
    padding: 2px 2px;
    margin-left: 10px;
    margin-bottom: 10px;
  }
</style>
