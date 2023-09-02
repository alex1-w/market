export const priceFormatter = (price: number) => {
    const formatter = new Intl.NumberFormat("ru", {
        style: 'currency',
        currency: "RUB",
        minimumFractionDigits: 0
    })

    return formatter.format(price)
}