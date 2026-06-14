import { Component, inject } from '@angular/core';
import { IonToolbar, IonButtons, IonIcon, IonContent, IonItem, IonLabel, IonList, IonSearchbar, IonTitle, IonHeader, IonChip } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { Movie } from '../../core/services/movie';
import { addIcons } from 'ionicons';
import { heart, heartOutline } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonChip, IonToolbar, IonButtons, IonIcon, IonHeader, IonTitle, IonContent, IonItem, IonLabel, IonList, IonSearchbar, RouterLink],
})
export class HomePage {
  public movieService = inject(Movie);

  constructor() {
    addIcons({ heart, heartOutline });
  }
}
