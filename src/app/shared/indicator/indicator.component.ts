import { Component, OnInit, Input } from '@angular/core';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-indicator',
  templateUrl: './indicator.component.html',
  styleUrls: ['./indicator.component.scss'],
})
export class IndicatorComponent implements OnInit {
  public faDollarSign = faDollarSign;
  @Input() name: string = '';
  @Input() value: string = '';

  constructor() {}

  ngOnInit(): void {}
}
