interface AddItemOptions {
  batchSize?: number;
  ignoreInvalid?: boolean;
}

declare class SomeAPI<ND, ED> {
  /**
   * @method MyLib.addItems
   * Add items.
   * @param itemsToAdd items to add
   * @param options some options
   */
  addItems(
    itemsToAdd: Item<ND>[],
    options: AddItemOptions
  ): Promise<ItemList<ND, ED>>;
}

interface MyLib<ND, ED> extends SomeAPI<ND, ED> {}

class MyLib {
  test: number;
}

export { MyLib };
