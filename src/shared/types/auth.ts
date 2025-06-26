export type SocialProvider = {
  name: string;
  onClick: () => void;
  backgroundColor: string;
  textColor: string;
  iconSrc: string;
};

export type SigninFormValues = {
  email: string;
  password: string;
};
