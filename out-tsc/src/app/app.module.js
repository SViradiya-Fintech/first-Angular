import * as tslib_1 from "tslib";
import { AppErrorHandler } from "./posts/app-error-handler";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule, ErrorHandler } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CoursesComponent } from "./courses/courses.component";
import { FavouriteComponent } from "./favourite/favourite.component";
import { AngularFontAwesomeModule } from "angular-font-awesome";
import { PanelComponent } from "./panel/panel.component";
import { InputFormatDirective } from "./input-format.directive";
import { ValidateEmailDirective } from "./validate-email.directive";
import { ContactFormComponent } from "./contact-form/contact-form.component";
import { SignupFormComponent } from "./signup-form/signup-form.component";
import { FormArraysExampleComponent } from "./form-arrays-example/form-arrays-example.component";
import { PostsComponent } from "./posts/posts.component";
import { PostService } from "./services/post.service";
import { CoursesService } from "./services/course.service";
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AppComponent,
                CoursesComponent,
                FavouriteComponent,
                PanelComponent,
                InputFormatDirective,
                ValidateEmailDirective,
                ContactFormComponent,
                SignupFormComponent,
                FormArraysExampleComponent,
                PostsComponent
            ],
            imports: [
                BrowserModule,
                AppRoutingModule,
                FormsModule,
                AngularFontAwesomeModule,
                ReactiveFormsModule,
                HttpClientModule
            ],
            providers: [
                CoursesService,
                PostService,
                { provide: ErrorHandler, useClass: AppErrorHandler }
            ],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map