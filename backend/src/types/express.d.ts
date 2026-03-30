export {};
declare global {
  namespace Express {
    interface Request {
      auth: () => { userId: string; has: (args: any) => boolean };
      free_usage?: number;
      plan?: "premium" | "free";
    }
  }
}
