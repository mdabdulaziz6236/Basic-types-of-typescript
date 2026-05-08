// utility types


type Product ={
    id: number,
    name: string,
    price: number,
    stook:number,
    color?: string
}


// type ProductSummary ={
//     id: number,
//     name: string,
//     price: string
// }

// type ProductSummary = Pick<Product, 'id'|'name'|'price'>


// type ProductSummary = Omit<Product,'stock' |'color'>




type ProductWithColor= Required<Product>


const product : ProductWithColor = {
    id: 222,
    name:'mouse',
    price:20,
    stook: 100,
    color : 'black'
}



type OptionProduct = Partial<Product>

type ProductReadOnly =Readonly<Product>

const emptyObj: Record<string,unknown> = {}
const product1 ={
    id: 22,
    naem:'price',
    name:'Mouse',


}