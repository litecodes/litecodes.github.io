define( [ 'threejs', 'CanvasRenderer' ], function () {

    function checkCanvasSupport() {
        return document.createElement( 'canvas' ).getContext
               && document.createElement( 'canvas' ).getContext( '2d' );
    }

    function checkWebGLSupport() {
        return document.createElement( 'canvas' ).getContext
               && (document.createElement( 'canvas' ).getContext( 'webgl' ));
    }

    function createContext( canvas ) {
        if ( checkWebGLSupport() ) {
            return new THREE.WebGLRenderer( {
                canvas               : canvas,
                precision            : 'highp',
                alpha                : true,
                premultipliedAlpha   : false,
                antialias            : true,
                stencil              : true,
                preserveDrawingBuffer: true
            } );
        } else if ( checkCanvasSupport() ) {
            return new THREE.CanvasRenderer( {
                canvas: canvas
            } );
        } else {
            return null;
        }
    }

    var fov    = 45,
        aspect = window.innerWidth / window.innerHeight,
        near   = 1,
        far    = 1000000;

    var loader = new THREE.TextureLoader();

    var canvas   = document.querySelector( '#glCanvas' );
    var renderer = createContext( canvas );
    renderer.setClearColor( 0x000000 );
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.setPixelRatio( window.devicePixelRatio );

    var scene         = new THREE.Scene();
    var camera        = new THREE.PerspectiveCamera( fov, aspect, near, far );
    camera.position.z = 20;

    scene.add( new THREE.AmbientLight( 0x333333 ) );

    var light = new THREE.DirectionalLight( 0xffffff, 1 );
    light.position.set( 5, 3, 5 );
    scene.add( light );

    var radius   = 5,
        segments = 32,
        rotation = 6;

    var sphere        = createSphere( radius, segments );
    sphere.rotation.y = rotation;
    scene.add( sphere );

    var clouds        = createClouds( radius, segments );
    clouds.rotation.y = rotation;
    scene.add( clouds );

    var stars = createStars( 90, 64 );
    scene.add( stars );

    function createSphere( radius, segments ) {
        return new THREE.Mesh(
            new THREE.SphereGeometry( radius, segments, segments ),
            new THREE.MeshPhongMaterial( {
                map        : loader.load( 'public/resources/2_no_clouds_4k.jpg' ),
                bumpMap: loader.load( 'public/resources/elev_bump_4k.jpg' ),
                bumpScale: 0.05,
                specularMap: loader.load( 'public/resources/water_4k.png' )
            } )
        );
    }

    function createClouds( radius, segments ) {
        return new THREE.Mesh(
            new THREE.SphereGeometry( radius + 0.1, segments, segments ),
            new THREE.MeshPhongMaterial( {
                map        : loader.load( 'public/resources/fair_clouds_4k.png' ),
                transparent: true
            } )
        );
    }

    function createStars( radius, segments ) {
        return new THREE.Mesh(
            new THREE.SphereGeometry( radius, segments, segments ),
            new THREE.MeshBasicMaterial( {
                map : loader.load( 'public/resources/galaxy_starfield.png' ),
                side: THREE.BackSide
            } )
        );
    }

    requestAnimationFrame( render );

    function render( delta ) {
        renderer.render( scene, camera );
        requestAnimationFrame( render );

        sphere.rotation.y += 0.001;
        clouds.rotation.y += 0.001;
    }
} );

