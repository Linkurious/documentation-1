interface AddItemOptions {
  batchSize?: number;
  ignoreInvalid?: boolean;
}

declare class SomeAPI<ND, ED> {
  addItems(
    itemsToAdd: Item<ND>[],
    options: AddItemOptions
  ): Promise<ItemList<ND, ED>>;
}

export { SomeAPI };
