export interface Speaker {
  id: string;
  name: string;
  featured: boolean;
  company: string;
  companyLogo: string;
  country: string;
  photoUrl: string;
  shortBio: string;
  bio: string;
  tags: string[];
  badges: Badge[];
  socials: Social[];
}

export interface Badge {
  name: string;
  description: string;
}

export interface Social {
  icon: string;
  name: string;
  link: string;
}
