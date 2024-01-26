
import loginPage    from '../pageobjects/herokuapp-login.page.ts';
import landingPage  from '../pageobjects/herokuapp-landing.page.ts';
import assert       from 'assert';

/*
	This is a BDD test using Mocha JavaScript framework
*/

describe('test timeout',  () =>  {
    it('Test timeout mocha', async () =>  {
        console.log('this.timeout before set timeout: ', this.test._timeout)

        this.timeout(120000); // 2min

        console.log('this.timeout after set timeout: ', this.test._timeout)

        await browser.pause(90000); // 1m30sec
    });
});
