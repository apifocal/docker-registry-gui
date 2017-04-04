module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    compress: {
      main: {
        options: {
          archive: 'archive.<%= pkg.version %>.zip'
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