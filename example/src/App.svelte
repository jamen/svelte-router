<script>
  import { Router, Link, router } from "@jamen/svelte-router";

  import Page1 from "./Page1.svelte";
  import Page2 from "./Page2.svelte";
  import Root from "./Root.svelte";

  const routes = {
    "/": Root,
    "/page1": Page1,
    "/page2": Page2,
  };
</script>

<main>
  <div>
    <Link href="/?hello=1">Root</Link>
    <Link href="/page1?hello=2">Hello</Link>
    <Link href="/page2?hello=3">World</Link>
  </div>
  <div>
    {JSON.stringify($router.query)}
  </div>
  <Router {routes} />
</main>
