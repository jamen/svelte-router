<script>
    import { router, route, navigate } from "./router.js";

    export let href = null;
    export let store = router;
</script>

<a
    on:click={(event) => {
        event.preventDefault();
        navigate(href, store);
        return false;
    }}
    {href}
    {...$$restProps}
>
    <slot />
</a>
