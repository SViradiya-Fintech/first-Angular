import { GithubProfileComponent } from "./github-profile/github-profile.component";
import { PostsComponent } from "./posts/posts.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { GithubFollowersComponent } from "./github-followers/github-followers.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "posts", component: PostsComponent },
  { path: "followers", component: GithubFollowersComponent },
  { path: "followers/:username", component: GithubProfileComponent },

  { path: "**", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
