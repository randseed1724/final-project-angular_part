import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { QuotesService } from './quotesrequest.service';
import { SessionService } from './session.service';
import { WriteQuoteService } from './write-your-quote.service';


import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

/////PIPES
import { SearchPipe } from './pipes/search.pipe';

////GENERAL ROUTES
import { AuthorComponent } from './views/general/author/author.component';
import { HomeComponent } from './views/general/home/home.component';
import { NewQuoteComponent } from './views/general/make-my-own/make-my-own.component';
import { CategoriesComponent } from './views/general/categories/categories.component';
import { AboutComponent } from './views/general/about/about.component';
import { GalleryComponent } from './views/general/gallery/gallery.component';
import { ContactComponent } from './views/general/contact/contact.component';
import { SearchQuotesComponent } from './views/general/search-quotes/search-quotes.component';
////STORE ROUTES
import { CartComponent } from './views/store/cart/cart.component';
import { CheckoutComponent } from './views/store/checkout/checkout.component';
import { OrdersComponent } from './views/store/orders/orders.component';
////QUOTES ROUTES
import { QuoteListComponent } from './views/quotes/quote-list/quote-list.component';
import { QuotesGridComponent } from './views/quotes/quotes-grid/quotes-grid.component';
import { SingleQuoteComponent } from './views/quotes/single-quote/single-quote.component';
////USER ROUTES
import { DashboardComponent } from './views/user/dashboard/dashboard.component';
import { ProfileComponent } from './views/user/profile/profile.component';
import { EditProfileComponent } from './views/user/edit-profile/edit-profile.component';
import { LogInComponent } from './views/user/login/login.component';
import { SignUpComponent } from './views/user/signup/signup.component';
////ADMIN ROUTES
import { BackendComponent } from './views/admin/backend/backend.component';
import { AddQuoteComponent } from './views/admin/add-quote/add-quote.component';


const appRoutes: Routes = [
////GENERAL ROUTES
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '',  component: HomeComponent },
  { path: 'make-my-own', component: NewQuoteComponent },
  { path: 'author', component: AuthorComponent },
  { path: 'author:id', component: AuthorComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'contact', component: ContactComponent },
////STORE ROUTES
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'orders', component: OrdersComponent },
////QUOTES ROUTES
  { path: 'quotes', component: QuoteListComponent },
////USER ROUTES
  { path: 'dashboard', component: DashboardComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'edit-profile', component: EditProfileComponent },
  { path: 'login', component: LogInComponent },
  { path: 'new-customer', component: SignUpComponent },

////ADMIN ROUTES
  { path: 'backend', component: BackendComponent },
  { path: 'add-quote', component: AddQuoteComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewQuoteComponent,
    AuthorComponent,
    CategoriesComponent,
    AboutComponent,
    GalleryComponent,
    ContactComponent,
    CartComponent,
    CheckoutComponent,
    OrdersComponent,
    QuoteListComponent,
    DashboardComponent,
    ProfileComponent,
    EditProfileComponent,
    BackendComponent,
    AddQuoteComponent,
    QuoteListComponent,
    SingleQuoteComponent,
    QuotesGridComponent,
    LogInComponent,
    SignUpComponent,
    SearchQuotesComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes,
    { enableTracing: true } // <-- debugging purposes only
  )  //  <!-- "routes" is the array defined above
  ],
  providers: [QuotesService, SessionService, WriteQuoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
