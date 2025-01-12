import { v4 as uuidv4 } from 'uuid';

export default class IDGenerator {
    static generate(): string {
        return uuidv4();
    }
}