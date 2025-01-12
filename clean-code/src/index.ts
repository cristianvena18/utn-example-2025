import express, {Request, Response} from 'express'
// @ts-ignore
import p from './products.json'

const app = express()

app.use(express.json())

app.disable('x-powered-by')










app.get('/', (req, res) => {

    try {
        const pr = p.filter(p => p.name === req.query.name)

        res.json(pr)
    } catch (e: any) {
        res.status(500).json({error: e.message})
    }
})














app.get('/products/:id', (req: Request, res: Response): any => {
    const id = Number(req.params.id)

    // verificamos que el id no sea un NaN
    if (!Number.isNaN(id)) {

        try {
            // buscamos el producto en la lista de productos
            const product = p.find(p => p.id === id)

            // verificamos si el producto no existe, devolvemos un 404
            if (!product) {
                return res.status(404).json({error: 'product not found'})
            } else {
                // si el producto existe lo devolvemos
                return res.status(200).json(product)
            }
        } catch (e: any) {
            // si ocurre un error lo devolvemos con un estado 500
            return res.status(500).json({error: e.message})
        }

    } else {
        // si el id del producto no es un numero devolvemos un error 400
        return res.status(400).json({error: 'product id must be a number'})
    }
})









app.post('/product', (req: Request, res: Response) => {

    const body = req.body

    const id = p.length + 1

    const _product = {...body, id}

    p.push(_product)

    res.status(201).send()
})











interface Product {
    price: number;
}

interface User {
    type: number;
    id: number;
    name: string;
}


const users: User[] = [
    {
        id: 1,
        type: 1,
        name: "Sebastian"
    },
    {
        id: 2,
        type: 1,
        name: "Pepito"
    },
    {
        id: 3,
        type: 2,
        name: "John"
    }
]


function applyDiscount(product: Product, user: User) {
    if (user.type === 1) {
        product.price *= 0.9; // 10% descuento para usuarios tipo 1
    } else if (user.type === 2) {
        product.price *= 0.8; // 20% descuento para usuarios tipo 2
    } else {
        product.price *= 0.95; // 5% descuento para otros usuarios
    }
    return product;
}

app.post('/store/checkout', (req: Request, res: Response) => {

    const id = Number(req.header('x-user-id'))

    if (!Number.isNaN(id)) {
        res.status(401).json({error: 'unauthorized'})
        return
    }

    const user = users.find(u => u.id === id)

    if (!user) {
        res.status(401).json({error: 'unauthorized'})
        return
    }

    const product = { name: "Laptop", price: 1000 };

    const discount = applyDiscount(product, user); // Resultado confuso

    // ...logic of checkout process
    console.log(discount);

    res.status(200).json({message: 'product checkout successfully.'});
})

app.listen(3000, () => {
    console.log('Server started on port 3000')
})