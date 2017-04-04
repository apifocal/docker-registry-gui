module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    compress: {
      main: {
        options: {
          mode: "tgz",
          archive: '<%= pkg.name %>.<%= pkg.version %>.tgz'
        },
        files: [
          {
            expand: true,
            cwd: 'dist',
            src: ['**/*'],
            dest: '/'
          }
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-compress');
};