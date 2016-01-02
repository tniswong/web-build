import HelloWorldController from 'www/js/controllers/HelloWorldController';
import Log from 'spec/mocks/log';

describe('The helloWorldController', () => {

    let controller;

    beforeEach(() => {
		controller = new HelloWorldController(new Log());
    });

    it('expected to be ture', () => {
		expect(controller.name).toEqual('World');
    });

});
