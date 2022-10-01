import { assertEquals } from "../test_deps.ts";

import { filterHabitablePlanets } from "./planets.ts";

const HABITABLE_PLANET = {
  koi_disposition: "CONFIRMED",
  koi_prad: "1",
  koi_smass: "1",
  koi_srad: "1",
};
const TOO_LARGE_PLANETARY_RADIUS = {
  koi_disposition: "CONFIRMED",
  koi_prad: "1.5",
  koi_smass: "1",
  koi_srad: "1",
};
const NOT_CONFIRMED = {
  koi_disposition: "FALSE_POSITIVE",
  koi_prad: "1",
  koi_smass: "1",
  koi_srad: "1",
};
const STAR_MASS_TOO_SMALL = {
  koi_disposition: "CONFIRMED",
  koi_prad: "1",
  koi_srad: "1",
  koi_smass: "0.78",
};
const TOO_LARGE_SOLAR_MASS = {
  koi_disposition: "CONFIRMED",
  koi_prad: "1",
  koi_srad: "1",
  koi_smass: "1.10",
};
const TOO_LARGE_SOLAR_RADIUS = {
  koi_disposition: "CONFIRMED",
  koi_prad: "1",
  koi_srad: "1.02",
  koi_smass: "1",
};

Deno.test("filter only habitable planets", () => {
  const filtered = filterHabitablePlanets([
    HABITABLE_PLANET,
    NOT_CONFIRMED,
    STAR_MASS_TOO_SMALL,
    TOO_LARGE_SOLAR_MASS,
    TOO_LARGE_SOLAR_RADIUS,
    TOO_LARGE_PLANETARY_RADIUS,
  ]);
  assertEquals(filtered, [HABITABLE_PLANET]);
});
