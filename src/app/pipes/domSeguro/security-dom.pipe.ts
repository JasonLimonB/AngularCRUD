import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'securityDom'
})
export class SecurityDomPipe implements PipeTransform {

  constructor( private domClean: DomSanitizer ){

  }

  transform(value: string): SafeResourceUrl {
    return this.domClean.bypassSecurityTrustResourceUrl( value );
  }

}
