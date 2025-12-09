"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const logger_interceptor_1 = require("./shared/interceptors/logger.interceptor");
const path_1 = require("path");
const cors = require("cors");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(cors());
    app.useGlobalPipes(new common_1.ValidationPipe({ transform: true }));
    app.useGlobalInterceptors(new logger_interceptor_1.LoggerInterceptor());
    app.setGlobalPrefix('api');
    app.useStaticAssets((0, path_1.join)(process.cwd(), 'client/build'));
    app.useStaticAssets((0, path_1.join)(process.cwd(), 'uploads/images'), {
        prefix: '/uploads/images',
    });
    app.use((req, res, next) => {
        if (req.originalUrl.startsWith('/api') ||
            req.originalUrl.startsWith('/uploads/images')) {
            return next();
        }
        res.sendFile((0, path_1.join)(process.cwd(), 'client/build', 'index.html'));
    });
    await app.listen(8000);
    console.log('Server running on http://localhost:8000');
}
bootstrap();
//# sourceMappingURL=main.js.map