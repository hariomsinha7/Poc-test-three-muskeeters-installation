// sample application
import * as THREE from "three";
import musketeers from "three-musketeers";

init();

function init() {
  const { innerWidth, innerHeight } = window;
  const scene = new THREE.Scene();

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(innerWidth, innerHeight);
  document.body.appendChild(renderer.domElement);

  const camera = new THREE.PerspectiveCamera(
    70,
    innerWidth / innerHeight,
    0.01,
    10
  );
  camera.position.z = 1;
  scene.add(camera);

  const mesh = new THREE.Mesh(
    new THREE.BoxGeometry(0.2, 0.2, 0.2),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
  );
  // assign a unique name to our mesh to be able to query it later
  mesh.name = "CUBE_1";
  scene.add(mesh);

  renderer.render(scene, camera);

  // attach $$$ to the window for browser debugging
  window.$$$ = musketeers({ renderer, scene, camera });
}
