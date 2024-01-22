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
    { name: 'English', dispName: 'English', value: 'en' },
];

const FLUTTER_FILES = {
    common: [
        {
            path: MAIN_DIR,
            templates: [
                '.gitignore',
                'build.yaml',
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
                'core/constants/message_validation.dart',
                'core/exceptions/exception.dart',
                'core/exceptions/failure.dart',
                'core/router/routes.dart',
                'core/router/app_router.dart',
                'core/theme/bloc/theme_bloc.dart',
                'core/theme/bloc/theme_event.dart',
                'core/theme/themes.dart',
                'core/widgets/error_view.dart',
                'core/core.dart',
            ],
        },
    ],
    shared: [
        {
            path: MAIN_SRC_DIR,
            templates: [
                'shared/exceptions/app_exception.dart',
                'shared/models/entity_arguments.dart',
                'shared/models/error_response.dart',
                'shared/models/jwt_token.dart',
                'shared/models/login_request.dart',
                'shared/models/user.dart',
                'shared/repository/account_repository.dart',
                'shared/repository/authentication_repository.dart',
                'shared/repository/repository.dart',
                'shared/utils/http_utils.dart',
                'shared/widgets/loading_indicator_widget.dart',
                'shared/widgets/drawer_widget.dart',
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
                'account/authentication/authentication.dart',
                'account/login/bloc/login_bloc.dart',
                'account/login/bloc/login_event.dart',
                'account/login/bloc/login_state.dart',
                'account/login/models/models.dart',
                'account/login/models/password_input.dart',
                'account/login/models/username_input.dart',
                'account/login/views/login_form.dart',
                'account/login/views/login_screen.dart',
                'account/login/login_routes.dart',
                'account/login/login.dart',
                'account/settings/bloc/settings_bloc.dart',
                'account/settings/bloc/settings_event.dart',
                'account/settings/bloc/settings_state.dart',
                'account/settings/models/settings_models.dart',
                'account/settings/views/settings_screen.dart',
                'account/settings/settings_routes.dart',
                'account/settings/settings.dart',
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
                { file: 'assets/images/jhipster_512.png', method: 'copy' },
                { file: 'assets/images/logo-jhipster.png', method: 'copy' },
                { file: 'assets/images/logo_tipre.png', method: 'copy' },
                { file: 'assets/images/logo_menu.png', method: 'copy' },
                { file: 'assets/images/banner.png', method: 'copy' },
                { file: 'assets/images/user.png', method: 'copy' },
                { file: 'assets/images/progress_indicator.png', method: 'copy' },
                { file: 'assets/lotties/error_1.json', method: 'copy' },
                { file: 'assets/lotties/error_2.json', method: 'copy' },
                { file: 'assets/lotties/tipre.json', method: 'copy' },
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
