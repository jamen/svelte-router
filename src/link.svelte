<script>
    import { router, route } from './router.js'

    export let href = null
    export let store = router

    function click (event) {
        event.preventDefault()

        if (window.history) {
            history.pushState(null, '', location.origin === 'file://' ? '#' + href : href)
        } else {
            location.hash = href
        }

        window.scrollTo(0, 0)

        $store = route()

        return false
    }
</script>

<a href={href} on:click={click} {...$$props}>
    <slot></slot>
</a>