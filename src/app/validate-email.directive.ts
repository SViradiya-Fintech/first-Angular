import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
  selector: "[appValidateEmail]"
})
export class ValidateEmailDirective {
  constructor(private elRef: ElementRef) {}

  @Input() value: string;
  @HostListener("blur")
  onBlur() {
    console.log("validate email called");
    this.value = this.elRef.nativeElement.value;
    if (this.value.indexOf("@") > 0) {
      console.log("email found");
      this.elRef.nativeElement.style.color = "#00cc66";
      this.elRef.nativeElement.style.backgroundColor = "#ccccff";
      this.elRef.nativeElement.style.fontSize = "20px";
    }

  }
}
