require "compass"
require "breakpoint"

http_path = "/"
css_dir = "src/css"
sass_dir = "src/scss"
images_dir = "src/img"
javascripts_dir = "src/js"

line_comments = (environment == :production) ? :false : :true

sass_options = {:sourcemaps => true}
output_style = (environment == :production) ? :compressed : :expanded
