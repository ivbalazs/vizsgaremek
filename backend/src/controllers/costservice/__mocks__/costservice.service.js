const costserviceService = jest.mock('./costservice.service');

let mockData;

costserviceService.findOne = jest.fn(id => Promise.resolve(
    mockData.find(p => p._id === id))
);

costserviceService.__setMockData = data => mockData = data;

module.exports = costserviceService;