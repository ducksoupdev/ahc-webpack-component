import {MyEntity} from "./my-entity";

export class MyService {

    getAll(): Array<MyEntity> {
        let returnObj: Array<MyEntity> = new Array<MyEntity>();
        for (let i: number = 0; i < 5; i++) {
            returnObj.push(new MyEntity("@user", "Content", false));
        }
        return returnObj;
    }

}
