import { UserService } from './user.service';
import {
  Post,
  Controller,
  HttpCode,
  HttpStatus,
  Body,
  Get,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user-dto';
import { Roles } from 'src/auth/decorators/roles.decorator';

@ApiBearerAuth()
@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiOperation({ summary: 'Create user' })
  @HttpCode(HttpStatus.CREATED)
  @ApiResponse({ status: 403, description: 'Forbidden' })
  async register(@Body() createUserDto: CreateUserDto) {
    return await this.userService.create(createUserDto);
  }

  @Get()
  @Roles('admin')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({})
  async findAll() {
    return await this.userService.findAll();
  }
}
