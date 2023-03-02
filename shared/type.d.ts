declare interface ThemeProp {
  theme: string;
}
declare interface PostDataType {
  createdAt?: object;
  userId?: string;
  jobCategory?: string[];
  postTitle?: string;
  postText?: string;
  postImage1?: string;
  postImage2?: string;
  likes?: string[];
  likesCount?: number;
  products?: string[];
  userProfile?: string;
}
declare interface PostDocType {
  id?: string;
  data?: () => PostDataType;
}

declare interface PostType extends PostDataType {
  id?: string;
}

declare interface GetPostType {
  id: string;
}

declare interface CommentType {
  id?: number;
  comment: string;
  userNickName: string;
  good?: boolean;
}

declare interface searchType {
  search: string;
  isActive: boolean;
  searchList: never[];
  searchWord: string;
  changeWord: (e: any) => void;
  deskSearch: (e: any) => void;
  setIsActive: boolean;
}
declare interface CustomModalType {
  children?: React.ReactNode;
  title?: string;
  description?: string;
}

declare interface userInforType {
  id?: string;
  following?: string[];
  introduction?: string;
  nickname?: string;
  profileImage?: string;
  scraps?: string[];
  userId?: string;
}

declare interface RouterQuery {
  order: string;
  select: string;
}
