import useSWR from "swr";
import ArtPieces from "@/components/ArtPieces/ArtPieces";
export default function HomePage() {
  const fetcher = async (url) => {
    const res = await fetch(url);

    // If the status code is not in the range 200-299,
    // we still try to parse and throw it.
    if (!res.ok) {
      const error = new Error("An error occurred while fetching the data.");
      // Attach extra info to the error object.
      error.info = await res.json();
      error.status = res.status;
      throw error;
    }

    return res.json();
  };

  const { data, error } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  return (
    <div>
      <ArtPieces pieces={data} />
    </div>
  );
}
