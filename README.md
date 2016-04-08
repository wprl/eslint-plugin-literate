# eslint-plugin-literate

Verifies minimum number of comments per file.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm install --save-dev eslint
```

Next, install `eslint-plugin-literate`:

```
$ npm install --save-dev eslint-plugin-literate
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-literate` globally.

## Usage

Add `comment` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "literate"
    ]
}
```


Then configure the rules you want to use under the rules section.  The second option here (10) is the minimum percentage of non-blank lines in a files that must be a comment.

```json
{
    "rules": {
        "literate/comment-coverage": [ 2, 10 ]
    }
}
```
