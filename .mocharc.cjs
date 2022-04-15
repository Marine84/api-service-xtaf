module.exports = {
    'allow-uncaught': false,
    'async-only': false,
    bail: false,
    'check-leaks': false,
    color: true,
    delay: false,
    diff: true,
    exit: false, // could be expressed as "'no-exit': true"
    extension: ['js', 'cjs', 'mjs', 'ts'],

    require: "ts-node/register",
    // reporter: "mochawesome",
    // reporterOptions:{
    //     reportFilename: "poxos",
    //     reportDir: "./"
    // },
    reporter: "@reportportal/client-javascript",
    reporterOptions:{
        endpoint: 'https://reportportal.epam.com/api/v1',
            token: 'c7bdd766-82fb-4930-b755-65df6024e0cd',
            launch: 'marine_yegoryan_TEST_EXAMPLE',
            project: 'marine_yegoryan_personal',
            description: 'PROJECT_DESCRIPTION',
    },
    // reporter: "mocha-multi-reporters",
    // reporterOptions: {
    //     reporterEnabled: '@reportportal/client-javascript, mochawesome',

        // reportFilename: "test",
        //     reportDir: "./"
        // reportPortalReporterOptions: {
        //     endpoint: 'https://reportportal.epam.com/api/v1',
        //     token: 'c7bdd766-82fb-4930-b755-65df6024e0cd',
        //     launch: 'marine_yegoryan_TEST_EXAMPLE',
        //     project: 'marine_yegoryan_personal',
        //     description: 'PROJECT_DESCRIPTION',
        // },
    // },
    // 'reporter-option': {
    //     reporterEnabled: '@reportportal/client-javascript, mochawesome',
    //     endpoint: 'https://reportportal.epam.com/api/v1',
    //     token: 'c7bdd766-82fb-4930-b755-65df6024e0cd',
    //     launch: 'Test',
    //     project: 'Test_Project',
    //     description: 'PROJECT_DESCRIPTION',
    // },

    package: './package.json',

    spec: ['specs/*.spec.ts'], // the positional arguments!
    timeout: '2000', // same as "timeout: '2s'"

};