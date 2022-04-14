import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { DatePipe } from '@angular/common';


declare const $: any;

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit, AfterViewInit {
  Today = new Date();

  constructor(private service: ApiserviceService, public datepipe: DatePipe) { }

  ngAfterViewInit(): void {

    setTimeout(() => {
      $(document).ready(() => {
        // Setup - add a text input to each footer cell
        $('#LCC tfoot th').each(() => {
          var title = $(this).text();
          $(this).html('<input type="text" placeholder="Search ' + title + '" />');
        });

        // DataTable
        var table = $('#LCC').DataTable({

          pagingType: 'full_numbers',
          pageLength: 5,
          processing: true,
          lengthMenu: [5, 10, 25],
          order: [[1, "desc"]],

          initComplete: function () {
            // Apply the search
            this.api().columns().every(() => {
              var that = this;

              $('input', this.footer()).on('keyup change clear', () => {
                if (that.search() !== this.value) {
                  that
                    .search(this.value)
                    .draw();
                }
              });
            });
          }
        });
      });
    }, 100);
  }

  readData: any;

  ngOnInit(): void {
    this.getAllData();
  }

  deleteReadData(time: any, date: any) {

    console.log(time, date, 'deleteData==>')
    date = this.datepipe.transform(date, 'yyyy-MM-dd')
    console.log(time, date, 'date transform==>')

    this.service.deleteData(time, date).subscribe((res) => {
      console.log(res, 'deleteres==>');
      this.getAllData();

    });
  }

  //getdata
  getAllData() {
    this.service.getAllData().subscribe((res) => {
      console.log(res, "res==>");
      this.readData = res.data;
    });
  }


}
