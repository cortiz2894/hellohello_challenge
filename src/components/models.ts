export interface Option {
    value: string
    label: string
    image: string
}

export interface Indicator {
    status: boolean
    optionValue: string
}

export interface Params {
   params: Mail
}

export interface Mail {
    email: string
    option: string
}

export interface MailResponse {
    error: boolean
    message: string
}
