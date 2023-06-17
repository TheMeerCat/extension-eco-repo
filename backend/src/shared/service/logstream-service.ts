import * as uuid from 'uuid'

import TodoRepository from '../persistence/logstream-repository'
import { LogstreamEntry } from '../models/logstream-entry'


export default class LogstreamService {

  todoRepository: TodoRepository;

  constructor(todoRepository: TodoRepository = new TodoRepository()) {
    this.todoRepository = todoRepository
  }

  async getAllTodos(): Promise<LogstreamEntry[]> {
    return this.todoRepository.getAllTodos()
  }

  async createTodo(name: string): Promise<LogstreamEntry> {
    const id = uuid.v4()

    return await this.todoRepository.createTodo({
      id,
      name,
      done: false,
      createdAt: new Date().toISOString()
    })
  }

  async updateTodo(partialTodo: Partial<LogstreamEntry>) {
    return await this.todoRepository.updateTodo(partialTodo)
  }

  async deleteTodoById(id: string) {
    return await this.todoRepository.deleteTodoById(id)
  }
}