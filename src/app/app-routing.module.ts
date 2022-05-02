import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutesEnum } from './core/enums/app-routes.enum';

const routes: Routes = [
  {
    path: '',
    redirectTo: AppRoutesEnum.weather,
    pathMatch: 'full',
  },
  {
    path: AppRoutesEnum.weather,
    loadChildren: () => import('./features/weather/weather.module').then((m) => m.WeatherModule),
  },
  {
    path: AppRoutesEnum.news,
    loadChildren: () => import('./features/news/news.module').then((m) => m.NewsModule),
  },

  {
    path: '**',
    redirectTo: AppRoutesEnum.weather,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
