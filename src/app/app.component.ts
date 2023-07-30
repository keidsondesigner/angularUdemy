import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { CursoService } from './services/curso.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angularUdemy';

  courses$!: Observable<any>;

  constructor( private _coursesService: CursoService ){};

  ngOnInit(): void {
    this.courses$ = this._coursesService.getAllCourses();
    // this._coursesService.getAllCourses().subscribe( dados => {
    //   console.log('retorno funçao', dados);
    // });
  }
}
