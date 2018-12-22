var AppErrorHandler = /** @class */ (function () {
    function AppErrorHandler() {
    }
    AppErrorHandler.prototype.handleError = function (error) {
        if (error) {
            console.log("not found errors");
        }
        else {
            console.log("App error", error);
        }
    };
    return AppErrorHandler;
}());
export { AppErrorHandler };
//# sourceMappingURL=app-error-handler.js.map