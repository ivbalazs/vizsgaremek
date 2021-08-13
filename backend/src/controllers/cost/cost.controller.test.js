const { mockRequest, mockResponse } = require('jest-mock-req-res');
const createError = require('http-errors');

const costController = require('./cost.controller');
const costService = require('./cost.service');

jest.mock('./cost.service');

describe("cost controler", () => {
    const mockData = [{
        "_id": 1,
        "date": "2021.08.10.",
        "name": "Bevásárlás",
        "sum": 50000,
        "description": "Heti nagy bevásárlás",
        "costCategory": "Élelmiszer",
        "costService": "LIDL"
    }];

    let response;
    const nextFunction = jest.fn();

    beforeEach(() => {
        costService.__setMockData(mockData);
        response = mockResponse();
    });

    test("find one with valid id", () => {
        const USER_ID = 1;

        const request = mockRequest({
            params: {
                id: USER_ID
            }
        });

        return costController.findOne(request, response, nextFunction)
            .then(() => {
                expect(costService.findOne).toBeCalledWith(USER_ID);
                expect(response.json).toBeCalledWith(
                    mockData.find(p => p._id === USER_ID)
                );
            })
    });
});