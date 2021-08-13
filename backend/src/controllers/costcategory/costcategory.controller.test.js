const { mockRequest, mockResponse } = require('jest-mock-req-res');
const createError = require('http-errors');

const costcategoryController = require('./costcategory.controller');
const costcategoryService = require('./costcategory.service');

jest.mock('./costcategory.service');

describe("costcategory controler", () => {
    const mockData = [{
        "_id": 1,
        "costcategoryName": "Élelmiszer",
        "description": "heti"
    }];

    let response;
    const nextFunction = jest.fn();

    beforeEach(() => {
        costcategoryService.__setMockData(mockData);
        response = mockResponse();
    });

    test("find one with valid id", () => {
        const USER_ID = 1;

        const request = mockRequest({
            params: {
                id: USER_ID
            }
        });

        return costcategoryController.findOne(request, response, nextFunction)
            .then(() => {
                expect(costcategoryService.findOne).toBeCalledWith(USER_ID);
                expect(response.json).toBeCalledWith(
                    mockData.find(p => p._id === USER_ID)
                );
            })
    });
});