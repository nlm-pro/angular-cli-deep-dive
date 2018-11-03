import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';
import { range } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'the "Deep Dive into Angular CLI" workshop project';

  counter: number[] = [];

  ngOnInit() {
    // #region "These are not the bugs you are looking for" ;)
    // Yeah, it's bad, but useful for this excercice.
    //
    //                o
    //                o  o
    //                o o o
    //              o
    //            o    ______          ______
    //            _ *o(_||___)________/___
    //          O(_)(       o  ______/    \
    //          > ^  `/------o-'            \     Go your way, diver!
    //        D|_|___/
    //

    range(1, 10)
      .pipe(filter(x => x % 2 === 0))
      .subscribe(x => {
        this.counter.push(x);
      });

    // #endregion
  }
}
