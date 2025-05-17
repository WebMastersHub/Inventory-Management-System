interface Props {
  name: string;
  price: string | number;
  category: string;
  stock: string | number;
  date: string;
}

const Cat = ({ name, price, category, stock, date }: Props) => {
  return (
    <div className="toys  mb-5">
      <span>{name}</span>
      <span>{price}</span>
      <span>{category}</span>
      <span>{stock}</span>
      <span>{date}</span>
    </div>
  );
};

export default Cat;
