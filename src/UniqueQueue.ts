const basicComparison = <T>(a: T, b: T) => a === b;

const isFirstOccurence = <T>(value: T, index: number, self: T[]) =>
  self.indexOf(value) === index;

export class UniqueQueue<T> {
  private queued: T[];
  private completed: T[];
  private duplicateFilterFunc: (value: T, index: number, self: T[]) => boolean;
  private arrayIncludesEntry: (arr: T[], entry: T) => boolean;

  constructor(
    initialValues?: T[],
    duplicateFilterFunc?: (value: T, index: number, self: T[]) => boolean,
    comparisonFunc?: (a: T, b: T) => boolean,
  ) {
    // initialize with empty array or input array filtered for uniqueness
    this.duplicateFilterFunc = duplicateFilterFunc ?? isFirstOccurence;

    const compFunc = comparisonFunc ?? basicComparison;

    this.arrayIncludesEntry = (arr: T[], entry: T) =>
      !(arr.findIndex((arrEntry) => compFunc(entry, arrEntry)) === -1);

    this.queued = initialValues
      ? initialValues.filter(this.duplicateFilterFunc)
      : [];
    this.completed = [];
  }

  // add new entries uniquely to the queued list, of they are not completed already
  add = (...newEntries: T[]) =>
    newEntries.filter(this.duplicateFilterFunc).forEach((entry) => {
      // if the entry is not included in the list of completed entries
      // add it to the queue, and remove duplicates afterwards
      // --> this way the filter function can influence which of the duplicates is removed
      //     (entries can differ but correspond to the same external data point
      //      i.e. for cats we might have one entry { id: ..., weight: ... } and one entry { id: ..., name: ... }
      //      and we can choose to keep the one that has the more relevant data)
      // --> this could be improved in the future to also allow for merging of entries
      if (!this.arrayIncludesEntry(this.completed, entry)) {
        this.queued.unshift(entry);
        this.queued = this.queued.filter(this.duplicateFilterFunc);
      }
    });

  addCompleted = (...newEntries: T[]) => {
    // remove them from being queued if they are flagged as completed
    this.queued = this.queued.filter(
      (entry) => !this.arrayIncludesEntry(newEntries, entry),
    );

    // add them uniquely to the completed entries
    newEntries.filter(this.duplicateFilterFunc).forEach((entry) => {
      if (!this.arrayIncludesEntry(this.completed, entry)) {
        this.completed.push(entry);
      }
    });
  };

  getLength = () => ({
    queued: this.queued.length,
    completed: this.completed.length,
  });

  next = () => {
    const entry = this.queued.pop();
    if (entry) this.completed.push(entry);
    return entry;
  };
}
