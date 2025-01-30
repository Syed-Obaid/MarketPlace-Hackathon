

export interface Product {
    category: string;
    _id: string;
    _type: "product"
    price: number;
    description: string;
    stockLevel: number;
    discountPercentage: number;
    isFeaturedProduct: number;
    name: string;
    image? :{
        asset : {
            _ref: string;
            _type: string;
        }
    };
    slug: {
        _type: string;
        current: string;
    };
}