"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicAuthGuard = void 0;
const common_1 = require("@nestjs/common");
let BasicAuthGuard = class BasicAuthGuard {
    canActivate(context) {
        const req = context.switchToHttp().getRequest();
        const auth = req.headers.authorization;
        if (!auth || !auth.startsWith('Basic ')) {
            throw new common_1.UnauthorizedException('Falta cabecera Basic Auth');
        }
        const [user, pass] = Buffer.from(auth.split(' ')[1], 'base64')
            .toString()
            .split(':');
        if (user === process.env.BASIC_AUTH_USER &&
            pass === process.env.BASIC_AUTH_PASS) {
            return true;
        }
        throw new common_1.UnauthorizedException('Credenciales inválidas');
    }
};
exports.BasicAuthGuard = BasicAuthGuard;
exports.BasicAuthGuard = BasicAuthGuard = __decorate([
    (0, common_1.Injectable)()
], BasicAuthGuard);
//# sourceMappingURL=basic-auth.guard.js.map