import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  constructor(private router:Router) { }
  go_to_add_player()
  {
    this.router.navigate(["/add-player"])
  }

  ngOnInit(): void {
  }

}
