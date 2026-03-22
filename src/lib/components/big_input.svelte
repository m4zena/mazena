<script>
  let { label } = $props();
</script>

<label>
  {label}
  <textarea name={label}></textarea>
</label>

<style>
  textarea {
    padding: 10px 10px;
    
  }
</style>
