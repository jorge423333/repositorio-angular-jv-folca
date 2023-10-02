import { Component } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
  movies = [
    { 
      id: 1, 
      title: 'Película 1', 
      description: 'Descripción 1', 
      imageUrl: 'https://via.placeholder.com/150?text=Película+1' 
    },
    { 
      id: 2, 
      title: 'Película 2', 
      description: 'Descripción 2', 
      imageUrl: 'https://via.placeholder.com/150?text=Película+2' 
    },
    { 
      id: 3, 
      title: 'Película 3', 
      description: 'Descripción 3', 
      imageUrl: 'https://via.placeholder.com/150?text=Película+3' 
    },
    { 
      id: 4, 
      title: 'Película 4', 
      description: 'Descripción 4', 
      imageUrl: 'https://via.placeholder.com/150?text=Película+4' 
    },
    { 
      id: 5, 
      title: 'Película 5', 
      description: 'Descripción 5', 
      imageUrl: 'https://via.placeholder.com/150?text=Película+5' 
    },
    { 
      id: 6, 
      title: 'Película 6', 
      description: 'Descripción 6', 
      imageUrl: 'https://via.placeholder.com/150?text=Película+6' 
    }
  ];
}

