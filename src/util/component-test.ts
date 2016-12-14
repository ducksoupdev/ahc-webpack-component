/* istanbul ignore next */
export class ComponentTest {
    public element: angular.IAugmentedJQuery;
    public scope: angular.IScope;

    private rootScope: angular.IScope;
    private compile: angular.ICompileService;

    constructor(private template: string, private registerName?: string) {
        angular.mock.inject(($rootScope: angular.IRootScopeService, $compile: angular.ICompileService) => {
            this.rootScope = $rootScope;
            this.compile = $compile;
        });
    }

    public createComponentWithController(attributes: any): any {
        this.scope = this.rootScope.$new();
        for (let key in attributes) {
            this.scope[key] = attributes[key];
        }
        this.element = this.compile(this.template)(this.scope);
        this.scope.$digest();
        return this.element.controller(this.registerName);
    }

    public createComponent(attributes: any): void {
        this.scope = this.rootScope.$new();
        for (let key in attributes) {
            this.scope[key] = attributes[key];
        }
        this.element = this.compile(this.template)(this.scope);
        this.scope.$digest();
    }
}
