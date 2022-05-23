interface RawEdge<ED> {
  id: string;
  data: ED;
}

interface EdgeList<ED> {
  edges: RawEdge<ED>[];
}

interface AddItemOptions {
  batchSize: number;
  ignoreInvalid?: boolean;
}

declare class App<ED> {
  /**
   * @method App.addEdges
   * Add the specified edges
   * @param {Array<RawEdge>} edges
   * @param {object} [options]
   * @param {number} [options.batchSize] If specified, the graph will be
   *                                     imported progressively (`batchSize`
   *                                     nodes/edges at a time). It will
   *                                     effectively increase the total loading
   *                                     time, but the construction of the graph
   *                                     will be shown and the thread will not
   *                                     be frozen.
   * @param {boolean} [options.ignoreInvalid=false] If true, the method quietly
   * skip the edges whose extremities are not in the visualisation.
   * @return {Promise<EdgeList>} Edges added to the graph.
   */
  addEdges(
    edges: RawEdge<ED>[],
    options?: AddItemOptions
  ): Promise<EdgeList<ED>>;
}

declare class App2<ED> {
  /**
   * @method App.addEdges
   * Add the specified edges
   * @param edges
   * @param options
   * @param options.batchSize If specified, the graph will be
   *                                     imported progressively (`batchSize`
   *                                     nodes/edges at a time). It will
   *                                     effectively increase the total loading
   *                                     time, but the construction of the graph
   *                                     will be shown and the thread will not
   *                                     be frozen.
   * @param options.ignoreInvalid If true, the method quietly
   * skip the edges whose extremities are not in the visualisation.
   * @return Edges added to the graph.
   */
  addEdges(
    edges: RawEdge<ED>[],
    options?: AddItemOptions
  ): Promise<EdgeList<ED>>;
}

export { App, App2 };
