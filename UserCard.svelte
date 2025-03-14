<script>
  import { onMount } from "svelte";

  // Dynamically load the Web Component
  onMount(() => {
    import("./user-card.js");
  });
</script>

<div class="flex flex-col items-center p-6 border rounded shadow-md">
  <h2 class="text-xl font-bold mb-2">Svelte + Web Components</h2>
  
  <user-card avatar="https://randomuser.me/api/portraits/women/2.jpg">
    <span slot="name">Jane Smith</span>
    <span slot="email">jane.smith@example.com</span>
  </user-card>
</div>
