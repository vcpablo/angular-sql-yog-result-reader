import { Component, OnInit, Output, EventEmitter } from '@angular/core';

/**
 * 
 * 
 * SQLYog Schema Synchronization Output example
 Query: select * from person
 Execution: 10s
 Transfer: 10s
 Total: 50s

 -----------------------------------------------------------
 Query: select * from person
 Execution: 10s
 Transfer: 10s
 Total: 50s
 This are warning(s):  warning #1
 -----------------------------------------------------------
 Error Code: 1040
 Query: select * from person
 Execution: 10s
 Transfer: 10s
 Total: 50s
 *
 */

@Component({
  selector: 'app-sql-input',
  templateUrl: './sql-input.component.html',
  styleUrls: ['./sql-input.component.scss']
})
export class SqlInputComponent implements OnInit {
  @Output() output = new EventEmitter<Array<any>>();
  @Output() cleared = new EventEmitter();
  
  input: string = '';
  results: Array<any> = [];
  
  constructor() { }
  
  ngOnInit() {
  }
  
  process() {
    const input = this.input.trim();
    
    if(!input) return;
    
    let query, rows, executionTime, transferTime, totalTime, error, results = [];
    
    input.split('-----------------------------------------------------------').map(line => {
      let result: any = {
        isError: (line.indexOf('Error Code') !== -1),
        isWarning: (line.indexOf('warning(s)') !== -1),
      };
      
      result.isMessage = !result.isError && !result.isWarning && (line.indexOf('Query:') !== -1);
      
      var splitLine = line.split('\n').filter(function(contentLine) {
        return contentLine !== '';
      });
      
      splitLine.forEach((eachLine, index) => {
        // Query
        if (eachLine.trim().indexOf('Query') === 0) {
          result.query = eachLine;
        } else if (eachLine.trim().indexOf('Execution') === 0) {
          result.executionTime = eachLine;
        } else if (eachLine.trim().indexOf('Transfer') === 0) {
          result.transferTime = eachLine;
        } else if (eachLine.trim().indexOf('Total') === 0) {
          result.totalTime = eachLine;
        } else if (eachLine.trim().indexOf('Error') === 0) {
          result.error = eachLine + ' - ' + splitLine[index + 1];
        } else if (eachLine.trim().indexOf('row(s) affected') !== -1) {
          result.rows = eachLine;
        }
        
      });
      
      results.push(result);
    });
    
    this.output.emit(results);
  }

  clear() {
    this.input = '';
    this.cleared.emit();
  }
  
}
