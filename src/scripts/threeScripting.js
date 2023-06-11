import Scrollbar from 'smooth-scrollbar';
import '../index.css'
import * as THREE from 'three';
import { InteractionManager } from 'three.interactive';

export function callThreeJS(useAppContext, howMany, navigation) {

  let FOV;
  if (window.innerWidth < 720) FOV = 130;
  else FOV = 100;
  let damping;
  if (window.innerWidth < 1000) damping = 0.05
  else damping = 0.1

  let fixedHeader = document.querySelector('#header');
  let fixedCanvas = document.querySelector('#three-canvas');
  let fixedLayer = document.querySelector('#layer');
  let fixedPresentation = document.querySelector('#presentation')
// SMOOTHNESS

let scrollbar = new Scrollbar.init(document.body, {
  renderByPixels: true,
  continuousScrolling: true,
  damping
})
// Limiting x scrolling
scrollbar.limit.x = 0;

// First scroll to start the app
if(useAppContext.state.data.length > 0) {
  setTimeout(() => {
    scrollbar.scrollTo(0,5,10)
  }, 7000);
}

let scrollPercent = 0;
let zCamera;
let scrolling = false;
let savedScroll = 0;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(FOV, window.innerWidth / window.innerHeight, 0.1, 100);

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight, false);
document.querySelector('#three-canvas').appendChild( renderer.domElement );

let array = useAppContext.state.data;

// New object

// *********** ROOM

// Textures 
const gridColor = 'rgb(255,174,66)';
const howLong = howMany*0.85;
const loader = new THREE.TextureLoader();
const backPlaneDimension = 5;
const littleSquares = backPlaneDimension * 2;

const plane = new THREE.Mesh(
                          new THREE.PlaneGeometry(backPlaneDimension,backPlaneDimension,littleSquares,littleSquares),
                          new THREE.MeshBasicMaterial(  { color: gridColor, wireframe: true } )
                          )
const rightPlane = new THREE.Mesh(
                          new THREE.PlaneGeometry(howLong,5,howLong*2,littleSquares),
                          new THREE.MeshBasicMaterial({ color: gridColor, wireframe: true })
                          )
const leftPlane = new THREE.Mesh(
                          new THREE.PlaneGeometry(howLong,5,howLong*2,littleSquares),
                          new THREE.MeshBasicMaterial({ color: gridColor, wireframe: true })
                          )
const topPlane = new THREE.Mesh(
                          new THREE.PlaneGeometry(howLong,5,howLong*2,littleSquares),
                          new THREE.MeshBasicMaterial( { color: gridColor, wireframe: true } )
                          )
const bottomPlane = new THREE.Mesh(
                          new THREE.PlaneGeometry(howLong,5,howLong*2,littleSquares),
                          new THREE.MeshBasicMaterial( { color: gridColor, wireframe: true } )
                          )

scene.add( plane, rightPlane, leftPlane, topPlane, bottomPlane );


// ** Three Interactive
const interactionManager = new InteractionManager(
  renderer,
  camera,
  renderer.domElement
);


// ******* SQUARES
let squares = []
let squarestStart = -1;
array.forEach((item, indexPosition) => {
  const aspect = item.width / item.height;
  let planeWidth;
  let planeHeight;
  if (aspect >= 1) {
    planeHeight = 1;
    planeWidth = aspect;
  } else {
    planeWidth = 1;
    planeHeight = 1 / aspect;
  }
  let square = new THREE.Mesh(
    new THREE.PlaneGeometry(planeWidth,planeHeight,planeWidth,planeHeight),
    new THREE.MeshBasicMaterial(  {
      map: loader.load(item.urls.regular),
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
  interactionManager.add(square)
  square.addEventListener('click', (e) => {
    e.stopPropagation()
    useAppContext.updateState('layer', true);
    navigation(`/3dGallery/${item.id}`)
  })
  square.addEventListener('mouseover', () => {
    document.body.style.cursor = 'pointer';
  })
  square.addEventListener('mouseout', () => {
    document.body.style.cursor = 'default';
  })
})

// Camera Position
camera.position.set(0,0,0);
camera.lookAt(plane.position);
// First plane position
plane.position.set(0,0,-howLong/2)
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

// Animate function
render()
function animate() {
	requestAnimationFrame( animate );
  playScrollAnimation()
  if (scrolling) render()
  interactionManager.update();
}
animate();


function playScrollAnimation() {
  camera.lookAt(plane.position)
  camera.position.z = -scrollPercent/howMany
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
  scrollbar.addListener((status) => {
    // Indicate it is scrolling so render can Execute
    scrolling = true
    // scroll calculation
    scrollPercent =
        ((scrollbar.offset.y) /
            (scrollbar.size.content.height -
                document.documentElement.clientHeight)) * 100;
    // console.log(scrollPercent);
    // Checking stopped scroll
    if (Math.abs(scrollPercent.toFixed(4) - savedScroll.toFixed(4)) <= 0.01) {
      scrolling = false;
      // console.log('pause', scrollPercent.toFixed(4), savedScroll.toFixed(4));
    }
    if (scrollPercent == 0) scrolling = false
    if (scrollPercent == 100) scrolling = false

    // smooth-scrollbar fixings
    const offset = status.offset;
    fixedHeader.style.top = offset.y + 'px';
    fixedCanvas.style.top = offset.y + 'px';
    fixedLayer.style.top = offset.y + 'px';
    fixedPresentation.style.top = offset.y + 'px';

    savedScroll = scrollPercent;
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


}