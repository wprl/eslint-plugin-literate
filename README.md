# eslint-plugin-comments

Verifies minimum amount of comments per file.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm install --save-dev eslint
```

Next, install `eslint-plugin-comments`:

```
$ npm install --save-dev eslint-plugin-comments
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-comments` globally.

## Usage

Add `comments` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "comments"
    ]
}
```


Then configure the rules you want to use under the rules section.  The second option here (10) is the minimum percentage of non-blank lines in a files that must be comments.

```json
{
    "rules": {
        "comments/coverage": [ 2, 10 ]
    }
}
```
