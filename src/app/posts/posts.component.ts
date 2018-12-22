import { PostService } from "./../services/post.service";
import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"]
})
export class PostsComponent implements OnInit {
  constructor(private postservice: PostService) {}
  form = new FormGroup({});
  posts: any;
  ngOnInit() {
    console.log("sdfsd");
    this.postservice.getAll().subscribe(posts => {
      console.log(posts);
      this.posts = posts;
    });
  }
  AddTopics(input: HTMLInputElement) {
    const topic = { title: input.value };
    this.postservice.Create(topic).subscribe(newPost => {
      topic["id"] = newPost["id"];
      this.posts.splice(0, 0, topic);
    });
    input.value = "";
  }
  UpdateTopic(post) {
    post.body = "my test";
    this.postservice.Update(post).subscribe(updatedPost => {
      console.log(updatedPost);
    });
  }
  RemovePost(post) {
    this.postservice.Remove(post["id"]).subscribe(() => {
      const index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    });
  }
}
