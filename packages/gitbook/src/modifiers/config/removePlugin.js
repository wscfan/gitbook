const togglePlugin = require('./togglePlugin');
const isDefaultPlugin = require('./isDefaultPlugin');

/**
 * Remove a plugin from a book's configuration
 * @param {Config} config
 * @param {String} plugin
 * @return {Config}
 */
function removePlugin(config, pluginName) {
    let deps = config.getPluginDependencies();

    // For default plugin, we have to disable it instead of removing from the list
    if (isDefaultPlugin(pluginName)) {
        return togglePlugin(config, pluginName, false);
    }

    // Remove the dependency from the list
    deps = deps.filterNot((dep) => {
        return dep.getName() === pluginName;
    });
    return config.setPluginDependencies(deps);
}

module.exports = removePlugin;
