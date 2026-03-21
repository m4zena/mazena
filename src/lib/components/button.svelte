<script>
  let { label, onClick } = $props();
</script>

<button onclick={onClick}>
  {label}
</button>

<style>
  button {
    padding: 10px 10px;
    background-color: aliceblue;
    border-radius: 8px;
  }

  button:hover {
    background-color: darksalmon;
    cursor: pointer;
  }
</style>
