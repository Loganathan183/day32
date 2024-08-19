import React from 'react';
import Productjson from './'

// Sample data
const productsList = [
    {
        "id": 1,
        "title": "iPhone 9",
        "description": "An apple mobile which is nothing like apple",
        "price": 549,
        "discountPercentage": 12.96,
        "rating": 4.69,
        "stock": 94,
        "brand": "Apple",
        "category": "smartphones",
        "images": [
            "https://www.maplestore.in/cdn/shop/files/iPhone_15_Blue_PDP_Image_Position-1__en-IN_9d151e10-d809-499c-95cd-5c7cb7ea9dbe.jpg?v=1701822313&width=1445"
        ]
    },
    {
        "id": 2,
        "title": "iPhone X",
        "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
        "price": 899,
        "discountPercentage": 17.94,
        "rating": 4.44,
        "stock": 34,
        "brand": "Apple",
        "category": "smartphones",
        "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
        "images": [
            "https://i.dummyjson.com/data/products/2/1.jpg",
            "https://i.dummyjson.com/data/products/2/2.jpg",
            "https://i.dummyjson.com/data/products/2/3.jpg",
            "https://i.dummyjson.com/data/products/2/thumbnail.jpg"
        ]
    },
    // Add other products here
];

const ProductList = () => {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', padding: '16px' }}>
            {productsList.map(product => (
                <div key={product.id} style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '16px', width: '200px' }}>
                    <img
                        src={product.thumbnail || product.images[0]}
                        alt={product.title}
                        style={{ width: '100%', borderRadius: '8px' }}
                    />
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                    <p><strong>Price:</strong> ${product.price}</p>
                    <p><strong>Rating:</strong> {product.rating}</p>
                    <p><strong>Stock:</strong> {product.stock}</p>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
