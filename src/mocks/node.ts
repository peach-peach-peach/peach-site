import { setupServer } from 'msw/node'
import { handlers } from './nodeHandlers'

export const server = setupServer(...handlers)
