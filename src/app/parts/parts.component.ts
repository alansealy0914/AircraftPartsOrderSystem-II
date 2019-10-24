import { Component, OnInit } from '@angular/core';
import { PartService } from './part.service';

@Component({
  selector: 'app-parts',
  templateUrl: './parts.component.html',
  styleUrls: ['./parts.component.scss']
})
export class PartsComponent implements OnInit {
  title = 'Geo-Global Parts';
  parts: any[];
  isExpired = true;
  constructor(private partService: PartService) { }

  ngOnInit() {
    this.partService.getParts()
      .subscribe((data) => this.parts = data);
  }
}


