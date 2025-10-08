import { createServer } from 'vite'
import { render } from 'svelte/server'

const vite = await createServer({ configFile: './vite.config.js' })
const app = (await vite.ssrLoadModule('./App.svelte')).default
console.log(app)
const { body } = render(app)
console.log(body)
