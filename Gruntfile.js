module.exports = function(grunt) {
    grunt.initConfig({
        postcss: {
            options: {
                map: true,
                processors: [
                    require('autoprefixer')({
                        browsers: 'last 2 versions'
                    })
                ]
            },
            src: {
                src: 'src/css/*.css'
            }
        },
        compass: {
            options: {
                config: 'config/config.rb'
            },
            src: {

            }
        },
        pug: {
            src: {
                files: {
                    'src/index.html': ['src/index.pug']
                },
                options: {
                    pretty: true
                }
            }
        },
        watch: {
            src: {
                files: ['src/**/*.scss', 'src/**/*.pug'],
                tasks: ['compile']
            }
        },
        shell: {
            shipApp: {
                command: 'npm run dist'
            },
            launchApp: {
                command: 'npm run start:debug'
            }
        }
    });

    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-pug');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-shell');

    grunt.registerTask('default', []);
    grunt.registerTask('compile', ['pug:src', 'compass:src', 'postcss:src']);
    grunt.registerTask('wLocal', ['watch:src']);
    grunt.registerTask('launch', ['shell:launchApp']);
    grunt.registerTask('ship', ['shell:shipApp']);


};
