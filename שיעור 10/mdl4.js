// import { Person,Car } from "./mdl3.js";

//     from default    
import MyPerson     , {Car as SpecialCar}   from "./mdl3.js";

export class PersonWithCar {
    a = 1;
    b = 2;
    name = MyPerson.name;
    HisCar = SpecialCar;
    // HisCarSupplier = Car.provider;
}

var instance = new PersonWithCar();
console.log(instance);