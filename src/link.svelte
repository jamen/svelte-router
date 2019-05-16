<script>
    import { router, route } from './router.js'

    export let href = null
    export let store = router

    function click (event) {
        event.preventDefault()

        if (window.history) {
            history.pushState(null, '', event.target.href)
        } else {
            location.hash = event.target.href
        }

        window.scrollTo(0, 0)

        $router = route()

        return false
    }
</script>

<a href={href} on:click={click} {...$$props}>
    <slot></slot>
</a>
