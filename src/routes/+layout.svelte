<script lang="ts">
    import Header from "$components/Header.svelte";
    import "../app.css";
</script>

<div class="container flex flex-col min-h-screen mx-auto md:px-3  lg:max-w-5xl">
    <header>
        <Header />
    </header>
    <main class="flex-grow bg-yellow-100">
        <slot />
    </main>
    <footer class="py-2 bg-blue-900">
        <p class="">I am a footer</p>
    </footer>
</div>
