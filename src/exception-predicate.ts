export default interface ExceptionPredicate {
  (exception: Error): Error | null;
}
