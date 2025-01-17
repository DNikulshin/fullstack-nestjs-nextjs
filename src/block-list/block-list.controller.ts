import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import {
  AddBlockItemDto,
  BlockItemDto,
  BlockListDto,
  BlockListQueryDto,
} from './dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { Session } from 'inspector/promises';
import { SessionInfo } from 'src/auth/session-info.decorator';
import { SessionInfoDto } from 'src/auth/dto';
import { BlockListService } from './block-list.service';

@Controller('block-list')
@UseGuards(AuthGuard)
export class BlockListController {
  constructor(private blockListService: BlockListService) {}

  @Get()
  @ApiOkResponse({
    type: BlockListDto,
  })
  getList(
    @Query() query: BlockListQueryDto,
    @SessionInfo() session: SessionInfoDto,
  ): Promise<BlockListDto> {
    return this.blockListService.getByUser(session.id, query);
  }

  @Post('item')
  @ApiCreatedResponse({
    type: BlockItemDto,
  })
  addBlockItem(
    @Body() body: AddBlockItemDto,
    @SessionInfo() session: SessionInfoDto,
  ): Promise<BlockItemDto> {
    return this.blockListService.addItem(session.id, body);
  }

  @Delete('item/:id')
  @ApiOkResponse({
    type: BlockItemDto,
  })
  async removeBlockItem(
    @Param('id', ParseIntPipe) id: number,
    @SessionInfo() session: SessionInfoDto,
  ): Promise<BlockItemDto> {
    return await this.blockListService.removeItem(session.id, id);
  }
}
