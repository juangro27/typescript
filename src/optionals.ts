const createProduct2 = (id: string | number, isNew: boolean = true, stock: number = 10) => ({id, stock, isNew})

const p1 = createProduct2(1, true, 12)
console.log(p1)
const p2 = createProduct2(1)
console.log(p2)
const p3 = createProduct2(1, false, 0)
console.log(p3)
