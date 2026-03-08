export const submitWebLead = async (data: any) => {
    const URL = 'https://n8n.isurulakshan.dev/webhook/web';
    return fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...data, source: 'web_form' }),
    });
};

export const submitMobileLead = async (data: any) => {
    const URL = 'https://n8n.isurulakshan.dev/webhook/Mobile';
    return fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...data, source: 'mobile_form' }),
    });
};

export const submitDesignLead = async (data: any) => {
    const URL = 'https://n8n.isurulakshan.dev/webhook/Design';
    return fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...data, source: 'design_form' }),
    });
};
