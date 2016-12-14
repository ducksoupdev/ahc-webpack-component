/// <reference path="index.d.ts" />
/// <reference path="ahc-webpack-component.d.ts" />

declare namespace jasmine {
    interface Matchers {
        toEqualData(expect: any): boolean;
    }
}
