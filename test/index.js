import { expect } from 'chai';

import Store from '../index';

describe('Blah', () => {
    it('Basics', () => {
        expect(Store).to.be.ok;
        expect(Store('store name')).to.be.ok;
    });
});