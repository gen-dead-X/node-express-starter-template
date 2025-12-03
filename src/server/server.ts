import express from 'express'
import cors from 'cors'

import config from '../config/config.js'
import globalLoggerMiddleware from '../middlewares/error.handlers/global.error.handler.js'
import loggerMiddleware from '../middlewares/logger/global.logger.middleware.js'
import { ApiResponse } from '../utils/response.utils.js'
import router from '../routes/rootRouter'
import { STATUS_CODES } from '../enums/status.codes.enums.js'

const PORT = config.PORT

const app = express()

export default function createServer() {
  app.use(cors())
  app.use(express.json())
  app.use(loggerMiddleware)
  app.use(globalLoggerMiddleware)
  app.use(router)
  app.use((req, res, next) => {
    res
      .status(STATUS_CODES.NOT_FOUND)
      .send(ApiResponse.error('Route Not Found'))
  })
}

export const server = app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
