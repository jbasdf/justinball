#Justin Ball
-----------------------
My blog based on [Gatsby](https://www.gatsbyjs.org/).


Tags were not being parsed correctly because allMarkDownRemark can't handle tags with spaces.
Run this sed script to quote all tags which will fix it:
sed -E -i '' '/^---/,/^---/ s/^- (.+)/  - "\1"/' src/posts/**/*.md


License and attribution
-----------------------
MIT
