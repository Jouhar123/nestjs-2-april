// mailer.service.ts
import { Injectable } from '@nestjs/common';
import { SES, SendEmailCommand } from '@aws-sdk/client-ses';
import { config } from 'dotenv';
import * as fs from 'fs';
import * as Handlebars from 'handlebars';

config();

@Injectable()
export class EmailService {
    async sendEmail(to: string, subject: string, templatePath: string, data: any): Promise<void> {

        const sesClient = new SES({
            region: process.env.AWS_SES_REGION,
            credentials: {
                accessKeyId: process.env.AWS_ACCESS_KEY,
                secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
            }
        });

        // Read the Handlebars template from file
        const template = fs.readFileSync(templatePath, 'utf8');

        // Compile the template
        const compiledTemplate = Handlebars.compile(template);

        // Render the template with the provided data
        const renderedHtml = compiledTemplate(data);

        // Prepare SES parameters
        const params = {
            Destination: {
                ToAddresses: [to]
            },
            Message: {
                Body: {
                    Html: {
                        Charset: 'UTF-8',
                        Data: renderedHtml // Use the rendered HTML content as the message body
                    }
                },
                Subject: {
                    Charset: 'UTF-8',
                    Data: subject
                }
            },
            Source: 'jouharparvez123@gmail.com'
        };

        try {
            // Send email using SES
            const command = new SendEmailCommand(params);
            await sesClient.send(command);
            console.log('Email sent successfully');
        } catch (error) {
            console.error('Error sending email:', error);
            throw error;
        }
    }
}





/*
import { Injectable } from '@nestjs/common';
import { SES, SendEmailCommand } from '@aws-sdk/client-ses';
import { config } from 'dotenv';
import * as fs from 'fs';
import * as Handlebars from 'handlebars';

config();

@Injectable()
export class EmailService {
    async sendEmail(to: string, subject: string, templatePath: string, data: any): Promise<void> {

        const sesClient = new SES({
            region: process.env.AWS_SES_REGION,
            credentials: {
                accessKeyId: process.env.AWS_ACCESS_KEY,
                secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
            }
        });

        // Read the Handlebars template from file
        const template = fs.readFileSync(templatePath, 'utf8');

        // Compile the template
        const compiledTemplate = Handlebars.compile(template);

        // Render the template with the provided data
        const renderedHtml = compiledTemplate(data);

        // Prepare SES parameters
        const params = {
            Destination: {
                ToAddresses: [to]
            },
            Message: {
                Body: {
                    Html: {
                        Charset: 'UTF-8',
                        Data: renderedHtml // Use the rendered HTML content as the message body
                    }
                },
                Subject: {
                    Charset: 'UTF-8',
                    Data: subject
                }
            },
            Source: 'jouharparvez123@gmail.com'
        };

        try {
            // Send email using SES
            const command = new SendEmailCommand(params);
            await sesClient.send(command);
            console.log('Email sent successfully');
        } catch (error) {
            console.error('Error sending email:', error);
            throw error;
        }
    }
}
*/