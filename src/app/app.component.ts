import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
//   title = 'hello-world';

  post = {
      title: "TITLE",
      isFavorite: true
  }

  onFavoriteChange(eventArgs: FavoriteChangedEventArgs){
      console.log("Favorite changed: ", eventArgs);
  }

  tweet={
      body: "here is a body of the tweet",
      isLiked: false,
      likesCount: 5
  }
}
