import express from 'express'


const app = express()

app.disable('x-powered-by')
app.use(express.json())


app.listen(3000, () => {
    console.log('Server listening on 3000')
})
