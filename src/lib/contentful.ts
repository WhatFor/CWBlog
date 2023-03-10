import contentful from "contentful";
import type { Document } from "@contentful/rich-text-types";

export interface BlogPost {
  title: string;
  date: string;
  author: Child<Author>;
  description: string;
  slug: string;
  content: Document;
  suggestedReading: boolean;
  coverImage: Child<Image>;
  coverImageAlt?: string;
  moreReading?: Child<BlogPost>[];
}

export interface ContentlessPost {
  title: string;
  date: Date;
  author: Author;
  description: string;
  slug: string;
  ttr: number;
  suggestedReading: boolean;
  tags: string[];
  coverImageUrl?: string;
  coverImageAlt?: string;
}

export interface Author {
  name: string;
  gitHubHandle: string;
  profilePicture: Child<Image>;
}

export interface Child<T> {
  metadata: any;
  sys: any;
  fields: T;
}

export interface Image {
  title: string;
  description: string;
  file: ImageFile;
}

export interface ImageFile {
  url: string;
  filename: string;
  contentType: string;
}

export const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com",
});
