<script>
  let { children = () => {}, label = "", onClick } = $props();
</script>

<button onclick={onClick}>
  {label}
  {@render children()}
</button>

<style>
  button {
    padding: 10px 10px;
    background-color: aliceblue;
    max-width: 150px;
    border-style: solid;
    display: flex;
    flex-direction: row;
    align-items: center;

    &:hover {
      background-color: darksalmon;
      cursor: pointer;
    }
  }
</style>
