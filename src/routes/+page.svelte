<script>
    import { page } from "$app/stores";
    import Search from "$components/Search.svelte";
    import { Button } from "flowbite-svelte";
    let value = "";
    let count = 0;
    console.log($page.url.pathname);
    $: console.log(value);
</script>

<div class="bg-red-300">
    <h1>Welcome to SvelteKit</h1>
    <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

    <p>{value} input</p>
    <button class="primary">Primary</button>
    <Search />
    <div class="bg-primary">bakcgrounf</div>
    <Button color="red" size="xs" class="w-full">Hello</Button>
    <input class="input" type="text" bind:value />
    <button class="btn btn-sm " on:click={() => (count = count + 1)}>click {count}</button>
</div>
