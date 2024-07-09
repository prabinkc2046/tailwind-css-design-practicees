import React from 'react'


type ProductDetailProps = {
    params: {
        productId: number
    }
}

const generateNumber = () => {
    return Math.random()
}
export default function ProductDetail({params}: ProductDetailProps) {

if (generateNumber() > 0.5 ) throw Error("Error in product detail page")

return (
    <div>Product {params.productId}</div>
  )
}
