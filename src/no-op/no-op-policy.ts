import Action from "../action";
import Policy from "../policy";
import PolicyBuilder from "../policy-builder";
import NoOpEngine from "./no-op-engine";

export default class NoOpPolicy extends Policy {
  public constructor(policyBuilder: PolicyBuilder) {
    super(policyBuilder);
  }

  protected implementation<TResult>(action: Action<TResult>): TResult | null {
    return NoOpEngine.implementation(action);
  }
}
