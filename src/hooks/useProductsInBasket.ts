import { useSelector } from "react-redux"

export const useProductsInBasket = () => {
    const store = useSelector((state: any) => state)
    return store.reducer.basket
}