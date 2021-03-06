OPTS=(
  "--language_in=ES6_STRICT"
  "--language_out=ES5"
  "--compilation_level=ADVANCED_OPTIMIZATIONS"
  "--js_output_file=dist/bundle.js"
  "--entry_point=./built/bootstrap"
  "--variable_renaming_report=dist/variable_renaming_report"
  "--property_renaming_report=dist/property_renaming_report"
  # List of path prefixes to be removed from ES6 & CommonJS modules.
  "--js_module_root=node_modules"
  "--js_module_root=vendor"
  node_modules/@danbucholtz/zone.js/dist/zone.js
  "node_modules/@danbucholtz/zone.js/dist/browser/*.js"
  "node_modules/@danbucholtz/zone.js/dist/common/*.js"
  $(find vendor/rxjs -name *.js)
  #$(find node_modules/ionic-angular/es2015 -name *.js)
  # " -name *.js | grep -v .min.js)
  node_modules/@angular/{core,common,compiler,http,platform-browser}/index.js
  $(find node_modules/@angular/{core,common,compiler,http,platform-browser}/src -name *.js)
  "built/*.js"
)
set -ex
java -jar node_modules/google-closure-compiler/compiler.jar $(echo ${OPTS[*]})
gzip --keep -f dist/bundle.js
# requires brotli
# on Mac: brew install brotli
bro --force --quality 10 --input dist/bundle.js --output dist/bundle.js.brotli
ls -alH dist/bundle*