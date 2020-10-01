import ExceptionPredicate from "./exception-predicate";

export default class ExceptionPredicates {
  private _predicates: ExceptionPredicate[];

  public constructor() {
    this._predicates = [];
  }

  public add(predicate: ExceptionPredicate): void {
    this._predicates.push(predicate);
  }

  public firstMatchOrDefault(ex: Error): Error | null {
    return (
      this._predicates
        .map((predicate) => predicate(ex))
        .find((e) => e !== null) || null
    );
  }

  public static readonly None: ExceptionPredicates = new ExceptionPredicates();
}
