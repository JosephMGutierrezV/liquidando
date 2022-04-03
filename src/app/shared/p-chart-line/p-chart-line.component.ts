import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-p-chart-line',
  templateUrl: './p-chart-line.component.html',
  styleUrls: ['./p-chart-line.component.scss'],
})
export class PChartLineComponent implements OnInit {
  public basicData: any;

  public basicOptions: any;

  constructor() {}

  ngOnInit(): void {
    this.basicData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: '',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: '#42A5F5',
          tension: 0.4,
        },
      ],
    };
    this.basicOptions = {
      plugins: {
        legend: {
          labels: {
            color: '#495057',
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: '#495057',
          },
          grid: {
            color: '#ebedef',
          },
        },
        y: {
          ticks: {
            color: '#495057',
          },
          grid: {
            color: '#ebedef',
          },
        },
      },
    };
  }
}
