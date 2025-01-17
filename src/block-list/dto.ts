import { ApiProperty } from '@nestjs/swagger';
import { $Enums } from '@prisma/client';
import { IsIn, IsNotEmpty, IsOptional } from 'class-validator';

export class BlockItemDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  blockListId: number;

  @ApiProperty({
    enum: [$Enums.blockItemType.KeyWord, $Enums.blockItemType.WebSite],
  })
  type: $Enums.blockItemType;

  @ApiProperty()
  data: string;

  @ApiProperty()
  createdAt: Date;
}

export class BlockListQueryDto {
  @ApiProperty({ required: false })
  @IsOptional()
  q?: string;
}

export class BlockListDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  ownerId: number;

  @ApiProperty({
    type: [BlockItemDto],
  })
  items: BlockItemDto[];
}

export class AddBlockItemDto {
  @ApiProperty({
    enum: [$Enums.blockItemType.KeyWord, $Enums.blockItemType.WebSite],
  })
  @IsIn([$Enums.blockItemType.KeyWord, $Enums.blockItemType.WebSite])
  type: $Enums.blockItemType;

  @ApiProperty()
  data: string;
}
