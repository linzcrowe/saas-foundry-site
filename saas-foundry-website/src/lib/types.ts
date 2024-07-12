export type NavLink = {
  href: string;
  text: string;
};

export type Service = {
  title: string;
  description: string;
};

export type FooterLink = {
  href: string;
  text: string;
};

export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  buttonText: string;
  href: string;
}
