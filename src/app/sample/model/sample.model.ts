import {Attribute, Column, DateFormat, Reference, XssRequest} from '@/core/decorator';
import {
  ArrayNotEmpty,
  IsArray,
  IsBoolean,
  IsDate,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsString,
  MaxLength,
  ValidateNested
} from '@/core/decorator/validator';

import {TypeAEnum} from '@/app/sample/enum/type-a.enum';
import {TypeBEnum} from '@/app/sample/enum/type-b.enum';

export namespace SampleModel {
  export class ToClass {
    @Attribute('userName')
    @Column('user_name')
    @XssRequest()
    @IsString()
    @IsNotEmpty()
    @MaxLength(200)
    userName!: string;

    @Attribute('userFlag')
    @Column('user_flag')
    @IsBoolean()
    @IsNotEmpty()
    userFlag!: boolean;

    @Attribute('userType')
    @Reference(() => TypeAEnum)
    @Column('user_type')
    @IsNotEmpty()
    @IsEnum(TypeAEnum)
    userType!: TypeAEnum;

    @Attribute('albumType')
    @Reference(() => TypeBEnum)
    @Column('album_type')
    @IsNotEmpty()
    @IsEnum(TypeBEnum)
    albumType!: TypeBEnum;

    @Attribute('userDate')
    @Reference(() => Date)
    @DateFormat('YYYYMMDD')
    @Column('user_date')
    @IsNotEmpty()
    @IsDate()
    userDate!: Date;

    @Attribute('dateTime')
    @Reference(() => Date)
    @DateFormat('YYYY/MM/DD HH:mm:ss')
    @Column('album_date_time')
    @IsNotEmpty()
    @IsDate()
    albumDateTime!: Date;

    @Attribute('time')
    @Reference(() => Date)
    @DateFormat('HH~mm~ss')
    @Column('user_time')
    @IsNotEmpty()
    @IsDate()
    userTime!: Date;

    @Attribute('item')
    @Reference(() => SampleModel.Item)
    @Column('sample_item')
    @IsNotEmpty()
    @ValidateNested()
    item!: SampleModel.Item;

    @Attribute('items')
    @Reference(() => SampleModel.Item)
    @Column('sample_items')
    @IsArray()
    @IsNotEmpty()
    @ArrayNotEmpty()
    @ValidateNested()
    items!: SampleModel.Item[];
  }

  export class Item {
    @Attribute('id')
    @Column('item_id')
    @IsInt()
    @IsNotEmpty()
    id!: number;

    @Attribute('name')
    @Column('item_name')
    @XssRequest()
    @IsString()
    @IsNotEmpty()
    @MaxLength(200)
    name!: string;

    @Attribute('flag')
    @Column('item_flag')
    @IsBoolean()
    @IsNotEmpty()
    flag!: boolean;
  }

  export class ToInstance {
    @Attribute('userName')
    @XssRequest()
    @IsString()
    @IsNotEmpty()
    @MaxLength(200)
    userName!: string;

    @Attribute('userFlag')
    @IsBoolean()
    @IsNotEmpty()
    userFlag!: boolean;

    @Attribute('userType')
    @Reference(() => TypeAEnum)
    @IsNotEmpty()
    @IsEnum(TypeAEnum)
    userType!: TypeAEnum;

    @Attribute('albumType')
    @Reference(() => TypeBEnum)
    @IsNotEmpty()
    @IsEnum(TypeBEnum)
    albumType!: TypeBEnum;

    @Attribute('userDate')
    @Reference(() => Date)
    @DateFormat('YYYYMMDD')
    @IsNotEmpty()
    @IsDate()
    userDate!: Date;

    @Attribute('dateTime')
    @Reference(() => Date)
    @DateFormat('YYYY/MM/DD HH:mm:ss')
    @IsNotEmpty()
    @IsDate()
    albumDateTime!: Date;

    @Attribute('time')
    @Reference(() => Date)
    @DateFormat('HH~mm~ss')
    @IsNotEmpty()
    @IsDate()
    userTime!: Date;

    @Attribute('item')
    @Reference(() => SampleModel.Item2)
    @IsNotEmpty()
    @ValidateNested()
    item!: SampleModel.Item2;

    @Attribute('items')
    @Reference(() => SampleModel.Item2)
    @IsArray()
    @IsNotEmpty()
    @ArrayNotEmpty()
    @ValidateNested()
    items!: SampleModel.Item2[];
  }

  export class Item2 {
    @Attribute('id')
    @IsInt()
    @IsNotEmpty()
    id!: number;

    @Attribute('name')
    @XssRequest()
    @IsString()
    @IsNotEmpty()
    @MaxLength(200)
    name!: string;

    @Attribute('flag')
    @IsBoolean()
    @IsNotEmpty()
    flag!: boolean;
  }
}
