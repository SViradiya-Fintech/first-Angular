import { TestBed } from '@angular/core/testing';
import { CoursesService } from './course.service';
describe('CourseService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(CoursesService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=course.service.spec.js.map