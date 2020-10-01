import ExceptionPredicates from "./exception-predicates";
import PolicyBuilder from "./policy-builder";

export default class PolicyBase {
  protected exceptionPredicates: ExceptionPredicates;

  public constructor(policyBuilder: PolicyBuilder) {
    this.exceptionPredicates =
      policyBuilder?.exceptionPredicates ?? ExceptionPredicates.None;
  }
}
