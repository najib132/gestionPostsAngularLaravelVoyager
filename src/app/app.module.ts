import { ResumePipe } from './resume.pipe';
import { ProfilFollowerComponent } from './profil-follower/profil-follower.component';
import { RoutingModule } from './routing.module';
import { CoursesService } from './courses.service';
import { CoursesComponent } from './courses.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
 
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { EmailService } from './email.service';
import { FavoriteComponent } from './favorite/favorite.component';
import { PanelComponent } from './panel/panel.component';
import { InputFormatDirective } from './input-format.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { PostsComponent } from './posts/posts.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { GithubFollowersService } from './services/github-followers.service';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavbarComponent } from './navbar/navbar.component';





@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    FavoriteComponent,
    PanelComponent,
    InputFormatDirective,
    ContactFormComponent,
    SignupFormComponent,
    PostsComponent,
    GithubFollowersComponent,
    HomeComponent,
    PageNotFoundComponent,
    ProfilFollowerComponent,
    NavbarComponent,
    ResumePipe 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    RoutingModule
  ],
  providers: [
    CoursesService,
    EmailService,GithubFollowersService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
