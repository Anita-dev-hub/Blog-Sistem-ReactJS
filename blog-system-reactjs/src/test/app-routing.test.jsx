
import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";

describe("App routing", () => {
  it("matches the home page at /", () => {
    const queryClient = new QueryClient();

    const router = createRouter({
      routeTree,
      context: { queryClient },
    });

    const matches = router.matchRoutes("/");

    expect(matches.length).toBeGreaterThan(0);
    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);

    queryClient.clear();
  });
});
