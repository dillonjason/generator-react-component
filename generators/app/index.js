'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const _ = require('lodash');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the polished ' + chalk.red('generator-react-component') + ' generator!'
    ));

    const prompts = [{
      type: 'input',
      name: 'appName',
      message: 'What is the name of your project?',
      default: this.appname.replace(/\s+/g, '-'),
      save: true
    }];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    let context = {
      appName: this.props.appName,
      appFileName: _.snakeCase(this.props.appName),
      appComponentName: this.props.appName[0].toUpperCase() + _.camelCase(this.props.appName).slice(1)
    };

    this.fs.copyTpl(
      this.templatePath(),
      this.destinationPath(),
      context,
      null,
      { globOptions: { dot: true, ignore: '_node_component.jsx' } }
    );

    this.fs.copy(`${this.destinationPath()}/src/_node_component.jsx`, `${this.destinationPath()}/src/${context.appFileName}.jsx`)
  }

  install() {
    this.installDependencies({
      npm: true,
      bower: false
    })
  }
};
