type Props = {
  children: React.PropsWithChildren<React.ReactNode>;
};

export default function Button({ children }: Props) {
  return <button>{children}</button>;
}
