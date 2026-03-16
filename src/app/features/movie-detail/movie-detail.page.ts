import { Component, OnInit, inject, Input } from '@angular/core';
import { Movie } from '../../core/services/movie';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonButton, IonIcon, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonBadge, IonLabel, IonList, IonItem, IonSpinner, IonChip } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { heart, heartOutline } from 'ionicons/icons';

@Component({
  selector: 'app-movie-detail',
  templateUrl: 'movie-detail.page.html',
  styleUrls: ['movie-detail.page.scss'],
  standalone: true,
  imports: [IonChip, IonSpinner, IonItem, IonList, IonLabel, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonButton, IonIcon, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonBadge]
})
export class MovieDetailPage implements OnInit {
  @Input() id!: string;
  public movieService = inject(Movie);

  constructor() {
    addIcons({ heart, heartOutline });
  }

  ngOnInit() {
    if (this.id) {
      this.movieService.getMovieDetails(this.id);
    }
  }
}
