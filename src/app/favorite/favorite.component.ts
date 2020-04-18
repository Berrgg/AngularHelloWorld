import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent {
    @Input('isfavorite') isSelected: boolean;
    @Output('change') click = new EventEmitter;
    values = '';
    title: string;

    onClick(){
        this.isSelected = !this.isSelected;
        this.click.emit({newValue: this.isSelected});
    }

    onKey(event: any){
        this.values = event.target.value;
    }
}

export interface FavoriteChangedEventArgs{
    newValue: boolean
}
