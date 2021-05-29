const axios = require('axios');
const path = require('path');
var appRoot = require('app-root-path');
const readFile = require('../../misc/readFile');
const User = require("./models/user");
const Products = require("./models/products");
const Property = require("./models/property");
const PropertyValues = require("./models/propertyValues");

const index = async function (app, db) {

    app.get('/api/list_users', (req, res) => {

        User.find({}, function(err, result) {
            if (err) {
              console.log(err);
            } else {
              res.json(result);
            }
        });

    });

    app.get('/api/list_products', (req, res) => {

        Products.find({}, function(err, result) {
            if (err) {
              console.log(err);
            } else {
              res.json(result);
            }
        });

    });

    app.get('/api/list_properties', (req, res) => {

        Property.find({}, function(err, result) {
            if (err) {
              console.log(err);
            } else {
              res.json(result);
            }
        });

    });

    app.post('/api/register', (req, res) => {

        User.find({ uuid : req.body.uuid }, function(err, result) {

            if (!result.length) {
                const user = new User({
                    uuid: req.body.uuid,
                    password : req.body.password,
                    type: req.body.type
                });
        
                user.save(function (err) {
                    if (err) return ;
                    // saved!
        
                    res.json({
                        "status" : "OK"
                    });
                  });

            } else {

                res.json({
                    "status" : "ALREADY_REGISTERED"
                });

            }
        })

    });
    

    app.post('/api/login', (req, res) => {

        User.find({ uuid : req.body.uuid }, function(err, result) {

            if (!result.length) {

                res.json({
                    "status" : "FAIL"
                });

            } else {

                if (result[0].password === req.body.password) {

                    res.json({
                        "status" : "SUCCESS",
                        "type" : result[0].type
                    });

                } else {

                    res.json({
                        "status" : "FAIL"
                    });

                }

            }
        })

    });
      

}

module.exports = index;