type UserProfile = {
  id: string,
  name: string;
  email: string;
  avatar_url: string;
};

type UserCredentials = {
  name?: string;
  email: string;
  password: string;
};

export type { UserCredentials, UserProfile };