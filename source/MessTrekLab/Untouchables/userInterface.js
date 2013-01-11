UserInterface = function(commandName, commandParameter, target) {
    this.commandName = commandName;
    this.commandParameter = commandParameter;
    this.target = target;
};

UserInterface.prototype = {
    writeLine: function(message) {
        $("#dialogue").append("<p>" + message + "</p>");
    },
    parameter: function (parameterName) {
        if(parameterName === "command") {
            return this.commandName;
        }
        return this.commandParameter;
    },
    variable: function(variableName) {
        if(variableName === "target") {
            return this.target;
        }
        throw "Unknown variable " + variableName;
    }
};
