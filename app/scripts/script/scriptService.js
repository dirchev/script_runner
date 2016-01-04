/* global angular */
(function () {
  var fs = require('fs')

  // load scripts folder
  var config = require(process.cwd() + '/config.js')

  // list all files from scripts folder
  var files = fs.readdirSync(config.scriptsPath)

  // remove '.sh' from file names
  var commandTitles = files.map(function (file) {
    return file.slice(0, file.lastIndexOf('.sh'))
  })

  angular.module('app').service('scriptService', [scriptService])

  function scriptService () {
    var find = function (string) {
      if (!string) {
        return commandTitles
      }
      var matches = []
      commandTitles.forEach(function (command) {
        if (command.indexOf(string) !== -1) {
          matches.push(command)
        }
      })
      return matches
    }

    var run = function (string, done) {
      var path = require('path')
      var exec = require('child_process').exec
      exec(path.join(config.scriptsPath, (string + '.sh')))
      done()
    }

    return {
      find: find,
      run: run
    }
  }
})()
