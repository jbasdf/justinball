# This file will parse all posts and allow you to output new frontmatter or make bulk changes to content as needed.
require "yaml"
require "front_matter_parser"
require "time"
require "sanitize"
require "nokogiri"
require "fileutils"
require "byebug"

def truncate_words(text, length = 150, end_string = "")
  words = text.split
  words[0..(length - 1)].join(" ") + (words.length > length ? end_string : "")
end

posts_dir = "./src/posts"
Dir.entries(posts_dir).each do |f|
  next if f.eql?(".") or f.eql?("..") or f.eql?(".DS_Store")

  file_path = File.join(posts_dir, f, "index.md")

  parsed = FrontMatterParser::Parser.parse_file(file_path)
  front_matter = parsed.front_matter
  if front_matter["image"]
    puts file_path
    # front_matter["abstract"] = truncate_words(Sanitize.fragment(parsed.content))
    # Write new post content and front matter
  #   open(file_path, 'w+') do |post|
  #     post.puts front_matter.to_yaml
  #     post.puts "---"
  #     post.puts ""
  #     post.puts fixed_content
  #   end

  end
end
