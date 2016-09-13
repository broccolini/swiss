# Swiss Jekyll Theme

Swiss is a bold Jekyll theme inspired by Swiss design and the works of Massimo Vignelli. This theme lends itself well to sites heavy on written content.

### Features:
* Mobile-first design ensures this theme performs fastest on mobile while scaling elegantly to desktop-size screens.
* Designed for blogs and sites heavy on written content, with bold typography styles, homepage summaries, and previous/next snippets.
* Supports a wide range of HTML elements and markdown.
* Flexible styles that can be reused for customization without adding additional CSS.
* Dynamically generated navigation links. See docs for adding pages with specific post category for-loops.

In this directory, you'll find the files you need to be able to package up your theme into a gem. Put your layouts in `_layouts`, your includes in `_includes` and your sass in `_sass`. To experiment with this code, add some sample content and run `bundle exec jekyll serve` – this directory is setup just like a Jekyll site!

## Installation

Add this line to your Jekyll site's Gemfile:

```ruby
gem "swiss"
```

And add this line to your Jekyll site:

```yaml
theme: swiss
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install swiss

## Usage

To change themes, rename `theme-black.scss` in `css/styles.scss`:

```scss
@import
        "variables.scss",
        "theme-black.scss", // set theme here
        "base",
        "components",
        "utilities"
;
```

Change to one of the following themes, such as `theme-blue`.
- blue
- gray
- magenta
- orange
- red
- white
- yellow

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/[USERNAME]/hello. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## Development

To set up your environment to develop this theme, run `bundle install`.

You theme is setup just like a normal Jelyll site! To test your theme, run `bundle exec jekyll serve` and open your browser at `http://localhost:4000`. This starts a Jekyll server using your theme. Add pages, documents, data, etc. like normal to test your theme's contents. As you make modifications to your theme and to your content, your site will regenerate and you should see the changes in the browser after a refresh, just like normal.

When your theme is released, only the files in `_layouts`, `_includes`, and `_sass` tracked with Git will be released.

## License

The theme is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
