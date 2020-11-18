export interface Validator {
    name: string;
    validator: any;
    message: string;
    }
    
    export interface FieldConfig {
    label?: string;
    name?: string;
    id?:string;
    inputType?: string;
    value?:any;
    validations?: Validator[];
    }