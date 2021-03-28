const { fetch, URL } = require('./index');
const axios = require('axios');

jest.mock('axios');

describe('test fetch', () => {
    const data = {
        "devicelevels": [[0, 1], [1, 1.5], [2, 2], [3, 5]],
        "devices": [[0, 0], [1, 0], [2, 2], [3, 1], [4, 1]],
        "customers": [[0, "John", 15, 5], [1, "Lea", 25, 20], [2, "Sara", 5, 10], [3, "Bob", 0, 50], [4, "Eric", 10, 10]],
        "rentals": [[0, 1, [1, 0], 10], [1, 2, [2], 24], [2, 3, [3], 5], [3, 4, [2, 3], 48], [4, 1, [1, 0], 10], [5, 2, [1], 24], [6, 3, [3, 2], 5], [7, 4, [2, 3, 0], 48], [8, 0, [4], 10], [9, 0, [4], 15]]
    };
    axios.get.mockResolvedValue({ data });
    it('should call axios.get', async () => {
        const res = await fetch();
        expect(axios.get).toHaveBeenCalledTimes(1);
        expect(axios.get).toHaveBeenCalledWith(URL);
        expect(res).resolves.toEqual(data);
    });

});