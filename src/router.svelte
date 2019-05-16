<script>
    import { onMount } from 'svelte'
    import { router as globalRouter, route } from './router.js'

    export let router = globalRouter
    export let routes = {}

    function onPopstate () {
        $router = route()
    }

    onMount(() => {
        $router = route()
    })
</script>

<svelte:window on:popstate={onPopstate} />

<svelte:component this={routes[$router.path] || routes[404]} />