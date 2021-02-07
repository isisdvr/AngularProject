import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CoursesComponent } from "./courses/courses.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ApisComponent } from "./apis/apis.component";
import { PanelComponent } from "./panel/panel.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { GithubProfileComponent } from "./github-profile/github-profile.component";
import { PostsComponent } from "./posts/posts.component";
import { DatadisplayComponent } from "./datadisplay/datadisplay.component";
import { SwitchComponent } from "./switch/switch.component";
import { MycourseComponent } from "./mycourse/mycourse.component";
import { ReactFormComponent } from "./react-form/react-form.component";
import { ProfileEditorComponent } from "./profile-editor/profile-editor.component";
import { SectionFourComponent } from "./section-four/section-four.component";
import { NewCourseFormComponentComponent } from "./new-course-form-component/new-course-form-component.component";
import { FormBuilderComponent } from "./form-builder/form-builder.component";
import { Navbar2Component } from "./navbar2/navbar2.component";

import { environment } from "src/environments/environment";
@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    ApisComponent,
    PanelComponent,
    NavbarComponent,
    GithubProfileComponent,
    PostsComponent,
    DatadisplayComponent,
    SwitchComponent,
    MycourseComponent,
    CoursesComponent,
    ReactFormComponent,
    ProfileEditorComponent,
    SectionFourComponent,
    NewCourseFormComponentComponent,
    FormBuilderComponent,
    Navbar2Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,

    RouterModule.forRoot([
      { path: "", component: CoursesComponent },
      { path: "apis", component: ApisComponent },
      { path: "display", component: DatadisplayComponent },
      { path: "switch", component: SwitchComponent },
      { path: "mycourse", component: MycourseComponent },
      { path: "course", component: CoursesComponent },
      { path: "profile/:username", component: GithubProfileComponent },
      { path: "profile", component: GithubProfileComponent },
      { path: "posts", component: PostsComponent },
      { path: "reactiveform", component: ReactFormComponent },
      { path: "profileform", component: ProfileEditorComponent },
      { path: "sectionfour", component: SectionFourComponent },
      { path: "newform", component: NewCourseFormComponentComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
