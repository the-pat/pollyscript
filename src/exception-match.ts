export default interface ExceptionMatch {
  (exception: Error): boolean;
}
