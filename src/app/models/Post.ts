import {Comment} from './Comment';

export interface Post {
  id?: number;
  title: string;
  caption: string;
  location: string;
  image?: File;
  like?: number;
  userLiked?: string[];
  comment?: Comment[];
  username?: string;
}
