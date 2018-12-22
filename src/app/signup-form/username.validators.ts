import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UsenameValidators {
  static CannotContainspace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(" ") !== -1) {
      return { CannotContainspace: true };
    }
    return null;
  }
  static UserNameShouldBeUnique(
    control: AbstractControl
  ): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if ((control.value as string) === "sagar") {
          console.log("async validatior invalid called", control.value);
          resolve({ shouldbeunique: true });
        } else {
          console.log("async validatior null called", control.value);
          resolve(null);
        }
      }, 2000);
    });
  }
}
