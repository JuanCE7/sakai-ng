import { Component } from '@angular/core';

@Component({
    standalone: true,
    selector: 'app-footer',
    template: `<div class="layout-footer">
        Clínica Dental
        <a href="https://primeng.org" target="_blank" rel="noopener noreferrer" class="text-primary font-bold hover:underline">Castillo</a>
    </div>`
})
export class AppFooter {}
