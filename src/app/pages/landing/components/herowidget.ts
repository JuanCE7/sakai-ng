import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@Component({
    selector: 'hero-widget',
    imports: [ButtonModule, RippleModule],
    template: `
        <div
            id="hero"
            class="flex flex-col pt-6 px-6 lg:px-20 overflow-hidden"
            style="background: 
    linear-gradient(90deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)),
    linear-gradient(90deg, rgba(20, 60, 110, 0.7), rgba(0, 0, 0, 0)),
    url('/assets/page.jpg');
clip-path: ellipse(150% 87% at 93% 13%);
background-size: cover;
background-position: 70%;
width: 100%;
height: 100vh; 
"
        >
            <div class="mx-6 md:mx-20 mt-0 md:mt-6">
                <h1 class="text-6xl font-bold text-gray-900 leading-tight"><span class="font-light block">Tu Nueva</span>Sonrisa</h1>
                <p class="font-normal text-2xl leading-normal md:mt-4 text-gray-200">Recupera la salud de tu sonrisa con el cuidado que mereces. Tu bienestar comienza con una sonrisa saludable.</p>
                <button pButton pRipple [rounded]="true" type="button" label="Agenda tu cita" class="!text-xl mt-8 !px-4 !bg-[#1b4c83] !border-[#1b4c83] hover:!bg-[#132c44]"></button>
            </div>
            <div class="flex justify-center md:justify-end">
                <!-- <img src="/assets/page.png" alt="Hero Image" class="w-9/12 md:w-1200" /> -->
            </div>
        </div>
    `,
})
export class HeroWidget {}
