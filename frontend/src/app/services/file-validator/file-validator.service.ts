import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileValidatorService {

  constructor() { }

   isPDF(file: File): boolean {
    return file.type === 'application/pdf';
  }

}
