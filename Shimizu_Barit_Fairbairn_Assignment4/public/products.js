/*
Authors: Shane Shimizu, Daniel Francis Barit, Kiara Fairbairn
File Description: products page including JSON array for products, empty array for cart, cookie functions, displaying products functions
Date: December 19, 2019
*/

//JSON array for products
var products = [
    {
        "model": "Aloha Bowl",
        "price": 9.00,
        "image": "/Images/alohabowl.png",
        "description": "Acai based blended with strawberries, blueberries and bananas. Bowl comes topped with granola, bananas, strawberries, and honey."

    },
    {
        "model": "Mana Bowl",
        "price": 9.00,
        "image": "/Images/manabowl.png",
        "description": "Peanut butter based blended with bananas. Bowl comes topped with granola, bananas, strawberries, and honey."


    },
    {
        "model": "Makai Womens T-Shirt",
        "price": 20.00,
        "image": "/Images/makaiwomenst.jpeg",
        "description": "<br> Style: Women Basic T-Shirt <br> This basic t-shirt features a relaxed fit for the female shape. <br> Size and Fit: Model is 5 ft 7 in and is wearing a small. <br> Standard fit: Fits true to size. <br> Fabric and Care: 100 percent cotton. Double-needle hemmed sleeves and bottom. Machine wash cold. Imported."
    },
    {
        "model": "Makai Mens T-Shirt",
        "price": 20.00,
        "image": "/Images/makaimenst.jpeg",
        "description": "<br> Style: Men Basic T-Shirt <br>Comfortable, casual and loose fitting, our heavyweight t-shirt will easily become a closet staple. <br> Size and Fit: Model is 6 ft 1 in and is wearing a medium. <br> Standard fit: Fits true to size. <br> Fabric and Care: 100 percent cotton. Double-needle hemmed sleeves and bottom. Machine wash cold, tumble dry low. Imported."

    },
    {
        "model": "Makai Womens Longsleeve",
        "price": 25.00,
        "image": "/Images/makaiwomenslong.jpeg",
        "description": "<br> Style: Women Basic Long Sleeve T-Shirt. <br> Comfortable, casual and loose fitting, our long-sleeve heavyweight t-shirt will quickly become one of your favorites. <br> Size and Fit: Model is 5 ft 9 in and wearing a small. <br> Standard fit: Runs true to size. <br> Fabric and Care: 100 percent cotton. Soft, tag-free neck label with a lay flat collar for comfort. Shoulder-to-shoulder tape for durability. Imported. Preshrunk. Machine wash cold"

    },
    {
        "model": "Makai Mens Longsleeve",
        "price": 25.00,
        "image": "/Images/makaimenslong.jpeg",
        "description": "<br> Style: Men Basic Long Sleeve T-Shirt. <br> Comfortable, casual and loose fitting, our long-sleeve heavyweight t-shirt will quickly become one of your favorites. <br> Size and Fit: Model is 6 ft 0 in and wearing a medium. <br> Standard fit: Runs true to size. <br> Fabric and Care: 100 percent cotton. Soft, tag-free neck label with a lay flat collar for comfort. Shoulder-to-shoulder tape for durability. Imported. Preshrunk. Machine wash cold"

    },
    {
        "model": "Makai Womens Jacket",
        "price": 35.00,
        "image": "/Images/makaiwomensjacket.jpeg",
        "description": "<br> Style: Women Basic Hooded Sweatshirt. <br> Enjoy the comfort of this warm and toasty pullover hoodie. <br> Size and Fit: Model is 5 ft 9 in and wearing a small. <br> Standard fit: Runs true to size. <br> Fabric and Care: 10oz. cotton-poly blend with a 100 percent cotton face. Roomy front pouch pocket and hood. Imported. Machine wash cold. Tumble dry Low."
    },
    {
        "model": "Makai Mens Jacket",
        "price": 35.00,
        "image": "/Images/makaimensjacket.jpeg",
        "description": "<br> Style: Men Basic Hooded Sweatshirt. <br> Enjoy the comfort of this warm and toasty pullover hoodie. <br> Size and Fit: Model is 6 ft 2 in and wearing a large. <br> Standard fit: Runs true to size. <br> Fabric and Care: 10oz. cotton-poly blend with a 100 percent cotton face. Roomy front pouch pocket and hood. Imported. Machine wash cold. Tumble dry Low."
    },
    {
        "model": "Makai Hat",
        "price": 30.00,
        "image": "/Images/makaihat.jpeg",
        "description": "<br> Style: Alternative Apparel Basic Adjustable Cap. <br> Want a good-looking comfortable hat? This one is for you. From Alternative Apparel, this chino twill cap has a pre-curved bill, cloth strap and an antique brass slide buckle closure with tuck-in grommet, so it fits well on anyone. <br> 100 percent  cotton woven. <br> Unstructured. <br> Low profile. <br> Antiqued brass side buckle. <br> Curved visor."

    },
    {
        "model": "Makai Reusable Bag",
        "price": 15.00,
        "image": "/Images/makaibag.jpeg",
        "description": "<br> Style: Reusable Bag <br> Go green and save the planet with our reusable grocery bag! Made with a lightweight polyester fabric, this bag folds easily to fit in your purse or pocket. <br> Dimensions: 12 in l x 5 in w x 16 in h <br>  Made with lightweight polyester fabric. <br> Folds up with snap closure. <br> Holds up to 50 lbs."
    },
    {
        "model": "Makai Key Chain",
        "price": 7.00,
        "image": "/Images/makaichain.jpeg",
        "description": "<br> Style: Basic Button Keychain <br> Dimensions: Diameter: 2.25 in,  Depth: 0.19in, Weight: 0.25 oz. <br> Waterproof"
    },
    {
        "model": "Makai Reusable Water Bottle",
        "price": 15.00,
        "image": "/Images/makaibottle.jpeg",
        "description": "<br> Size: Water Bottle. <br> 18 oz. bottle. <br> Made with stainless steel. <br> Height: 8.67 in Weight: 8.7 oz.<br> 100 percent BPA free.<br> Comes with a threaded lid. <br> Lightweight and durable, crack proof, spill proof. <br> Does not give beverages a plastic taste. <br> Hand wash only. Not recommended for dishwasher. <br> Safe for refrigerator, but not freezer. <br> Certified free of harmful chemicals."
    },
];

//Source from Profesor Daniel Port
//checks if the products in the array are defined
if (typeof module != 'undefined') {
    module.exports.products = products;
}

//Source W3 Schools Cookies: https://www.w3schools.com/js/js_cookies.asp
//function to set cookie
function setCookie0(cname, cvalue, exdays) { //passes the name of the cookie, the value of the cookie, and the experation date for cookie as parameters
    var d = new Date(); //declare d as the current date
    d.setTime(d.getTime() + (exdays * 10000)); //sets the expiration of cookie to 5 minutes after being set
    var expires = "expires=" + d.toGMTString(); //delcares expires as convert date object to string and returns it
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/"; //sets/documents the cookie and concatnates with the name, value, expiration, and path of the cookie
}

//function to retrieve the cookie
function getCookie0(cname) { //uses cname (cookie name) as parameter
    var name = cname + "="; //declares name with the text to look for the cookie name + "="
    var decodedCookie = decodeURIComponent(document.cookie); //decodes the cookie to manage cookies with special characters
    var ca = decodedCookie.split(';'); //split the cookie on semi-colons into an array
    for (var i = 0; i < ca.length; i++) { //for thje lengh of ca/decoded cookie
        var c = ca[i]; //delcare c and read out each value
        while (c.charAt(0) == ' ') {// while index at specified string == 0
            c = c.substring(1); //c now is now given string 
        }
        if (c.indexOf(name) == 0) { //if the cookie is located at the 0 index
            return c.substring(name.length, c.length); //return the cookie value
        }
    }
    return ""; //return "" if the cookie does not exist
}

//function that sets a cookie for Aloha Bowl
function checkCookie0() {
    setCookie0("alohabowl", JSON.stringify(products[0]), 30); //add name alohabowl to cookie, sets value to products[0], sets experation time
}
//function that sets a cookie for Mana Bowl
function checkCookie1() {
    setCookie0("manabowl", JSON.stringify(products[1]), 30); //add name manabowl to cookie, sets value to products[1], sets experation time

}
//function that sets a cookie for Womens Shirt
function checkCookie2() {
    setCookie0("womensshirt", JSON.stringify(products[2]), 30); //add name womensshirt to cookie, sets value to products[2], sets experation time

}
//function that sets a cookie for Mens T-Shirt
function checkCookie3() {
    setCookie0("mensshirt", JSON.stringify(products[3]), 30); //add name menshirt to cookie, sets value to products[3], sets experation time

}
//function that sets a cookie for Womens Longsleeve
function checkCookie4() {
    setCookie0("womenssleeve", JSON.stringify(products[4]), 30); //add name womenssleeve to cookie, sets value to products[4], sets experation time

}
//function that sets a cookie for Mens Longsleeve
function checkCookie5() {
    setCookie0("menssleeve", JSON.stringify(products[5]), 30); //add name menssleeve to cookie, sets value to products[5], sets experation time

}
//function that sets a cookie for Womens Jacket
function checkCookie6() {
    setCookie0("womensjacket", JSON.stringify(products[6]), 30); //add name womensjacket to cookie, sets value to products[6], sets experation time

}
//function that sets a cookie for Mens Jacket
function checkCookie7() {
    setCookie0("mensjacket", JSON.stringify(products[7]), 30); //add name mensjacket to cookie, sets value to products[7], sets experation time

}
//function that sets a cookie for Makai Hat
function checkCookie8() {
    setCookie0("makaihat", JSON.stringify(products[8]), 30); //add name makaihat to cookie, sets value to products[8], sets experation time

}
//function that sets a cookie for Makai Reusable Bag
function checkCookie9() {
    setCookie0("makaibag", JSON.stringify(products[9]), 30); //add name makaibag to cookie, sets value to products[9], sets experation time

}
//function that sets a cookie for Makai Key Chain
function checkCookie10() {
    setCookie0("makaichain", JSON.stringify(products[10]), 30); //add name makaichain to cookie, sets value to products[10], sets experation time

}
//function that sets a cookie for Makai Reusable Water Bottle
function checkCookie11() {
    setCookie0("makaibottle", JSON.stringify(products[11]), 30); //add name makaibottle to cookie, sets value to products[11], sets experation time

}

//function to display the first 2 indexes of the products array (bowls)
function displayProducts() {
    for (i = 0; i < 2; i++) { //for loop to only display the first two items of the products array
        /*
            -document.write first 2 products in the array
            -function on regular expression gets ride of spaces in string; allows user to properly be redirected to the respectuve file of product when clicked on
            -regular expression source: https://stackoverflow.com/questions/5964373/is-there-a-difference-between-s-g-and-s-g
        */
        document.write(`
            <div class="shop-item">
                <a href="${(products[i].model).replace(/\s+/g, '')}.html" onclick="checkCookie${i}()" ><span class="shop-item-title">${products[i].model}</span></a>
                <div class="enlarge">
                    <img class="shop-item-image" src=${products[i].image}>
                </div>
                <div class="shop-item-details">
                <a href="${(products[i].model).replace(/\s+/g, '')}.html"><input class="btn btn-primary btn-purchase" type="button" name="purchase_submit" value="View More Info" onclick="checkCookie${i}()"></a>
                </div>
            </div>
        `);
    }
}

//function to display the third to the eight indexes of the products array (apparel)
function displayProducts2() {
    for (i = 2; i < 8; i++) { //for loop to only display the third to the eigth indexes of products array
        /*
            -document.write the third to eigth indexes of products in the array
            -function on regular expression gets ride of spaces in string; allows user to properly be redirected to the respectuve file of product when clicked on
            -regular expression source: https://stackoverflow.com/questions/5964373/is-there-a-difference-between-s-g-and-s-g
        */
        document.write(`
            <div class="shop-item">
            <a href="${(products[i].model).replace(/\s+/g, '')}.html" onclick="checkCookie${i}()"><span class="shop-item-title">${products[i].model}</span></a>
                <div class="enlarge">
                    <img class="shop-item-image" src=${products[i].image}>
                </div>
                <div class="shop-item-details">
                <a href="${(products[i].model).replace(/\s+/g, '')}.html"><input class="btn btn-primary btn-purchase" type="button" name="purchase_submit" value="View More Info" onclick="checkCookie${i}()"></a>
                </div>
            </div>
        `);
    }
}

//function to display the ninth to the twelve indexes of the products array (accessories)
function displayProducts3() {
    for (i = 8; i < 13; i++) { //function to display the ninth to the twelve indexes of the products array
        /*
            -document.write the ninth to twelve indexes of products in the array
            -function on regular expression gets ride of spaces in string; allows user to properly be redirected to the respectuve file of product when clicked on
            -regular expression source: https://stackoverflow.com/questions/5964373/is-there-a-difference-between-s-g-and-s-g
        */
        document.write(`
            <div class="shop-item">
            <a href="${(products[i].model).replace(/\s+/g, '')}.html" onclick="checkCookie${i}()"><span class="shop-item-title">${products[i].model}</span></a>
                <div class="enlarge">
                    <img class="shop-item-image" src=${products[i].image}>
                </div>
                <div class="shop-item-details">
                <a href="${(products[i].model).replace(/\s+/g, '')}.html"><input class="btn btn-primary btn-purchase" type="button" name="purchase_submit" value="View More Info" onclick="checkCookie${i}()"></a>
                </div>
            </div>
        `);
    }
}

function displayAlohaBowl() {
    document.write(`
        <div class="products">
            <div class="w3-content" align="middle">
                <img class="mySlides" src=${products[0].image} style="width:50%;">
                <img class="mySlides" src=${products[1].image} style="width:50%;">
                <img class="mySlides" src=${products[2].image} style="width:50%;">
                <div class="w3-row-padding w3-section">
                    <div class="w3-col s4">
                        <img class="demo w3-opacity w3-hover-opacity-off" src=${products[0].image} style="width:50%;cursor:pointer" onclick="currentDiv(1)">
                    </div>
                    <div class="w3-col s4">
                        <img class="demo w3-opacity w3-hover-opacity-off" src=${products[1].image} style="width:50%;cursor:pointer" onclick="currentDiv(2)">
                    </div>
                    <div class="w3-col s4">
                        <img class="demo w3-opacity w3-hover-opacity-off" src=${products[2].image} style="width:50%;cursor:pointer" onclick="currentDiv(3)">
                    </div>
                </div>
            </div>
            <hr class="space" />
            <div class="shop-item-description"><b>Description:</b> ${products[0].description}</div>
            <hr class="space" />
            <div class="shop-item-details">
                 <span class="shop-item-price">$${products[0].price.toFixed(2)}</span>
            </div>
        </div>
    `);
}

//function to display Mana Bowl when called
function displayManaBowl() {
    //document writes the index along with respective information
    document.write(`
        <div class="products">
            <div class="w3-content" align="middle">
                <img class=" mySlides" src=${products[1].image} style="width:50%;">
                <img class=" mySlides" src=${products[2].image} style="width:50%;">
                <img class=" mySlides" src=${products[3].image} style="width:50%;">
                <div class="w3-row-padding w3-section">
                    <div class="w3-col s4">
                        <img class="demo w3-opacity w3-hover-opacity-off" src=${products[1].image} style="width:50%;cursor:pointer" onclick="currentDiv(1)">
                    </div>
                    <div class="w3-col s4">
                        <img class="demo w3-opacity w3-hover-opacity-off" src=${products[2].image} style="width:50%;cursor:pointer" onclick="currentDiv(2)">
                    </div>
                    <div class="w3-col s4">
                        <img class="demo w3-opacity w3-hover-opacity-off" src=${products[3].image} style="width:50%;cursor:pointer" onclick="currentDiv(3)">
                    </div>
                </div>
            </div>
            <hr class="space" />
            <div class="shop-item-description"><b>Description:</b> ${products[1].description}</div>
            <hr class="space" />
            <div class="shop-item-details">
                 <span class="shop-item-price">$${products[1].price.toFixed(2)}</span>
            </div>
        </div>
    `);
}

//function to display Makai Womens Shirt when called
function displayMakaiWomensShirt() {
    //document writes the index along with respective information
    document.write(`
        <div class="products">
            <div class="w3-content" align="middle">
                <img class=" mySlides" src=${products[2].image} style="width:50%;">
                <img class=" mySlides" src=${products[3].image} style="width:50%;">
                <img class=" mySlides" src=${products[4].image} style="width:50%;">
                <div class="w3-row-padding w3-section">
                    <div class="w3-col s4">
                        <img class="demo w3-opacity w3-hover-opacity-off" src=${products[2].image} style="width:50%;cursor:pointer" onclick="currentDiv(1)">
                    </div>
                    <div class="w3-col s4">
                        <img class="demo w3-opacity w3-hover-opacity-off" src=${products[3].image} style="width:50%;cursor:pointer" onclick="currentDiv(2)">
                    </div>
                    <div class="w3-col s4">
                        <img class="demo w3-opacity w3-hover-opacity-off" src=${products[4].image} style="width:50%;cursor:pointer" onclick="currentDiv(3)">
                    </div>
                </div>
            </div>
            <hr class="space" />
            <div class="shop-item-description"><b>Description:</b> ${products[2].description}</div>
            <hr class="space" />
            <div class="shop-item-details">
                 <span class="shop-item-price">$${products[2].price.toFixed(2)}</span>
            </div>
        </div>
    `);
}

//function to display Makai Mens Shirt when called
function displayMakaiMensShirt() {
    //document writes the index along with respective information
    document.write(`
        <div class="products">
            <div class="w3-content" align="middle">
                <img class=" mySlides" src=${products[3].image} style="width:50%;">
                <img class=" mySlides" src=${products[2].image} style="width:50%;">
                <img class=" mySlides" src=${products[1].image} style="width:50%;">
                <div class="w3-row-padding w3-section">
                    <div class="w3-col s4">
                        <img class="demo w3-opacity w3-hover-opacity-off" src=${products[3].image} style="width:50%;cursor:pointer" onclick="currentDiv(1)">
                    </div>
                    <div class="w3-col s4">
                        <img class="demo w3-opacity w3-hover-opacity-off" src=${products[2].image} style="width:50%;cursor:pointer" onclick="currentDiv(2)">
                    </div>
                    <div class="w3-col s4">
                        <img class="demo w3-opacity w3-hover-opacity-off" src=${products[1].image} style="width:50%;cursor:pointer" onclick="currentDiv(3)">
                    </div>
                </div>
            </div>
            <hr class="space" />
            <div class="shop-item-description"><b>Description:</b> ${products[3].description}</div>
            <hr class="space" />
            <div class="shop-item-details">
                 <span class="shop-item-price">$${products[3].price.toFixed(2)}</span>
            </div>
        </div>
    `);
}

//function to display Makai Womens Longsleeve when called
function displayMakaiWomensSleeve() {
    //document writes the index along with respective information
    document.write(`
        <div class="products">
            <div class="w3-content" align="middle">
                <img class=" mySlides" src=${products[4].image} style="width:50%;">
                <img class=" mySlides" src=${products[1].image} style="width:50%;">
                <img class=" mySlides" src=${products[2].image} style="width:50%;">
                <div class="w3-row-padding w3-section">
                    <div class="w3-col s4">
                        <img class="demo w3-opacity w3-hover-opacity-off" src=${products[4].image} style="width:50%;cursor:pointer" onclick="currentDiv(1)">
                    </div>
                    <div class="w3-col s4">
                        <img class="demo w3-opacity w3-hover-opacity-off" src=${products[1].image} style="width:50%;cursor:pointer" onclick="currentDiv(2)">
                    </div>
                    <div class="w3-col s4">
                        <img class="demo w3-opacity w3-hover-opacity-off" src=${products[2].image} style="width:50%;cursor:pointer" onclick="currentDiv(3)">
                    </div>
                </div>
            </div>
            <hr class="space" />
            <div class="shop-item-description"><b>Description:</b> ${products[4].description}</div>
            <hr class="space" />
            <div class="shop-item-details">
                 <span class="shop-item-price">$${products[4].price.toFixed(2)}</span>
            </div>
        </div>
    `);
}

//function to display Makai Mens Longsleeve when called
function displayMakaiMensSleeve() {
    //document writes the index along with respective information
    document.write(`
        <div class="products">
            <div class="w3-content" align="middle">
                <img class=" mySlides" src=${products[5].image} style="width:50%;">
                <img class=" mySlides" src=${products[1].image} style="width:50%;">
                <img class=" mySlides" src=${products[2].image} style="width:50%;">
                <div class="w3-row-padding w3-section">
                    <div class="w3-col s4">
                        <img class="demo w3-opacity w3-hover-opacity-off" src=${products[5].image} style="width:50%;cursor:pointer" onclick="currentDiv(1)">
                    </div>
                    <div class="w3-col s4">
                        <img class="demo w3-opacity w3-hover-opacity-off" src=${products[1].image} style="width:50%;cursor:pointer" onclick="currentDiv(2)">
                    </div>
                    <div class="w3-col s4">
                        <img class="demo w3-opacity w3-hover-opacity-off" src=${products[2].image} style="width:50%;cursor:pointer" onclick="currentDiv(3)">
                    </div>
                </div>
            </div>
            <hr class="space" />
            <div class="shop-item-description"><b>Description:</b> ${products[5].description}</div>
            <hr class="space" />
            <div class="shop-item-details">
                 <span class="shop-item-price">$${products[5].price.toFixed(2)}</span>
            </div>
        </div>
    `);
}

//function to display Makai Womens Jacket when called
function displayMakaiWomensJacket() {
    //document writes the index along with respective information
    document.write(`
        <div class="products">
            <div class="w3-content" align="middle">
                <img class=" mySlides" src=${products[6].image} style="width:50%;">
                <img class=" mySlides" src=${products[1].image} style="width:50%;">
                <img class=" mySlides" src=${products[2].image} style="width:50%;">
                <div class="w3-row-padding w3-section">
                    <div class="w3-col s4">
                        <img class="demo w3-opacity w3-hover-opacity-off" src=${products[6].image} style="width:50%;cursor:pointer" onclick="currentDiv(1)">
                    </div>
                    <div class="w3-col s4">
                        <img class="demo w3-opacity w3-hover-opacity-off" src=${products[1].image} style="width:50%;cursor:pointer" onclick="currentDiv(2)">
                    </div>
                    <div class="w3-col s4">
                        <img class="demo w3-opacity w3-hover-opacity-off" src=${products[2].image} style="width:50%;cursor:pointer" onclick="currentDiv(3)">
                    </div>
                </div>
            </div>
            <hr class="space" />
            <div class="shop-item-description"><b>Description:</b> ${products[6].description}</div>
            <hr class="space" />
            <div class="shop-item-details">
                 <span class="shop-item-price">$${products[6].price.toFixed(2)}</span>
            </div>
        </div>
    `);
}

//function to display Makai Mens Jacket when called
function displayMakaiMensJacket() {
    //document writes the index along with respective information
    document.write(`
        <div class="products">
            <div class="w3-content" align="middle">
                <img class=" mySlides" src=${products[7].image} style="width:50%;">
                <img class=" mySlides" src=${products[1].image} style="width:50%;">
                <img class=" mySlides" src=${products[2].image} style="width:50%;">
                <div class="w3-row-padding w3-section">
                    <div class="w3-col s4">
                        <img class="demo w3-opacity w3-hover-opacity-off" src=${products[7].image} style="width:50%;cursor:pointer" onclick="currentDiv(1)">
                    </div>
                    <div class="w3-col s4">
                        <img class="demo w3-opacity w3-hover-opacity-off" src=${products[1].image} style="width:50%;cursor:pointer" onclick="currentDiv(2)">
                    </div>
                    <div class="w3-col s4">
                        <img class="demo w3-opacity w3-hover-opacity-off" src=${products[2].image} style="width:50%;cursor:pointer" onclick="currentDiv(3)">
                    </div>
                </div>
            </div>
            <hr class="space" />
            <div class="shop-item-description"><b>Description:</b> ${products[7].description}</div>
            <hr class="space" />
            <div class="shop-item-details">
                 <span class="shop-item-price">$${products[7].price.toFixed(2)}</span>
            </div>
        </div>
    `);
}

//function to display Makai Hat when called
function displayMakaiHat() {
    //document writes the index along with respective information
    document.write(`
        <div class="products">
            <div class="w3-content" align="middle">
                <img class=" mySlides" src=${products[8].image} style="width:50%;">
                <img class=" mySlides" src=${products[1].image} style="width:50%;">
                <img class=" mySlides" src=${products[2].image} style="width:50%;">
                <div class="w3-row-padding w3-section">
                    <div class="w3-col s4">
                        <img class="demo w3-opacity w3-hover-opacity-off" src=${products[8].image} style="width:50%;cursor:pointer" onclick="currentDiv(1)">
                    </div>
                    <div class="w3-col s4">
                        <img class="demo w3-opacity w3-hover-opacity-off" src=${products[1].image} style="width:50%;cursor:pointer" onclick="currentDiv(2)">
                    </div>
                    <div class="w3-col s4">
                        <img class="demo w3-opacity w3-hover-opacity-off" src=${products[2].image} style="width:50%;cursor:pointer" onclick="currentDiv(3)">
                    </div>
                </div>
            </div>
            <hr class="space" />
            <div class="shop-item-description"><b>Description:</b> ${products[8].description}</div>
            <hr class="space" />
            <div class="shop-item-details">
                 <span class="shop-item-price">$${products[8].price.toFixed(2)}</span>
            </div>
        </div>
    `);
}

//function to display Makai Bag when called
function displayMakaiBag() {
    //document writes the index along with respective information
    document.write(`
        <div class="products">
            <div class="w3-content" align="middle">
                <img class=" mySlides" src=${products[9].image} style="width:50%;">
                <img class=" mySlides" src=${products[1].image} style="width:50%;">
                <img class=" mySlides" src=${products[2].image} style="width:50%;">
                <div class="w3-row-padding w3-section">
                    <div class="w3-col s4">
                        <img class="demo w3-opacity w3-hover-opacity-off" src=${products[9].image} style="width:50%;cursor:pointer" onclick="currentDiv(1)">
                    </div>
                    <div class="w3-col s4">
                        <img class="demo w3-opacity w3-hover-opacity-off" src=${products[1].image} style="width:50%;cursor:pointer" onclick="currentDiv(2)">
                    </div>
                    <div class="w3-col s4">
                        <img class="demo w3-opacity w3-hover-opacity-off" src=${products[2].image} style="width:50%;cursor:pointer" onclick="currentDiv(3)">
                    </div>
                </div>
            </div>
            <hr class="space" />
            <div class="shop-item-description"><b>Description:</b> ${products[9].description}</div>
            <hr class="space" />
            <div class="shop-item-details">
                 <span class="shop-item-price">$${products[9].price.toFixed(2)}</span>
            </div>
        </div>
    `);
}

//function to display Makai Chain when called
function displayMakaiChain() {
    //document writes the index along with respective information
    document.write(`
        <div class="products">
            <div class="w3-content" align="middle">
                <img class=" mySlides" src=${products[10].image} style="width:50%;">
                <img class=" mySlides" src=${products[1].image} style="width:50%;">
                <img class=" mySlides" src=${products[2].image} style="width:50%;">
                <div class="w3-row-padding w3-section">
                    <div class="w3-col s4">
                        <img class="demo w3-opacity w3-hover-opacity-off" src=${products[10].image} style="width:50%;cursor:pointer" onclick="currentDiv(1)">
                    </div>
                    <div class="w3-col s4">
                        <img class="demo w3-opacity w3-hover-opacity-off" src=${products[1].image} style="width:50%;cursor:pointer" onclick="currentDiv(2)">
                    </div>
                    <div class="w3-col s4">
                        <img class="demo w3-opacity w3-hover-opacity-off" src=${products[2].image} style="width:50%;cursor:pointer" onclick="currentDiv(3)">
                    </div>
                </div>
            </div>
            <hr class="space" />
            <div class="shop-item-description"><b>Description:</b> ${products[10].description}</div>
            <hr class="space" />
            <div class="shop-item-details">
                 <span class="shop-item-price">$${products[10].price.toFixed(2)}</span>
            </div>
        </div>
    `);
}

//function to display Makai Bottle when called
function displayMakaiBottle() {
    //document writes the index along with respective information
    document.write(`
        <div class="products">
            <div class="w3-content" align="middle">
                <img class=" mySlides" src=${products[11].image} style="width:50%;">
                <img class=" mySlides" src=${products[1].image} style="width:50%;">
                <img class=" mySlides" src=${products[2].image} style="width:50%;">
                <div class="w3-row-padding w3-section">
                    <div class="w3-col s4">
                        <img class="demo w3-opacity w3-hover-opacity-off" src=${products[11].image} style="width:50%;cursor:pointer" onclick="currentDiv(1)">
                    </div>
                    <div class="w3-col s4">
                        <img class="demo w3-opacity w3-hover-opacity-off" src=${products[1].image} style="width:50%;cursor:pointer" onclick="currentDiv(2)">
                    </div>
                    <div class="w3-col s4">
                        <img class="demo w3-opacity w3-hover-opacity-off" src=${products[2].image} style="width:50%;cursor:pointer" onclick="currentDiv(3)">
                    </div>
                </div>
            </div>
            <hr class="space" />
            <div class="shop-item-description"><b>Description:</b> ${products[11].description}</div>
            <hr class="space" />
            <div class="shop-item-details">
                 <span class="shop-item-price">$${products[11].price.toFixed(2)}</span>
            </div>
        </div>
    `);
}

//Source: https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_slideshow_imgdots
//function to display Makai Products
function currentDiv(n) {
    showDivs(slideIndex = n);
}
  
function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
    }
    x[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " w3-opacity-off";
}

//creates an empty array with the variable name storedUsersCartArray that items will be pushed to when users add products to the cart
var storedUsersCartArray = [];

//Source from Profesor Daniel Port
//checks if the products in the array are defined
if (typeof module != 'undefined') {
    module.exports.storedUsersCartArray = storedUsersCartArray;
}