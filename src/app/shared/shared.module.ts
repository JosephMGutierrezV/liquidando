import { QuestionComponent } from './question/question.component';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { PGridComponent } from './p-grid/p-grid.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { TimeLineComponent } from './time-line/time-line.component';
import { TimelineModule } from 'primeng/timeline';
import { StepsLiquideComponent } from './steps-liquide/steps-liquide.component';
import { PChartLineComponent } from './p-chart-line/p-chart-line.component';
import { ChartModule } from 'primeng/chart';
import { IndicatorComponent } from './indicator/indicator.component';
import { NewsComponent } from './news/news.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragDropFileUploadComponent } from './drag-drop-file-upload/drag-drop-file-upload.component';
import { FileUploadModule } from 'primeng/fileupload';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import { PTableBasicComponent } from './p-table-basic/p-table-basic.component';

@NgModule({
  declarations: [
    PGridComponent,
    QuestionComponent,
    NavbarComponent,
    SidebarComponent,
    TimeLineComponent,
    StepsLiquideComponent,
    PChartLineComponent,
    IndicatorComponent,
    NewsComponent,
    DatePickerComponent,
    DragDropFileUploadComponent,
    PTableBasicComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    NgbCollapseModule,
    TimelineModule,
    ChartModule,
    CalendarModule,
    FormsModule,
    FileUploadModule,
    HttpClientModule,
    TableModule,
    CheckboxModule,
  ],
  exports: [
    PGridComponent,
    QuestionComponent,
    NavbarComponent,
    SidebarComponent,
    TimeLineComponent,
    StepsLiquideComponent,
    PChartLineComponent,
    IndicatorComponent,
    NewsComponent,
    DatePickerComponent,
    DragDropFileUploadComponent,
    PTableBasicComponent,
  ],
})
export class SharedModule {}
