import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'pm-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent implements OnInit {
  @ViewChild('chartCanvas', { static: true }) chartCanvas!: ElementRef;
  people: number = 100;
  text: string = `This is a chart that shows ${this.people} persons hair color`;
  ngOnInit() {
    this.createChart();
  }

  createChart() {
    const ctx = this.chartCanvas.nativeElement.getContext('2d');
    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Blonde Hair', 'Black Hair', 'Brown Hair'],
        datasets: [
          {
            data: [45, 30, 25],
            backgroundColor: ['#FBF6D9', 'black', 'brown'],
          },
        ],
      },
    });
  }
}
