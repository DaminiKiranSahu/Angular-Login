export class InternRecord {
  internId: number=0;
  internName: string='';
  phoneNo: string='';
  email: string='';
  gender: string='';
  address: string='';
  company_Working_Hour: number =0;
  intern_Working_Hour: number=0;
  password:string='';
}
export class InternDesignation{
  designationId: number=0;
  designationName: string='';
  departmentName: string='';
  roleId: number=0;
  departmentId: number=0;
 }
 export class InternLeave{

 }
 export class InternStatus{
  statusId:number|null=null;
  internId:number|null=null;
  internStatus: string='';
 }
 export class Working{
  designationId: number=0;
  designationName: string='';
  departmentName: string='';
  roleName:string='';

 }

