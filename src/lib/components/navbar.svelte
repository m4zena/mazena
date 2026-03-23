<script>
  import Searchbar from "$lib/components/searchbar.svelte";
  import Button from "$lib/components/button.svelte";
  import RegisterPopup from "$lib/components/register_popup.svelte";
  import { CirclePlus } from "lucide-svelte";

  let modalIsOpen = $state(false);
</script>

<nav>
  <ul>
    <li>
      <h1 class="long-title">mazena</h1>
      <h1 class="short-title">mz</h1>
    </li>
    <li class="searchbar-container">
      <Searchbar />
    </li>
    <li>
      <button class="register-zena" onclick={() => (modalIsOpen = true)}>
        <CirclePlus />
      </button>
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
  h1 {
    margin: 0;
    line-height: 0.75em;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 1em 1em;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .searchbar-container {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  .register-zena {
    background: none;
    border: none;
    display: flex;
    flex-direction: row;
    align-items: center;

    &:hover {
      cursor: pointer;
      background-color: lightgray;
      box-sizing: border-box;
    }
  }

  .long-title {
    display: block;
  }

  .short-title {
    display: none;
  }

  @media (max-width: 600px) {
    .long-title {
      display: none;
    }
    .short-title {
      display: block;
    }
  }
  
</style>
