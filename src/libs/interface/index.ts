export interface UserProps {
  _id: string;
  name: string;
  gender: "pria" | "wanita";
  email: string;
  password: string;
  created_at: Date;
  updated_at: Date;
}

export interface ProductProps {
  _id: string;
  author: any;
  name: string;
  category: "smartphone" | "desktop";
  quantity: number;
  created_at: Date;
  updated_at: Date;
}
