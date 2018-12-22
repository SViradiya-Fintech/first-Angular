import * as tslib_1 from "tslib";
import { DataService } from "./data-service";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
var PostService = /** @class */ (function (_super) {
    tslib_1.__extends(PostService, _super);
    function PostService(http) {
        return _super.call(this, http, "https://jsonplaceholder.typicode.com/posts") || this;
    }
    PostService = tslib_1.__decorate([
        Injectable({
            providedIn: "root"
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], PostService);
    return PostService;
}(DataService));
export { PostService };
//# sourceMappingURL=post.service.js.map