import { Router } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import { getAllLaunches, getLaunchById } from "./models/launches.ts";
import { getAllPlanets } from "./models/planets.ts";

const router = new Router({});

router.get("/", (ctx) => {
  ctx.response.body = "Mission Control API";
});

router.get("/planets", (ctx) => {
  ctx.throw(501, "Sorry planets aren't available");
  ctx.response.body = getAllPlanets();
});

router.get("/launches", (ctx) => {
  ctx.response.body = getAllLaunches();
});
router.get("/launches/:id", (ctx) => {
  if (ctx.params?.id) {
    const launchesList = getLaunchById(Number(ctx.params.id));
    if (launchesList) {
      ctx.response.body = launchesList;
    } else {
      ctx.throw(400, `Launch with id ${ctx.params.id} doesn't exists`);
    }
  }
});

export default router;
