module.exports = function(grunt) {

	// 1. All configuration goes here 
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		sass: {                              // Task 
			dist: {                            // Target 
				options: {                       // Target options 
					style: 'expanded'
				},
				files: {                         // Dictionary of files 
					'html/css/_______.css': 'build/sass/main.scss',       // 'destination': 'source' 
				}
			}
		},

		autoprefixer: {
			options: {
				browsers: ['last 6 versions', 'ie 9', 'ie 8']
			},
			dist: {
				files: {
					'html/css/_____.css': 'html/css/_____.css',
				}
			}
		},

		watch: {
			css: {
				files: ['build/sass/**/*.scss'],
				tasks: ['sass','autoprefixer'],
				options: {
					livereload: true,
					spawn: false,
				}
			}
		}

	});

	// 3. Where we tell Grunt we plan to use this plug-in.
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
	grunt.registerTask('default', ['sass']);

};