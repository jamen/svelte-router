# @jamen/svelte-router

Svelte router with a store and components.

**NOTE:** Consider using [SvelteKit](https://kit.svelte.dev/) with [@sveltejs/adapter-static](https://github.com/sveltejs/kit/tree/master/packages/adapter-static) instead. It has routing.

## Usage

First setup a view with `<Router>`:

```html
<script>
    import { Router } from '@jamen/svelte-router'
    import * as pages from './pages.js'

    const routes = {
        '/': pages.Home,
        '/contact': pages.Contact,
        404: pages.Lost,
        // ...
    }
</script>

<Router {routes} />
```

Then you can use `<Link>` to change the view:

```html
<script>
    import { Link } from '@jamen/svelte-router'
</script>

<nav>
    <Link href='/'>Home</Link>
    <Link href='/contact'>Contact</Link>
</nav>
```

And you can use the `router` store to have your own routing:

```html
<script>
    import { router } from '@jamen/svelte-router'
</script>

{#if $router.query.name}
    <h1>Hello {$router.query.name}!</h1>
{/if}

<p>You visited {$router.path}.</p>
```

If you want to use your own store, then both `Router` and `Link` accept a `router` to change the store:

```html
<script>
    import { Router, Link } from '@jamen/svelte-router'
    import { custom } from '../stores.js'
    // ...
</script>

<Router router={custom} {routes} />
<Link router={custom} href='/'>Home</Link>
```

With this you may want your own link component:

```html
<script>
    import { Link } from '@jamen/svelte-router'
    import { custom } from '../stores.js'
</script>

<Link router={custom} {..$$props}><slot></slot></Link>
```