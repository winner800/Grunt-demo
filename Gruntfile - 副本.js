module.exports = function (grunt) {
  // 项目配置
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.file %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'js/<%=pkg.file %>.js',
        dest: 'dest/<%= pkg.file %>.min.js'
      }
    },
    concat: {
	      options: {
	        separator: ';'
	      },
	      dist: {
	        src: ['js/jquery.lazyload.js', 'js/jquery.js', 'js/jsonp.js'],
	        dest: 'dest/libs.js'
	      }
	    }
  });
  // 加载提供"uglify"任务的插件
  //grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  // 默认任务
  grunt.registerTask('default', ['concat']);
}