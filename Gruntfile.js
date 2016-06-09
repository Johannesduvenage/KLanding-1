/**
 * Created by user on 09.06.16.
 */
'use strict';

module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        server: {
            port: 3000,
            base: './public'
        },
        watch: {
            css: {
                files: 'public/css/*.scss',
                tasks: ['sass'],
                options: {
                    livereload: true
                }
            },
            html: {
                files: 'public/views/*.html',
                options: {
                    livereload: true
                }
            }
        },
        sass: {
            dev: {
                src: ['public/css/*.scss'],
                dest: 'public/css/app.css'
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('server', 'Start a custom web server', function() {
        grunt.log.writeln('Started web server on port 3000');
        require('./app.js');
        grunt.task.run('watch');
    });
};