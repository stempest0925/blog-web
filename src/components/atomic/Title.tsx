type IProps = {
  text: string;
};

export default function Title({ text }: IProps) {
  return <h1 className="title-sign mb-4 text-3xl font-bold tracking-wider">{text}</h1>;
}
