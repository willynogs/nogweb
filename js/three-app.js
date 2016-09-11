var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( $('.content').width(), $('.content').height() );
renderer.setClearColor( 0xffffff );
$('.content').append( renderer.domElement );

var geometry = new THREE.BoxGeometry( 5, 5, 5 );
var material = new THREE.MeshBasicMaterial( { color: 0xCFB19E } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

cube.rotation.x += 2.5;
cube.rotation.y += 2.5;

var material2 = new THREE.MeshBasicMaterial( { color: 0x222222 } );
var cube2 = new THREE.Mesh( geometry, material2 );
scene.add( cube2 );

cube2.rotation.x -= 2.5;
cube2.rotation.y -= 2.5;

var material3 = new THREE.MeshBasicMaterial( { color: 0xffffff } );
var cube3 = new THREE.Mesh( geometry, material3 );
scene.add( cube3 );

camera.position.z = 10;

function render() {
  requestAnimationFrame( render );

  cube.rotation.y += 0.02;

  cube2.rotation.y -= 0.01;

  cube3.rotation.y -= 0.02;
  cube3.rotation.x -= 0.02;

  renderer.render( scene, camera );
}
render();

$(window).resize(function(){
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( $('.content').width(), $('.content').height() );
});
