import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

import { register } from 'swiper/element';

// We need to manually register Swiper custom elements when imported from node modules
// Should just be done once to register Swiper custom elements globally
register();

bootstrapApplication(App, appConfig).catch((err) => console.error(err));
