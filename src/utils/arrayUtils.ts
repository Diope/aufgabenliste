interface IItem {
    id: string
}

export const findItemIndexById = <TItem extends IItem>(
    items: TItem[],
    id: string
) => {
    return items.findIndex((item: TItem) => item.id === id)
}