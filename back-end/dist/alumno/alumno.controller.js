"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlumnoController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const alumno_service_1 = require("./alumno.service");
const create_alumno_dto_1 = require("./dto/create-alumno.dto");
const basic_auth_guard_1 = require("../auth/basic-auth.guard");
const common_2 = require("@nestjs/common");
let AlumnoController = class AlumnoController {
    alumnoService;
    constructor(alumnoService) {
        this.alumnoService = alumnoService;
    }
    create(dto) {
        return this.alumnoService.create(dto);
    }
    async findByGrado(grado) {
        if (grado.toLowerCase() === 'all') {
            return this.alumnoService.findAll();
        }
        return this.alumnoService.findByGrado(grado);
    }
    async findOne(id) {
        return this.alumnoService.findOneById(id);
    }
    async update(id, updateAlumnoDto) {
        return this.alumnoService.update(id, updateAlumnoDto);
    }
    async delete(id) {
        return this.alumnoService.delete(id);
    }
};
exports.AlumnoController = AlumnoController;
__decorate([
    (0, common_1.UseGuards)(basic_auth_guard_1.BasicAuthGuard),
    (0, common_1.Post)('crear-alumno'),
    __param(0, (0, common_1.Body)(new common_2.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_alumno_dto_1.CreateAlumnoDto]),
    __metadata("design:returntype", void 0)
], AlumnoController.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)(basic_auth_guard_1.BasicAuthGuard),
    (0, common_1.Get)('consultar-alumno/:grado'),
    __param(0, (0, common_1.Param)('grado')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AlumnoController.prototype, "findByGrado", null);
__decorate([
    (0, common_1.UseGuards)(basic_auth_guard_1.BasicAuthGuard),
    (0, common_1.Get)('alumno/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AlumnoController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(basic_auth_guard_1.BasicAuthGuard),
    (0, common_1.Put)('alumno/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_alumno_dto_1.CreateAlumnoDto]),
    __metadata("design:returntype", Promise)
], AlumnoController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(basic_auth_guard_1.BasicAuthGuard),
    (0, common_1.Delete)('alumno/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AlumnoController.prototype, "delete", null);
exports.AlumnoController = AlumnoController = __decorate([
    (0, swagger_1.ApiTags)('alumnos'),
    (0, swagger_1.ApiBasicAuth)(),
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [alumno_service_1.AlumnoService])
], AlumnoController);
//# sourceMappingURL=alumno.controller.js.map