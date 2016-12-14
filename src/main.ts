import {MyDirective, MyService} from "./component";

angular
    .module("ahcWebpackComponent", [])
    .directive("myDirective", () => new MyDirective())
    .service("myService", MyService);
