import { NextFunction, Request, Response } from "express";
import { Country } from "../entities/Country.entity";
import { AppDataSource } from "../utils/data-source";

export class CountryController {
  private userRepository = AppDataSource.getRepository(Country);

  async all(request: Request, response: Response, next: NextFunction) {
    return this.userRepository.find();
  }

  async one(request: Request, response: Response, next: NextFunction) {
    return this.userRepository.findOne({
      where: { id: parseInt(request.params.id, 10) },
    });
  }

  async save(request: Request, response: Response, next: NextFunction) {
    return this.userRepository.save(request.body);
  }

  async update(request: Request, response: Response, next: NextFunction) {
    return this.userRepository
      .createQueryBuilder()
      .update(Country)
      .set(request.body)
      .where({ id: parseInt(request.params.id, 10) })
      .execute();
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    return this.userRepository.delete(parseInt(request.params.id));
  }
}
