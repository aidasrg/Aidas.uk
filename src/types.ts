export type Category = 'EVERYTHING' | 'WOMEN' | 'MEN' | 'ACCESSORIES' | 'ABOUT' | 'CONTACT US';

export interface Author {
  name: string;
  role: string;
  avatar: string;
  bio: string;
}

export interface Comment {
  id: string;
  articleId: string;
  author: string;
  avatar?: string;
  date: string;
  text: string;
  likes: number;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  content: string[];
  takeaways?: string[];
  pullQuote?: {
    quote: string;
    attribution: string;
  };
  category: 'WOMEN' | 'MEN' | 'ACCESSORIES';
  tags: string[];
  author: Author;
  publishedAt: string;
  readTime: string;
  coverImage: string;
  imageCaption?: string;
  featured?: boolean;
  trending?: boolean;
  likes: number;
  commentsCount: number;
}
