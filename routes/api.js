const authRouter = require('./auth')

apiRouter.use('/api', authRouter)