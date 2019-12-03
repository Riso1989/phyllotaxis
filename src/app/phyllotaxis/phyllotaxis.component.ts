import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-phyllotaxis',
  templateUrl: './phyllotaxis.component.html',
  styleUrls: ['./phyllotaxis.component.css']
})
export class PhyllotaxisComponent implements OnInit {
  @ViewChild('canvasEl', {read: ElementRef}) canvasEl: ElementRef;

  private n = 0;
  private c = 9;
  private theta = (360 / (((1 + Math.sqrt(5)) / 2) + 1));
  private x = 0;
  private y = 0;
  private hu = 0;
  /** Canvas 2d context */
  private context: CanvasRenderingContext2D;

  constructor() {
    setInterval(() => this.drawPhylloTaxis(), 0);
  }

  ngOnInit(): void {
    this.context = (this.canvasEl.nativeElement as HTMLCanvasElement).getContext('2d');
    this.drawPhylloTaxis();
  }

  drawPhylloTaxis() {
    const pi = Math.PI;

    const ang = this.n * this.theta;
    const rad = this.c * Math.sqrt(this.n);

    this.x = rad * Math.cos((ang * pi / 180)) + ((this.canvasEl.nativeElement as HTMLCanvasElement).width / 2);
    this.y = rad * Math.sin((ang * pi / 180)) + ((this.canvasEl.nativeElement as HTMLCanvasElement).height / 2);
    // Change color here
    this.hu = (this.n / 10) % 256;


    this.context.fillStyle = 'rgb(' + ang % 180 + ',' + rad % 180 + ',' + this.n % 255 + ')';
    this.context.beginPath();
    this.context.arc(this.x, this.y, 5.6, 0, Math.PI * 2, true);
    this.context.fill();

    if (this.hu < 250) {
      this.n++;
    }
  }
}
