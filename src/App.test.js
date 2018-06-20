import { test } from './App';

describe('test', () => {
    test();
    var mailInput = document.getElementById('mailInput');

    it('should be up and running', () => {
        expect(mailInput).toBe(null);
    });
});