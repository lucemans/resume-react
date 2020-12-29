export function alternate<T>(list: T[][]): T[] {
    const n = [];
    
    for (let i = 0; i < list[0].length; i++) {
        list.forEach((e) => {
            if (e[i] != undefined)
                n.push(e[i]);
        });
    }

    return n;
}
