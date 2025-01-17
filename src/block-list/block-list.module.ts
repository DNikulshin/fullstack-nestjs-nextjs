import { Module } from '@nestjs/common';
import { BlockListService } from './block-list.service';
import { BlockListController } from './block-list.controller';
import { DbService } from 'src/db/db.service';
import { DbModule } from 'src/db/db.module';

@Module({
  imports: [DbModule],
  providers: [BlockListService],
  controllers: [BlockListController],
  exports: [BlockListService],
})
export class BlockListModule {}
