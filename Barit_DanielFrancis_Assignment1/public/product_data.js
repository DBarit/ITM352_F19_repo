/* 
Author: Daniel Francis Barit
Date: 11/14/2019
File Description: Product Data Javascript Array 
*/

//Set product_data variable to an array of all the data in my store
var product_data = [
    { 
        "product": "Apple MacBook Pro 15'' (2019)",
        "price": 2399.00,
        "image": "./images/Laptops/MacBookPro.png",
    },
    { 
        "product": "Razer Blade Pro 17",
        "price": 2499.99,
        "image": "./images/Laptops/RazerBlade.png",
    },
    { 
        "product": "Lenovo ThinkPad X1 Carbon Gen 7 (2019)",
        "price": 2609.00,
        "image": "./images/Laptops/Lenovo.png",
    },
    { 
        "product": "Dell XPS 15 7590 (2019)",
        "price": 1849.99,
        "image": "./images/Laptops/DellXPS.png",
    },
    { 
        "product": "Acer Swift 7",
        "price": 1699.99,
        "image": "./images/Laptops/AcerSwift.png",
    },


    {
        "product": "Apple iPhone 11 Pro Max",
        "price": 1099.99,
        "image": "./images/Phones/iPhone11ProMax.png"
    },
    {
        "product": "Samsung Galaxy Note 10+",
        "price": 1099.99,
        "image": "./images/Phones/SGNote10+.png"
    },
    {
        "product": "Google Pixel 4 XL",
        "price": 899.99,
        "image": "./images/Phones/Pixel.png"
    },
    {
        "product": "Huawei P30 Pro",
        "price": 714.99,
        "image": "./images/Phones/Huawei.png"
    },
    {
        "product": "OnePlus 7 Pro",
        "price": 669.99,
        "image": "./images/Phones/OnePlus.png"
    },


    {
        "product": "Apple iPad Pro 12.9''",
        "price": 1149.00,
        "image": "./images/Tablets/iPadPro.png"
    },
    {
        "product": "Apple 10.2'' iPad (2019)",
        "price": 429.00,
        "image": "./images/Tablets/iPad2019.png"
    },
    {
        "product": "Microsoft Surface Pro X",
        "price": 999.99,
        "image": "./images/Tablets/SurfaceProX.png"
    },
    {
        "product": "Samsung Galaxy Tab S6",
        "price": 729.99,
        "image": "./images/Tablets/SGTab.jpg"
    },
    {
        "product": "Lenovo Yoga Tab 3 Pro",
        "price": 349.99,
        "image": "./images/Tablets/LenovoTab.png"
    },


    {
        "product": "Playstation 4 Pro 1TB Console",
        "price": 354.99,
        "image": "./images/Games/PS4Pro.png"
    },
    {
        "product": "Xbox One X 1TB Console",
        "price": 408.99,
        "image": "./images/Games/XboxOneX.png"
    },
    {
        "product": "Nintendo Switch w/Grey Joy-Cons",
        "price": 299.00,
        "image": "./images/Games/Switch.png"
    },
    {
        "product": "Alienware Area-51 Gaming Desktop Threadripper Edition",
        "price": 3699.99,
        "image": "./images/Games/AlienwarePC.png"
    },
    {
        "product": "Corsair ONE i165 Compact Gaming PC",
        "price": 3499.99,
        "image": "./images/Games/CorsairONE.png"
    }

];

//retrieved from Professor Port
//Checks if the products in the array is defined
if (typeof module != 'undefined') {
    module.exports.product_data = product_data;
}
