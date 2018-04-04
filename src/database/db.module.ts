import { Module } from '@nestjs/common';
import { db } from '../providers/db.providers';
//import { sequelizeProviders } from '../providers/sequelize.providers';

@Module({
  components: [...db],
  exports: [...db],
})
export class DatabaseModule {}