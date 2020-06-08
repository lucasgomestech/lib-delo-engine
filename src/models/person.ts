import { Device } from './device';

/**
 * Data model of a person.
 */
export class Person {
    constructor(
        public name?: string,
        public ratio?: number,
        public up?: number,
        public down?: number,
        public deviceList?: Device[],
    ) {}
}
