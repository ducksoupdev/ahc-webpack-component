export class MyDirectiveController implements ahcWebpackComponent.IMyDirectiveController {

    static $inject = ["$location"];

    private greeting: string;

    constructor(private $location: angular.ILocationService) {
        this.greeting = "Hello world";
    }

    getUrl(): string {
        return this.$location.protocol() + "://" + this.$location.host() + ":" + this.$location.port() + this.$location.url();
    }
}
