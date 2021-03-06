let paths = require('./project.conf').paths;

module.exports = (karma) => {

    karma.set({

        basePath: '../',
        frameworks: ['jspm', 'jasmine'],

        port: 9876,
        colors: true,
        logLevel: karma.ERROR,

        files: [
            paths.jspm.babel('browser-polyfill.js')
        ],

        jspm: {

            loadFiles: [
                paths.spec.unit('**/*.js')
            ],

            serveFiles: [
                paths.src.js('**/*.js')
            ]

        },

        babelPreprocessor: {

            options: {
                presets: ['es2015'],
                sourceMap: 'inline'
            },

            sourceFileName: (file) => {
                return file.originalPath;
            }

        }

    });

};
