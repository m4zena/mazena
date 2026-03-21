<script>
  let { label } = $props();
</script>

<label>
  {label}
  <textarea name={label} />
</label>

<style>
  textarea {
    padding: 10px 10px;
    border-radius: 8px;
  }
</style>
