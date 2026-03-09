interface toMe {
  name: string;
  age: number;
  email: string;
}
type toMeKeys = Readonly<toMe>;
const me: toMeKeys = {
  name: "mugisha",
  age: 23,
  email: "mugisha",
};

type Page = "home" | "about" | "contact";

interface PageInfo {
  title: string;
}

const nav: Record<Page, PageInfo> = {
  home: { title: "Welcome" },
  about: { title: "Our Story" },
  contact: { title: "Get in touch" },
};
