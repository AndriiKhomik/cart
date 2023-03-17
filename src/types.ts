interface Author {
  name: string;
}

interface Format {
  "image/jpeg": string;
}

export interface Book {
  id: number;
  title: string;
  authors: Author[];
  bookshelves: string[];
  languages: string[];
  media_type: string;
  download_count: number;
  subjects: string[];
  formats: Format;
  quantity?: number;
}
