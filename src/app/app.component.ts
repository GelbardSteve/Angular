import { Component } from '@angular/core';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styles: ['.css/app.component.css']
})
export class AppComponent {
    emoji = ['🤣', '😃', '😃', '🤩'];
    activeEmoji: string;
    changeEmoji() {
        this.activeEmoji = this.emoji[Math.floor(Math.random() * this.emoji.length)];
    }
}