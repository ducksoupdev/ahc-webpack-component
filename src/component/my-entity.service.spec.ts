import {MyService} from "./my-entity.service";
import {MyEntity} from "./my-entity";
import * as _ from "lodash";

describe("My entity service", () => {
    let myEntityService: MyService;

    beforeEach(() => {
        myEntityService = new MyService();
    });

    describe("on getAll()", () => {
        it("should return five entities", () => {
            let res: Array<MyEntity> = myEntityService.getAll();
            expect(res.length).toBe(5);

            _.forEach(res, (entity: MyEntity) => {
                expect((<any>entity.constructor).name).toEqual("MyEntity");
            });
        });
    });
});
