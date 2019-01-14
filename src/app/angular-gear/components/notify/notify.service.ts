import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { NotifyState } from './notify';


const success_tick = `<svg class="simple-notification-svg" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" height="24" viewBox="0 0 24 24" width="24">
<path d="M0 0h24v24H0z" fill="none"></path>
<path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path>
</svg>`

const info = `<svg class="simple-notification-svg" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" height="24" viewBox="0 0 24 24" width="24">
<path d="M0 0h24v24H0z" fill="none"></path>
<path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path>
</svg>`


const warning_bell = `<svg class="simple-notification-svg" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" height="24" viewBox="0 0 24 24" width="24">
<path d="M0 0h24v24H0z" fill="none"></path>
<path d="M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"></path>
</svg>`


const info_mark = `<svg class="simple-notification-svg" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" height="24" viewBox="0 0 24 24" width="24">
<path d="M0 0h24v24H0z" fill="none"></path>
<path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z"></path>
</svg>`

const error_alert = `<svg class="simple-notification-svg" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" height="24" viewBox="0 0 24 24" width="24">
<path d="M0 0h24v24H0V0z" fill="none"></path>
<path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
</svg>`

@Injectable()

export class NotifyService {
    count = 0;


    private loaderSubject = new Subject<NotifyState>();
    loaderState = this.loaderSubject.asObservable();

    constructor() { }

    Error(message: string) {
        this.loaderSubject.next(<NotifyState>{ position: 'top-right', show: true, message: message, notifyClass: 'notifybox n-error', count: this.count, state: 'active', svg: error_alert });
        this.count++;
    }
    Success(message: string) {
        this.loaderSubject.next(<NotifyState>{ position: 'bottom-right', show: true, message: message, notifyClass: 'notifybox n-success', count: this.count, state: 'active', svg: success_tick });
        this.count++;
    }
    Warning(message: string) {
        this.loaderSubject.next(<NotifyState>{ position: 'top-left', show: true, message:message, notifyClass: 'notifybox n-warn', count: this.count, state: 'active', svg: warning_bell });
        this.count++;
    }
    Info(message: string) {
        this.loaderSubject.next(<NotifyState>{ position: 'top-right', show: true, message: message, notifyClass: 'notifybox n-info', count: this.count, state: 'active', svg: info_mark });
        this.count++;
    }
    JustNotify(message: string) {
        this.loaderSubject.next(<NotifyState>{ show: true, message: message, notifyClass: '#ffdb5b', count: this.count, state: 'active', svg: info_mark });
        this.count++;
    }
}
