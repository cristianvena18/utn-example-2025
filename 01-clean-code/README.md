
# Clean Code Principles Documentation

The `01-clean-code/src` folder demonstrates different clean code principles through practical examples. Below is an explanation of each principle based on the ideas represented in the code.

---

### 1. Meaningful Names

**Example**: 
```typescript
app.get('/', (req, res) => {
    const pr = p.filter(p => p.name === req.query.name);
    res.json(pr);
});
```

**Idea**: The use of variable names like `pr` shows that names can sometimes lack meaning, making the code less clear about what is being represented.

---

### 2. Be Consistent

**Example**: 
```typescript
app.get('/', (req, res) => {
    const pr = p.filter(p => p.name === req.query.name);
});

app.get('/products/:id', (req: Request, res: Response): any => {
    const id = Number(req.params.id);
});
```

**Idea**: Demonstrates varying patterns in variable naming, highlighting the importance of being consistent.

---

### 3. Functions

**Example**: 
```typescript
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
```

**Idea**: Highlights the use of functions to encapsulate logic that operates on inputs and produces outputs, helping to organize the code and make it reusable.

---

### 4. Comments – Minimal Use Whenever Possible

**Example**: 
```typescript
app.get('/products/:id', (req: Request, res: Response): any => {
    const id = Number(req.params.id);

    // verificamos que el id no sea un NaN
    if (!Number.isNaN(id)) {
        try {
            // buscamos el producto en la lista de productos
            const product = p.find(p => p.id === id);

            // verificamos si el producto no existe, devolvemos un 404
            if (!product) {
                return res.status(404).json({error: 'product not found'});
            } else {
                return res.status(200).json(product);
            }
        } catch (e: any) {
            return res.status(500).json({error: e.message});
        }
    } else {
        // si el id del producto no es un numero devolvemos un error 400
        return res.status(400).json({error: 'product id must be a number'});
    }
});
```

**Idea**: Shows where comments are used to explain specific steps in the code, even when the code may be self-explanatory in some cases.

---

### 5. Early Returns

**Example**: 
```typescript
app.get('/products/:id', (req: Request, res: Response): any => {
    const id = Number(req.params.id);

    if (Number.isNaN(id)) {
        return res.status(400).json({error: 'product id must be a number'});
    }

    try {
        const product = p.find(p => p.id === id);

        if (!product) {
            return res.status(404).json({error: 'product not found'});
        }

        return res.status(200).json(product);
    } catch (e: any) {
        return res.status(500).json({error: e.message});
    }
});
```

**Idea**: Demonstrates the practice of returning early from functions to simplify the logic and avoid unnecessary nesting.

---

### 6. Variables and Avoiding Magic Numbers

**Example**: 
```typescript
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
```

**Idea**: Reflects the use of hardcoded numbers (magic numbers) within the function logic, which could be replaced by meaningful constants.

---

### Conclusion

The `01-clean-code/src` folder provides examples of clean code principles such as meaningful names, consistency, the use of functions, comments, early returns, and the use of variables instead of magic numbers. Each section demonstrates these principles in action and their associated ideas.
