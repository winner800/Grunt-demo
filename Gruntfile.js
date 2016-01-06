module.exports = function (grunt) {
  grunt.initConfig({
    concat: {
    	options: {
            banner: '/*!  <%= grunt.template.today("yyyy-mm-dd  hh:MM:ss TT") %> */\n'
          },
      basic_and_extras: {
        files: {
          'dest/js/basic2.js': ['js/jquery.js', 'js/jquery.lazyload.js'],
          'dest/js/with_extras.js': ['js/tips.js', 'js/index.js']
        }
      }
    },
    cssmin: {
    	options: {
            banner: '/*!  <%= grunt.template.today("yyyy-mm-dd  hh:MM:ss TT") %> */\n'
          },
        compress: {
          files: {
            'dest/css/index.css': [
						           "css/m_mains.css",
						           "css/ratchet.css"
            ],
            'dest/css/getno.css': [
						           "css/m_mains.css",
						           "css/ratchet.css",
						           "css/dropload.css",
						           "css/citypicker.css"
            ],
            'dest/css/topic.css': [
						           "css/m_mains.css",
						           "css/ratchet.css",
						           "css/animated.css"
            ],
          
          }
        }
      }
  });
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('default', ['concat','cssmin']);
}