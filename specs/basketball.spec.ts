import { assert } from 'chai'

describe('Array', () => {
    it('double done', () => {
        assert.equal([1, 2, 3].indexOf(4), -1);
    });
});