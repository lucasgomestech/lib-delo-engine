import { Person } from '../../models/person';
import { v4 as uuid } from 'uuid';
import { Device } from '../../models/device';

describe(Person.name, () => {
    it('should initialize a person without errors', async () => {
        const name: string = 'Jhon Doe';
        const up: number = 27;
        const down: number = 27;
        const ratio = up / down;
        const id: string = uuid();
        const number: string = '+5531489325105';
        const device: Device = new Device(id, number);
        const deviceList: Device[] = [device];
        const deviceListLength: Number = 1;

        const person: Person = new Person(name, ratio, up, down, deviceList);

        expect(person).toBeInstanceOf(Person);
        expect(person).toHaveProperty('name', name);
        expect(person).toHaveProperty('ratio', ratio);
        expect(person).toHaveProperty('up', up);
        expect(person).toHaveProperty('down', down);
        expect(person).toHaveProperty('deviceList');
        expect(person.deviceList).toHaveProperty('length', deviceListLength);
    });
});
