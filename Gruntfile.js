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
                } 
        });

        grunt.loadNpmTasks( 'grunt-contrib-uglify' );
        grunt.registerTask( 'default', [ 'uglify' ] );
};
