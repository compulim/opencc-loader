opencc-loader
=============

Webpack loader for converting Traditional Chinese into Simplified Chinese (and vice versa) using [Open Chinese Convert](https://github.com/byvoid/opencc) and [`node-opencc`](https://github.com/compulim/node-opencc) package.

Usage
-----

In your `webpack.config.js`, add `opencc-loader` as one of the loader for your JavaScript/JSX/TypeScript or text files. The following example translate from Traditional Chinese (Hong Kong) to Simplified Chinese.

```js
{
  test   : /\.jsx?$/,
  exclude: /(node_modules|bower_components)/,
  loaders: [
    'react-hot-loader',
    'babel-loader?presets[]=react&presets[]=es2015&presets[]=es2016&presets[]=es2017',
    'opencc-loader?translation=hongKongToSimplified'
  ]
}
```

Supported translation
---------------------

| Type                            | Translation                               |
| ------------------------------- | ----------------------------------------- |
| `hongKongToSimplified`          | Hong Kong to Simplified Chinese           |
| `simplifiedToHongKong`          | Simplified Chinese to Hong Kong           |
| `simplifiedToTraditional`       | Simplified Chinese to Traditional Chinese |
| `simplifiedToTaiwan`            | Simplified Chinese to Taiwan              |
| `simplifiedToTaiwanWithPhrases` | Simplified Chinese to Taiwan with phrases |
| `traditionalToHongKong`         | Traditional Chinese to Hong Kong          |
| `traditionalToSimplified`       | Traditional Chinese to Simplified Chinese |
| `traditionalToTaiwan`           | Traditional Chinese to Taiwan             |
| `taiwanToSimplified`            | Taiwan to Simplified Chinese              |
| `taiwanToSimplifiedWithPhrases` | Taiwan to Simplified Chinese with phrases |

For details of the translation, please refer to [`node-opencc`](https://github.com/compulim/node-opencc).


Contributions
-------------

Like us? [Star us](https://github.com/compulim/opencc-loader/stargazers).

Want to make it better? Fork us and send us a [pull request](https://github.com/compulim/opencc-loader/pulls) or file an [issue](https://github.com/compulim/opencc-loader/issues).
