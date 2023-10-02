import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  movies = [
    { 
      id: 1, 
      title: 'Interstellar', 
      description: 'Un grupo de exploradores viaja a través de un agujero de gusano en el espacio en busca de un nuevo hogar para la humanidad.', 
      imageUrl: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg' 
    },
    { 
      id: 2, 
      title: 'Inception', 
      description: 'Un ladrón profesional con la capacidad de entrar en los sueños de las personas y robar sus secretos.', 
      imageUrl: 'https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg' 
    },
    { 
      id: 3, 
      title: 'The Dark Knight', 
      description: 'Batman se enfrenta al Joker, un criminal que busca crear el caos en Gotham.', 
      imageUrl: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg' 
    },
    { 
      id: 4, 
      title: 'Forrest Gump', 
      description: 'La historia de la vida de un hombre con discapacidades intelectuales y su viaje a través de momentos decisivos del siglo 20 en los EE. UU.', 
      imageUrl: 'https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg' 
    },
    { 
      id: 5, 
      title: 'Jurassic Park', 
      description: 'Un parque temático sufre un gran fallo de seguridad cuando un empleado desactiva el sistema de seguridad y los dinosaurios escapan.', 
      imageUrl: 'https://m.media-amazon.com/images/I/811tl3bIQzL._AC_UF894,1000_QL80_.jpg' 
    },
    { 
      id: 6, 
      title: 'Avatar', 
      description: 'Un ex-marine se encuentra inmerso en hostilidades en un planeta lleno de extraterrestres y exóticas formas de vida.', 
      imageUrl: 'https://image.tmdb.org/t/p/w500/6EiRUJpuoeQPghrs3YNktfnqOVh.jpg' 
    }
];
}