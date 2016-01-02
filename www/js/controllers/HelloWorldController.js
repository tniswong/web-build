export default class HelloWorldController {

    static get $inject() {
        return ['$log'];
    }

    constructor ($log) {

        this.name = "World";

        $log.debug(this.name);

    }

}
