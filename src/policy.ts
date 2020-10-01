import Action from "./action";
import ExceptionMatch from "./exception-match";
import PolicyBase from "./policy-base";
import PolicyBuilder from "./policy-builder";

export default abstract class Policy extends PolicyBase {
  public static handle(exceptionMatch: ExceptionMatch): PolicyBuilder {
    return new PolicyBuilder((exception) =>
      exceptionMatch(exception) ? exception : null
    );
  }

  protected constructor(policyBuilder: PolicyBuilder) {
    super(policyBuilder);
  }

  public execute<TResult>(action: Action<TResult>): TResult | null {
    return this.implementation(action);
  }

  protected abstract implementation<TResult>(
    action: Action<TResult>
  ): TResult | null;
}
