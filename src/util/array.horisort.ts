import { alternate } from './array.alternate';
import { chunk } from './array.chunk';

export function horisort<T>(list: T[], columns: number): T[] {

    return alternate((chunk(list, Math.ceil(list.length / columns))));
}

export function horisort2<T>(list: T[], columns: number): T[] {
    list = JSON.parse(JSON.stringify(list));

    const ret = [];
    const inRow = Math.floor(list.length / columns);

    let f = 0;
    while (list.filter((a) => (!!a)).length > 0) {
        for (let i = 0; i < columns; i++) {
            if (list.length > f + i * inRow) {
                if (list[f + i * inRow] == null)
                    continue;
                ret.push(list[f + i * inRow]);
                list[f + i * inRow] = null;
            } else {
                console.log('h', f, i);
                list[f] = null;
            }
        }
        f++;
    }
    return ret;
}