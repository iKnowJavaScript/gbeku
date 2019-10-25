export default interface iAPIError {
  message: string;
  errors: object | null;
  stack?: string | undefined;
  status: number;
  isPublic?: boolean | undefined;
  payload?: object;
}
