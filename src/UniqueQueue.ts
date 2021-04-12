const completed = { completed: true } as const;

export class UniqueQueue<T> {
  private queueArray: string[];
  private completed: number;
  // set map to false when it is already completed
  private uniqueMap: Map<
    string,
    { value: T; completed: false } | { completed: true }
  >;

  private addSingleEntry = (entry: T) => {
    const id = this.getId(entry);

    const old = this.uniqueMap.get(id);

    if (old?.completed) return;

    if (!old || this.prefer?.(entry, old?.value)) {
      this.uniqueMap.set(id, { value: entry, completed: false });
    }
    if (!old) this.queueArray.push(id);
  };

  private getId: (arg: T) => string;
  private prefer: ((a: T, b: T) => boolean) | undefined;

  constructor(
    getId: (arg: T) => string,
    preferenceFunction?: (a: T, b: T) => boolean,
    initialValues?: T[],
  ) {
    this.uniqueMap = new Map<
      string,
      { value: T; completed: false } | { completed: true }
    >();
    this.getId = getId;
    this.prefer = preferenceFunction;
    this.queueArray = [];
    initialValues?.forEach(this.addSingleEntry);
    this.completed = 0;
  }

  // add new entries uniquely to the queued list, if they are not completed already
  add = (...newEntries: T[]) => {
    newEntries.forEach((entry) => this.addSingleEntry(entry));
  };

  getLength = () => ({
    queued: this.queueArray.length,
    completed: this.completed,
  });

  next = (): T | undefined => {
    const id = this.queueArray.pop();

    console.log(this.getLength(), id);

    if (!id) return;

    const entry = this.uniqueMap.get(id);

    if (entry && !entry?.completed) {
      this.uniqueMap.set(id, completed);
      this.completed++;
      return entry.value;
    }
  };
}
