const flutterFiles = {
    client: [
        {
            path: 'lib/',
            templates: [
                {
                    file: 'models/entity.model',
                    renameTo: (generator) => `${generator.context.entityFolderName}/models/${generator.context.entityFileName}_model.dart`,
                },
                {
                    file: 'models/entity.form.model',
                    renameTo: (generator) => `${generator.context.entityFolderName}/models/${generator.context.entityFileName}_form_model.dart`,
                },
                {
                    file: 'models/entity.models',
                    renameTo: (generator) => `${generator.context.entityFolderName}/models/${generator.context.entityFileName}_models.dart`,
                },
                {
                    file: 'models/entity.response',
                    renameTo: (generator) => `${generator.context.entityFolderName}/models/${generator.context.entityFileName}_response.dart`,
                },
                {
                    file: 'bloc/entity.state',
                    renameTo: (generator) => `${generator.context.entityFolderName}/bloc/${generator.context.entityFileName}_state.dart`,
                },
                {
                    file: 'bloc/entity.events',
                    renameTo: (generator) => `${generator.context.entityFolderName}/bloc/${generator.context.entityFileName}_events.dart`,
                },
                {
                    file: 'bloc/entity.bloc',
                    renameTo: (generator) => `${generator.context.entityFolderName}/bloc/${generator.context.entityFileName}_bloc.dart`,
                },
                {
                    file: 'views/entity.update.screen',
                    renameTo: (generator) => `${generator.context.entityFolderName}/views/${generator.context.entityFileName}_update_screen.dart`,
                },
                {
                    file: 'views/entity.view.screen',
                    renameTo: (generator) => `${generator.context.entityFolderName}/views/${generator.context.entityFileName}_view_screen.dart`,
                },
                {
                    file: 'views/entity.list',
                    renameTo: (generator) => `${generator.context.entityFolderName}/views/${generator.context.entityFileName}_list_screen.dart`,
                },
                {
                    file: 'views/entity.table',
                    renameTo: (generator) => `${generator.context.entityFolderName}/views/${generator.context.entityFileName}_table.dart`,
                },
                {
                    file: 'views/widgets/entity.delete.dialog',
                    renameTo: (generator) => `${generator.context.entityFolderName}/views/widgets/${generator.context.entityFileName}_delete_dialog.dart`,
                },
                {
                    file: 'views/widgets/entity.filter.dialog',
                    renameTo: (generator) => `${generator.context.entityFolderName}/views/widgets/${generator.context.entityFileName}_filter_dialog.dart`,
                },
                {
                    file: 'entity.repository',
                    renameTo: (generator) => `${generator.context.entityFolderName}/${generator.context.entityFileName}_repository.dart`,
                },
                {
                    file: 'entity.routes',
                    renameTo: (generator) => `${generator.context.entityFolderName}/${generator.context.entityFileName}_routes.dart`,
                },
            ],
        },
    ],
};

module.exports = {
    flutterFiles,
};
