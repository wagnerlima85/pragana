import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as emailjs from 'emailjs-com';
import { ContactService } from '../contact.service';
@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {
	success:boolean;
	error:boolean;
	name:string;
	email:string;
	message:string;
	constructor(public contactService:ContactService) {	}									

 	ngOnInit() {
		 this.name = this.contactService.getDefaultName();
		 this.email = this.contactService.getDefaultEmail();
		 this.message = this.contactService.getDefaultMessage();
	 }

	  onSubmit(form:NgForm):void{

		  this.email = form.value.email;
		  this.name = form.value.name;
		  this.message = form.value.message;

		  var template_params = {
			"reply_to": this.email,
			"from_name": this.name,
			"to_name": "Pragana",
			"message_html": this.message
		 }

		  console.log(template_params);
		  emailjs.send("service_89wyjy9", "template_eSEtp5Zn", template_params,"user_PiFkWl57MxRCiUhQnrj1m")
			  .then((response) => {
				  this.success = true;
			  setTimeout(()=> {
				  this.success = false;
			  }, 3000);
			  form.resetForm();
			  console.log('SUCCESS!', response.status, response.text);
			  }, (err) => {
				  this.error = true;
				  this.error = true;
		  setTimeout(()=> {
			  this.error = false;
		  }, 3000);
			  console.log('FAILED...', err);
			  });
		  
  	}
    
  	getFormGroupClass(isValid: boolean, isPristine:boolean){
        return {'form-group':true,
                'has-danger':!isValid && !isPristine,
                'has-success': isValid && !isPristine
                }
    }

    getFormControlClass(isValid: boolean, isPristine:boolean){
        return {'form-control':true,
                'form-control-danger':!isValid && !isPristine,
                'form-control-success': isValid && !isPristine
                }
    }


}
