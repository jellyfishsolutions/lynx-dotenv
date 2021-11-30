import { ConfigBuilder } from 'lynx-framework';
import SimpleModule from 'lynx-framework/simple.module';

export default class DotEnvModule extends SimpleModule {

    constructor() {
        super();
        throw 'The DotEnvModule is just an utility. You cannot create a new instance of this module!'
    }

    /**
     * Load the current .env into the configuration builder.
     * Only a subset of the ConfigBuilder is supported. Please refer to the .env in the repository.
     * @param into the configuration builder
     * @returns the updated configuration builder
     */
    static loadEnv(into: ConfigBuilder): ConfigBuilder {
        const dotenv = require('dotenv');
        dotenv.config();

        if (process.env.DB_TYPE) {
            into.setDatabase(process.env.DB_TYPE);
        }
        if (process.env.DB_NAME) {
            into.setDatabase(process.env.DB_NAME);
        }
        if (process.env.DB_HOST) {
            into.setDatabaseHost(process.env.DB_HOST);
        }
        if (process.env.DB_USER && process.env.DB_PASSWORD) {
            into.setDatabaseLogin(process.env.DB_USER, process.env.DB_PASSWORD);
        }
        if (process.env.DB_PORT) {
            into.setDatabasePort(Number.parseInt(process.env.DB_PORT));
        }

        if (process.env.SESSION_SECRET) {
            into.setSessionSecret(process.env.SESSION_SECRET);
        }

        if (process.env.UPLOAD_PATH) {
            into.setUploadPath(process.env.UPLOAD_PATH);
        }
        if (process.env.CACHE_PATH) {
            into.setCachePath(process.env.CACHE_PATH);
        }
        if (process.env.ENABLE_IMAGE_CACHE == 'true') {
            into.enableCachingImages();
        }

        if (process.env.DEFAULT_LANGUAGE) {
            into.setDefaultLanguage(process.env.DEFAULT_LANGUAGE);
        }

        if (process.env.MAILER_SENDER) {
            into.setMailerSender(process.env.MAILER_SENDER);
        }

        if (process.env.MAILER_USER && process.env.MAILER_PASSWORD) {
            into.setMailerAuth(process.env.MAILER_USER, process.env.MAILER_PASSWORD)
        }

        if (process.env.MAILER_HOST && process.env.MAILER_PORT && process.env.MAILER_SECURE) {
            into.setMailerServer(process.env.MAILER_HOST, Number.parseInt(process.env.MAILER_PORT), process.env.MAILER_SECURE == 'true');
        }

        return into;
    }


}