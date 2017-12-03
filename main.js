/**
 * Created by JongHyeok Choi on 2017. 12. 3..
 */

var lintLib = require('polymer-linter');

const rules = lintLib.registry.getRules(['polymer-1']);
const Analyzer = require('polymer-analyzer').Analyzer;
const FSUrlLoader = require('polymer-analyzer').FSUrlLoader;
const PackageUrlResolver = require('polymer-analyzer').PackageUrlResolver;

const analyzer = new Analyzer({
    urlLoader: new FSUrlLoader('/'),
    urlResolver: new PackageUrlResolver(),
});

var ok = new lintLib.Linter(rules, analyzer);

console.log(ok.testFunction());