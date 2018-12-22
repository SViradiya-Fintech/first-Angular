import { async, TestBed } from '@angular/core/testing';
import { FormArraysExampleComponent } from './form-arrays-example.component';
describe('FormArraysExampleComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [FormArraysExampleComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(FormArraysExampleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=form-arrays-example.component.spec.js.map