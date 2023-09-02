export interface IProduct {
    title: string,
    price: number
    description: string
    image: string
    type: string
}

export interface IProductResponse extends IProduct {
    id: number
}

export interface IFullProduct extends IProductResponse {
    count: number
}


export interface IBrand {
    name: string
}