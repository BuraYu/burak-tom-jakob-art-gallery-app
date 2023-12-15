import useSWR from "swr";

export default function HomePage() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );
  console.log(data);
  return (
    <div>
      <h1>Hello from Next.js</h1>

      <h1>{data[0].slug}</h1>
    </div>
  );
}
