const express = require('express')
const cors = require('cors')

const app = express()

// middleware
app.use(cors())
app.use(express.json())

// test route
app.get('/', (req, res) => {
  res.send('Server is ready')
})

// API route (THIS MUST MATCH FRONTEND)
app.get('/jokes', (req, res) => {
  res.json([
    { id: 1, title: 'A joke', content: 'This is a joke' },
    { id: 2, title: 'Another joke', content: 'This is another joke' },
    { id: 3, title: 'Useful joke', content: 'This is a useful joke' },
    { id: 4, title: 'Best joke', content: 'This is the best joke' }

  ])
})

// port
const PORT = 5000

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
