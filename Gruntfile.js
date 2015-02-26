/* 
 * josevictorcatalani@gmail.com
 * Copyright 2014 José Victor Catalani
 */
module.exports = function( grunt ) {
        grunt.initConfig(
        {
                uglify : 
                {
                        options : 
                        {
                                mangle : false
                        },

                        my_target : {
                                files : 
                                {
                                        'js/main.js' : [ 'dev_js/main.js' ]
                                }
                        }
                },
                sass : {
                        dist : {
                                options : { style : 'compressed' },
                                files : {
                                'css/style.css' : 'dev_css/style.scss'
                                }
                        }
                } // sass
        });

        grunt.loadNpmTasks( 'grunt-contrib-uglify' );
        grunt.loadNpmTasks( 'grunt-contrib-sass' );
        grunt.registerTask( 'default', [ 'sass','uglify' ] );
};
