import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { ApiserviceService } from '../apiservice.service';
import 'chartjs-adapter-moment'; 

@Component({
  selector: 'app-graph-hygrometrie',
  templateUrl: './graph-hygrometrie.component.html',
  styleUrls: ['./graph-hygrometrie.component.css']
})
export class GraphHygrometrieComponent implements OnInit {

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

  constructor(private service: ApiserviceService,private datepipe:DatePipe) { }

  ngOnInit(): void {
    this.chart = document.getElementById('hygrochart');
    Chart.register(...registerables);
    this.hygroChart();
  }

  hygroChart(){

    this.service.moyenneData3()
  .subscribe((resmoyenne)=>{
    this.result = resmoyenne;
    console.log(resmoyenne);


    this.balisedate = this.result.data.map((data: any) => data.date)
    this.balisetemp = this.result.data.map((data: any) => data.AVG_temp)

    this.balisedate = this.balisedate.map((element: any) => {
      var d = new Date(element);
      return `${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()}`;
    });

    console.log(this.balisedate);

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


    this.service.deviceData3(b)
    .subscribe((res)=>{
    this.result = res;
    console.log(res);

    this.balisetemp3 = this.result.data.map((data2: any) => data2.AVG_temp)


    this.service.deviceData3(e)
    .subscribe((res)=>{
    this.result = res;
    console.log(res);

    this.balisetemp6 = this.result.data.map((data2: any) => data2.AVG_temp)


    //show Chart data test01
    this.chart = new Chart('hygrochart', {
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
            borderColor: '#ff0000'
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
            label: e,
            data: this.balisetemp6,
            borderWidth: 3,
            fill: false,
            backgroundColor: 'rgba(93, 175, 89, 0.1)',
            borderColor: '#3e95cd'
          },
        ],
      },
      options: {
        scales: {
          xAxes: {
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
}
}
