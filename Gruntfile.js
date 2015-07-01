module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        ngtemplates: {
            app:        {
                src:      'bootstrapmoment.html',
                dest:     'bootstrap-moment.js',
                options: {
                    append: true,
                    module: 'bootstrapMoment',
                    htmlmin:  { collapseWhitespace: true, collapseBooleanAttributes: true }
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-angular-templates');
    grunt.registerTask('default', ['ngtemplates']);
};