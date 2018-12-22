import { PostService } from "./../services/post.service";
import { Observable } from "rxjs/Observable";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, ParamMap } from "@angular/router";
import "rxjs/add/observable/combineLatest";
import "rxjs/add/operator/map";
import "rxjs/add/operator/switchMap";

@Component({
  selector: "app-github-profile",
  templateUrl: "./github-profile.component.html",
  styleUrls: ["./github-profile.component.css"]
})
export class GithubProfileComponent implements OnInit {

  followers: any;
  constructor(private Activeroute: ActivatedRoute, private route: Router, private service: PostService) { }
  submit() {

    this.route.navigate(["/followers", 2], {
      queryParams: { page: 1, orderBy: "desc" }
    });

  }
  ngOnInit() {
    // this.Activeroute.paramMap
    //   .subscribe(params => {
    //     console.log(params);
    //     console.log(params.get("username"));
    //   });

    // this.Activeroute.queryParamMap.subscribe(params => console.log("query params", params));

    Observable.combineLatest([this.Activeroute.paramMap, this.Activeroute.queryParamMap])
      .map(combined => {
        console.log("asds");
        const username = combined[0].get("username");
        const page = combined[1].get("page");
        // this.service.getAll();
        const data = { username: username, page: page };
        return data;
      })
      .subscribe(followers => {
        this.followers = followers;
        console.log("followers", followers);
      });
  }

}
