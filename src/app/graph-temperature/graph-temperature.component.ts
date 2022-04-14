import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-graph-temperature',
  templateUrl: './graph-temperature.component.html',
  styleUrls: ['./graph-temperature.component.css']
})
export class GraphTemperatureComponent implements OnInit {

  result: any;
  balisedate: any = [];
  balisedate2: any = [];
  dateform: any = [];
  time: any;
  balisedevice: any;
  balisetemp: any;
  balisedevice2: any;
  balisetemp2: any;
  balisetemp3: any;
  balisetemp4: any;
  balisetemp5: any;
  balisetemp6: any;
  balisetemp7: any;
  type: any;
  datereborn:any;
  chart: any = [];
  moyenneTempByDay : any;

  constructor(private service: ApiserviceService,private datepipe:DatePipe) {
  }

  ngOnInit(): void {
    this.chart = document.getElementById('typeschart');
    Chart.register(...registerables);
    this.typeChart();
}

typeChart(): void {
  
  this.service.moyenneData1()
  .subscribe((resmoyenne)=>{
    this.result = resmoyenne;
    console.log(resmoyenne);


    this.balisedate = this.result.data.map((data: any) => data.date)
    this.balisetemp = this.result.data.map((data: any) => data.AVG_temp)

    this.balisedate = this.balisedate.map((element: any) => {
      var d = new Date(element);
      return `${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()}`;
    });

    this.service.deviceName()
  .subscribe((resname)=>{
    this.result = resname;
    console.log(resname);

    this.balisedevice = this.result.data.map((data: any) => data.device)
    const [a,b,c,d,e,f,g] = this.balisedevice;
    console.log(a);



 
    //this.balisetemp = this.result.data.map((data: any) => data.temperature)
    //this.balisedevice = this.result.data.map((data: any) => data.device)
    //this.balisedate = this.result.data.map((data: any) => data.date)

    this.service.deviceData1(a)
    .subscribe((res)=>{
    this.result = res;
    console.log(res);

    this.balisetemp2 = this.result.data.map((data2: any) => data2.AVG_temp)

    this.service.deviceData1(b)
    .subscribe((res)=>{
    this.result = res;
    console.log(res);

    this.balisetemp3 = this.result.data.map((data2: any) => data2.AVG_temp)

    this.service.deviceData1(c)
    .subscribe((res)=>{
    this.result = res;
    console.log(res);

    this.balisetemp4 = this.result.data.map((data2: any) => data2.AVG_temp)

    this.service.deviceData1(d)
    .subscribe((res)=>{
    this.result = res;
    console.log(res);

    this.balisetemp5 = this.result.data.map((data2: any) => data2.AVG_temp)

    this.service.deviceData1(e)
    .subscribe((res)=>{
    this.result = res;
    console.log(res);

    this.balisetemp6 = this.result.data.map((data2: any) => data2.AVG_temp)

    this.service.deviceData1(f)
    .subscribe((res)=>{
    this.result = res;
    console.log(res);

    this.balisetemp7 = this.result.data.map((data2: any) => data2.AVG_temp)

    /*

    
    this.balisedevice2 = this.result.data.map((data2: any) => data2.device)
    //this.balisedate2 = this.result.data.map((data2: any) => data2.date)

    //this.balisedate2 = this.balisedate2.map((element: any) => {
      //var d = new Date(element);
      //return `${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()}`;
    //}); */

    console.log(this.balisetemp,this.balisedevice,this.balisedate);


    //show Chart data test01
    this.chart = new Chart('typeschart', {
      type: 'line',
      data: {
        labels: this.balisedate,
        datasets: [
          {
            label: 'Temperatures',
            data: this.balisetemp,
            borderWidth: 3,
            fill: false,
            backgroundColor: 'rgba(93, 175, 89, 0.1)',
            borderColor: '#3e95cd'
          },
          {
            label: a,
            data: this.balisetemp2,
            borderWidth: 3,
            fill: false,
            backgroundColor: 'rgba(93, 175, 89, 0.1)',
            borderColor: '#3e95cd'
          },
          {
            label: b,
            data: this.balisetemp3,
            borderWidth: 3,
            fill: false,
            backgroundColor: 'rgba(93, 175, 89, 0.1)',
            borderColor: '#3e95cd'
          },
          {
            label: c,
            data: this.balisetemp4,
            borderWidth: 3,
            fill: false,
            backgroundColor: 'rgba(93, 175, 89, 0.1)',
            borderColor: '#3e95cd'
          },
          {
            label: d,
            data: this.balisetemp5,
            borderWidth: 3,
            fill: false,
            backgroundColor: 'rgba(93, 175, 89, 0.1)',
            borderColor: '#3e95cd'
          },
          {
            label: e,
            data: this.balisetemp6,
            borderWidth: 3,
            fill: false,
            backgroundColor: 'rgba(93, 175, 89, 0.1)',
            borderColor: '#3e95cd'
          },
          {
            label: f,
            data: this.balisetemp7,
            borderWidth: 3,
            fill: false,
            backgroundColor: 'rgba(93, 175, 89, 0.1)',
            borderColor: '#3e95cd'
          },
          {
            label: g,
            data: this.balisetemp2,
            borderWidth: 3,
            fill: false,
            backgroundColor: 'rgba(93, 175, 89, 0.1)',
            borderColor: '#3e95cd'
          },
        ],
      },
      options: {
        scales: {
          x: {
            beginAtZero : true
          },
          y : {
            beginAtZero : true
          },
        }
      }
    });
  });
});
}); 
});
});
});
});
  });
}
}




