const { mockRequest, mockResponse } = require('jest-mock-req-res');
const createError = require('http-errors');

const costserviceController = require('./costservice.controller');
const costserviceService = require('./costservice.service');

jest.mock('./costservice.service');

describe("costservice controler", () => {
    const mockData = [{
        "_id": 1,
        "costserviceName": "ELMŰ",
        "address": "1118 Budapest, Rétköz utca",
        "description": "áram"
    }];

    let response;
    const nextFunction = jest.fn();

    beforeEach(() => {
        costserviceService.__setMockData(mockData);
        response = mockResponse();
    });

    test("find one with valid id", () => {
        const USER_ID = 1;

        const request = mockRequest({
            params: {
                id: USER_ID
            }
        });

        return costserviceController.findOne(request, response, nextFunction)
            .then(() => {
                expect(costserviceService.findOne).toBeCalledWith(USER_ID);
                expect(response.json).toBeCalledWith(
                    mockData.find(p => p._id === USER_ID)
                );
            })
    });
});