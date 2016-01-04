/* global angular */
(function () {
  angular.module('app').controller('scriptController', ['scriptService', ScriptController])

  function ScriptController (scriptService) {
    var self = this
    self.suggestions = scriptService.find().slice(0, 4)
    self.loading = false
    self.showExitPrompt = false
    self.updateSuggestions = function (searchString) {
      if (searchString) {
        self.showExitPrompt = false
      }
      self.suggestions = scriptService.find(searchString).slice(0, 4)
    }
    self.runScript = function (string) {
      if (!string) {
        if (self.showExitPrompt) {
          window.close()
        } else {
          self.showExitPrompt = true
        }
      } else {
        if (self.suggestions[0]) {
          self.loading = true
          scriptService.run(self.suggestions[0], function (code) {
            window.close()
          })
        }
      }
    }
  }
})()
