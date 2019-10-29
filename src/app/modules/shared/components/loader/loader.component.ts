import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.sass']
})
export class LoaderComponent implements OnInit {

  public color: string;
  public mode: string;
  public value: number;

  public counter: number;

  constructor(
    private loaderService: LoaderService
  ) {
    this.color = 'primary';
    this.mode = 'indeterminate';
    this.value = 50;

    this.loaderService.counter$.subscribe(count => {
      this.counter = count;
    });
  }

  ngOnInit() {
  }

}
