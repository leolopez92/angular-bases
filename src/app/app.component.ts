import { Component } from "@angular/core";
import { CounterComponent } from "./counter/components/counter/counter.component";
import { HeroComponent } from "./heroes/hero/hero.component";
import { ListComponent } from "./heroes/list/list.component"

@Component({
  selector: 'app-root',
  standalone: true,
  imports:[CounterComponent, HeroComponent, ListComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  public title: string = 'Hola Mundo';
  public counter: number = 10;

  increaseBy( value:number ):void {
    this.counter += value;
  }

  resetCounter( value:number ):void {
    this.counter = 10;
    
  }
}
