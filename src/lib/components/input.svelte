<script>
  let { label, value = $bindable() } = $props();
</script>

<label>
  {label}
  <input name={label} bind:value />
</label>

<style>
  input {
    padding: 10px 10px;
    border-radius: 8px;
  }
</style>
