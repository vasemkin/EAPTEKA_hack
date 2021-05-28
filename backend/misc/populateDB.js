const Products = require("../app/routes/models")
const readFile = require("./readFile")
var appRoot = require('app-root-path');
const path = require('path')

const populateDB = async () => {
    //just a place to store code in case

    const productsPath = path.join(appRoot.toString(), 'data', 'products.json')
    const products = await readFile(productsPath)
    
    const propertyPath = path.join(appRoot.toString(), 'data', 'property.json')
    const property = await readFile(propertyPath)
    
    const propertyValuesPath = path.join(appRoot.toString(), 'data', 'propertyValues.json')
    const propertyValues = await readFile(propertyValuesPath)

    products.forEach(product => {
        const prod = new Products({
            ID : product.ID,
            NAME : product.NAME,
        })

        prod.save(function(err){
            if(err) return;
            //succ
            console.log(prod)
        });
    })
}

populateDB()