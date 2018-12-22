import "rxjs/add/operator/map";
import { AppErrors } from "./../posts/app-errors";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";

import { NotFoundError } from "../posts/not-found-error";

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(private http: HttpClient, private url: string) {}
  posts: any;

  getAll() {
    return this.http
      .get(this.url)
      .map(res => {
        return res;
      })
      .catch(this.handleError);
  }
  Create(resource) {
    return this.http
      .post(this.url, JSON.stringify({ post: resource }))
      .map(res => {
        return res;
      })
      .catch(this.handleError);
  }

  Update(resource) {
    return this.http
      .post(this.url, JSON.stringify({ post: resource }))
      .map(res => {
        return res;
      })
      .catch(this.handleError);
  }
  Remove(id: number) {
    return this.http.delete(this.url + "/" + id)
    .map(res => {
      return res;
    })
      .catch(this.handleError);
  }
  private handleError(error: Response) {
    if (error.status === 404) {
      return Observable.throw(new NotFoundError());
    }
    return Observable.throw(new AppErrors(error));
  }
}
