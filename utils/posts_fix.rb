# This script was used to restructure all my original blog posts into a format that better
# suits Gatsby. It is no longer needed, but I'm leaving it here in case I need to copy
# paste stuff later on.
require "yaml"
require "front_matter_parser"
require "time"
require "sanitize"
require "nokogiri"
require "fileutils"
require "byebug"


# Note that the function changes the value of fixed_content
def move_files(nodes, fixed_content, new_post_dir, original_file)
  nodes.each do |node|
    source = node.value.gsub("http://www.justinball.com", "")
    if !source.start_with?("http") && !source.include?("mailto:")
      # strip since some of the posts have whitespace in their links
      fixed_content.gsub!(source, File.basename(source).strip)
      # Move each file to post directory
      file_path = File.join("./static", source.strip)

      # From way back in the wp days. There are still posts that have these links:
      file_path.gsub!("wp-content/uploads", "images/posts")
      file_path.gsub!("Identica.png/", "Identica.png")

      # We only care about links to files and we're making the assumption that files
      # have an extension while other links won't have a file extension.
      if !File.extname(file_path).empty?
        if File.exists? file_path
          FileUtils.mv(file_path, new_post_dir)
        else
          puts "#{original_file} -- Source file not found #{file_path}"
        end
      end
    end
  end
end

posts_dir = "./src/posts"
Dir.entries(posts_dir).each do |f|
  next if f.eql?(".") or f.eql?("..") or f.eql?(".DS_Store")

  filename = File.basename(f, File.extname(f))

  # Build a date from the file name
  date = Time.parse(f.split("-")[0..2].join("-")).utc.iso8601
  path = (f.split("-")[3..-1].join("-"))
  path = File.basename(path, File.extname(path))

  file_path = File.join(posts_dir, f)
  if File.file?(file_path)
    parsed = FrontMatterParser::Parser.parse_file(file_path)
    front_matter = parsed.front_matter
    front_matter["date"] = date
    front_matter["templateKey"] = "blog-post"
    front_matter["path"] ||= path
    front_matter["path"] = File.join("/", front_matter["path"])
    front_matter["description"] = ""
    # front_matter["abstract"] = truncate_words(Sanitize.fragment(parsed.content))

    images = Nokogiri::HTML(parsed.content).xpath("//img/@src")
    first_image = images.first
    if first_image && !first_image.include?("large")
      front_matter["image"] = File.basename(first_image.value)
      #puts front_matter["image"]
    end

    fixed_content = parsed.content

    # Generate directory for each post
    new_post_dir = File.join(posts_dir, filename.gsub(".", ""))
    FileUtils.mkdir_p new_post_dir

    # Change image paths and move images into the local directory
    move_files(images, fixed_content, new_post_dir, file_path)

    # Change links and move files into the local directory
    links = Nokogiri::HTML(fixed_content).xpath("//a/@href")
    move_files(links, fixed_content, new_post_dir, file_path)

    # Write new post content into post directory
    open(File.join(new_post_dir, "index.md"), 'w+') do |post|
      post.puts front_matter.to_yaml
      post.puts "---"
      post.puts ""
      post.puts fixed_content
    end

    # Remove the old file
    File.delete(file_path)

    # puts file_path

  end
end