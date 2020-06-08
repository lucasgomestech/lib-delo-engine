import { Person } from './person';

/**
 * Data model of a device.
 */
export class Device {
    constructor(public id?: string, public number?: string, public owner?: Person) {}
}
