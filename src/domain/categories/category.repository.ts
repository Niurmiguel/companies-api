import CreateCategoryDto from '@api/categories/dto/create.dto';
import UpdateCategoryDto from '@api/categories/dto/update.dto';

export interface ICategoryRepository {
  getAll();
  getById(userId: number);
  create(category: CreateCategoryDto);
  updateById(
    id: number,
    category: UpdateCategoryDto,
  ): Promise<UpdateCategoryDto>;
  delete(id: number);
}
