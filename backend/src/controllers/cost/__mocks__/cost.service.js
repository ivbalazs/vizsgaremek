const costService = jest.mock('./cost.service');

let mockData;

costService.findOne = jest.fn(id => Promise.resolve(
    mockData.find(p => p._id === id))
);

costService.__setMockData = data => mockData = data;

module.exports = costService;