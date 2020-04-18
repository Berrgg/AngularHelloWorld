import { Component } from '@angular/core';

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

  onFavoriteChange(isFavorite){
      console.log("Favorite changed: ", isFavorite);
  }
}
