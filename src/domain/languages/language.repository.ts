import CreateCategoryDto from '@api/categories/dto/create.dto';
import UpdateCategoryDto from '@api/categories/dto/update.dto';
import CreateLangDto from '@api/languages/dto/create.dto';
import UpdateLangDto from '@api/languages/dto/update.dto';

export interface ILanguageRepository {
  getAll();
  getById(userId: number);
  create(category: CreateLangDto);
  updateById(id: number, language: UpdateLangDto): Promise<UpdateLangDto>;
  delete(id: number);
}
