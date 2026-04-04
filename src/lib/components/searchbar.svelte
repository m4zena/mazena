<script>
  import { SearchIcon } from "lucide-svelte";

</script>

<div class="searchbar">
  <SearchIcon />
  <input list="widgets" name="zena" />
</div>

<datalist id="widgets">
  <option value="libzena"> </option>
  <option value="coffeezena"> </option>
  <option value="blogzena"> </option>
  <option value="goonzena"> </option>
  <option value="bustostreamzena"> </option>
  <option value="im thinking of ending things"> </option>
</datalist>

<style>
  .searchbar {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
  }

  input {
    background-color: transparent;
    border-radius: 0px;
    border-width: 1px;
    border-style: none none solid none;

    &:active,
    &:focus {
      background-color: white;
      border: none;
    }
  }
</style>
