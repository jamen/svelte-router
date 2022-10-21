import { writable } from 'svelte/store'

export const router = writable({
    path: null,
    query: {}
})

export const route = () => {
    let path = location.pathname
    let queryString = location.search
    let query = {}

    if (!window.history || window.location.protocol === 'file:') {
        path = location.hash.slice(1) || '/'

        if (path[0] !== '/') {
            path = '/' + path
        }

        const hashQuery = location.hash.indexOf('?')

        if (hashQuery !== -1) {
            queryString = location.hash.slice(hashQuery)
            path = location.hash.replace('#', '').slice(0, hashQuery)
        }
    }

    if (path !== '/' && path[path.length - 1] === '/') {
        path = path.slice(0, -1)
    }

    if (queryString) {
        const parts = queryString.slice(1).split('&')
        for (let i = 0; i < parts.length; i++) {
            const pair = parts[i].split('=')
            query[pair[0]] = pair[1]
        }
    }

    return { path, query }
}