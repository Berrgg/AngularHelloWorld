import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent {
    @Input('isfavorite') isSelected: boolean;
    @Output() change=new EventEmitter;
    values = '';
    title: string;

    onClick(){
        this.isSelected = !this.isSelected;
        this.change.emit();
    }

    onKey(event: any){
        this.values = event.target.value;
    }
}
