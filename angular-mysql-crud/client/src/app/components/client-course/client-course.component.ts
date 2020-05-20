import { Component, OnInit } from '@angular/core';
import { TlacuServices } from '../../services/index';
import {Router} from '@angular/router';
import {User} from '../../models';


@Component({
  selector: 'app-client-course',
  templateUrl: './client-course.component.html',
  styleUrls: ['./client-course.component.css']
})
export class ClientCourseComponent implements OnInit {

  idUser;
  userCourse;

  constructor(private tlacu: TlacuServices, private router: Router) {
    this.idUser     = (this.tlacu.manager.user != null) ? this.tlacu.manager.user.idUser : null;
    this.userCourse = (this.idUser != null) ? this.tlacu.manager.user.readUserCourse : null;
    console.log(this.userCourse);
    console.log(this.idUser);
  }

  ngOnInit(): void {
  }

  confirmar() {
    // el usuario finalizó el curso
    const user = this.tlacu.manager.user; //: User = new User(this.tlacu.manager.user);
    user.readUserCourse = 1;
    this.tlacu.user.updateUser(this.idUser, user).subscribe( res => {
      console.log(res);
      if (res.success) {
        this.tlacu.manager.user.readUserCourse = 1;
        this.tlacu.manager.updateUserAddress.next(1);
        alert('Gracias por informarte y mantener esta comunidad segura. ¡Ahora a comprar!');
      }
    });
  }
}
