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

    var canvas   = document.querySelector( '#glCanvas' );
    var renderer = createContext( canvas );
    renderer.setClearColor( 0x000000 );
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.gammaInput        = true;
    renderer.gammaOutput       = true;
    renderer.shadowMap.enabled  = true;
    renderer.shadowMap.cullFace = THREE.CullFaceBack;

    var scene         = new THREE.Scene();
    var camera        = new THREE.PerspectiveCamera( fov, aspect, near, far );
    camera.position.y = 100;
    camera.lookAt( scene.position );

    //scene.add( new THREE.AmbientLight( 0x333333 ) );

    var dirLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
    dirLight.position.set( 0, 80, 80 );
    scene.add( dirLight );

    dirLight.castShadow = true;

    dirLight.shadowMapWidth  = 2048;
    dirLight.shadowMapHeight = 2048;

    var d = 50;

    dirLight.shadowCameraLeft   = -d;
    dirLight.shadowCameraRight  = d;
    dirLight.shadowCameraTop    = d;
    dirLight.shadowCameraBottom = -d;

    dirLight.shadowCameraFar     = 3500;
    dirLight.shadowBias          = -0.0001;
    dirLight.shadowDarkness      = 0.35;
    dirLight.shadowCameraVisible = true;

    var loader          = new THREE.TextureLoader();
    var texture         = loader.load( 'public/resources/particle2.png' );
    var pictureGeometry = new THREE.PlaneBufferGeometry( 20, 20 );
    var pictureMaterial = new THREE.MeshPhongMaterial( {
        map        : texture,
        side       : THREE.DoubleSide,
        transparent: true,
        alphaTest  : 0.1
    } );

    var uniforms       = { texture: { type: "t", value: texture } };
    var vertexShader   = document.getElementById( 'vertexShaderDepth' ).textContent;
    var fragmentShader = document.getElementById( 'fragmentShaderDepth' ).textContent;

    var picture = new THREE.Mesh( pictureGeometry, pictureMaterial );
    picture.position.set( 0, 20, 0 );
    picture.castShadow          = true;
    picture.receiveShadow       = true;
    picture.customDepthMaterial = new THREE.ShaderMaterial( {
        uniforms      : uniforms,
        vertexShader  : vertexShader,
        fragmentShader: fragmentShader,
        side          : THREE.DoubleSide
    } );

    scene.add( picture );

    var groundGeometry   = new THREE.PlaneBufferGeometry( 200, 200 );
    var groundMaterial   = new THREE.MeshPhongMaterial( {
        map : loader.load( 'public/resources/bg.jpg' ),
        side: THREE.DoubleSide,
        color: 0xff0000
    } );
    var ground           = new THREE.Mesh( groundGeometry, groundMaterial );
    ground.rotation.x    = Math.PI / 2;
    ground.castShadow    = true;
    ground.receiveShadow = true;
    scene.add( ground );

    requestAnimationFrame( render );

    function render( delta ) {
        renderer.render( scene, camera );
        requestAnimationFrame( render );
        camera.position.x = Math.sin( delta / 1000 ) * 200;
        camera.position.z = Math.cos( delta / 1000 ) * 200;
        camera.lookAt( scene.position );
    }
} );

