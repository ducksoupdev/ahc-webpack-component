import {ComponentTest} from "../util/component-test";

describe("My directive", function() {

    let directiveTest: ComponentTest;

    let mockLocationService = jasmine.createSpyObj("$location", ["protocol", "host", "port", "url"]);

    mockLocationService.protocol.and.callFake(() => "http");
    mockLocationService.host.and.callFake(() => "127.0.0.1");
    mockLocationService.port.and.callFake(() => 8080);
    mockLocationService.url.and.callFake(() => "/my-test-url");

    beforeEach(angular.mock.module("ahcWebpackComponent", ($provide: any) => {
        $provide.value("$location", mockLocationService);
    }));

    beforeEach(() => {
        directiveTest = new ComponentTest("<my-directive></my-directive>");
    });

    describe("Binding to the component", () => {
        beforeEach(() => {
            directiveTest.createComponent({});
        });

        it("Should bind to the greeting", () => {
            expect(directiveTest.element.find(".greeting").text()).toEqual("Hello world");
        });

        it("Should bind to the url", () => {
            expect(directiveTest.element.find(".url").text()).toEqual("http://127.0.0.1:8080/my-test-url");
        });
    });
});
