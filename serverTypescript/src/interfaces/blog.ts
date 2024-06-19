export interface IBlogInput {
    title: string
    subtitle: string
    content: string
    image: IImage
}

export interface IImage {
    alt: string
    url: string
}

export interface IBlog extends IBlogInput {
    _id: string
    likes: string[]
}

export interface IBlogDocument extends Document {
    title: string;
    subtitle: string;
    content: string;
    image: IImage;  
    likes: string[];
}