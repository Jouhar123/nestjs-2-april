import { Controller, Get, Render } from '@nestjs/common';
import { EmailService } from './mailer.service';


@Controller('emails')
export class EmailController {
    constructor(private readonly emailService: EmailService) {}

    @Get('send')
    @Render('index')
    async sendEmail() {
        const randomNumber = Math.floor(100000 + Math.random() * 900000); 
        const verificationCode = randomNumber.toString();
        console.log(verificationCode);
        try {
            await this.emailService.sendEmail('jouharparvez123@gmail.com', 'Moonlight Registration', 'views/index.hbs', { verificationCode });
            return { verificationCode }; 
        } catch (error) {
            console.error(error);
            return { errorMessage: 'Failed to send email' }; 
        }
    }
}

