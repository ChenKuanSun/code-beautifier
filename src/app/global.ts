import { Injectable } from '@angular/core';
import * as beautify from 'js-beautify';
import { _ } from 'underscore';
import sqlFormatter from 'sql-formatter';

@Injectable({
  providedIn: 'root'
})
export class Global {
  beautify: any;
  underscore: any;
  sqlFormatter: any;
  data: any = {
    html: '<!doctype html><html lang="en"><head> <meta charset="utf-8"><title>Angular Beautifier</title> <base href="/"> <meta name="viewport" content="width=device-width, initial-scale=1"><link rel="icon" type="image/x-icon" href="favicon.ico"></head><body> <app-root></app-root></body></html>',
    css: 'body{font-family:\'Roboto\' !important;margin:0px;}.table{width:100%;margin-bottom:1rem;color:#212529;}.table td,.table th{padding:.75rem;vertical-align:top;border-top:1px solid #dee2e6;}.title{height:60px;}',
    js: 'function findSequence(goal) {function find(start, history) {if (start == goal)return history;else if (start > goal)return null;else return find(start + 5, "(" + history + " + 5)") || find(start * 3, "(" + history + " * 3)");}return find(1, "1");}',
    sql: 'INSERT INTO employees (employee_id,  first_name,last_name date_of_birth,phone_number, junk)SELECT GENERATE_SERIES, initcap(lower(random_string(2, 8))), initcap(lower(random_string(2, 8))), CURRENT_DATE - CAST(floor(random() * 365 * 10 + 40 * 365) AS NUMERIC) * INTERVAL \'1 DAY\', CAST(floor(random() * 9000 + 1000) AS NUMERIC), \'junk\' FROM GENERATE_SERIES(1, 1000);',
    json: '{"Array":[1,2,3],"Boolean":true,"Null":null,"Number":123,"Object":{"a":"b","c":"d"},"String":"Hello World"}'
  };

  constructor() {
    this.beautify = beautify;
    this.underscore = _;
    this.sqlFormatter = sqlFormatter.format;
  }
}
