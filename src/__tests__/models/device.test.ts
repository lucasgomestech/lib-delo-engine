import { Device } from '../../models/device';
import { v4 as uuid } from 'uuid';
import { Person } from '../../models/person';

describe(Device.name, () => {
    it('should initialize a device without errors', async () => {
        const id = uuid();
        const number = '+5531489325105';
        const name = 'Jhon Doe';
        const person = new Person(name);

        const device = new Device(id, number, person);

        expect(device).toBeInstanceOf(Device);
        expect(device).toHaveProperty('id', id);
        expect(device).toHaveProperty('number', number);
        expect(device).toHaveProperty('owner');
        expect(device.owner).toBeInstanceOf(Person);
        expect(device.owner).toHaveProperty('name', name);
        expect(device.owner).toHaveProperty('deviceList', undefined);
    });
});
