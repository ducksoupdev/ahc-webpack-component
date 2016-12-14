import {MyDirectiveController} from "./my-directive.controller";

export class MyDirective implements angular.IDirective {
    restrict = "E";
    template = <string>require("./my-directive.html");
    replace = true;
    controller = MyDirectiveController;
    controllerAs = "myCtrl";
    bindToController = true;
}
