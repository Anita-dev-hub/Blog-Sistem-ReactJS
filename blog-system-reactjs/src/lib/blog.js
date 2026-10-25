
import { queryOptions } from "@tanstack/react-query";
import { supabase } from "../auth/client.js";

export const postsQuery = queryOptions({
  queryKey: ["blog"],
  queryFn: async () => {
    const { data, error } = await supabase
      .from("blog")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;
    return data;
  },
});

export const postQuery = (id) =>
  queryOptions({
    queryKey: ["blog", id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blog")
        .select("*")
        .eq("id", id)
        .maybeSingle();

      if (error) throw error;
      return data;
    },
  });

export const formatDate = (date) =>
  new Date(date).toLocaleDateString("bg-BG", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });

export const excerpt = (text, length = 120) =>
  text.length > length
    ? text.slice(0, length).trim() + "…"
    : text;

export const imgOf = (url) => url || "/img/detail.jpg";
