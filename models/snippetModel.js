const mongoose = require('mongoose')

const SnippetSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  notes: {
    type: String,
    required: false
  },
  language: {
    type: String,
    required: true
  },
  tags: {
      type: String,
      required: true
    },
  })


const Snippet = mongoose.model('Snippet', SnippetSchema); //what does this do?

module.exports = Snippet;
