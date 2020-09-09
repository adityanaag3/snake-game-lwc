// Find the full example of all available configuration options at
// https://github.com/muenzpraeger/create-lwc-app/blob/main/packages/lwc-services/example/lwc-services.config.js
module.exports = {
    buildDir: './docs',
    resources: [
        { from: 'src/resources/', to: 'docs/resources/' },
        { from: 'src/index.html', to: 'docs/' },
        { from: 'src/manifest.json', to: 'docs/' }
    ]
};
