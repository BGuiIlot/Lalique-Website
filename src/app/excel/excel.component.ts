import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { ReadComponent } from '../read/read.component';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-excel',
  templateUrl: './excel.component.html',
  styleUrls: ['./excel.component.css']
})
export class ExcelComponent implements OnInit {

  fileName= 'ExcelSheet.csv';
  constructor(private service:ApiserviceService) { }

  readData:any;
  result:any;
  balisedevice:any;

  ngOnInit(): void {
    
    this.getAllData();
  }
  

  getAllData()
    {
      this.service.getAllData().subscribe((res)=>{
        console.log(res,"res==>");
        this.readData = res.data;
      });
    }

    /*exportexcel(): void
    {
       pass here the table id 
      let element = document.getElementById('Alldata');
      const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

      /* generate workbook and add the worksheet 
      const wb: XLSX.WorkBook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

      /* save to file 
      XLSX.writeFile(wb, this.fileName)
    }*/


    exportexcelonclint(){
      
    }
  }

  