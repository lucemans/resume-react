export function chunk<T>(list: T[], n: number): T[][] {
    if ( !list.length ) {
        return [];
    }
    return [ list.slice( 0, n ) ].concat( chunk(list.slice(n), n) );
}
