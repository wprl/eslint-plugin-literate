# eslint-plugin-comments

Checks comment coverage.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-comments`:

```
$ npm install eslint-plugin-comments --save-dev
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


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "comments/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





