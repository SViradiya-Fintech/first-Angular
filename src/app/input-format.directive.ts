import {
  Directive,
  HostListener,
  Input,
  ElementRef,
  Renderer
} from "@angular/core";
import { renderNode } from "@angular/core/src/view/util";

@Directive({
  selector: "[appInputFormat]"
})
export class InputFormatDirective {
  constructor(private el: ElementRef, private renderer: Renderer) {}

  @Input() format: string;

  @HostListener("focus")
  onFocus() {
    console.log("on focus");
  }

  @HostListener("blur")
  onBlur() {
    console.log("blur");
    const name: string = this.el.nativeElement.value;
    if (this.format === "uppercase") {
      this.el.nativeElement.value = name.toUpperCase();
    } else {
      this.el.nativeElement.value = name.toLowerCase();
    }
  }
  @HostListener("mouseover")
  onmouseenter() {
    this.renderer.setElementStyle(this.el.nativeElement, "color", "red");
    this.renderer.setElementStyle(
      this.el.nativeElement,
      "text-transform",
      "uppercase"
    );
  }
  @HostListener("mouseleave")
  mouseleave() {
    this.renderer.setElementStyle(this.el.nativeElement, "color", "black");
    this.renderer.setElementStyle(
      this.el.nativeElement,
      "text-transform",
      "lowercase"
    );
  }
}
