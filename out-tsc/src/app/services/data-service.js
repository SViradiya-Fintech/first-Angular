import * as tslib_1 from "tslib";
import { AppErrors } from "./../posts/app-errors";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";
import { NotFoundError } from "../posts/not-found-error";
var DataService = /** @class */ (function () {
    function DataService(http, url) {
        this.http = http;
        this.url = url;
    }
    DataService.prototype.getAll = function () {
        return this.http
            .get(this.url)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.Create = function (resource) {
        return this.http
            .post(this.url, JSON.stringify({ post: resource }))
            .catch(this.handleError);
    };
    DataService.prototype.Update = function (resource) {
        return this.http
            .post(this.url, JSON.stringify({ post: resource }))
            .catch(this.handleError);
    };
    DataService.prototype.Remove = function (id) {
        return this.http.delete(this.url + "/" + id).catch(this.handleError);
    };
    DataService.prototype.handleError = function (error) {
        if (error.status === 404) {
            return Observable.throw(new NotFoundError());
        }
        return Observable.throw(new AppErrors(error));
    };
    DataService = tslib_1.__decorate([
        Injectable({
            providedIn: "root"
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient, String])
    ], DataService);
    return DataService;
}());
export { DataService };
//# sourceMappingURL=data-service.js.map