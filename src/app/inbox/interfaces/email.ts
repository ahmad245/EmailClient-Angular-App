export interface IEmail{
    id:string;
    subject:string;
    from:string;
    text?:string;

}
export interface IEmailSummary {
    id:string;
    subject:string;
    from:string;
    
    text:string;
    to: string;
    
    html: string;
}