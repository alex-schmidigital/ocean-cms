import { UserActions } from './user/user.actions';
import { UserService } from './user/user.service';
import { PageActions } from './page/page.actions';
import { PageService } from './page/page.service';
import { MediaActions } from './media/media.actions';
import { MediaService } from './media/media.service';
import { Auth } from './services/auth';

export const APP_PROVIDERS = [
  UserActions,
  UserService,
  PageActions,
  PageService,
  MediaActions,
  MediaService,
  Auth
];
