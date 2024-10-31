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
  {
    id: 5,
    title: 'Prosjekt 5',
    description: "App",
    createdAt: "2024-01-01T12:00:00Z",
    category: 'App',
    publishedAt: "2024-02-01T12:00:00Z",
    public: true,
    status: 'published',
    tags: ['React', 'Frontend']
  },
  {
    id: 6,
    title: 'Prosjekt 6',
    description: "Nettside",
    createdAt: "2024-01-05T12:00:00Z",
    category: 'Nettside',
    publishedAt: null,
    public: false,
    status: 'draft',
    tags: ['HTML', 'CSS']
  }
]

// Endpoint to fetch projects
app.get('/', (c) => {
  return c.json(projects)
})

const port = 3000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})