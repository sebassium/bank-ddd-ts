import faker from "faker";
import FakerStatic = Faker.FakerStatic;

export class FakeValue {

    static get(): FakerStatic {
        return faker;
    }

}

