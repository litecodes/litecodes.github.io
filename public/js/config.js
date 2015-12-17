/*
 * Copyright © 2015 by Beijing Brilliant Demonstration Technology Co., Ltd. All right reserved.
 */
require.config( {
    baseUrl    : 'public/js',
    paths      : {
        'jquery'        : '../../bower_components/jquery/dist/jquery.min',
        'threejs'       : '../../bower_components/three.js/build/three.min',
        'CanvasRenderer': '../../bower_components/three.js/examples/js/renderers/CanvasRenderer',
        'Projector'     : '../../bower_components/three.js/examples/js/renderers/Projector'
    },
    shim       : {
        'CanvasRenderer': [ 'threejs', 'Projector' ],
        'Projector'     : [ 'threejs' ]
    },
    waitSeconds: 120
} );