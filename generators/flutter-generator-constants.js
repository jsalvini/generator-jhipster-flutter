const MIN_SDK_VERSION = '21';
const TARGET_SDK_VERSION = '33';
const MAIN_DIR = 'flutter_app/';
const MAIN_SRC_DIR = `${MAIN_DIR}lib/`;
const ANDROID_SRC_DIR = `${MAIN_DIR}android/`;
const IOS_SRC_DIR = `${MAIN_DIR}ios/`;
const MAIN_TEST_DIR = `${MAIN_DIR}test/`;
const INTELLIJ_CONFIG_DIR = `${MAIN_DIR}.idea/runConfigurations/`;

const LANGUAGES = [
    { name: 'Spanish', dispName: 'Español', value: 'es' },
];

const FLUTTER_FILES = {
    common: [
        {
            path: MAIN_DIR,
            templates: [
                '.gitignore',
                'build.yaml',
                'dotenv',
                'pubspec.yaml',
                'README.md',
            ],
        },
    ],
    flutterApp: [
        {
            path: MAIN_SRC_DIR,
            templates: [
                'app.dart',
                'environment.dart',
                'main_prod.dart',
                'main.dart',
            ],
        },
    ],
    core: [
        {
            path: MAIN_SRC_DIR,
            templates: [
                'core/constants/app_data.dart',
                'core/constants/constants.dart',
                'core/constants/message_validation.dart',
                'core/constants/expresiones_regulares.dart',
                'core/exceptions/exception.dart',
                'core/exceptions/failure.dart',
                'core/router/routes.dart',
                'core/router/app_router.dart',
                'core/theme/bloc/theme_bloc.dart',
                'core/theme/bloc/theme_event.dart',
                'core/theme/themes.dart',
                'core/widgets/error_view.dart',
                'core/widgets/no_data.dart',
                'core/core.dart',
            ],
        },
    ],
    shared: [
        {
            path: MAIN_SRC_DIR,
            templates: [
                'shared/exceptions/app_exception.dart',
                'shared/models/error_response.dart',
                'shared/models/jwt_token.dart',
                'shared/repository/account_repository.dart',
                'shared/repository/repository.dart',
                'shared/storage/preferences.dart',
                'shared/utils/http_utils.dart',
                'shared/utils/custom_date_time.dart',
                'shared/utils/custom_scroll_behavior.dart',
                'shared/utils/filter_maps.dart',
                'shared/utils/json_serializable.dart',
                'shared/utils/utils.dart',
                'shared/utils/validate_json.dart',
                'shared/widgets/loading_indicator_widget.dart',
                'shared/widgets/custom_app_bar.dart',
                'shared/widgets/custom_drawer.dart',
                'shared/widgets/custom_layout.dart',
                'shared/widgets/custom_snack_bar.dart',
                'shared/widgets/filter_table.dart',
                'shared/widgets/view_json_dialog.dart',
                'shared/widgets/widgets.dart',
            ],
        },
    ],
    error: [
        {
            path: MAIN_SRC_DIR,
            templates: [
                'error/views/not_found_screen.dart',
                'error/error.dart',
            ],
        },
    ],
    splash: [
        {
            path: MAIN_SRC_DIR,
            templates: [
                'splash/views/splash_screen.dart',
                'splash/splash_routes.dart',
                'splash/splash.dart',
            ],
        },
    ],
    main: [
        {
            path: MAIN_SRC_DIR,
            templates: [
                'home/bloc/home_bloc.dart',
                'home/bloc/home_event.dart',
                'home/bloc/home_state.dart',
                'home/views/home_screen.dart',
                'home/widgets/entity_card.dart',
                'home/home_routes.dart',
                'home/home.dart',
            ],
        },
    ],
    account: [
        {
            path: MAIN_SRC_DIR,
            templates: [
                'account/authentication/bloc/authentication_bloc.dart',
                'account/authentication/bloc/authentication_event.dart',
                'account/authentication/bloc/authentication_state.dart',
                'account/authentication/models/authentication.dart',
                'account/authentication/authentication_repository.dart',
                'account/authentication/authentication.dart',
                'account/authority/bloc/authority_bloc.dart',
                'account/authority/bloc/authority_event.dart',
                'account/authority/bloc/authority_state.dart',
                'account/authority/models/authority_form_model.dart',
                'account/authority/models/authority_model.dart',
                'account/authority/models/authority_models.dart',
                'account/authority/models/authority_response.dart',
                'account/authority/authority_repository.dart',
                'account/login/bloc/login_bloc.dart',
                'account/login/bloc/login_event.dart',
                'account/login/bloc/login_state.dart',
                'account/login/models/models.dart',
                'account/login/models/password_input.dart',
                'account/login/models/username_input.dart',
                'account/login/views/login_screen.dart',
                'account/login/widgets/login_form.dart',
                'account/login/widgets/footer_bar.dart',
                'account/login/widgets/item_info_text.dart',
                'account/login/login_routes.dart',
                'account/login/login.dart',
                'account/settings/bloc/settings_bloc.dart',
                'account/settings/bloc/settings_event.dart',
                'account/settings/bloc/settings_state.dart',
                'account/settings/models/settings_models.dart',
                'account/settings/views/settings_screen.dart',
                'account/settings/settings_routes.dart',
                'account/settings/settings.dart',
                'account/user/bloc/user_bloc.dart',
                'account/user/bloc/user_event.dart',
                'account/user/bloc/user_state.dart',
                'account/user/models/user_form_model.dart',
                'account/user/models/user_model.dart',
                'account/user/models/user_models.dart',
                'account/user/models/user_response.dart',
                'account/user/views/user_list_screen.dart',
                'account/user/views/user_table.dart',
                'account/user/views/user_update_screen.dart',
                'account/user/views/user_view_screen.dart',
                'account/user/views/widgets/user_delete_dialog.dart',
                'account/user/user_routes.dart',
                'account/user/user_repository.dart',
            ],
        },
    ],
    android: [
        {
            path: ANDROID_SRC_DIR,
            templates: [
                'app/build.gradle',
                'app/src/main/AndroidManifest.xml',
                'app/src/debug/AndroidManifest.xml',
            ],
        },
    ],
    test: [
        {
            path: MAIN_TEST_DIR,
            templates: ['widget_test.dart'],
        },
    ],
    image: [
        {
            path: MAIN_DIR,
            templates: [
                { file: 'assets/images/logo_tipre.png', method: 'copy' },
                { file: 'assets/images/logo_menu.png', method: 'copy' },
                { file: 'assets/images/banner.png', method: 'copy' },
                { file: 'assets/images/fondo.jpg', method: 'copy' },
                { file: 'assets/images/header.jpg', method: 'copy' },
                { file: 'assets/images/user.png', method: 'copy' },
                { file: 'assets/images/cloud.png', method: 'copy' },
                { file: 'assets/images/folder.png', method: 'copy' },
                { file: 'assets/lotties/error_1.json', method: 'copy' },
                { file: 'assets/lotties/error_2.json', method: 'copy' },
                { file: 'assets/lotties/loading.json', method: 'copy' },
                { file: 'assets/lotties/tipre.json', method: 'copy' },
                { file: 'assets/lotties/not_found.json', method: 'copy' },
            ],
        },
    ],
    font: [
        {
            path: MAIN_DIR,
            templates: [
                { file: 'assets/fonts/Roboto-Black.ttf', method: 'copy' },
                { file: 'assets/fonts/Roboto-BlackItalic.ttf', method: 'copy' },
                { file: 'assets/fonts/Roboto-Bold.ttf', method: 'copy' },
                { file: 'assets/fonts/Roboto-BoldItalic.ttf', method: 'copy' },
                { file: 'assets/fonts/Roboto-Italic.ttf', method: 'copy' },
                { file: 'assets/fonts/Roboto-Light.ttf', method: 'copy' },
                { file: 'assets/fonts/Roboto-LightItalic.ttf', method: 'copy' },
                { file: 'assets/fonts/Roboto-Medium.ttf', method: 'copy' },
                { file: 'assets/fonts/Roboto-MediumItalic.ttf', method: 'copy' },
                { file: 'assets/fonts/Roboto-Regular.ttf', method: 'copy' },
                { file: 'assets/fonts/Roboto-Thin.ttf', method: 'copy' },
                { file: 'assets/fonts/Roboto-ThinItalic.ttf', method: 'copy' },
            ],
        },
    ],
    intellij: [
        {
            path: INTELLIJ_CONFIG_DIR,
            templates: ['main_dart_dev.xml', 'main_dart_prod.xml'],
        },
    ],
};

const constants = {
    MIN_SDK_VERSION,
    TARGET_SDK_VERSION,
    LANGUAGES,
    MAIN_SRC_DIR,
    ANDROID_SRC_DIR,
    IOS_SRC_DIR,
    MAIN_DIR,
    FLUTTER_FILES,
    MAIN_TEST_DIR,
    INTELLIJ_CONFIG_DIR,
};

module.exports = constants;
