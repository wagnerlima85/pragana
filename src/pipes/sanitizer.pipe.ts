import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({ name: 'sanitizer' })
export class SanitizerPipe implements PipeTransform {

	constructor(private sanitizer: DomSanitizer) {}

	transform(content, is_security_resource: boolean = false) {
		if (is_security_resource) {
			return this.sanitizer.bypassSecurityTrustResourceUrl(content);
		}

		return this.sanitizer.bypassSecurityTrustHtml(content);
	}
}
