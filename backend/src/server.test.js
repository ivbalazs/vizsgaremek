const app = require('./server');
const mongoose = require('mongoose');
const supertest = require('supertest');
const config = require('config');
const Cost = require('./models/cost.model');
const CostCategory = require('./models/costcategory.model');
const CostService = require('./models/costservice.model');
const Income = require('./models/income.model');
const User = require('./models/user.model');
const { response } = require('express');

describe('REST API integration tests', () => {

    const insertCost = [
        {
            "name": "Bevásárlás",
            "date": "2021.08.10",
            "sum": 50000,
            "description": "Heti nagy bevásárlás",
            "costCategoryName": "Élelmiszer",
            "costServiceName": "LIDL",
        },
    ];

    const insertCostCategory = [
        {
            "costCategoryName": "Élelmiszer",
            "description": "heti",
        },
    ];

    const insertCostService = [
        {
            "costServiceName": "ELMŰ",
            "address": "1118 Budapest, Rétköz utca",
            "description": "áram",
        },
    ];

    const insertIncome = [
        {
            "date": "2021.08.10.",
            "incomeName": "Fizetés",
            "sum": 500000,
            "description": "10-én utalják"
        },
    ];

    const insertUser = [
        {
            "email": "admin@gmail.com",
            "password": "admin_pw",
            "role": 3,
            "name": "Admin"
        },
        {
            "email": "user@gmail.com",
            "password": "user_pw",
            "role": 2,
            "name": "User"
        }
    ];

    beforeEach(done => {
        const { databasename, host } = config.get('database');
        mongoose
            .connect(host, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            })
            .then(() => {
                done();
            })
            .catch(err => {
                logger.error(err);
                process.exit();
            });
    });

    afterEach(done => {
        mongoose.connection.db.dropDatabase(() => {
            mongoose.connection.close(() => done())
        });
    });


    test('GET /costs', () => {
        return Cost.insertMany(insertCost)
            .then(() => supertest(app).get('/costs').expect(200))
            .then(response => {
                expect(Array.isArray(response.body)).toBeTruthy();
                expect(response.body.length).toEqual(insertCost.length);

                response.body.forEach((cost, index) => {
                    expect(cost.name).toBe(insertCost[index].name);
                    expect(cost.date).toBe(insertCost[index].date);
                    expect(cost.sum).toBe(insertCost[index].sum);
                    expect(cost.description).toBe(insertCost[index].description);
                    expect(cost.costCategoryName).toBe(insertCost[index].costCategoryName);
                    expect(cost.costServiceName).toBe(insertCost[index].costServiceName);
                });
            });
    });

    test('GET /costs/:id', () => {
        let costId;
        return Cost.insertMany(insertCost)
            .then(costs => {
                costId = costs[0]._id;
                return supertest(app).get(`/costs/${costId}`).expect(200);
            })
            .then(response => {
                const cost = response.body;
                expect(cost.name).toBe(insertCost[0].name);
                expect(cost.date).toBe(insertCost[0].date);
                expect(cost.sum).toBe(insertCost[0].sum);
                expect(cost.description).toBe(insertCost[0].description);
                expect(cost.costCategoryName).toBe(insertCost[0].costCategoryName);
                expect(cost.costServiceName).toBe(insertCost[0].costServiceName);
            });
    });

    test('GET /costcategories', () => {
        return CostCategory.insertMany(insertCostCategory)
            .then(() => supertest(app).get('/costcategories').expect(200))
            .then(response => {
                expect(Array.isArray(response.body)).toBeTruthy();
                expect(response.body.length).toEqual(insertCostCategory.length);

                response.body.forEach((costcategory, index) => {
                    expect(costcategory.costCategoryName).toBe(insertCostCategory[index].costCategoryName);
                    expect(costcategory.description).toEqual(insertCostCategory[index].description);
                });
            });
    });

    test('GET /costcategories/:id', () => {
        let costCategoryId;
        return CostCategory.insertMany(insertCostCategory)
            .then(costcategories => {
                costCategoryId = costcategories[0]._id;
                return supertest(app).get(`/costcategories/${costCategoryId}`).expect(200);
            })
            .then(response => {
                const costCategory = response.body;
                expect(costCategory.costCategoryName).toBe(insertCostCategory[0].costCategoryName);
                expect(costCategory.description).toEqual(insertCostCategory[0].description);
            });
    });

    test('GET /costservice', () => {
        return CostService.insertMany(insertCostService)
            .then(() => supertest(app).get('/costservice').expect(200))
            .then(response => {
                expect(Array.isArray(response.body)).toBeTruthy();
                expect(response.body.length).toEqual(insertCostService.length);

                response.body.forEach((costservice, index) => {
                    expect(costservice.costServiceName).toBe(insertCostService[index].costServiceName);
                    expect(costservice.address).toBe(insertCostService[index].address);
                    expect(costservice.description).toBe(insertCostService[index].description);
                });
            });
    });

    test('GET /costservice/:id', () => {
        let costServiceId;
        return CostService.insertMany(insertCostService)
            .then(costservices => {
                costServiceId = costservices[0]._id;
                return supertest(app).get(`/costservice/${costServiceId}`).expect(200);
            })
            .then(response => {
                const costService = response.body;
                expect(costService.costServiceName).toBe(insertCostService[0].costServiceName);
                expect(costService.address).toBe(insertCostService[0].address);
                expect(costService.description).toBe(insertCostService[0].description);
            });
    });

    test('GET /income', () => {
        return Income.insertMany(insertIncome)
            .then(() => supertest(app).get('/income').expect(200))
            .then(response => {
                expect(Array.isArray(response.body)).toBeTruthy();
                expect(response.body.length).toEqual(insertIncome.length);

                response.body.forEach((income, index) => {
                    expect(income.date).toBe(insertIncome[index].date);
                    expect(income.incomeName).toBe(insertIncome[index].incomeName);
                    expect(income.sum).toBe(insertIncome[index].sum);
                    expect(income.description).toBe(insertIncome[index].description);
                });
            });
    });

    test('GET /income/:id', () => {
        let incomeId;
        return Income.insertMany(insertIncome)
            .then(incomes => {
                incomeId = incomes[0]._id;
                return supertest(app).get(`/income/${incomeId}`).expect(200);
            })
            .then(response => {
                const income = response.body;
                expect(income.date).toBe(insertIncome[0].date);
                expect(income.incomeName).toBe(insertIncome[0].incomeName);
                expect(income.sum).toBe(insertIncome[0].sum);
                expect(income.description).toBe(insertIncome[0].description);
            });
    });

    test('GET /users', () => {
        return User.insertMany(insertUser)
            .then(() => supertest(app).get('/users').expect(200))
            .then(response => {
                expect(Array.isArray(response.body)).toBeTruthy();
                expect(response.body.length).toEqual(insertUser.length);

                response.body.forEach((user, index) => {
                    expect(user.email).toBe(insertUser[index].email);
                    expect(user.password).toBe(insertUser[index].password);
                    expect(user.role).toBe(insertUser[index].role);
                    expect(user.name).toBe(insertUser[index].name);
                });
            });
    });


});