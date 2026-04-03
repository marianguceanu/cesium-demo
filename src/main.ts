import * as Cesium from "cesium";
import { Ion } from "cesium";

Ion.defaultAccessToken =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI0YmExOWU1Yi04ZTZhLTQyYTAtYjNiZS0xN2ExYjE1MWIyNGUiLCJpZCI6NDEyODg1LCJpYXQiOjE3NzUxMzc0NTV9.Iiry0DsgQpuFNvHsmqe3vEFPdEb-86PVwjD0UgSHzOs";

const viewer = new Cesium.Viewer("cesiumContainer", {
	terrain: Cesium.Terrain.fromWorldTerrain(),
});

const slider = document.getElementById("lodSlider") as HTMLInputElement;

slider.addEventListener("input", () => {
	tileset.maximumScreenSpaceError = Number(slider.value);
});

// Melbourne Point Cloud
const tileset = viewer.scene.primitives.add(
	await Cesium.Cesium3DTileset.fromIonAssetId(43978),
);
// HIGH detail
// tileset.maximumScreenSpaceError = 2;
// LOW detail
// tileset.maximumScreenSpaceError = 256;
// MEDIUM detail
tileset.maximumScreenSpaceError = 64;

viewer.scene.primitives.add(tileset);

viewer.zoomTo(tileset);
