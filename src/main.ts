import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import PubSub from '@aws-amplify/pubsub';
import API from '@aws-amplify/api';
import awsconfig from './aws-exports';
import Amplify from 'aws-amplify';
import { AmazonAIPredictionsProvider } from '@aws-amplify/predictions';

API.configure(awsconfig);
PubSub.configure(awsconfig);
Amplify.addPluggable(new AmazonAIPredictionsProvider());

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
