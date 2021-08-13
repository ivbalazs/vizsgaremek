const costcategoryService = jest.mock('./costcategory.service');

let mockData;

costcategoryService.findOne = jest.fn(id => Promise.resolve(
    mockData.find(p => p._id === id))
);

costcategoryService.__setMockData = data => mockData = data;

module.exports = costcategoryService;