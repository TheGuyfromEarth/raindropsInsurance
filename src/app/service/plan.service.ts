import {Injectable} from "@angular/core";
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import { environment} from '../../environments/environment';

import { Plan } from "../models/plan.model";

@Injectable()
export class PlanService {
    constructor(private http: HttpClient){}

    public getPlan(): Observable<Plan[]> {
        return this.http.get<Plan[]>(environment.url + '/plans');
    }
}