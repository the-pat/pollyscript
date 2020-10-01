import Action from "./action";
import ExceptionMatch from "./exception-match";
import ExceptionPredicate from "./exception-predicate";
import ExceptionPredicates from "./exception-predicates";
import NoOpPolicy from "./no-op/no-op-policy";

export default class PolicyBuilder {
  private _exceptionPredicates: ExceptionPredicates;

  public get exceptionPredicates(): ExceptionPredicates {
    return this._exceptionPredicates;
  }

  public constructor(exceptionPredicate: ExceptionPredicate) {
    this._exceptionPredicates = new ExceptionPredicates();
    this._exceptionPredicates.add(exceptionPredicate);
  }

  public or(exceptionMatch: ExceptionMatch): PolicyBuilder {
    this._exceptionPredicates.add((exception) =>
      exceptionMatch(exception) ? exception : null
    );
    return this;
  }

  public noOp(): NoOpPolicy {
    return new NoOpPolicy(this);
  }
}
