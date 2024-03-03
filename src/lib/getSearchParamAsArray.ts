import type { CollectionEntry } from "astro:content";

export default function getSearchParamAsArray(url: URL, key: string) {
  const params = new URLSearchParams(url.search);
  const value = params.get(key);

  if (!value) {
    return [];
  }

  return value.split(",") as CollectionEntry<"tools">["id"][];
}
