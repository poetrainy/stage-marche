export type AuthType = {
  data: {
    displayName: string;
    email: string;
    phoneNumber: number | null;
    photoURL: string;
    providerId: string;
    uid: string;
  };
  fav?: any;
  genre?: number[];
  prefecture?: string;
};
