const { mockRequest, mockResponse } = require('jest-mock-req-res');
const createError = require('http-errors');

const userController = require('./user.controller');
const userService = require('./user.service');

jest.mock('./user.service');

describe("user controler", () => {
    const mockData = [{
        "_id": 1,
        "email": "admin@gmail.com",
        "password": "admin_pw",
        "role": 3,
        "name": "Admin"
    },
    {
        "_id": 2,
        "email": "user@gmail.com",
        "password": "user_pw",
        "role": 2,
        "name": "User"
    }];

    let response;
    const nextFunction = jest.fn();

    beforeEach(() => {
        userService.__setMockData(mockData);
        response = mockResponse();
    });

    test("find one with valid id", () => {
        const USER_ID = 1;

        const request = mockRequest({
            params: {
                id: USER_ID
            }
        });

        return userController.findOne(request, response, nextFunction)
            .then(() => {
                expect(userService.findOne).toBeCalledWith(USER_ID);
                expect(response.json).toBeCalledWith(
                    mockData.find(p => p._id === USER_ID)
                );
            })
    });
});