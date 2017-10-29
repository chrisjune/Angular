import { FollowersService } from '../../services/followers.service';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'git-follower',
  templateUrl: './git-follower.component.html',
  styleUrls: ['./git-follower.component.css']
})
export class GitFollowerComponent implements OnInit {
  followers: any[];
  constructor(private service: FollowersService) { }

  ngOnInit() {
    console.log('start');
    this.service.getAll()
      .subscribe(
        (followers) => {
          this.followers = followers;
        }
      );
  }

}
