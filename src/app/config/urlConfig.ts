import { environment } from 'src/environments/environment';

const mainUrl = environment.apiUrl;
export const staticUrl = {
  user: mainUrl + 'user/',
}
export const serviceUrl = {
  loginUrl: staticUrl.user + 'adminlogin', 
}