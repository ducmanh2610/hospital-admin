import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/services';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(public messagesService: MessagesService) { }

  ngOnInit(): void {
  }

}
