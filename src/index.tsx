import { Hono } from 'hono'
import { renderer } from './renderer'
import { renderToString } from 'react-dom/server'

const app = new Hono()

app.use(renderer)

/*
app.get('/', (c) => {
  return c.render(<h1>Hello!</h1>)
})
*/
app.get('/api/clock', (c) => {
  return c.json({
    time: new Date().toLocaleTimeString()
  })
})

app.get('*', (c) => {
  return c.html(
    renderToString(
      <html>
        <head>
          <meta charSet="utf-8" />
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          {import.meta.env.PROD ? (
            <script type="module" src="/static/client.js"></script>
          ) : (
            <script type="module" src="/src/client.tsx"></script>
          )}
        </head>
        <body>
          <div id="app"></div>
        </body>
      </html>
    )
  )
})

export default app
