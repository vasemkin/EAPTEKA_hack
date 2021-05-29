const axios = require('axios');
const path = require('path');
var appRoot = require('app-root-path');
const readFile = require('../../misc/readFile');
const makeid = require('../../misc/makeid');
const User = require("./models/user");
const Products = require("./models/products");
const Property = require("./models/property");
const Prescription = require("./models/prescription");
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

    app.post('/api/add_prescription_to_user', (req, res) => {

        User.find({ uuid : req.body.uuid }, function(err, result) {

            if (!result.length) {

                res.json({
                    "status" : "FAIL"
                });


            } else {

                const user = result[0];
                console.log(user);
                user.prescriptions = [...user.prescriptions, req.body.prescription_id]

                user.save()

                res.json({
                    "status" : "SUCCESS"
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
    

    app.post('/api/generate_prescription', (req, res) => {

        const id = makeid(4)
        console.log(req.body)

        const drugs = new Prescription({
            prescription_id : id,
            data : req.body
        });

        console.log(drugs)

        drugs.save(function (err) {
            if (err) {
                res.json({
                    status : "FAIL"
                })
            }
            res.json({
                status : "SUCCESS",
                prescription_id : id
            })
        })

    });
    

    app.get('/api/get_prescription', (req, res) => {

        Prescription.find({ prescription_id : req.body.prescription_id }, function(err, result) {

            if (!result.length) {

                res.json({
                    "status" : "FAIL"
                });

            } else {

                res.json({
                    "status" : "SUCCESS",
                    "data" : result[0]
                });

            }
        })

    });
    

    app.get('/api/list_prescriptions', (req, res) => {

        Prescription.find({}, function(err, result) {

            if (err) {

                res.json({
                    "status" : "FAIL"
                });

            } else {

                res.json({
                    "data" : result
                });
                

            }

        })

    });
      

}

module.exports = index;