import { ErrorHandler } from "@angular/core";
import { NotFoundError } from "./not-found-error";

export class AppErrorHandler implements ErrorHandler {
  handleError(error) {
    if (error as NotFoundError) {
      console.log("not found errors");
    } else {
      console.log("App error", error);
    }
  }
}
