import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class ApisetuGovDittripuraApi implements ICredentialType {
        name = 'N8nDevApisetuGovDittripuraApi';

        displayName = 'Apisetu Gov Dittripura API';

        icon: Icon = { light: 'file:../nodes/ApisetuGovDittripura/apisetu-gov-dittripura.svg', dark: 'file:../nodes/ApisetuGovDittripura/apisetu-gov-dittripura.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://apisetu.gov.in/dittripura/v3',
                        required: true,
                        placeholder: 'https://apisetu.gov.in/dittripura/v3',
                        description: 'The base URL of your Apisetu Gov Dittripura API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                'X-APISETU-APIKEY': '={{$credentials.apiKey}}',
                        },
                },
        };


}
