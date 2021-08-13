const incomeService = jest.mock('./income.service');

let mockData;

incomeService.findOne = jest.fn(id => Promise.resolve(
    mockData.find(p => p._id === id))
);

incomeService.__setMockData = data => mockData = data;

module.exports = incomeService;