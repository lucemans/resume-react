import { alternate } from './array.alternate';
import { chunk } from './array.chunk';

export function horisort<T>(list: T[], columns: number): T[] {
    return alternate((chunk(list, Math.ceil(list.length / columns))));
}
