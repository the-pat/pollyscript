export default interface Action<TResult> {
  (): TResult;
}
