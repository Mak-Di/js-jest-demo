const app = require('./../app');

test('adds 1 + 2 to equal 3', () => {
    expect(app.sum(1, 2)).toBe(3);
});