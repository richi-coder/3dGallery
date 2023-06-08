import Scrollbar from 'smooth-scrollbar';
import './style.css'
import * as THREE from 'three';
// import {OrbitControls} from 'three/addons/controls/OrbitControls.js';

// SMOOTHNESS

let scrollbar = new Scrollbar.init(document.body, {
  renderByPixels: true
})

let scrollPercent = 0;
let zCamera;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight, false);
document.body.appendChild( renderer.domElement );

let array = new Array(35).fill(null)


// New object

// *********** ROOM

// Textures 
const loader = new THREE.TextureLoader();

const plane = new THREE.Mesh(
                          new THREE.PlaneGeometry(5,5,5,5),
                          new THREE.MeshBasicMaterial(  { color: 0x222222, wireframe: true } )
                          )
const rightPlane = new THREE.Mesh(
                          new THREE.PlaneGeometry(35,5,35,5),
                          new THREE.MeshBasicMaterial( {
                            map: loader.load('richicoder_logo.png'),
                          } )
                          )
const leftPlane = new THREE.Mesh(
                          new THREE.PlaneGeometry(35,5,35,5),
                          new THREE.MeshBasicMaterial( { color: 0x222222, wireframe: true } )
                          )
const topPlane = new THREE.Mesh(
                          new THREE.PlaneGeometry(35,5,35,5),
                          new THREE.MeshBasicMaterial( { color: 0x222222, wireframe: true } )
                          )
const bottomPlane = new THREE.Mesh(
                          new THREE.PlaneGeometry(35,5,35,5),
                          new THREE.MeshBasicMaterial( { color: 0x222222, wireframe: true } )
                          )

scene.add( plane, rightPlane, leftPlane, topPlane, bottomPlane );



// ******* SQUARES
let squares = []
let squarestStart = -1;
array.forEach((item, indexPosition) => {
  let square = new THREE.Mesh(
    new THREE.PlaneGeometry(1,1,1,1),
    new THREE.MeshBasicMaterial(  {
      map: loader.load('https://richicoder.com/richicoder_profile_photo.png'),
    }  )
    )
  let xRandom = Math.round(Math.random())
  let yRandom = Math.round(Math.random())
  let randomMath = [Math.random()/3, -Math.random()/3]
  const yPosition = randomMath[xRandom]
  const xPosition = randomMath[yRandom]
  const zPosition = -1 * indexPosition/5 + squarestStart;
  
  square.position.set( xPosition, yPosition, zPosition )
  squares.push({ ...square, ...{ initX: square.position.x, initY: square.position.y}});
  scene.add( square )
})

// Camera Position
camera.position.set(0,0,0);
camera.lookAt(plane.position);
// First plane position
plane.position.set(0,0,-17.5)
// Right plane position
rightPlane.position.set(2.5,0,0)
rightPlane.rotation.y = -90*(2*3.14/360)
// Left plane position
leftPlane.position.set(-2.5,0,0)
leftPlane.rotation.y = 90*(2*3.14/360)
// Top plane position
topPlane.position.set(0,2.5,0)
topPlane.rotation.x = 90*(2*3.14/360)
topPlane.rotation.z = 90*(2*3.14/360)
// Bottom plane position
bottomPlane.position.set(0,-2.5,0)
bottomPlane.rotation.x = 90*(2*3.14/360)
bottomPlane.rotation.z = 90*(2*3.14/360)

function animate() {
	requestAnimationFrame( animate );
  playScrollAnimation()
  render()
}
animate();


function playScrollAnimation() {
  camera.lookAt(plane.position)
  camera.position.z = -scrollPercent/10
  zCamera = camera.position.z;
  squareChecker(zCamera)
}


function squareChecker(zCamera) {
  let minimalDistance = 1;
  squares.forEach(square => {
    const { x, y, z } = square.position;
    const deltaZ = zCamera - z;
    if (deltaZ <= minimalDistance && deltaZ > 0) {
        const diffZ = 2*(minimalDistance - deltaZ);
        square.position.x = square.initX >= 0 ? square.initX + diffZ : square.initX - diffZ;
        square.position.y = square.initY >= 0 ? square.initY + diffZ : square.initY - diffZ;
    }
  })
}


  // scrollPercent updater based on scrolling
  scrollbar.addListener(() => {
    scrollPercent =
        ((scrollbar.offset.y) /
            (scrollbar.size.content.height -
                document.documentElement.clientHeight)) * 100;
    console.log(scrollPercent);
})

// Resizing 
window.addEventListener('resize', onWindowResize, false)
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
    render()
}

function render() {
  renderer.render( scene, camera );
}