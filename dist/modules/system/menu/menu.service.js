"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "MenuService", {
    enumerable: true,
    get: function() {
        return MenuService;
    }
});
const _common = require("@nestjs/common");
const _typeorm = require("@nestjs/typeorm");
const _typeorm1 = require("typeorm");
const _constants = require("../../../constants");
const _database = require("../../../database");
const _shared = require("../../../shared");
const _utils = require("../../../utils");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
function _ts_param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
let MenuService = class MenuService {
    async handleFindList(dto) {
        return await this.menuModel.find({
            order: {
                orderNum: 'ASC'
            },
            where: {
                ...dto
            }
        });
    }
    async handleGetTree() {
        const data = await this.menuModel.find({
            where: {
                status: _constants.ENTITY_STATUS.NORMAL,
                visible: _constants.ENTITY_VISIBLE.YES
            }
        });
        return _utils.TransformUtil.listToTree(data, {
            title: 'menuName',
            key: 'id',
            parentKey: 'parentId'
        });
    }
    async handleCreate(dto) {
        const { userName } = this.contextService.getPayload();
        await this.menuModel.insert({
            ...dto,
            createBy: userName
        });
    }
    async handleUpdate(id, dto) {
        const { userName } = this.contextService.getPayload();
        const existMenu = await this.menuModel.findOneBy({
            id
        });
        if (!existMenu) {
            throw new _common.BadRequestException(_constants.MESSAGES.MENU_NOT_EXIST);
        }
        await this.menuModel.update(id, {
            ...dto,
            updateBy: userName
        });
    }
    async handleDeleteMany(dto) {
        const { ids } = dto;
        await this.menuModel.delete(ids);
    }
    constructor(menuModel, contextService){
        this.menuModel = menuModel;
        this.contextService = contextService;
    }
};
MenuService = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_param(0, (0, _typeorm.InjectRepository)(_database.SysMenuEntity)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _typeorm1.Repository === "undefined" ? Object : _typeorm1.Repository,
        typeof _shared.ContextService === "undefined" ? Object : _shared.ContextService
    ])
], MenuService);

//# sourceMappingURL=menu.service.js.map