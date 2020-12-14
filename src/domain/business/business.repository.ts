import CreateBusinessDto from "@api/business/dto/create.dto";
import UpdateBusinessDto from "@api/business/dto/update.dto";

export interface IBusinessRepository {
  getAll();
  getById(userId: number);
  create(business: CreateBusinessDto);
  updateById(
    id: number,
    business: UpdateBusinessDto,
  ): Promise<UpdateBusinessDto>;
  delete(id: number);
}
