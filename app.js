$(function(){
  console.log('NOGWEB INITIALIZED');

  // Set up the scene, camera, and renderer as global variables.
  var scene, camera, renderer;

  init();
  animate();

  // Sets up the scene.
  function init() {
  // Create the scene and set the scene size.
  scene = new THREE.Scene();
  var WIDTH = $('.content').width(),
      HEIGHT = $('.content').height();

  // Create a renderer and add it to the DOM.
  renderer = new THREE.WebGLRenderer({antialias:true});
  renderer.setSize(WIDTH, HEIGHT);
  $('.content').append(renderer.domElement);
  renderer.domElement.id = "context"

  // Create a camera, zoom it out from the model a bit, and add it to the scene.
  camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT, 0.1, 20000);
  camera.position.set(0,6,0);
  scene.add(camera);

  // Create a light, set its position, and add it to the scene.
  var light = new THREE.PointLight(0xffffff);
  light.position.set(-100,200,100);
  scene.add(light);

  // Add a white PointLight to the scene.
  var loader = new THREE.JSONLoader();
  loader.load( 'wood_cup.json', function(geometry, materials){
    //var material = new THREE.MeshLambertMaterial({color: 0x55B663});
    mesh = new THREE.Mesh( geometry, new THREE.MeshFaceMaterial(materials));
    scene.add(mesh);
  });

  // Add OrbitControls so that we can pan around with the mouse.
  controls = new THREE.OrbitControls(camera, renderer.domElement);
  }

  // Renders the scene and updates the render as needed.
  function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
    controls.update();
  }

  //CHANGING MENU ICON TO X [POTENTIALLY CREATE THREE CLASSES LATER :)]
  $('.menu').click(function(){
    $('.menu-1').toggleClass('menu-1-collapse');

    $('.menu-2').toggleClass('menu-2-collapse');

    $('.menu-3').toggleClass('menu-3-collapse');

    if($('.overlay-menu').hasClass('overlay-menu-active')) {
        $('.overlay-menu').hide().toggleClass('overlay-menu-active');
    } else {
      $('.overlay-menu').show().toggleClass('overlay-menu-active');
    }

    $('.title').toggleClass('overlay-active-white');

    $('.overlay-about').toggleClass('overlay-fade-left');

    $('.overlay-work').toggleClass('overlay-fade-right');

    $('.overlay-contact').toggleClass('overlay-fade-left');
  });
});
