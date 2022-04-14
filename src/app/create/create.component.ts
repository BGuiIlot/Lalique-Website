import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private service:ApiserviceService,public datepipe:DatePipe,private router:ActivatedRoute) { }

  errormsg:any;
  sucessmsg:any;
  getparamtime:any;
  getparamdate:any;

  ngOnInit(): void {
    console.log(this.router.snapshot.paramMap.get('time'),'getTime');
    console.log(this.router.snapshot.paramMap.get('date'),'getDate');
    this.getparamtime = this.router.snapshot.paramMap.get('time');
    this.getparamdate = this.router.snapshot.paramMap.get('date');
  }

  dataForm = new FormGroup({
    'date':new FormControl('',Validators.required),
    'time':new FormControl('',Validators.required),
    'device':new FormControl('',Validators.required),
    'temperature':new FormControl('',Validators.required),
    'type':new FormControl('',Validators.required)
  });

  dataSubmit()
  {
    if(this.dataForm.valid)
    {
      console.log(this.dataForm.value);
      //this.dataForm.value.date = this.datepipe.transform(this.dataForm.value.date, 'yyyy-MM-dd');
      //console.log(this.dataForm.value.date);
      this.service.createData(this.dataForm.value).subscribe((res)=>{
      console.log(res,'res==>');
      this.dataForm.reset();
      this.sucessmsg = res.message;

      });
    }
    else
    {
      this.errormsg = 'all fied is required !';
    }
  }

}
