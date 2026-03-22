<script>
  import Input from "$lib/components/input.svelte";
  import BigInput from "$lib/components/big_input.svelte";
  import Button from "$lib/components/button.svelte";

  import { api } from "$lib/utils/api.svelte";
  import { clickOutside } from "$lib/actions/clickOutside.svelte";

  let { closeModal } = $props();

  let name = $state("");
  let domain = $state("");
  let jsLink = $state("");

  const submitZena = async () => {
    try {
      await api.post("/items", {
        name: name,
        domain: domain,
        jsLink: jsLink,
      });
    } catch (error) {
      console.log(
        "we just got an error, we just got an error, we just got an error, wonder who it's from",
      );
      console.error(error);
    }
  };
</script>

<div class="modal">
  <div class="modal-content" use:clickOutside={closeModal}>
    <button class="close" onclick={closeModal}>&times;</button>
    <div class="input-list">
      <Input label="Enter your Zena's Name:" bind:value={name} />
      <Input label="Enter your Domain:" bind:value={domain} />
      <Input label="Enter link to Javascript:" bind:value={jsLink} />
      <Button label={"Submit Zena"} onClick={submitZena} />
    </div>
  </div>
</div>

<style>
  .modal {
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.4);
  }

  .modal-content {
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
  }

  .input-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 30px;
  }

  .close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }

  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
</style>
