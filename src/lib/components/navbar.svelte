<script>
  import Searchbar from "$lib/components/searchbar.svelte";
</script>

<nav>
  <ul>
    <li><h1>Mazena</h1></li>
    <li><Searchbar /></li>
    <li></li>
  </ul>
</nav>

<style>
  nav {
    padding-bottom: 30px;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
</style>
