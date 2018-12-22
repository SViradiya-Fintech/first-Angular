import { HttpClient } from "@angular/common/http";
import "rxjs/add/observable/throw";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";
import { NotFoundError } from "../posts/not-found-error";
import { AppErrors } from "./../posts/app-errors";

export class DataService {
  constructor(private http: HttpClient, private url: string) {}
  posts: any;

  getAll() {
    console.log("get all called");
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
