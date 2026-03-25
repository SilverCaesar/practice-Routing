import { Component, inject } from '@angular/core';
import { RouterLink } from "@angular/router";
import { DataService } from '../data.service';


@Component({
  selector: 'app-post-list',
  imports: [RouterLink],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent {
  dataService = inject(DataService);
}
