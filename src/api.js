
const products = [
    { id: 1, img_src: "images/img-11_ccexpress.png", title: "Burnob", description: "Sexabob", price: "240.00" },
    { id: 2, img_src: "images/img-11_ccexpress.png", title: "Burnob", description: "Sexabob", price: "250.00" },
    { id: 3, img_src: "images/img-11_ccexpress.png", title: "Burnob", description: "Sexabob", price: "240.00" },
    { id: 4, img_src: "images/img-11_ccexpress.png", title: "Burnob", description: "Sexabob", price: "240.00" },
    { id: 5, img_src: "images/img-11_ccexpress.png", title: "Burnob", description: "Sexabob", price: "240.00" },
    { id: 6, img_src: "images/img-11_ccexpress.png", title: "Burnob", description: "Sexabob", price: "240.00" },
    { id: 7, img_src: "images/img-11_ccexpress.png", title: "Burnob", description: "Sexabob", price: "240.00" },
    { id: 8, img_src: "images/img-11_ccexpress.png", title: "Burnob", description: "Sexabob", price: "240.00" },
    { id: 9, img_src: "images/img-11_ccexpress.png", title: "Burnob", description: "Sexabob", price: "240.00" },
    { id: 10, img_src: "images/img-11_ccexpress.png", title: "Burnob", description: "Sexabob", price: "240.00" },
    { id: 11, img_src: "images/img-11_ccexpress.png", title: "Burnob", description: "Sexabob", price: "240.00" },
    { id: 12, img_src: "images/img-11_ccexpress.png", title: "Burnob", description: "Sexabob", price: "240.00" },
    { id: 13, img_src: "images/img-11_ccexpress.png", title: "Burnob", description: "Sexabob", price: "240.00" },
    { id: 14, img_src: "images/img-11_ccexpress.png", title: "Burnob", description: "Sexabob", price: "240.00" },
    { id: 15, img_src: "images/img-11_ccexpress.png", title: "Burnob", description: "Sexabob", price: "240.00" },
    { id: 16, img_src: "images/img-11_ccexpress.png", title: "Burnob", description: "Sexabob", price: "240.00" },
]

const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 10000)
    } )
}

export {getProducts}