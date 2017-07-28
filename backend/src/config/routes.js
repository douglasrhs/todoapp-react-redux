const express = require('express')

module.exports = function (server) {

    // API Routes
    const router = express.Router()
    server.use('/api', router)

    // TODO Routes
    const todoService = require('../api/todo/todoService')
    // GET POST PUT DELETE /api/todos
    todoService.register(router, '/todos')
}