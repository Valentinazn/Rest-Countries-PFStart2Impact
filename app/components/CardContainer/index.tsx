import Card from "../Card";

export async function getData() {
  const res = await fetch("https://restcountries.com/v3.1/all");
  return res.json();
}

export async function CardContainer() {
  const data = await getData();

  return <Card data={data} />;
}
