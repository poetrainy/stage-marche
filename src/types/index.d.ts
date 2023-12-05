declare module "*.svg" {
  const content: React.FC<React.SVGProps<SVGElement>>;
  export default content;
}

declare module "*.jpg" {
  const content: string;
  export default content;
}
