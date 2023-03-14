import { Request, Response } from "express";
import Plan from "../models/Plan";
import { getIO } from "../libs/socket";


type IndexQuery = {
  searchParam: string;
  pageNumber: string;
};

export const index = async (req: Request, res: Response): Promise<Response> => {
  const plans = await Plan.findAll();
  if(!plans) return res.status(404).json({message: "No hay planes"});
  return res.json(plans);
};

export const store = async (req: Request, res: Response): Promise<Response> => {


  const { nombre, maxConnect, maxTime, maxUsers } = req.body;

  try {
    const plan = await Plan.create({nombre, maxConnect, maxTime, maxUsers});
    await plan.reload();
    return res.status(200).json(plan);
  } catch (error) {
    return res.status(404).json({message: "Hubo un error al crear el plan"});
  }
};

export const show = async (req: Request, res: Response): Promise<Response> => {
    
  const { planId } = req.params;

  const plan = await Plan.findByPk(planId);

  if(!plan) return res.status(404).json({message: "No se encontro el plan"});
  return res.status(200).json(plan);
  
};

export const update = async (
  req: Request,
  res: Response
): Promise<Response> => {
    
  const { planId } = req.params;

  const plan = await Plan.findByPk(planId);

  if(!plan) return res.status(404).json({message: "No se encontro el plan"});

  plan.nombre = req.body.nombre || plan.nombre;
  plan.maxConnect = req.body.maxConnect || plan.maxConnect;
  plan.maxTime = req.body.maxTime || plan.maxTime;
  plan.maxUsers = req.body.maxUsers || plan.maxUsers;

  try {
    const planModificado = await plan.update({ nombre: plan.nombre, maxConnect: plan.maxConnect, maxTime: plan.maxTime, maxUsers: plan.maxUsers });
    return res.status(200).json(planModificado);
  } catch (error) {
    return res.status(404).json({message: "Hubo un error al modificar el plan"});
  }

};

export const remove = async (
  req: Request,
  res: Response
): Promise<Response> => {

  const { planId } = req.params;

  const plan = await Plan.findByPk(planId);

  if(!plan) return res.status(404).json({message: "No se encontro el plan"});

  try {
    await plan.destroy();
    return res.status(200).json({message: "Plan eliminado"});
  } catch (error) {
    return res.status(404).json({message: "Hubo un error al eliminar el plan"});
  }

};
