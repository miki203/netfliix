import {AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private elementRef: ElementRef) {

  }

  ngOnInit(): void {
  }
  // ngAfterViewInit(): void {
  //   this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'black';
  // }
}

