import { FullTime } from './full-time';
import { PartTime } from './part-time';
import { TemporaryEmployee } from './temporary';

export class EmployeeFactory {

    createEmployee(type) {
        if(type === 'full') {
            return new FullTime();
        } else if(type === 'partime') {
            return new PartTime()
        } else if(type === 'temporary') {
            return new TemporaryEmployee();
        } else {
            console.log(`Employee type not defined`);
        }
    }
}