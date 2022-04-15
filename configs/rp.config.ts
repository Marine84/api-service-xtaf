export const rpConfig = new Mocha({
    reporter: '@reportportal/agent-js-mocha',
    reporterOptions: {
        endpoint: 'https://reportportal.epam.com/api/v1',
        token: 'c7bdd766-82fb-4930-b755-65df6024e0cd',
        launch: 'Test',
        project: 'Test_Project',
        description: 'PROJECT_DESCRIPTION',
    },
    timeout: 250000
});