const vscode = require('vscode');

function activate(context) {
    const disposable = vscode.commands.registerCommand(
        'toggleProblemsVisibility.toggle',
        async () => {
            const config = vscode.workspace.getConfiguration('problems');
            const current = config.get('visibility', true);

            await config.update('visibility', !current, vscode.ConfigurationTarget.Global);

            vscode.window.setStatusBarMessage(
                `Problems visibility: ${!current ? 'ON' : 'OFF'}`,
                2000
            );
        }
    );

    context.subscriptions.push(disposable);
}

function deactivate() { }

module.exports = {
    activate,
    deactivate
};
