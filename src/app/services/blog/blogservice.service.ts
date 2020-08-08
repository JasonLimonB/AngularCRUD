import { Injectable } from '@angular/core';
import { IBlog } from '../../interfaces/iblog';

@Injectable({
  providedIn: 'root'
})
export class BlogserviceService {

  constructor() { 
  }

  // Esto posiblemnte lo ponga en una base de datos
  getTitleBlog(){
    return this.dataBlog;
  }

  private dataBlog: IBlog[] = [
    {
      titulo: "Java",
      descripcion: "Uno de los primeros lenguajes que use para aprender a programar y en el cual es el que me concentro mas.",
      img: "https://qph.fs.quoracdn.net/main-qimg-c43424186b9c089b9aa1d64c7f1989c1.webp"
    },
    {
      titulo: "Spring boot",
      descripcion: "Framework de java en el cual estoy aprendiendo a dominar, gracias a su facilidad des manejo par servicios REST",
      img: "https://www.armadilloamarillo.com/wp-content/uploads/course-image.png"
    },
    {
      titulo: "Angular",
      descripcion: "Ya que he trabajado mas con javascript en mi carrera profesional me gusta mucho el uso de este framework pero tambie uso React y Vue",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1024px-Angular_full_color_logo.svg.png"
    },
    {
      titulo: "Python",
      descripcion: "Apesar de que mi primer lenguaje de programacion fue C y Visual Basic he preferido el aprender este lenguaje por motivo de.",
      img: "https://compueducacion.mx/wp-content/uploads/2019/11/camiseta-unisex-python-logo-personalizada-pessoal-D_NQ_NP_669467-MLB31742027058_082019-F.jpg"
    }
  ];

}
