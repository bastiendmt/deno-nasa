import { Router } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import { getAllPlanets } from "./models/planets.ts";

const router = new Router({});

router.get("/", (ctx) => {
  ctx.response.body = "Mission Control API";
});

router.get("/planets", (ctx) => {
  ctx.throw(501, "Sorry planets aren't available");
  ctx.response.body = getAllPlanets();
});

export default router;
