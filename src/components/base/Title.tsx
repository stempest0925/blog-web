type IProps = {
  text: string;
};

export default function Title({ text }: IProps) {
  return <h1 className="text-underline mb-6 text-3xl font-bold tracking-wider">{text}</h1>;
}
