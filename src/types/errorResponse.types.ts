export default interface iErrorResponse {
  message: string;
  errors: string;
  stack: string | undefined;
  statusCode: number;
  payload?: object | null
}
