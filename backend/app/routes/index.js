const axios = require('axios');
const path = require('path');
var appRoot = require('app-root-path');
const readFile = require('../../misc/readFile');
const makeid = require('../../misc/makeid');
const User = require("./models/user");
const Products = require("./models/products");
const Basket = require("./models/basket");
const Property = require("./models/property");
const Prescription = require("./models/prescription");
const PropertyValues = require("./models/propertyValues");
const PropertyMultipleValues = require("./models/PropertyMultipleValues");

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
        }).limit(100);

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

                if (user.prescriptions.filter(e => e.prescription_id === req.body.prescription_id).length > 0) {

                    res.json({
                        "status" : "FAIL",
                        "message" : "user already has that prescription"
                    });

                } else {

                    user.prescriptions = 
                        [...user.prescriptions, 
                            {
                                prescription_id : req.body.prescription_id,
                                status : "PENDING",
                                edited : {
                                    isEdited : false,
                                    newData : []
                                }
                            }
                        ];
    
                    user.save()
    
                    res.json({
                        "status" : "SUCCESS"
                    });

                }

            }
        })

    });
    
    app.post('/api/change_prescription_status', (req, res) => {

        User.find({ uuid : req.body.uuid }, function(err, result) {

            if (!result.length) {

                res.json({
                    "status" : "FAIL"
                });

            } else {

                const user = result[0];
                user.prescriptions.forEach((pres, index) => {
                    if (pres.prescription_id === req.body.prescription_id) {
                        user.prescriptions[index].status = req.body.status;
                        user.save()
                    }
                })

                res.json({
                    "status" : "SUCCESS"
                });

            }
        })

    })

    app.get('/api/user_prescriptions', (req, res) => {

        User.find({ uuid : req.body.uuid }, function(err, result) {

            if (!result.length) {

                res.json({
                    "status" : "FAIL"
                });

            } else {

                const user = result[0];

                const whereToLook = user.toObject().prescriptions.map((prescription) => {
                    return prescription.prescription_id
                })

                Prescription.find({ prescription_id : { $in : whereToLook }}, function(err, prescriptionsResult) {

                    if (err) {
                        res.json({
                            "status" : "FAIL"
                        });
                    } else {
                        res.json({
                            "prescriptions" : prescriptionsResult
                        });
                    }
                })

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

    app.get('/api/product_data', (req, res) => {

        Products.find({ ID: req.body.ID }, function(err, result){

            if (err || !result.length) {

                res.json({
                    "status" : "FAIL"
                })

            } else { 

                const product = result[0]
                PropertyMultipleValues.find({ IBLOCK_ELEMENT_ID: product.ID }, function(err, multipleValuesResult) {

                    if (err || !multipleValuesResult.length) {

                        res.json({
                            "status" : "FAIL"
                        })

                    } else {

                        const multipleValues = multipleValuesResult[0]

                        const product = result[0]
                        Basket.findOne({ PRODUCT_ID: product.ID }, function(err, basketResult) {

                            if (err || !basketResult) {

                                res.json({
                                    "status" : "FAIL"
                                })

                            } else {

                                const basket = basketResult;
                                console.log(basket)

                                PropertyValues.find({ IBLOCK_ELEMENT_ID: product.ID }, async function(err, valuesResult) {

                                    if (err || !valuesResult.length) {
                
                                        res.json({
                                            "status" : "FAIL"
                                        })
                
                                    } else {
                
                                        const values = valuesResult[0]
                                        let answer = { IBLOCK_ELEMENT_ID : product.ID }
        
                                        const prettify = async () => {
        
                                            for (let value in values.toObject()) {
                                                try {
                                                    const search = parseInt(value.split("_")[1])
                                                    await Property.find({ ID : search }, function(err, propertyResult) {
                                                        if(err) return
            
                                                        try {
                                                            answer = {
                                                                ...answer,
                                                                [propertyResult[0].CODE]: values.toObject()[value]
                                                            }
                                                            
                                                        } catch (error) {
                                                            
                                                        }
        
                                                    })
                                                } catch (error) {
                                                    
                                                }
                                            }
        
                                        }
        
                                        await prettify()
        
                                        res.json({
                                            product : product,
                                            multipleValues : multipleValues,
                                            values : answer
                                        })
                                        
                                    }
                
                                })
                            
                            }

                        })

                    }

                })

            }

        })

    })

    app.post('/api/edit_user_prescription', (req, res) => {

        User.find({ uuid : req.body.uuid }, function(err, result) {

            if (!result.length) {

                res.json({
                    "status" : "FAIL"
                });

            } else {

                const user = result[0];

                user.prescriptions.forEach((pres, index) => {

                    if (pres.prescription_id === req.body.prescription_id) {
                        user.prescriptions[index].isEdited = true;
                        user.prescriptions[index].newData = req.body.data;
                        user.save()
                    }

                })

                res.json({
                    "status" : "SUCCESS"
                });

            }
        })

    })

    app.post('/api/name_single_prescription', (req, res) => {

        User.find({ uuid : req.body.uuid }, function(err, result) {

            if (!result.length) {

                res.json({
                    "status" : "FAIL"
                });
                return

            } else {

                const user = result[0];
                user.prescriptions.forEach((pres, index) => {

                    if (pres.prescription_id === req.body.prescription_id) {

                        if (user.prescriptions[index].names.length === 0 ) {

                            user.prescriptions[index].names = 
                                [...user.prescriptions[index].names,
                                    {
                                        key : req.body.key_to_change,
                                        name : req.body.new_name
                                    }
                                ]

                            user.save()
                                    
                            res.json({
                                "status" : "SUCCESS",
                                "message" : "first item in [names]"
                            });
                            return

                        } else {

                            user.prescriptions[index].names.forEach((name, ind) => {
                                
                                if (name.key === req.body.key_to_change) {
    
                                    user.prescriptions[index].names[ind] = {
                                        ...user.prescriptions[index].names[ind],
                                        name : req.body.new_name
                                    }

                                    user.save()
                                    
                                    res.json({
                                        "status" : "SUCCESS",
                                        "message" : "changed existing item in [names]"
                                    });
                                    return

                                } else {

                                    user.prescriptions[index].names = 
                                        [...user.prescriptions[index].names,
                                            {
                                                key : req.body.key_to_change,
                                                name : req.body.new_name
                                            }
                                        ]
        
                                    user.save()
                                    
                                    res.json({
                                        "status" : "SUCCESS",
                                        "message" : "new item in [names]"
                                    });
                                    return

                                }
    
                            })

                        }

                    } 
                })

            }
        })

    })
      

}

module.exports = index;