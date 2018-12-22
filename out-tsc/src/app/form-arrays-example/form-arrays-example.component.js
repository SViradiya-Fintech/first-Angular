import * as tslib_1 from "tslib";
import { FormGroup, FormArray, FormControl } from "@angular/forms";
import { Component } from "@angular/core";
var FormArraysExampleComponent = /** @class */ (function () {
    function FormArraysExampleComponent() {
        this.form = new FormGroup({
            topics: new FormArray([])
        });
    }
    FormArraysExampleComponent.prototype.ngOnInit = function () { };
    Object.defineProperty(FormArraysExampleComponent.prototype, "topics", {
        get: function () {
            return this.form.get("topics");
        },
        enumerable: true,
        configurable: true
    });
    FormArraysExampleComponent.prototype.addTopics = function (topic) {
        if (topic.value === "") {
            return false;
        }
        this.topics.push(new FormControl(topic.value));
        topic.value = "";
    };
    FormArraysExampleComponent.prototype.removeSelectedTopic = function (topic) {
        var index = this.topics.controls.indexOf(topic);
        this.topics.removeAt(index);
    };
    FormArraysExampleComponent = tslib_1.__decorate([
        Component({
            selector: "app-form-arrays-example",
            templateUrl: "./form-arrays-example.component.html",
            styleUrls: ["./form-arrays-example.component.css"]
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], FormArraysExampleComponent);
    return FormArraysExampleComponent;
}());
export { FormArraysExampleComponent };
//# sourceMappingURL=form-arrays-example.component.js.map