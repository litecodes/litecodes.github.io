var fs = require( 'fs' );

module.exports = function ( grunt ) {

    // Project configuration.
    grunt.initConfig( {
        pkg     : grunt.file.readJSON( 'package.json' ),
        less    : {
            development: {},
            production : {
                files: {
                    "public/css/articles.css": "src/css/articles/index.less"
                }
            }
        },
        markdown: {
            compile: {
                options: {
                    template       : 'src/template/articles/index.tpl',
                    postCompile    : function ( src, context ) {

                        // Replace title.
                        var regexp = new RegExp( '<h1.*>(.*)</h1>', 'gm' );
                        var match  = regexp.exec( src );
                        if ( match && match[ 1 ] ) {
                            context.title = ' - ' + match[ 1 ];
                        }
                    },
                    markdownOptions: {
                        gfm      : true,
                        highlight: 'auto'
                    }
                },
                files  : [
                    {
                        expand: true,
                        cwd   : 'src/markdown',
                        src   : '**/*.md',
                        dest  : 'pages',
                        ext   : '.html'
                    }
                ]
            }
        }
    } );

    grunt.loadNpmTasks( 'grunt-contrib-less' );
    grunt.loadNpmTasks( 'grunt-markdown' );

    // Default task(s).
    grunt.registerTask( 'default', [
        'less:production',
        'markdown:compile'
    ] );

};