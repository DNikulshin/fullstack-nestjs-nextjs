import { Body, Controller, Get, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { GetSessionInfoDto, SignInBodyDto, SignUpBodyDto } from "./dto";
import { ApiCreatedResponse, ApiOkResponse } from "@nestjs/swagger";

@Controller('auth')
export class AuthController {
    @Post('sign-up')
    @ApiCreatedResponse()
    signUp(@Body() body: SignUpBodyDto) {
        return null
    }

    @Post('sign-in')
    @ApiOkResponse()
    @HttpCode(HttpStatus.OK)
    signIn(@Body() body: SignInBodyDto) {
        return null
    }

    @Post('sign-out')
    @ApiOkResponse()
    @HttpCode(HttpStatus.OK)
    signOut() { }

    @Get('session')
    @ApiOkResponse({
        type: GetSessionInfoDto
    })
    getSessionInfo() {
        return null
    }
}