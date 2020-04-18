import { Component, Input } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent {
    @Input('is-favorite') isFavorite: boolean;
    values = '';
    title: string;

    onClick(){
        this.isFavorite = !this.isFavorite;
    }

    onKey(event: any){
        this.values = event.target.value;
    }
}
