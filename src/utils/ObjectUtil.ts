interface EnumItem<E> {
    key: keyof E;
    data: E;
}

export function enumToArray<E> (Enum: any): EnumItem<E>[] {
    return Object.keys(Enum).map((key) => ({ data: Enum[key], key: key } as EnumItem<E>));
}