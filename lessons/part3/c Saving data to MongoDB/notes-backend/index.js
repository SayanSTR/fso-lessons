require('dotenv').config()
const express = require('express')
const Note = require('./models/note')

const app = express()
app.use(express.static('dist'))
app.disable('etag')
app.use(express.json())

const requestLogger = (request, response, next) => {
	console.log('Method:', request.method)
	console.log('Path:  ', request.path)
	console.log('Body:  ', request.body)
	console.log('---')
	next()
}
app.use(requestLogger)

app.get('/', (request, response) => {
	response.send('<h1>Hello World!</h1>')
})

// CREATE
app.post('/api/notes', (request, response) => {
	const body = request.body

	if (!body.content) {
		return response.status(400).json({
			error: 'Content missing!'
		})
	}

	const note = new Note({
		content: body.content,
		important: body.important || false,
	})

	note.save().then(savedNote => {
		response.json(savedNote)
	})
})

// READ
app.get('/api/notes/:id', (request, response, next) => {
	console.log("==============")
	Note.findById(request.params.id)
	.then(note => {
		if(note) {
			response.json(note)
		} else {
			response.status(404).end()
		}
	})
	.catch(error => {
		// console.log(error)
		// response.status(400).send({error: 'malformed id'})
		next(error)
	})
})

app.get('/api/notes', (request, response) => {
	Note.find({}).then(notes => {
		response.json(notes)
	})
})

// UPDATE
app.put('/api/notes/:id', (request, response, next) => {
  const { content, important } = request.body

  Note.findById(request.params.id)
    .then(note => {
      if (!note) {
        return response.status(404).end()
      }

      note.content = content
      note.important = important

      return note.save().then((updatedNote) => {
        response.json(updatedNote)
      })
    })
    .catch(error => next(error))
})

// DELETE
app.delete('/api/notes/:id', (request, response) => {
	// const id = request.params.id
	Note.findByIdAndDelete(request.params.id)
		.then(result => {
			response.status(204).end()
		})
		.catch(error => next(error))
})


const unknownEndpoint = (request, response) => {
	response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
	console.error(error.message)

	if(error.name == 'CastError') {
		return response.status(400).send({error: 'malformatted id'})
	}
	next(error)
}
// this has to be the last loaded middleware, also all the routes should be registered before this!
app.use(errorHandler)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
})