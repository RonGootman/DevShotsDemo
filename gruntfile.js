module.exports = function(grunt) {


  grunt.initConfig({


    pkg: grunt.file.readJSON('package.json'),

    // all of our configuration will go here
    watch:{
      css: {
        files: ['src/scss/**/*.scss'],
        tasks: ['sass:dev']
      }
    },
    sass: {
      dev: {
        options : {
          outputStyle: 'expanded'
        },
        files: {
          'css/styles.css' : 'src/scss/application.scss'
        }
      },
      build: {
        options : {
          outputStyle: 'compressed'
        },
        files: {
          'css/styles.css' : 'src/scss/application.scss'
        }
      }
    }
  });

  // ===========================================================================
  // LOAD GRUNT PLUGINS ========================================================
  // ===========================================================================
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');

  grunt.registerTask('default', ['sass:dev']);
  grunt.registerTask('build', ['sass:build']);

};
