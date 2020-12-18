import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import {ActivatedRoute, Data, Params, Router} from '@angular/router';

@Component({
  selector: ' app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.data
      .subscribe((data: Data) => {
        this.server = data['server'];
      });
/*    this.route.params.subscribe((params: Params) => {
      const id = Number(params['id']);
      this.server = this.serversService.getServer(id);
      this.serverName = this.server.name;
      this.serverStatus = this.server.status;
    });*/
  }

  onEdit() {
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
  }
}
