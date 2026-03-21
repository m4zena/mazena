<script>
  import Searchbar from "$lib/components/searchbar.svelte";
  import Button from "$lib/components/button.svelte";
  import RegisterPopup from "$lib/components/register_popup.svelte";

  let modalIsOpen = $state(false);
</script>

<nav>
  <ul>
    <li>
      <h1>Mazena</h1>
    </li>
    <li>
      <Searchbar />
    </li>
    <li>
      <Button
        label={"Register a Zena"}
        onClick={() => {
          console.log("lol fuck you");
          modalIsOpen = true;
        }}
      ></Button>
    </li>
  </ul>
</nav>

{#if modalIsOpen}
  <RegisterPopup
    closeModal={() => {
      modalIsOpen = false;
    }}
  />
{/if}

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
