const { mockRequest, mockResponse } = require('jest-mock-req-res');
const createError = require('http-errors');

const incomeController = require('./income.controller');
const incomeService = require('./income.service');

jest.mock('./income.service');

describe("income controler", () => {
    const mockData = [{
        "_id": 1,
        "date": "2021.08.10.",
        "incomeName": "Fizetés",
        "sum": 500000,
        "description": "10-én utalják"
    }];

    let response;
    const nextFunction = jest.fn();

    beforeEach(() => {
        incomeService.__setMockData(mockData);
        response = mockResponse();
    });

    test("find one with valid id", () => {
        const USER_ID = 1;

        const request = mockRequest({
            params: {
                id: USER_ID
            }
        });

        return incomeController.findOne(request, response, nextFunction)
            .then(() => {
                expect(incomeService.findOne).toBeCalledWith(USER_ID);
                expect(response.json).toBeCalledWith(
                    mockData.find(p => p._id === USER_ID)
                );
            })
    });
});