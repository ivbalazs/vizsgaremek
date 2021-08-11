import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  // apiUrl = `http://localhost:3000/`;
  apiUrl = `http://127.0.0.1:3000/`;

  navigation: { label: string, href: string, role: number }[] = [
    { label: 'Home', href: '', role: 1 },
    { label: 'Users', href: '/users', role: 2 },
  ];

  userColumns: { key: string, label: string }[] = [
    { key: 'id', label: '#' },
    { key: 'first_name', label: 'Keresztnév' },
    { key: 'last_name', label: 'Vezetéknév' },
    { key: 'email', label: 'E-mail' },
    { key: 'role', label: 'Jogosultság' },
  ];


  constructor() { }
}
