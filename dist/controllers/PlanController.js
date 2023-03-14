"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.update = exports.show = exports.store = exports.index = void 0;
const Plan_1 = __importDefault(require("../models/Plan"));
exports.index = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const plans = yield Plan_1.default.findAll();
    if (!plans)
        return res.status(404).json({ message: "No hay planes" });
    return res.json(plans);
});
exports.store = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre, maxConnect, maxTime, maxUsers } = req.body;
    try {
        const plan = yield Plan_1.default.create({ nombre, maxConnect, maxTime, maxUsers });
        yield plan.reload();
        return res.status(200).json(plan);
    }
    catch (error) {
        return res.status(404).json({ message: "Hubo un error al crear el plan" });
    }
});
exports.show = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { planId } = req.params;
    const plan = yield Plan_1.default.findByPk(planId);
    if (!plan)
        return res.status(404).json({ message: "No se encontro el plan" });
    return res.status(200).json(plan);
});
exports.update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { planId } = req.params;
    const plan = yield Plan_1.default.findByPk(planId);
    if (!plan)
        return res.status(404).json({ message: "No se encontro el plan" });
    plan.nombre = req.body.nombre || plan.nombre;
    plan.maxConnect = req.body.maxConnect || plan.maxConnect;
    plan.maxTime = req.body.maxTime || plan.maxTime;
    plan.maxUsers = req.body.maxUsers || plan.maxUsers;
    try {
        const planModificado = yield plan.update({ nombre: plan.nombre, maxConnect: plan.maxConnect, maxTime: plan.maxTime, maxUsers: plan.maxUsers });
        return res.status(200).json(planModificado);
    }
    catch (error) {
        return res.status(404).json({ message: "Hubo un error al modificar el plan" });
    }
});
exports.remove = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { planId } = req.params;
    const plan = yield Plan_1.default.findByPk(planId);
    if (!plan)
        return res.status(404).json({ message: "No se encontro el plan" });
    try {
        yield plan.destroy();
        return res.status(200).json({ message: "Plan eliminado" });
    }
    catch (error) {
        return res.status(404).json({ message: "Hubo un error al eliminar el plan" });
    }
});
