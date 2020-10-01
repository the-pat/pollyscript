import Action from "../action";

export default class NoOpEngine {
  static implementation<TResult>(action: Action<TResult>): TResult | null {
    return null;
  }
}
