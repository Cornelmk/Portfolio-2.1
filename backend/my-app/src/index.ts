import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { cors } from 'hono/cors'

const app = new Hono()

app.use(
  '*',
  cors({
    origin: '*',
    allowMethods: ['GET', 'POST'],
  })
)

const projects = [
  {id: 5, title: 'Prosjekt 5', description: "", createdAt: "", category: 'App'},
  {id: 6, title: 'Prosjekt 6', description: "", createdAt: "", category: 'Nettside'},
  {id: 7, title: 'Prosjekt 7', description: "", createdAt: "", category: 'Nettside'},
  {id: 8, title: 'Prosjekt 8', description: "", createdAt: "",  category: 'Nettside'}
]

app.get('/', (c) => {
  return c.json(projects)
})

const port = 3000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
