# coding: utf-8

Gem::Specification.new do |spec|
  spec.name          = "jekyll-swiss-sass-fix"
  spec.version       = "1.0.1"
  spec.authors       = ["timothyarthur"]
  spec.email         = ["tarthur@ualberta.ca"]

  spec.summary       = %q{A bold typographic theme for Jekyll, inspired by Swiss design. Patched for Sass Dart 3.0}
  spec.homepage      = "https://github.com/timothyarthur/swiss_sass_fix"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select do |f|
    f.match(%r{^(assets|_(includes|layouts|sass)/|(LICENSE|README)((\.(txt|md|markdown)|$)))}i)
  end

  spec.add_development_dependency "jekyll", "~> 4.3"
  spec.add_development_dependency "bundler", "~> 2.4"
  spec.add_development_dependency "rake", "~> 13.0"
end
