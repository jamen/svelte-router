<script>
    import { router, route } from './router.js'

    export let href = null
    export let store = router

    function click (event) {
        event.preventDefault()

        let path = event.target.href

        if (window.history) {
            history.pushState(null, '', location.origin === 'file://' ? '#' + path : path)
        } else {
            location.hash = path
        }

        window.scrollTo(0, 0)

        $router = route()

        return false
    }
</script>

<a href={href} on:click={click} {...$$props}>
    <slot></slot>
</a>
