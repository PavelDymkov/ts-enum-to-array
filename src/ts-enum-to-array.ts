type ArrayOf<Enum> = Enum extends Record<keyof Enum, infer T> ? T[] : never;

export function enumToArray<Enum>(source: Enum): ArrayOf<Enum> {
    const items: ArrayOf<Enum> = [] as any;

    for (let key in source) if (isNaN(Number(key))) items.push(source[key]);

    return items;
}
