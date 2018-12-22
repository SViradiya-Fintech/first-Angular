import * as tslib_1 from "tslib";
import { PostService } from "./../services/post.service";
import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
var PostsComponent = /** @class */ (function () {
    function PostsComponent(postservice) {
        this.postservice = postservice;
        this.form = new FormGroup({});
    }
    PostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.postservice.getAll().subscribe(function (data) {
            _this.posts = data.json();
        });
    };
    PostsComponent.prototype.AddTopics = function (input) {
        var _this = this;
        var topic = { title: input.value };
        this.postservice.Create(topic).subscribe(function (response) {
            topic["id"] = response["id"];
            _this.posts.splice(0, 0, topic);
        });
        input.value = "";
    };
    PostsComponent.prototype.UpdateTopic = function (post) {
        post.body = "my test";
        this.postservice.Update(post).subscribe(function (response) {
            console.log(response);
        });
    };
    PostsComponent.prototype.RemovePost = function (post) {
        var _this = this;
        this.postservice.Remove(post["id"]).subscribe(function (response) {
            var index = _this.posts.indexOf(post);
            _this.posts.splice(index, 1);
        });
    };
    PostsComponent = tslib_1.__decorate([
        Component({
            selector: "app-posts",
            templateUrl: "./posts.component.html",
            styleUrls: ["./posts.component.css"]
        }),
        tslib_1.__metadata("design:paramtypes", [PostService])
    ], PostsComponent);
    return PostsComponent;
}());
export { PostsComponent };
//# sourceMappingURL=posts.component.js.map